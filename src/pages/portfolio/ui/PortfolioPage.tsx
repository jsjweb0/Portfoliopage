import { useEffect } from 'react';
import { ProjectCard } from '../../../features/projects/components/ProjectCard';
import { projects } from '../../../features/projects/data/projects';
import { contactLinks, stackGroups } from '../data/portfolioData';
import { Header } from '../../../widgets/header/Header';

const projectsByDescendingId = [...projects].sort(
  (currentProject, nextProject) =>
    Number(nextProject.id) - Number(currentProject.id),
);

const emailLink = contactLinks.find(({ label }) => label === 'Email');
const externalLinks = contactLinks.filter(({ label }) => label !== 'Email');

const sectionLabelClass =
  'm-0 text-xs font-semibold tracking-[0.12em] text-(--accent) uppercase md:text-[13px]';

function ExternalLink({
  href,
  label,
  className = '',
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <span className="link-draw pb-0.5">{label} ↗</span>
      <span className="sr-only"> (새 창)</span>
    </a>
  );
}

export function PortfolioPage() {
  // 상세 페이지에서 돌아올 때 이전 스크롤 위치가 남지 않도록 맨 위에서 시작한다.
  // html의 scroll-behavior: smooth를 피하려고 'instant'로 바로 이동한다.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-(--bg) text-(--fg) break-keep">
      <Header />

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1120px] px-5 md:px-10"
      >
        {/* Hero */}
        <section className="flex max-w-[820px] flex-col gap-[18px] py-14 md:gap-6 md:py-26">
          <p className="m-0 text-[13px] font-medium text-(--accent) md:text-sm">
            Web Publisher · Frontend Developer
          </p>
          <h1 className="m-0 text-[27px] leading-[1.45] font-bold tracking-[-0.025em] md:text-[42px] md:leading-[1.38]">
            8년간 쌓아온 UI 구현 경험을 바탕으로 React와 TypeScript로 사용자
            흐름까지 설계합니다.
          </h1>
          <p className="m-0 max-w-[680px] text-base leading-[1.75] text-(--text-body) md:text-lg">
            다국어 페이지, 복잡한 입력 폼, 상태별 UI와 운영형 대시보드를
            구현해왔습니다. React와 TypeScript를 활용해
            입력·검증·저장·미리보기·외부 API 연동까지 하나의 사용자 경험으로
            연결하는 프로젝트를 만들고 있습니다.
          </p>
          <p className="m-0 mt-1 flex flex-wrap gap-x-5 text-[15px] md:mt-3 md:gap-x-6 md:gap-y-2">
            {emailLink && (
              <a
                href={emailLink.href}
                className="py-2.5 font-medium text-(--accent) md:py-0"
              >
                <span className="link-draw pb-0.5">{emailLink.text}</span>
              </a>
            )}
            {externalLinks.map(({ label, href }) => (
              <ExternalLink
                key={label}
                href={href}
                label={label}
                className="py-2.5 text-(--text-sub) md:py-0"
              />
            ))}
          </p>
        </section>

        {/* Projects */}
        <section
          id="work"
          tabIndex={-1}
          aria-labelledby="work-title"
          className="scroll-mt-24 border-t border-(--line) outline-none"
        >
          <h2 id="work-title" className="sr-only">
            프로젝트
          </h2>
          <div className="project-indicator" aria-hidden="true"></div>

          {projectsByDescendingId.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        {/* About */}
        <section
          id="about"
          tabIndex={-1}
          className="scroll-mt-24 pt-20 outline-none md:pt-32"
        >
          <h2 className={sectionLabelClass}>About</h2>
          <div className="mt-[18px] flex max-w-[820px] flex-col gap-[18px] md:mt-5 md:gap-5">
            <p className="m-0 text-[19px] leading-[1.6] font-semibold tracking-[-0.02em] md:text-2xl md:leading-[1.55]">
              디자인 시안을 정확하게 구현하는 일에서 시작해, 이제는 React와
              TypeScript로 화면의 구조와 상태까지 설계하고 있습니다.
            </p>
            <p className="m-0 max-w-[680px] text-[15px] leading-[1.8] text-(--text-body) md:text-base">
              웹 퍼블리셔로 일하며 100여 개의 서브페이지와 다국어·반응형 화면을
              구현했습니다. 운영 중 발생하는 수정 요청과 예외 상황을 다루며,
              화면을 정확하게 만드는 것뿐 아니라 변경에 강한 구조를 설계하는
              것이 중요하다는 것을 배웠습니다. 현재는 이 경험을 React와
              TypeScript 프로젝트에 적용해 폼 검증, 상태 관리, 외부 API 연동과
              같은 기능을 구현하고 있습니다.
            </p>

            <h3 className="m-0 mt-4 text-sm font-semibold md:mt-7 md:text-[15px]">
              Tech Stack
            </h3>
            <dl className="m-0 border-b border-(--line) text-sm leading-[1.7] md:text-[15px]">
              {stackGroups.map((group) => (
                <div
                  key={group.title}
                  className="grid gap-1 border-t border-(--line) py-3 md:grid-cols-[140px_minmax(0,1fr)] md:gap-6 md:py-3.5"
                >
                  <dt className="text-[13px] text-(--text-muted) md:text-[15px]">
                    {group.title}
                  </dt>
                  <dd className="m-0">{group.stacks.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          tabIndex={-1}
          className="scroll-mt-24 pt-20 pb-12 outline-none md:pt-28 md:pb-26"
        >
          <h2 className={sectionLabelClass}>Contact</h2>
          <address className="mt-4 flex flex-col not-italic md:mt-5 md:flex-row md:flex-wrap md:items-baseline md:gap-x-10 md:gap-y-4">
            {emailLink && (
              <a
                href={emailLink.href}
                className="self-start pt-2 pb-1 text-[21px] font-bold tracking-[-0.02em] md:pt-0 md:text-[26px]"
              >
                {emailLink.text}
              </a>
            )}
            <span className="mt-4 flex flex-col text-[15px] md:mt-0 md:flex-row md:gap-10">
              {externalLinks.map(({ label, href }) => (
                <ExternalLink
                  key={label}
                  href={href}
                  label={label}
                  className="py-3 text-(--text-sub) md:py-0"
                />
              ))}
            </span>
          </address>
        </section>
      </main>

      <footer className="border-t border-(--line)">
        <div className="mx-auto max-w-[1120px] px-5 py-6 text-xs text-(--text-muted) md:px-10 md:text-[13px]">
          © 2026 Sujin Jeong
        </div>
      </footer>
    </div>
  );
}
