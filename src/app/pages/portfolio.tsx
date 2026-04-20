import { ProjectCard } from "../components/project-card";

const projects = [
  {
    id: "01",
    title: "Neural Commerce",
    description: "AI-powered e-commerce platform with real-time inventory prediction",
    tags: ["React", "TypeScript", "TensorFlow.js", "WebGL"],
  },
  {
    id: "02",
    title: "Flux Dashboard",
    description: "Real-time analytics interface with custom data visualization engine",
    tags: ["Next.js", "D3.js", "WebSocket", "Node.js"],
  },
  {
    id: "03",
    title: "Morphic UI",
    description: "Component library with adaptive theming and accessibility-first approach",
    tags: ["React", "GSAP", "Storybook", "A11y"],
  },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-sm font-medium tracking-wider">PORTFOLIO</h1>
          <nav className="flex gap-8 text-sm">
            <a href="#" className="hover:text-[#00ff88] transition-colors">
              Work
            </a>
            <a href="#" className="hover:text-[#00ff88] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#00ff88] transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="mb-20">
          <p className="text-sm text-white/50 mb-4 tracking-wider">SELECTED WORK</p>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Building digital experiences with precision and craft.
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-px">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-12 mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-sm text-white/50">
            <p>© 2026 All rights reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#00ff88] transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-[#00ff88] transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[#00ff88] transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
