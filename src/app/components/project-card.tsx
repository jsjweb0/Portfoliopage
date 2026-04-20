import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/project/${project.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="border-t border-white/10 cursor-pointer group"
      >
        <div className="py-12 px-8 flex items-center gap-12 relative overflow-hidden">
          {/* Background hover effect */}
          <motion.div
            className="absolute inset-0 bg-white/5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ originX: 0 }}
          />

          {/* Index Number */}
          <div className="relative z-10">
            <motion.span
              className="text-sm font-mono text-white/30 block w-12"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.id}
            </motion.span>
          </div>

          {/* Content */}
          <div className="flex-1 relative z-10">
            {/* Title */}
            <motion.h3
              className="text-4xl md:text-6xl font-bold mb-4 relative inline-block"
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
              {/* Underline effect */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-[#00ff88]"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-white/60 text-lg mb-6 max-w-2xl"
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-3"
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 border border-white/20 rounded-full text-white/70 font-mono"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Arrow Icon */}
          <div className="relative z-10">
            <motion.div
              className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center"
              animate={{
                x: isHovered ? 8 : 0,
                y: isHovered ? -8 : 0,
                borderColor: isHovered ? "rgba(0, 255, 136, 0.5)" : "rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight
                className="w-6 h-6"
                style={{
                  color: isHovered ? "#00ff88" : "rgba(255, 255, 255, 0.5)",
                  transition: "color 0.3s",
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}