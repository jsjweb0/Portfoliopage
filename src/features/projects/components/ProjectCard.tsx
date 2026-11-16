import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import type { Project } from '../data/projects';

const categoryLabel: Record<Project['category'], string> = {
  React: 'React',
  Publishing: 'Web Publisher',
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isReact = project.category === 'React';

  return (
    <Link
      to={`/project/${project.id}`}
      className="project-item relative grid grid-cols-[26px_minmax(0,1fr)] gap-x-3 border-b border-(--line) py-6 md:grid-cols-[64px_minmax(0,1fr)_56px] md:items-center md:gap-x-6 md:py-9"
    >
      <span className="project-number pt-[3px] text-[13px] text-(--text-muted) tabular-nums md:pt-0 md:text-sm">
        {project.id}
      </span>

      <span className="flex min-w-0 flex-col gap-1.5 md:gap-2.5">
        <span className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-(--text-sub) md:text-sm">
          <span
            className={`inline-flex h-[22px] items-center rounded-full border px-[9px] text-xs font-semibold md:h-6 md:px-2.5 ${
              isReact
                ? 'border-(--accent-border) text-(--accent)'
                : 'border-(--pub-border) text-(--pub-text)'
            }`}
          >
            {categoryLabel[project.category]}
          </span>
          <span>{project.year}</span>
          <span
            aria-hidden="true"
            className="size-[3px] rounded-full bg-(--dot)"
          />
          <span>{project.listMeta ?? project.contribution}</span>
        </span>

        <h3 className="m-0 text-[22px] leading-tight font-bold tracking-[-0.02em] md:text-[30px]">
          <span className="project-title">{project.title}</span>
        </h3>

        <span className="project-summary text-[15px] leading-[1.65] text-(--text-summary) md:text-base">
          {project.listSummary ?? project.summary ?? project.description}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="project-arrow hidden size-14 items-center justify-center rounded-full border border-(--circle) text-(--text-sub) md:flex"
      >
        <ArrowUpRight className="size-[22px]" strokeWidth={1.5} />
      </span>
    </Link>
  );
}
