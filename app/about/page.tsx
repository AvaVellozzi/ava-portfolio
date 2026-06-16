import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">

      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* HEADER */}
        <section className="mb-20">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            About
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-start">

            {/* HEADSHOT */}
            <div className="shrink-0">
              <div className="w-44 h-44 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm relative">
                <Image
                  src="/headshot.jpeg"
                  alt="Ava Vellozzi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="space-y-6 text-gray-600 leading-relaxed">

              <p className="text-xl text-gray-900 leading-relaxed">
                I’m Ava, a Computer Science student at the University of Florida
                focused on building and designing complex software systems.
              </p>

              <p>
                My work sits at the intersection of product design, engineering,
                and systems thinking — with a focus on developer tools,
                enterprise dashboards, and data-heavy interfaces.
              </p>

              <p>
                I enjoy turning ambiguous technical problems into structured,
                intuitive experiences that help users move faster and understand
                complexity with clarity.
              </p>

            </div>

          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-20">

          <h2 className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-8">
            Experience
          </h2>

          <div className="space-y-5 text-gray-700">

            <div>
              <p className="font-medium text-gray-900">Microsoft</p>
              <p className="text-gray-500 text-sm">
                Software Engineer Intern
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-900">Microsoft</p>
              <p className="text-gray-500 text-sm">
                Explore Intern (Product + Engineering)
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-900">Digital Worlds Institute</p>
              <p className="text-gray-500 text-sm">
                Research Assistant • 8M+ users reached
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-900">Product Space</p>
              <p className="text-gray-500 text-sm">
                President • Growth +53%
              </p>
            </div>

          </div>

        </section>

        {/* WHAT I CARE ABOUT */}
        <section>

          <h2 className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-8">
            What I Care About
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-600">

            <div className="p-4 rounded-xl bg-white border border-gray-100">
              Designing systems that make complexity understandable
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-100">
              Developer tools and infrastructure UX
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-100">
              Data visualization and dashboards
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-100">
              Bridging engineering, product, and design
            </div>

          </div>

        </section>

      </div>

    </main>
  );
}