import { useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

// index.html의 인라인 스크립트가 미리 정해 둔 값을 그대로 읽는다.
function readInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // 저장이 막힌 환경(시크릿 모드 등)에서는 이번 방문에만 적용한다.
    }

    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
}
