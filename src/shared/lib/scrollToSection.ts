import type { MouseEvent } from 'react';

// 해시 라우터(createHashRouter)에서는 href="#work"가 라우트 변경으로 처리되므로,
// 같은 페이지 안의 섹션 이동은 기본 동작을 막고 직접 스크롤한다.
export function scrollToSection(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
) {
  const target = document.getElementById(id);

  if (!target) return;

  event.preventDefault();

  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  target.focus({ preventScroll: true });
}
