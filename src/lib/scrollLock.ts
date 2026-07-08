/**
 * Ref-counted body scroll lock.
 *
 * Multiple overlays can be open at once (e.g. a service detail modal on top of
 * another overlay). A simple `body.style.overflow = ''` on close would unlock
 * the page while another overlay is still open, so we count active locks and
 * only restore scrolling when the last one releases.
 */
let lockCount = 0;

export function lockScroll() {
  lockCount += 1;
  document.body.style.overflow = 'hidden';
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = '';
  }
}
