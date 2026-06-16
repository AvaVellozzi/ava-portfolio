import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* HERO */}
        <section className="mb-20">

          <h1 className="text-5xl font-semibold tracking-tight mb-10">
            About
          </h1>

          <div className="grid md:grid-cols-[160px_1fr] gap-10 items-start">

            <div className="w-40 h-40 rounded-2xl overflow-hidden border border-gray-200 relative">
              <Image
                src="/headshot.jpeg"
                alt="Ava"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">

              <p className="text-lg text-gray-900">
                Hi! I'm Ava, a recent graduate of the University of Florida with a Bachelor of Science in Computer Science. I was also part of the Honors Program and University Research Scholars Program.
              </p>

              <p>
                Despite my engineering background, I’ve always been
                drawn more to how things feel to use. In internships and
                projects, I naturally focus on the user experience,
                what people are trying to accomplish, where friction shows up,
                and how to make complex systems simpler and more intuitive.
              </p>

              <p>
                Most of my experience has been in developer tools and internal
                systems. Over time, I’ve realized the hard part usually isn’t
                building features, it’s making them actually make sense to the
                people using them. I like working in that space because I care
                about tangible impact, and design is where I feel that most
                directly. My engineering background helps too, because it lets
                me understand what’s feasible and design with that in mind.
              </p>

            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="h-px bg-gray-100 mb-20" />

        {/* PERSONAL SECTION */}
        <section className="mb-20">

          <div className="grid md:grid-cols-[160px_1fr] gap-10 items-start">

            <div>
              <h2 className="text-xs tracking-[0.35em] uppercase text-gray-400">
                Outside of tech
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">

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
        <div className="h-px bg-gray-100 mb-20" />

        {/* WHAT I CARE ABOUT */}
        <section>

          <div className="grid md:grid-cols-[160px_1fr] gap-10 items-start">

            <h2 className="text-xs tracking-[0.35em] uppercase text-gray-400">
              What I care about
            </h2>

            <div className="space-y-4 text-gray-700">

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