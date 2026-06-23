import { ArrowUpRight } from 'lucide-react';
import { ProjectCard } from '../../../features/projects/components/ProjectCard';
import { projects } from '../../../features/projects/data/projects';
import {
  contactLinks,
  stackGroups,
  strengths,
} from '../data/portfolioData';
import { Header } from '../../../widgets/header/Header';

const projectsByDescendingId = [...projects].sort(
  (currentProject, nextProject) =>
    Number(nextProject.id) - Number(currentProject.id),
);

export function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" tabIndex={-1} className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20 break-keep">
        <section className="mb-16 md:mb-32">
          <p className="mb-4 text-sm tracking-wider text-[#8df5c5]">
            WEB PUBLISHER TO FRONTEND
          </p>
          <h2 className="text-4xl font-bold leading-tight md:text-7xl">
            8년의 UI 구현 경험 위에 <br />React와 TypeScript를 쌓고 있습니다.
          </h2>
          <p className="mt-8 text-base leading-8 text-white/70 md:text-xl">
            다국어 페이지, 상태별 UI, 운영형 대시보드를 구현하며 반복 수정과 예외 케이스를 줄이는 구조의 중요성을 경험했습니다. <br />
            지금은 그 경험을 React 컴포넌트, 상태 관리, 입력 검증, 접근성 개선으로 확장하고 있습니다.
          </p>
        </section>

        {/* Projects List */}
        <section
          id="work"
          className="scroll-mt-24 space-y-px border-b border-white/10"
        >
          {projectsByDescendingId.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </section>

        <section id="about" className="scroll-mt-24 mt-30 md:mt-52">
          <div className="mb-16 space-y-10 md:mb-30">
            <p className="mb-4 text-sm tracking-wider text-[#8df5c5]">ABOUT</p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              디자인 시안을 정확하게 구현하는 일에서 시작해,<br />
              이제는 React와 TypeScript로 화면의 구조와 상태까지 설계하고 있습니다.
            </h2>
            <p className="text-base leading-8 text-white/70 md:text-xl">
              웹 퍼블리셔로 일하며 100여 개 서브페이지, 다국어 레이아웃, 로그인 상태별 화면, 운영 중 수정 요청을 반복해서 다뤘습니다. 그 과정에서 단순히 화면을 정확히 구현하는 것뿐 아니라, 나중에 바뀔 수 있는 부분을 예측하고 구조화하는 일이 중요하다는 것을 배웠습니다.
              <br /><br />
              이후 React와 TypeScript를 학습하며 실무에서 겪었던 문제를 컴포넌트 분리, 데이터 기반 렌더링, 상태 관리, 입력 검증 구조로 다시 풀어보고 있습니다. 포트폴리오의 프로젝트들은 “무엇을 만들었는가”보다 “어떤 문제를 왜 그렇게 해결했는가”를 보여주는 데 초점을 두었습니다.
            </p>
          </div>

          <div className="space-y-15 md:space-y-30">
            <div className="grid gap-4 md:grid-cols-3">
              {strengths.map((item) => (
                <article
                  key={item.title}
                  className="border-t border-white/15 pt-5"
                >
                  <h3 className="mb-3 text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/70 break-keep">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Tech Stack
              </h3>
              <ul className="flex flex-wrap gap-3">
                {stackGroups.map((stack) => (
                  <li
                    key={stack}
                    className="rounded-full border border-white/20 px-3 py-1.5 font-mono text-xs text-white/70"
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </div>

            <address className="not-italic">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Contact
              </h3>
              <div className="grid gap-3 md:grid-cols-3">
                {contactLinks.map(({ label, href, text, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group flex min-h-28 flex-col justify-between border border-white/30 p-4 transition-colors hover:border-[#8df5c5]/50 hover:bg-white/[0.05] focus-visible::border-[#8df5c5]/50 focus-visible:bg-white/[0.05]"
                  >
                    <span className="flex items-center justify-between gap-3 text-sm text-white/50">
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {label}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="break-all text-sm text-white/85">
                      {text}
                    </span>
                  </a>
                ))}
              </div>
            </address>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-0 border-t border-white/10 px-6 py-6 md:px-8 md:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-2 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© 2026 All rights reserved</p>
            <div className="flex gap-6">
              <a
                href="https://github.com/jsjweb0"
                className="hover:text-[#8df5c5] focus-visible:text-[#8df5c5] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub 저장소 바로가기 (새 창)"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sujin-jeong-619a80391/"
                className="hover:text-[#8df5c5] focus-visible:text-[#8df5c5] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn 프로필 바로가기 (새 창)"
              >
                LinkedIn
              </a>
              <a
                href="mailto:jsjweb0@gmail.com"
                className="hover:text-[#8df5c5] focus-visible:text-[#8df5c5] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
