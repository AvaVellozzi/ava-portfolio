import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* HERO */}
        <section className="mb-24">
          <h1 className="text-6xl font-semibold tracking-tight mb-6">
            Ava Vellozzi
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Product Designer & Computer Scientist focused on designing
            complex systems that transform technical workflows into
            clear, intuitive experiences.
          </p>

          {/* CTA ROW */}
          <div className="mt-8 flex gap-6 text-sm text-gray-500">
            <a
              href="/AvaVellozziResume.pdf"
              target="_blank"
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-gray-500 transition"
            >
              View Resume
            </a>
          </div>
        </section>

        {/* SECTION LABEL */}
        <section className="mb-6">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400">
            Selected Work
          </h2>
        </section>

        {/* PROJECTS */}
        <section className="space-y-3">

          <ProjectCard
            title="Microsoft Compliance Dashboard"
            description="Reduced compliance review time by 50% across 2,000+ regulatory requirements."
            link="/projects/compliance"
          />

          <ProjectCard
            title="Teams Diagnostic App"
            description="Enabled 10,000+ developers to debug 50+ APIs through a real-time diagnostic workflow."
            link="/projects/teams"
          />

          <ProjectCard
            title="Epic Hire — Vision Pro Recruiting"
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
      <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-7 py-6 transition hover:border-gray-300 hover:shadow-sm">

        {/* subtle hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-gray-50 to-transparent" />

        <div className="relative">

          <h3 className="text-lg font-medium text-gray-900 group-hover:translate-x-0.5 transition">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-600 leading-relaxed">
            {description}
          </p>

        </div>
      </div>
    </Link>
  );
}