import { ProjectCard } from "../../../features/projects/components/ProjectCard";
import { projects } from "../../../features/projects/data/projects";
import { Header } from "../../../widgets/header/Header";

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <section id="about" className="mb-16 md:mb-32">
          <p className="mb-4 text-sm tracking-wider text-[#8df5c5]">WEB PUBLISHER TO FRONTEND</p>
          <h2 className="max-w-5xl text-4xl font-bold leading-tight md:text-7xl">
            8년의 UI 구현 경험 위에 React와 TypeScript를 쌓고 있습니다.
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 break-keep md:text-xl">
            실무에서 다져온 반응형 퍼블리싱, 협업 QA, 운영형 UI 감각을 바탕으로
            컴포넌트 설계와 상태 관리까지 확장하는 프론트엔드 포트폴리오입니다.
          </p>
        </section>

        {/* Projects List */}
        <section id="work" className="space-y-px">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="mt-0 border-t border-white/10 px-6 py-6 md:mt-24 md:px-8 md:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-2 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© 2026 All rights reserved</p>
            <div className="flex gap-6">
              <a href="https://github.com/jsjweb0" className="hover:text-[#8df5c5] transition-colors" target="_blank" title="새창">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sujin-jeong-619a80391/" className="hover:text-[#8df5c5] transition-colors" target="_blank" title="새창">
                LinkedIn
              </a>
              <a href="mailto:jsjweb0@gmail.com" className="hover:text-[#8df5c5] transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
