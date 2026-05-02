import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  Eye,
  Lightbulb,
  AlertCircle,
  Code,
  CheckCircle,
  ArrowLeft,
  type LucideIcon,
  Paintbrush,
} from "lucide-react";
import { projectData, type ProjectSectionType } from "../../../features/projects/data/projects";
import { assetPath } from "../../../shared/lib/assetPath";
import { Header } from "../../../widgets/header/Header";

const sectionIcons: Record<ProjectSectionType, LucideIcon> = {
  overview: Eye,
  work: Lightbulb,
  problem: AlertCircle,
  tech: Code,
  result: CheckCircle,
};

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4 xl mb-4 font-black">Project not found</h1>
          <Link to="/" className="inline-flex items-center gap-1 text-sm underline">
            <ArrowLeft className="h-4 w-4" />
            Return to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white">

      <Header variant="detail" meta={project.duration} />

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-32"
        >
 
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
            <div className="text-[76px] font-bold leading-none tracking-tight md:text-[180px] text-white/80">
              {project.id}
            </div>
            <div className="flex-1 md:pt-8">
              <div className="mb-4 inline-flex rounded-full border border-white/20 px-3 py-1 font-mono text-xs uppercase tracking-wide text-white/60">
                {project.category} · {project.year}
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="text-base leading-relaxed text-white/80 md:text-xl">
                {project.description}
              </p>
            </div>
          </div>

          <div className="h-px bg-white/10 mb-12" />

          <div className="grid gap-8 md:grid-cols-4 md:gap-12">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50 mb-1">
                ROLE
              </div>
              <div className="text-base leading-7 text-white/90">
                {project.role}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-white/50 mb-1">
                CONTRIBUTION
              </div>
              <div className="text-base leading-7 text-white/90">
                {project.contribution}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-white/50 mb-1">
                STACK
              </div>
              <div className="text-base leading-7 text-white/90">
                {project.stack}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-white/50 mb-1">
                SITE
              </div>
              <div className="text-base leading-7 text-white/90">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-white/50" title="새창">
                  {project.link.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {project.previewImages && project.previewImages.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20 md:mb-32"
          >
            <div className="flex items-start gap-3 md:gap-8">
              <div className="shrink-0pt-1">
                <Paintbrush className="h-6 w-6 stroke-[1.5]" />
              </div>
              <div className="flex-1">
                <h2 className="mb-4 text-lg md:text-2xl font-bold">UI Preview</h2>
                
                <div className="grid gap-4">
                  {project.previewImages.map((image) => (
                    <figure
                      key={image.src}
                      className="overflow-hidden flex flex-col items-center bg-white/[0.03]"
                    >
                      <img
                        src={assetPath(image.src)}
                        alt={image.alt}
                        className="aspect-[16/10] w-full border border-white/10 rounded-lg"
                        loading="lazy"
                      />
                      <figcaption className="my-4 text-white/60 text-center">
                        {image.alt}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Sections */}
        <div className="space-y-8 md:space-y-16">
          {project.sections.map((section, index) => {
            const SectionIcon = sectionIcons[section.type];
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3 md:gap-8">
                  <div className="shrink-0pt-1">
                    <SectionIcon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-4 text-lg md:text-2xl font-bold">{section.title}</h2>
                    <p className="whitespace-pre-line text-sm md:text-lg leading-relaxed text-white/80 break-keep">
                      {section.content}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {index < project.sections.length - 1 && (
                  <div className="mt-8 md:mt-16 h-px bg-white/10" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 border-t border-white/10 pt-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            View all projects
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
