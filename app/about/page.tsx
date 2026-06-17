import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-gray-900 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-5xl mx-auto px-8 py-24 relative z-10">

        {/* HERO */}
        <section className="mb-4">

          <div className="flex flex-col items-center text-center">

            <div className="relative w-56 h-56 rounded-3xl overflow-hidden border border-slate-200 shadow-xl mb-8">
              <Image
                src="/headshot.jpeg"
                alt="Ava Vellozzi"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-slate-900 to-indigo-700 bg-clip-text text-transparent">
              About
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8" />

          </div>

        </section>

        {/* STORY */}
        <section className="max-w-3xl mx-auto mb-20">

          <div className="space-y-8 text-lg text-slate-700 leading-relaxed">

            <p>
              Hi! I'm Ava, a recent graduate of the University of Florida with a
              Bachelor of Science in Computer Science. I was also part of the
              Honors Program and University Research Scholars Program.
            </p>

            <p>
              Even though my background is in engineering, I've always been
              drawn to the experience of using a product just as much as building it.
            </p>

            <p>
              Across internships, research, and personal projects, I naturally
              focused on the people behind the technology: what they're trying
              to accomplish, where they get stuck, and how complex systems can
              be made simpler and more intuitive.
            </p>

            <p>
              During my time at Microsoft, I worked closely with engineers,
              product managers, and designers on developer-facing experiences.
              That experience gave me a deeper appreciation for balancing user
              needs with technical constraints and designing solutions that are
              both useful and feasible to build.
            </p>

            <p className="text-slate-900 font-medium">
              Today, I'm especially interested in designing tools that help
              people understand complex information, solve problems faster,
              and feel more confident in their work.
            </p>

          </div>

        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

        {/* WHAT I CARE ABOUT */}
        <section className="max-w-4xl mx-auto">

          <div className="mb-8">
            <h2 className="text-sm tracking-[0.3em] uppercase text-slate-500 font-semibold">
              What I Care About
            </h2>
          </div>

          <div className="grid gap-5">

            {[
              "Turning complex technical workflows into experiences people can understand and trust",
              "Understanding why users get stuck, not just where they get stuck",
              "Designing from research, feedback, and real user behavior rather than assumptions",
              "Paying attention to small interaction details because that’s often where the experience succeeds or fails",
              "Working across product, design, and engineering without treating them as separate worlds"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-2 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </section>

      </div>

    </main>
  );
}