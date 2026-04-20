import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  Eye,
  Lightbulb,
  AlertCircle,
  Code,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

// Project data
const projectData: Record<string, any> = {
  "01": {
    id: "01",
    title: "Neural Commerce",
    year: "2025",
    role: "Front-end / Publishing",
    contribution: "100%",
    stack: "React · TypeScript · TensorFlow.js · WebGL",
    description: "AI-powered e-commerce platform with real-time inventory prediction and optimization",
    duration: "2025.01 — 2025.08",
    sections: [
      {
        icon: Eye,
        title: "Overview",
        content:
          "Built an AI-powered e-commerce platform that predicts inventory needs and optimizes product recommendations in real-time. The system processes over 10,000 transactions daily with sub-second response times.",
      },
      {
        icon: Lightbulb,
        title: "Key Work",
        content:
          "Architected the front-end infrastructure using React and TypeScript, implementing a custom state management solution for real-time data synchronization. Developed WebGL-based product visualization system and integrated TensorFlow.js for client-side inference.",
      },
      {
        icon: AlertCircle,
        title: "Problem & Solution",
        content:
          "The main challenge was maintaining smooth UX while processing heavy ML computations. Solved this by implementing web workers for background processing, optimistic UI updates, and progressive enhancement strategies that degraded gracefully on lower-end devices.",
      },
      {
        icon: Code,
        title: "Technical Points",
        content:
          "• Custom React hooks for TensorFlow.js model loading and caching\n• WebGL rendering pipeline with instanced drawing for 60fps performance\n• Service worker implementation for offline-first functionality\n• Real-time WebSocket connections with automatic reconnection logic\n• Lazy-loaded route-based code splitting reducing initial bundle by 65%",
      },
      {
        icon: CheckCircle,
        title: "Summary",
        content:
          "Successfully delivered a production-ready platform handling 50K+ daily active users. The implementation reduced cart abandonment by 23% and increased average order value by 18%. Performance metrics exceeded targets with 95+ Lighthouse scores across all categories.",
      },
    ],
  },
  "02": {
    id: "02",
    title: "Flux Dashboard",
    year: "2024",
    role: "Front-end / Data Visualization",
    contribution: "100%",
    stack: "Next.js · D3.js · WebSocket · Node.js",
    description: "Real-time analytics interface with custom data visualization engine",
    duration: "2024.06 — 2024.12",
    sections: [
      {
        icon: Eye,
        title: "Overview",
        content:
          "Designed and built a real-time analytics dashboard for enterprise clients, processing and visualizing millions of data points with custom D3.js charts and interactive controls.",
      },
      {
        icon: Lightbulb,
        title: "Key Work",
        content:
          "Created a custom data visualization engine using D3.js with optimized rendering for large datasets. Implemented WebSocket-based real-time updates and developed a modular dashboard system with drag-and-drop widget configuration.",
      },
      {
        icon: AlertCircle,
        title: "Problem & Solution",
        content:
          "Performance degradation with large datasets was a critical issue. Implemented virtual scrolling, canvas-based rendering for high-density charts, and differential data updates to maintain 60fps even with 100K+ data points being streamed.",
      },
      {
        icon: Code,
        title: "Technical Points",
        content:
          "• Next.js with SSR for improved initial load performance\n• Custom D3.js chart library with TypeScript type safety\n• WebSocket connection pooling and message queue optimization\n• IndexedDB for client-side data persistence and offline support\n• Automated E2E testing with Playwright covering critical user flows",
      },
      {
        icon: CheckCircle,
        title: "Summary",
        content:
          "Deployed to 200+ enterprise clients with 99.9% uptime. Reduced data processing time by 70% and improved rendering performance by 5x compared to the legacy system. User satisfaction scores increased from 6.2 to 8.9/10.",
      },
    ],
  },
  "03": {
    id: "03",
    title: "Morphic UI",
    year: "2025",
    role: "Component Library / Design Systems",
    contribution: "100%",
    stack: "React · GSAP · Storybook · A11y",
    description: "Component library with adaptive theming and accessibility-first approach",
    duration: "2024.03 — 2025.01",
    sections: [
      {
        icon: Eye,
        title: "Overview",
        content:
          "Developed a comprehensive React component library with adaptive theming capabilities and accessibility-first approach. Used by 15+ internal teams and adopted by external partners.",
      },
      {
        icon: Lightbulb,
        title: "Key Work",
        content:
          "Built 60+ production-ready components with full TypeScript support, comprehensive Storybook documentation, and automated accessibility testing. Implemented GSAP-based animation system for smooth micro-interactions across all components.",
      },
      {
        icon: AlertCircle,
        title: "Problem & Solution",
        content:
          "Balancing flexibility with consistency was challenging. Created a token-based theming system using CSS custom properties, allowing teams to customize appearance while maintaining design system principles. Added composition patterns for advanced use cases.",
      },
      {
        icon: Code,
        title: "Technical Points",
        content:
          "• Component API design following React best practices and hooks patterns\n• GSAP integration with React lifecycle for performant animations\n• Automated Storybook deployment with visual regression testing\n• WCAG 2.1 AA compliance with automated axe-core testing in CI/CD\n• Tree-shakable architecture reducing production bundle impact by 40%",
      },
      {
        icon: CheckCircle,
        title: "Summary",
        content:
          "Successfully launched library used in 20+ production applications. Reduced development time for new features by 45% and eliminated 90% of accessibility issues caught in QA. Achieved 95% developer satisfaction rating in internal surveys.",
      },
    ],
  },
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project not found</h1>
          <Link to="/" className="text-sm underline">
            Return to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.015) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.01) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 0, 0, 0.012) 0%, transparent 50%)
          `,
        }}
      />

      {/* Header */}
      <header className="border-b border-black/10 px-8 py-6 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm hover:text-black/60 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="text-sm text-black/50">
            {project.duration}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-20 relative z-10">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          {/* Main Header Section */}
          <div className="flex items-start gap-16 mb-12">
            {/* Large Project Number */}
            <div className="text-[140px] md:text-[180px] font-bold text-black/5 leading-none tracking-tight">
              {project.id}
            </div>

            {/* Title and Description */}
            <div className="flex-1 pt-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl text-black/60 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="h-px bg-black/10 mb-12" />

          {/* Meta Information */}
          <div className="grid grid-cols-3 gap-12 max-w-3xl">
            {/* ROLE */}
            <div>
              <div className="text-xs uppercase tracking-wider text-black/40 mb-3">
                ROLE
              </div>
              <div className="text-base text-black/80">
                {project.role}
              </div>
            </div>

            {/* CONTRIBUTION */}
            <div>
              <div className="text-xs uppercase tracking-wider text-black/40 mb-3">
                CONTRIBUTION
              </div>
              <div className="text-base text-black/80">
                {project.contribution}
              </div>
            </div>

            {/* STACK */}
            <div>
              <div className="text-xs uppercase tracking-wider text-black/40 mb-3">
                STACK
              </div>
              <div className="text-base text-black/80">
                {project.stack}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-16">
          {project.sections.map((section: any, index: number) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex gap-8 items-start">
                {/* Icon */}
                <div className="pt-1">
                  <section.icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Content */}
                <div className="flex-1 max-w-3xl">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <p className="text-lg leading-relaxed text-black/70 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index < project.sections.length - 1 && (
                <div className="h-px bg-black/10 mt-16" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 pt-12 border-t border-black/10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            View all projects
          </Link>
        </motion.div>
      </main>
    </div>
  );
}