import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-6xl font-bold mb-4">
        Ava Vellozzi
      </h1>

      <p className="text-xl mb-10">
        Product Designer & Computer Scientist
      </p>

      <h2 className="text-3xl font-bold mb-6">
        Selected Work
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <ProjectCard
          title="Microsoft Compliance Dashboard"
          link="/projects/compliance"
        />

        <ProjectCard
          title="Teams Diagnostic App"
          link="/projects/teams"
        />

        <ProjectCard
          title="Epic Hire Vision Pro"
          link="/projects/epic-hire"
        />

        <ProjectCard
          title="LabSpec Dashboard"
          link="/projects/labspec"
        />

        <ProjectCard
          title="Digital Worlds Education Games"
          link="/projects/digital-worlds"
        />

      </div>

    </main>
  );
}

function ProjectCard({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="border rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="font-bold">
          {title}
        </h3>
      </div>
    </Link>
  );
}