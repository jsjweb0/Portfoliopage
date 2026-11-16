import { useEffect, useState } from 'react';

// 고정 헤더·목차 아래(위에서 120px)부터 화면 위쪽 40% 구간을 '읽는 중' 영역으로 본다.
const READING_TOP = 120;
const ROOT_MARGIN = `-${READING_TOP}px 0px -60% 0px`;

/**
 * 스크롤 위치에 따라 지금 읽고 있는 섹션의 id를 돌려준다.
 * 목차의 현재 위치 표시에 쓴다.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);
  const idsKey = ids.join('|');

  useEffect(() => {
    const sectionIds = idsKey.split('|');
    const intersecting = new Set<string>();

    // IntersectionObserver와 스크롤 이벤트가 같은 규칙으로 판단하도록 한 곳에 모은다.
    const resolveActiveId = () => {
      const { scrollHeight } = document.documentElement;

      // 1) 맨 아래: 마지막 섹션이 짧아 읽는 영역에 닿지 못해도 마지막을 현재로 본다.
      if (window.innerHeight + window.scrollY >= scrollHeight - 2) {
        return sectionIds[sectionIds.length - 1];
      }

      // 2) 읽는 영역에 걸친 섹션 중 문서 순서상 앞의 것
      const current = sectionIds.find((id) => intersecting.has(id));
      if (current) return current;

      // 3) 아직 첫 섹션에 닿기 전(페이지 위쪽): 첫 섹션
      const firstSection = document.getElementById(sectionIds[0]);
      if (firstSection && firstSection.getBoundingClientRect().top > READING_TOP) {
        return sectionIds[0];
      }

      // 섹션 사이 여백 등: 이전 값을 유지
      return null;
    };

    const update = () => {
      const nextId = resolveActiveId();
      if (nextId) setActiveId(nextId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        });
        update();
      },
      { rootMargin: ROOT_MARGIN },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', update, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', update);
    };
  }, [idsKey]);

  return [activeId, setActiveId] as const;
}
