import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-gray-900 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-4xl mx-auto px-8 py-24 relative z-10">

        {/* HERO */}
        <section className="mb-20">

          <h1 className="text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-slate-900 to-indigo-700 bg-clip-text text-transparent">
            About
          </h1>

          {/* Accent line */}
          <div className="flex mb-12">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
          </div>

          <div className="grid md:grid-cols-[320px_1fr] gap-10 items-start">

            <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-slate-300 relative shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/headshot.jpeg"
                alt="Ava"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed">

              <p className="text-lg text-slate-900 font-light">
                Hi! I'm Ava, a recent graduate of the University of Florida with a Bachelor of Science in Computer Science. I was also part of the Honors Program and University Research Scholars Program.
              </p>

              <p>
                Despite my engineering background, I’ve always been
                drawn more to how things feel to use. In internships and
                projects, I naturally focus on the user experience,
                what people are trying to accomplish, where friction shows up,
                and how to make complex systems simpler and more intuitive.
              </p>

            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-20" />

        {/* PERSONAL SECTION */}
        <section className="mb-20">

          <div className="grid md:grid-cols-[160px_1fr] gap-10 items-start">

            <div>
              <h2 className="text-xs tracking-[0.35em] uppercase text-slate-500 font-semibold">
                Outside of tech
              </h2>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed">

              <p>
                Outside of tech, I’ve always needed something physical or
                creative to balance things out. I did tap dance and choreography
                for several years, and it ended up teaching me a lot about timing,
                repetition, and paying attention to small details that most people
                don’t notice at first. A lot of choreography is just iteration, trying
                something, adjusting it slightly, and refining how everything fits together
                until it feels right.
              </p>

              <p>
                I didn’t think about it this way when I was doing it, but looking
                back, that mindset shows up in how I approach design. I tend to think
                in patterns and flows rather than isolated features, and I care a lot
                about how small interactions add up to the overall experience.
              </p>

            </div>
          </div>

        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-20" />

        {/* WHAT I CARE ABOUT */}
        <section>

          <div className="grid md:grid-cols-[160px_1fr] gap-10 items-start">

            <h2 className="text-xs tracking-[0.35em] uppercase text-slate-500 font-semibold">
              What I care about
            </h2>

            <div className="space-y-4 text-slate-700">

              <p>Figuring out why something feels confusing, not just fixing where it breaks</p>

              <p>Building tools that help people get unstuck faster, especially in technical workflows</p>

              <p>Designing from real feedback, not assumptions about how users “should” behave</p>

              <p>Paying attention to small interaction details, because that’s usually where the experience succeeds or fails</p>

              <p>Working across product, design, and engineering without treating them like separate worlds</p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}