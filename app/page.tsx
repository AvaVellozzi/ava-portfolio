import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 flex flex-col items-center">

      <div className="max-w-6xl mx-auto px-8 py-20">

        {/* HERO */}
        <section className="text-center mb-24">
          <h1 className="text-7xl font-bold tracking-tight mb-6 text-gray-800">
            Ava Vellozzi
          </h1>

          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Computer Scientist & Product Designer focused on designing complex systems that transform technical workflows into clear, intuitive experiences.
          </p>

          {/* CTA ROW */}
          <div className="mt-6 flex justify-center gap-6"> {/* Reduced from mt-8 to mt-6 */}
            <a
              href="/AvaVellozziResume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-full border border-gray-300 hover:border-gray-500 bg-blue-500 text-white transition transform hover:scale-105"
            >
              View Resume
            </a>
          </div>

        </section>

        {/* SECTION LABEL */}
        <section className="mb-6 text-center">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400">
            Selected Work
          </h2>
        </section>

        {/* PROJECTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Microsoft Compliance Dashboard"
            description="Streamlined regulatory compliance workflows by centralizing 2,000+ requirements, reducing review time by 50%."
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

/* PREMIUM CARD */
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
      <div className="group relative overflow-hidden rounded-3xl border border-gray-300 bg-white px-6 py-4 transition hover:border-blue-400 hover:shadow-lg">

        {/* subtle hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-100 to-transparent" />

        <div className="relative">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-500 transition duration-300">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-700 leading-snug">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
