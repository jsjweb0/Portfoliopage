import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../shared/lib/useTheme';
import { scrollToSection } from '../../shared/lib/scrollToSection';

type HeaderProps = {
  variant?: 'home' | 'detail';
  meta?: string;
};

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      title={isDark ? '라이트 모드' : '다크 모드'}
      className="theme-toggle ml-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-(--btn-border) text-(--text-strong) md:ml-0 md:size-[38px]"
    >
      {isDark ? (
        <Sun aria-hidden="true" className="size-[18px]" strokeWidth={1.6} />
      ) : (
        <Moon aria-hidden="true" className="size-[18px]" strokeWidth={1.6} />
      )}
    </button>
  );
}

export function Header({ variant = 'home', meta }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const isDetail = variant === 'detail';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color] duration-250 ease-out ${
        scrolled
          ? 'border-(--line) bg-(--header-bg) backdrop-blur-md'
          : 'border-transparent'
      }`}
    >
      {isDetail ? (
        <div className="mx-auto flex h-[60px] max-w-[1120px] items-center justify-between gap-6 px-5 text-sm md:h-[68px] md:px-10">
          <Link to="/" className="inline-flex min-h-11 items-center gap-2">
            <ArrowLeft aria-hidden="true" className="size-4" />
            <span className="link-draw pb-0.5">전체 프로젝트</span>
          </Link>
          <div className="flex items-center gap-4">
            {meta && (
              <span className="text-(--text-muted) tabular-nums">{meta}</span>
            )}
            <ThemeToggle />
          </div>
        </div>
      ) : (
        <div className="mx-auto flex h-[60px] max-w-[1120px] items-center justify-between gap-6 px-5 md:h-[68px] md:px-10">
          <Link to="/" className="text-[15px] font-bold">
            Sujin Jeong
          </Link>

          <nav
            aria-label="주요 메뉴"
            className="flex items-center gap-0.5 text-sm md:gap-7"
          >
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => scrollToSection(event, id)}
                className={`px-[7px] py-3 text-(--text-sub) md:p-0 ${
                  id === 'contact' ? 'hidden md:inline' : ''
                }`}
              >
                <span className="link-draw pb-0.5">{label}</span>
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      )}
    </header>
  );
}
