import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-gray-900 flex flex-col items-center relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-6xl mx-auto px-8 py-24">

        {/* HERO */}
        <section className="text-center mb-32">
          {/* Name with gradient */}
          <h1 className="text-8xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-slate-900 to-indigo-700 bg-clip-text text-transparent">
            Ava Vellozzi
          </h1>

          {/* Subtitle accent line */}
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
          </div>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Computer Scientist & Product Designer focused on designing complex systems that transform technical workflows into clear, intuitive experiences.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="/AvaVellozziResume.pdf"
              target="_blank"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              View Resume
            </a>
          </div>

        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-16" />

        {/* SECTION LABEL */}
        <section className="mb-12 text-center">
          <h2 className="text-sm tracking-[0.25em] uppercase text-slate-500 font-semibold">
            Selected Work
          </h2>
        </section>

        {/* PROJECTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
         <ProjectCard
            title="Microsoft Compliance Dashboard"
            description="Designed and built a compliance platform that made 2,000+ regulatory requirements searchable, trackable, and actionable."
            link="/projects/compliance"
          />

          <ProjectCard
            title="Microsoft Teams Diagnostic App"
            description="Enabled 10,000+ developers to debug 50+ APIs through a real-time diagnostic workflow."
            link="/projects/teams"
          />

          <ProjectCard
            title="Epic Hire — Apple Vision Pro Recruiting"
            description="Designed spatial recruiting workflows improving recruiter efficiency by 45%."
            link="/projects/epic-hire"
          />

          <ProjectCard
            title="LabSpec Dashboard"
            description="Built a full-stack LIMS system for specimen tracking and lab operations."
            link="/projects/labspec"
          />

          <ProjectCard
            title="Digital Worlds Education Games"
            description="Built educational games reaching 8M+ users to improve early literacy outcomes."
            link="/projects/digital-worlds"
          />
        </section>

      </div>
      
    </main>
  );
}

/* PROJECT CARD */
function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200 px-8 py-6 transition-all duration-300 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-200/50 hover:bg-white">

        {/* Subtle gradient on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-50 to-transparent" />

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition duration-300 mb-2">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-base group-hover:text-slate-700 transition duration-300">
            {description}
          </p>
          
          {/* Hover indicator arrow */}
          <div className="mt-4 inline-flex items-center gap-2 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">View Project</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
