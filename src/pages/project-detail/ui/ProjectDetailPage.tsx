import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  Code,
  Eye,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';
import {
  projectData,
  projects,
  type Project,
  type ProjectSection,
  type ProjectSectionType,
} from '../../../features/projects/data/projects';
import { assetPath } from '../../../shared/lib/assetPath';
import { scrollToSection } from '../../../shared/lib/scrollToSection';
import { useActiveSection } from '../../../shared/lib/useActiveSection';
import { Header } from '../../../widgets/header/Header';

const sectionIcons: Record<ProjectSectionType, LucideIcon> = {
  overview: Eye,
  work: Lightbulb,
  problem: AlertCircle,
  tech: Code,
  result: CheckCircle,
};

// 목차·앵커용 id와 모바일 탭에 쓰는 짧은 이름
const sectionMeta: Record<ProjectSectionType, { id: string; short: string }> = {
  overview: { id: 'overview', short: 'Overview' },
  work: { id: 'key-work', short: 'Key Work' },
  problem: { id: 'problem', short: 'Problem' },
  tech: { id: 'tech', short: 'Tech' },
  result: { id: 'result', short: 'Result' },
};

const categoryLabel: Record<Project['category'], string> = {
  React: 'React',
  Publishing: 'Web Publisher',
};

// 메인 목록과 같은 순서(id 내림차순)로 '다음 프로젝트'를 정한다.
const projectsInListOrder = [...projects].sort(
  (currentProject, nextProject) =>
    Number(nextProject.id) - Number(currentProject.id),
);
const totalCount = String(projects.length).padStart(2, '0');

function toParagraphs(text: string) {
  return text.split(/\n{2,}/).filter(Boolean);
}

// 'BEM + 템플릿 전략: 설명' 형태를 제목과 설명으로 나눈다.
function splitPoint(item: string) {
  const index = item.indexOf(': ');

  if (index === -1) return { term: null, description: item };

  return { term: item.slice(0, index), description: item.slice(index + 2) };
}

