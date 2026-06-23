import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import type { Project } from '../data/projects';

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  enter: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.1 },
  }),
  hover: {},
};

const itemVariants = {
  rest: { x: 0 },
  hover: { x: 8, transition: { duration: 0.3 } },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link to={`/project/${project.id}`} className="block">
      <motion.div
        className="group cursor-pointer border-t border-white/10"
        variants={cardVariants}
        initial="initial"
        animate="enter"
        whileHover="hover"
        custom={index}
      >
        <div className="relative flex flex-col gap-8 overflow-hidden px-0 py-8 md:flex-row md:items-center md:gap-12 md:px-8 md:py-12">
          <motion.div
            className="absolute inset-0 bg-white/5"
            variants={{
              initial: { scaleX: 0 },
              enter: { scaleX: 0 },
              hover: {
                scaleX: 1,
                transition: { duration: 0.4, ease: 'easeOut' },
              },
            }}
            style={{ originX: 0 }}
          />

          <div className="relative z-10 flex items-center md:block">
            <motion.span
              className="block w-8 md:w-12 font-mono text-sm text-white/30"
              variants={{
                initial: { x: 0 },
                enter: { x: 0 },
                hover: { x: 4, transition: { duration: 0.3 } },
              }}
            >
              {project.id.toString().padStart(2, '0')}
            </motion.span>
            <span className="rounded-full border border-[#8df5c5]/30 px-3 py-1 font-mono text-xs text-[#8df5c5] md:hidden">
              {project.category}
            </span>
          </div>

          <div className="relative z-10 flex-1">
            <motion.div
              className="mb-2 md:mb-4 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wide text-white/40"
              variants={itemVariants}
            >
              <span className="hidden rounded-full border border-[#8df5c5]/30 px-3 py-1 text-[#8df5c5] md:inline-flex">
                {project.category}
              </span>
              <span>{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span>{project.role}</span>
            </motion.div>
            <motion.h3
              className="relative mb-4 inline-block text-3xl font-bold leading-tight md:text-6xl"
              variants={itemVariants}
            >
              {project.title}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-[#8df5c5]"
                variants={{
                  initial: { width: 0 },
                  enter: { width: 0 },
                  hover: {
                    width: '100%',
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
              />
            </motion.h3>

            <motion.p
              className="mb-6 text-sm md:text-lg text-white/70 line-clamp-2"
              variants={itemVariants}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {project.summary || project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 px-3 py-1.5 font-mono text-[0.625rem] md:text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="relative z-10 hidden md:block">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20"
              variants={{
                initial: {
                  x: 0,
                  y: 0,
                  borderColor: 'rgba(255,255,255,0.2)',
                },
                enter: {
                  x: 0,
                  y: 0,
                  borderColor: 'rgba(255,255,255,0.2)',
                },
                hover: {
                  x: 8,
                  y: -8,
                  borderColor: 'rgba(141,245,197,0.5)',
                  transition: { duration: 0.3 },
                },
              }}
            >
              <motion.div
                variants={{
                  initial: { color: 'rgba(255,255,255,0.5)' },
                  enter: { color: 'rgba(255,255,255,0.5)' },
                  hover: { color: '#8df5c5', transition: { duration: 0.3 } },
                }}
              >
                <ArrowUpRight aria-hidden="true" className="h-6 w-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
