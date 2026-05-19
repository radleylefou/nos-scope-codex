/**
 * KanbanBoard — horizontal stage board for pipeline and workflow queues.
 *
 * Composed of three presentational components:
 *   - KanbanBoard: horizontal scroll container
 *   - KanbanColumn: stage lane with probability/count header
 *   - KanbanCard: compact opportunity/work item card
 *
 * Props:
 *   columns      {Array}    Array of { id, label, probability, tone, cards[] }
 *   renderCard   {Function} Optional card renderer: (card, context) => ReactNode
 *   onAddCard    {Function} Callback(columnId) for column add actions
 *   onCardOpen   {Function} Callback(cardId, card) for card open actions
 *   className    {string}   Additional class names for the board container
 *
 * KanbanColumn props:
 *   id           {string}   Column identifier
 *   label        {string}   Stage label
 *   probability  {string|number} Optional probability value
 *   tone         {string}   neutral | success | warning | info | brand
 *   cards        {Array}    Cards displayed in the column
 *   onAddCard    {Function} Callback(columnId)
 *
 * KanbanCard props:
 *   id           {string}   Card identifier
 *   title        {string}   Primary card title
 *   date         {string}   Date or secondary left value
 *   amount       {string}   Right-aligned value
 *   eyebrow      {string}   Uppercase metadata label
 *   assignee     {string|object} Assignee name or { name, avatarUrl }
 *   onOpen       {Function} Callback(id)
 */

import './KanbanBoard.css';

const TONES = ['neutral', 'success', 'warning', 'info', 'brand'];

export function KanbanBoard({
  columns = [],
  renderCard,
  onAddCard,
  onCardOpen,
  className = '',
  'aria-label': ariaLabel = 'Kanban board',
  ...rest
}) {
  const cls = ['kanban-board', className].filter(Boolean).join(' ');

  return (
    <div className={cls} role="list" aria-label={ariaLabel} {...rest}>
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          {...column}
          renderCard={renderCard}
          onAddCard={onAddCard}
          onCardOpen={onCardOpen}
        />
      ))}
    </div>
  );
}

export function KanbanColumn({
  id,
  label,
  title,
  probability,
  tone = 'neutral',
  cards = [],
  renderCard,
  onAddCard,
  onCardOpen,
  className = '',
  ...rest
}) {
  const columnLabel = label || title || id;
  const safeTone = TONES.includes(tone) ? tone : 'neutral';
  const cls = ['kanban-column', `kanban-column--${safeTone}`, className].filter(Boolean).join(' ');
  const hasAddAction = typeof onAddCard === 'function';

  return (
    <section className={cls} role="listitem" aria-labelledby={`${id}-kanban-heading`} {...rest}>
      <header className="kanban-column__header">
        <div className="kanban-column__heading">
          {probability !== undefined && probability !== null && (
            <span className="kanban-column__probability">{formatProbability(probability)}</span>
          )}
          <h3 id={`${id}-kanban-heading`} className="kanban-column__title">
            {columnLabel} <span>({cards.length})</span>
          </h3>
        </div>
        {hasAddAction && (
          <button
            type="button"
            className="kanban-column__add"
            aria-label={`Add card to ${columnLabel}`}
            onClick={() => onAddCard(id)}
          >
            <PlusIcon />
          </button>
        )}
      </header>

      <div className="kanban-column__cards" role="list" aria-label={`${columnLabel} cards`}>
        {cards.length > 0 ? (
          cards.map((card) => (
            <div className="kanban-column__card-wrap" role="listitem" key={card.id}>
              {renderCard ? (
                renderCard(card, {
                  columnId: id,
                  onOpen: onCardOpen,
                })
              ) : (
                <KanbanCard
                  {...card}
                  onOpen={onCardOpen ? () => onCardOpen(card.id, card) : undefined}
                />
              )}
            </div>
          ))
        ) : (
          <div className="kanban-column__empty">No cards yet</div>
        )}
      </div>
    </section>
  );
}

export function KanbanCard({
  id,
  title,
  date,
  amount,
  eyebrow,
  dealType,
  assignee,
  onOpen,
  className = '',
  ...rest
}) {
  const cls = ['kanban-card', onOpen ? 'kanban-card--interactive' : '', className].filter(Boolean).join(' ');
  const assigneeName = typeof assignee === 'string' ? assignee : assignee?.name;
  const avatarUrl = typeof assignee === 'object' ? assignee?.avatarUrl : undefined;
  const tag = eyebrow || dealType;
  const CardElement = onOpen ? 'button' : 'article';
  const cardProps = onOpen
    ? { type: 'button', onClick: () => onOpen(id) }
    : {};

  return (
    <CardElement className={cls} aria-label={title} {...cardProps} {...rest}>
      <div className="kanban-card__main">
        <div className="kanban-card__title-row">
          <h4 className="kanban-card__title">{title}</h4>
          {onOpen && (
            <span className="kanban-card__chevron" aria-hidden="true">
              <ChevronRightIcon />
            </span>
          )}
        </div>
        {(date || amount) && (
          <div className="kanban-card__value-row">
            {date && <span>{date}</span>}
            {amount && <strong>{amount}</strong>}
          </div>
        )}
        {tag && <div className="kanban-card__eyebrow">{tag}</div>}
      </div>

      {assigneeName && (
        <div className="kanban-card__footer">
          <span className="kanban-card__avatar" aria-hidden="true">
            {avatarUrl ? <img src={avatarUrl} alt="" /> : getInitials(assigneeName)}
          </span>
          <span className="kanban-card__assignee">{assigneeName}</span>
        </div>
      )}
    </CardElement>
  );
}

function formatProbability(probability) {
  if (typeof probability === 'number') return `${probability}%`;
  return probability;
}

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M7 4.5 11.5 9 7 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