function SectionBody({ section }: { section: ProjectSection }) {
  if (section.type === 'problem') {
    return (
      <div className="border-b border-(--line)">
        {section.content.map((item, index) => (
          <article
            key={index}
            className="grid gap-y-1 border-t border-(--line) py-5 text-[15px] md:grid-cols-[56px_minmax(0,1fr)] md:gap-x-4 md:py-6 md:text-[17px]"
          >
            <span className="text-[13px] font-semibold text-(--text-muted) md:pt-[3px] md:text-sm">
              문제 {index + 1}
            </span>
            <p className="m-0 text-(--fg)">{item.problem}</p>
            <span className="mt-2.5 text-[13px] font-semibold text-(--accent) md:mt-0 md:pt-[3px] md:text-sm">
              해결
            </span>
            <p className="m-0">{item.solution}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.type === 'tech' && Array.isArray(section.content)) {
    return (
      <dl className="m-0 border-b border-(--line) text-[15px] leading-[1.7] md:text-base">
        {section.content.map((item) => {
          const { term, description } = splitPoint(item);

          return (
            <div
              key={item}
              className="grid border-t border-(--line) py-3 md:grid-cols-[160px_minmax(0,1fr)] md:gap-6 md:py-3.5"
            >
              {term && <dt className="font-semibold text-(--fg)">{term}</dt>}
              <dd className={`m-0 ${term ? '' : 'md:col-span-2'}`}>
                {description}
              </dd>
            </div>
          );
        })}
      </dl>
    );
  }

  if (Array.isArray(section.content)) {
    return (
      <ul className="m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] md:gap-2 md:pl-5 md:text-[17px]">
        {section.content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {toParagraphs(section.content).map((paragraph) => (
        <p key={paragraph} className="m-0">
          {paragraph}
        </p>
      ))}
    </>
  );
}

function ExternalButton({
  href,
  label,
  ariaLabel,
  primary = false,
}: {
  href: string;
  label: string;
  ariaLabel: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex min-h-9 items-center rounded-full border px-3 transition-colors md:min-h-10 md:px-3.5 ${
        primary
          ? 'border-(--accent-border) font-semibold tracking-[0.04em] text-(--accent) hover:bg-(--indicator)'
          : 'border-(--btn-border) hover:bg-(--indicator)'
      }`}
    >
      {label}
    </a>
  );
}

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;
  const mainRef = useRef<HTMLElement>(null);
  const tocRef = useRef<HTMLElement>(null);
  const sectionIds = project
    ? project.sections.map((section) => sectionMeta[section.type].id)
    : [];
  const [activeSectionId, setActiveSectionId] = useActiveSection(sectionIds);

  // 모바일 가로 탭: 현재 탭이 목차 안에서 가운데 오도록 가로로만 스크롤한다.
  // (scrollIntoView는 페이지 전체를 움직일 수 있어 쓰지 않는다.)
  useEffect(() => {
    const toc = tocRef.current;
    const activeLink = toc?.querySelector<HTMLElement>('[aria-current]');

    if (!toc || !activeLink || toc.scrollWidth <= toc.clientWidth) return;

    toc.scrollTo({
      left:
        activeLink.offsetLeft - toc.clientWidth / 2 + activeLink.offsetWidth / 2,
      behavior: 'smooth',
    });
  }, [activeSectionId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    document.title = project
      ? `${project.title} | Sujin Portfolio`
      : 'Project not found | Sujin Portfolio';

    // 포커스 이동이 스크롤을 다시 내리지 않도록 preventScroll
    mainRef.current?.focus({ preventScroll: true });

    return () => {
      document.title = 'Sujin Portfolio';
    };
  }, [id, project]);

  if (!project) {
    return (
      <main ref={mainRef} id="main-content" tabIndex={-1} className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4 xl mb-4 font-black">Project not found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm underline"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Return to portfolio
          </Link>
        </div>
      </main>
    );
  }

  const listIndex = projectsInListOrder.findIndex(
    (item) => item.id === project.id,
  );
  const nextProject = projectsInListOrder[listIndex + 1];
  const isReact = project.category === 'React';

  return (
    <div id="wrap" className="relative min-h-screen bg-(--bg) text-(--fg) break-keep">
      <Header variant="detail" meta={`${project.id} / ${totalCount}`} />

      <main
        ref={mainRef}
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1120px] px-5 outline-none md:px-10"
      >
        {/* 제목 영역 */}
        <section className="flex flex-col gap-3.5 pt-11 pb-7 md:gap-5 md:pt-20 md:pb-12">
          <p className="m-0 flex items-center gap-2.5 text-[13px] text-(--text-sub) md:gap-3 md:text-sm">
            <span
              className={`inline-flex h-6 items-center rounded-full border px-2.5 text-xs font-semibold md:h-[26px] md:px-[11px] md:text-[13px] ${
                isReact
                  ? 'border-(--accent-border) text-(--accent)'
                  : 'border-(--pub-border) text-(--pub-text)'
              }`}
            >
              {categoryLabel[project.category]}
            </span>
            <span>{project.year}</span>
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 md:gap-x-6 md:gap-y-3">
            <h1 className="m-0 text-[34px] leading-[1.2] font-bold tracking-[-0.03em] md:text-5xl">
              {project.title}
            </h1>
            <div className="flex gap-1.5 text-[13px] md:gap-2 md:text-sm">
              <ExternalButton
                href={project.link}
                label="DEMO ↗"
                ariaLabel={`${project.title} 사이트 바로가기 (새 창)`}
                primary
              />
              {project.github && (
                <ExternalButton
                  href={project.github}
                  label="GitHub ↗"
                  ariaLabel={`${project.title} GitHub 저장소 바로가기 (새 창)`}
                />
              )}
            </div>
          </div>

          <p className="m-0 max-w-[922px] text-base leading-[1.75] text-(--text-body) md:text-[19px] md:leading-[1.7]">
            {project.description}
          </p>
        </section>

        {/* 기간·역할·기여·스택 */}
        <dl className="m-0 grid grid-cols-2 gap-x-4 text-sm leading-[1.6] md:grid-cols-3 md:gap-x-6 md:text-[15px]">
          <div className="border-b border-(--line) py-3.5 md:border-0 md:py-4">
            <dt className="mb-1 text-xs text-(--text-muted) md:text-[13px]">기간</dt>
            <dd className="m-0">{project.duration}</dd>
          </div>
          <div className="border-b border-(--line) py-3.5 md:border-0 md:py-4">
            <dt className="mb-1 text-xs text-(--text-muted) md:text-[13px]">역할</dt>
            <dd className="m-0">{project.role}</dd>
          </div>
          <div className="col-span-2 border-b border-(--line) py-3.5 md:col-span-1 md:border-0 md:py-4">
            <dt className="mb-1 text-xs text-(--text-muted) md:text-[13px]">기여</dt>
            <dd className="m-0">{project.contribution}</dd>
          </div>
          <div className="col-span-2 border-b border-(--line) py-3.5 md:col-span-3 md:grid md:grid-cols-3 md:gap-x-6 md:border-t md:py-4">
            <dt className="mb-1 text-xs text-(--text-muted) md:mb-0 md:text-[13px]">스택</dt>
            <dd className="m-0 md:col-span-2">{project.stack}</dd>
          </div>
        </dl>

        {/* 화면 미리보기 */}
        {project.previewImages && project.previewImages.length > 0 && (
          <section aria-labelledby="ui-preview-title" className="mt-9 md:mt-16">
            <h2 id="ui-preview-title" className="sr-only">
              UI Preview
            </h2>
            <div className="flex flex-col gap-8 md:gap-12">
              {project.previewImages.map((image, index) => (
                <figure
                  key={`${image.src}-${index}`}
                  className="m-0 flex flex-col gap-2.5 md:gap-3"
                >
                  <div className="flex justify-center overflow-hidden rounded-md border border-(--line) bg-white">
                    <img
                      src={assetPath(image.src)}
                      alt={image.alt}
                      className="block h-auto max-h-[720px] w-auto max-w-full"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-center text-[13px] leading-relaxed text-(--text-muted) md:text-sm">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* 목차 + 본문 */}
        <div className="pt-10 pb-14 md:grid md:grid-cols-12 md:gap-x-6 md:pt-24 md:pb-30">
          <nav
            ref={tocRef}
            aria-label="이 프로젝트 목차"
            className="sticky top-[60px] z-10 -mx-5 flex gap-2 overflow-x-auto border-y border-(--line) bg-(--bg) px-5 text-[13px] md:top-24 md:col-span-3 md:mx-0 md:flex-col md:gap-0 md:self-start md:overflow-visible md:border-b-0 md:bg-transparent md:px-0 md:text-sm"
          >
            {project.sections.map((section) => {
              const Icon = sectionIcons[section.type];
              const { id: anchorId, short } = sectionMeta[section.type];
              const isActive = activeSectionId === anchorId;

              return (
                <a
                  key={section.type}
                  href={`#${anchorId}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(event) => {
                    scrollToSection(event, anchorId);
                    setActiveSectionId(anchorId);
                  }}
                  className={`flex flex-none items-center gap-1.5 px-1 py-3 transition-colors hover:text-(--accent) md:gap-2.5 md:border-b md:border-(--line) md:px-0 ${
                    isActive ? 'text-(--accent)' : 'text-(--text-sub)'
                  }`}
                >
                  <Icon aria-hidden="true" className="size-3.5 md:size-4" strokeWidth={1.6} />
                  <span className="md:hidden">{short}</span>
                  <span className="hidden md:inline">{section.title}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-10 flex flex-col gap-14 text-base leading-[1.8] text-(--text-body) md:col-span-8 md:col-start-4 md:mt-0 md:gap-20 md:text-[17px]">
            {project.sections.map((section) => (
              <section
                key={section.type}
                id={sectionMeta[section.type].id}
                tabIndex={-1}
                className="flex scroll-mt-[120px] flex-col gap-3 outline-none md:scroll-mt-28 md:gap-4"
              >
                <h2 className="m-0 text-xl font-bold text-(--fg) md:text-2xl">
                  {section.title}
                </h2>
                <SectionBody section={section} />
              </section>
            ))}
          </div>
        </div>

        {/* 프로젝트 이동 */}
        <nav
          aria-label="프로젝트 이동"
          className="flex items-stretch justify-between gap-4 border-t border-(--nav-line) pb-8 md:grid md:grid-cols-2 md:gap-6 md:border-(--line-mid) md:pb-14"
        >
          {/* 선과 링크 사이 여백 대신 링크 자체에 여백을 줘 클릭 영역을 넓힌다 */}
          <Link to="/" className="flex flex-col justify-center gap-1.5 py-6 md:justify-start md:py-7">
            {/* 모바일: 한 줄 / 데스크톱: 라벨 + 제목 두 줄 */}
            <span className="text-sm text-(--text-sub) md:hidden">← 전체 프로젝트</span>
            <span className="hidden text-[13px] text-(--text-muted) md:inline">← 목록</span>
            <span className="hidden text-xl font-semibold md:inline">
              <span className="link-draw pb-0.5">전체 프로젝트</span>
            </span>
          </Link>
          {nextProject && (
            <Link
              to={`/project/${nextProject.id}`}
              className="flex flex-col gap-1 py-6 text-right md:gap-1.5 md:py-7"
            >
              <span className="text-xs text-(--text-muted) md:text-[13px]">다음 프로젝트 →</span>
              <span className="text-lg font-semibold md:text-xl">
                <span className="link-draw pb-0.5">{nextProject.title}</span>
              </span>
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}
