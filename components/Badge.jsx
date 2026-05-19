import './Badge.css';

/**
 * Badge — compact inline label for dense body contexts.
 *
 * Use Badge inside tables, card bodies, metadata rows, Kanban cards, and
 * checklist content. Use StatusPill instead for lifecycle state in page
 * headers, card headers, and document section headers.
 *
 * Props:
 *   children   {ReactNode} Visible badge label
 *   tone       {string}    neutral | brand | info | success | warning | danger | experience | workflow | item
 *   appearance {string}    soft | outline. Default: soft
 *   className  {string}    Additional class names
 *   ...rest               Native span attributes
 */
export function Badge({
  children,
  tone = 'neutral',
  appearance = 'soft',
  className = '',
  ...rest
}) {
  const safeTone = BADGE_TONES.includes(tone) ? tone : 'neutral';
  const safeAppearance = BADGE_APPEARANCES.includes(appearance) ? appearance : 'soft';
  const cls = [
    'nos-badge',
    `nos-badge--${safeTone}`,
    `nos-badge--${safeAppearance}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}

const BADGE_TONES = [
  'neutral',
  'brand',
  'info',
  'success',
  'warning',
  'danger',
  'experience',
  'workflow',
  'item',
];

const BADGE_APPEARANCES = ['soft', 'outline'];
