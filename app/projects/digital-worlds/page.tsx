import Image from "next/image";

export default function DigitalWorlds() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_280px] gap-12">

        {/* LEFT CONTENT */}
        <div>

          {/* MOBILE CTA (only shows on small screens) */}
          <div className="md:hidden mb-10">
            <a
              href="https://research.dwi.ufl.edu/op.n/file/pd7py49630t41lba/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border bg-gray-50 hover:bg-gray-100 transition"
            >
              ▶ Play / Watch Digital Worlds Demo
            </a>
          </div>

          {/* HEADER */}
          <header className="mb-16">

            <h1 className="text-5xl font-semibold tracking-tight mb-4">
              Digital Worlds Institute — Educational Games
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              A suite of JavaScript-based educational word games designed to improve
              early literacy and vocabulary retention, reaching over 8 million users
              annually across 25 states.
            </p>

            <div className="mt-6 text-sm text-gray-500">
              JavaScript • Node.js • UX Research • Educational Systems Design
            </div>

          </header>

          {/* OVERVIEW */}
          <section className="mb-16">

            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              Overview
            </h2>

            <p className="text-gray-700 leading-relaxed">
              The Digital Worlds Institute develops interactive learning tools aimed at
              improving literacy outcomes for early education. I contributed to the design
              and development of a suite of web-based word games used in classrooms across
              the United States.
            </p>

          </section>

          {/* PROBLEM */}
          <section className="mb-16">

            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              Problem
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">

              <p>
                Early literacy tools often fail to maintain engagement while effectively
                reinforcing vocabulary retention.
              </p>

              <p>
                Teachers lack scalable digital tools that adapt to different learning levels.
              </p>

              <p>
                Existing educational software lacks strong data-driven validation of learning impact.
              </p>

            </div>

          </section>

          {/* GOAL */}
          <section className="mb-16">

            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              Goal
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Design and develop interactive word games that improve vocabulary retention
              while remaining engaging for young learners, and scalable across school systems.
            </p>

          </section>

          {/* MY ROLE */}
          <section className="mb-16">

            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              My Role
            </h2>

            <p className="text-gray-700 leading-relaxed">
              I designed and developed 8 educational word games using JavaScript and Node.js,
              focusing on interaction design, gameplay mechanics, and educational effectiveness.
              I also contributed to research analyzing the impact of gamified learning on literacy outcomes.
            </p>

          </section>

          {/* WHAT I BUILT */}
          <section className="mb-16">

            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              What I Built
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">

              <div className="p-4 border rounded-xl">
                8 interactive word-based educational games
              </div>

              <div className="p-4 border rounded-xl">
                Vocabulary reinforcement and spelling mechanics
              </div>

              <div className="p-4 border rounded-xl">
                Classroom-ready deployment via web platforms
              </div>

              <div className="p-4 border rounded-xl">
                Data tracking for student interaction patterns
              </div>

              <div className="p-4 border rounded-xl">
                Scalable Node.js backend for content delivery
              </div>

              <div className="p-4 border rounded-xl">
                UX optimized for early learners
              </div>

            </div>

          </section>

          {/* RESEARCH */}
          <section className="mb-16">

            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              Research Contribution
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">

              <p>
                I contributed to a research paper studying the effects of gamified learning
                on vocabulary retention and early literacy development.
              </p>

              <p>
                The findings supported the hypothesis that interactive, reward-based systems
                significantly improve engagement and retention in early education contexts.
              </p>

            </div>

          </section>

          {/* IMPACT */}
          <section className="mb-16">

            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              Impact
            </h2>

            <div className="space-y-3 text-gray-700 leading-relaxed">

              <p>
                Reached over <span className="font-medium">8 million users annually </span>
                across 25 states.
              </p>

              <p>
                Improved engagement in early literacy learning through interactive game mechanics.
              </p>

              <p>
                Informed curriculum design through data-driven learning research.
              </p>

            </div>

          </section>

          {/* IMAGE */}
          <section className="mb-16">

            <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
              Interface
            </h2>

            <div className="border rounded-2xl overflow-hidden bg-gray-50">

              <Image
                src="/digital-worlds.jpg"
                alt="Digital Worlds Educational Game Interface"
                width={1200}
                height={800}
                className="w-full h-auto"
              />

            </div>

          </section>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden md:block">

          <div className="sticky top-24 space-y-4">
            <a
              href="https://research.dwi.ufl.edu/op.n/file/pd7py49630t41lba/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border bg-white hover:bg-gray-50 transition"
            >
              <p className="font-medium text-gray-900">
                ▶ Play Games
              </p>
              <p className="text-sm text-gray-500">
                Launch interactive experience
              </p>
            </a>

            <a
              href="https://www.youtube.com/watch?v=0NFblVhp8i4&t=1s"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border bg-white hover:bg-gray-50 transition"
            >
              <p className="font-medium text-gray-900">
                🎥 Watch Demo
              </p>
              <p className="text-sm text-gray-500">
                See how it’s used in classrooms
              </p>
            </a>

          </div>

        </aside>

      </div>
    </main>
  );
}