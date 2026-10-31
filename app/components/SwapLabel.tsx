/**
 * Bracket CTA label: the text is rendered twice and the stack slides up on
 * hover/focus of the closest `.bracket` parent (see globals.css).
 */
export default function SwapLabel({ children }: { children: string }) {
  return (
    <>
      <span aria-hidden="true">[</span>
      <span className="swap">
        <i>{children}</i>
        <i aria-hidden="true">{children}</i>
      </span>
      <span aria-hidden="true">]</span>
    </>
  );
}
