import Image from "next/image";

export default function EpicHire() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* HEADER */}
        <header className="mb-16">

          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            Epic Hire — Vision Pro Recruiting
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            A spatial recruiting platform designed for Apple Vision Pro that
            reimagines how recruiters explore candidates and manage hiring workflows
            in immersive environments.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            Figma • Product Design • Spatial UX • Prototyping
          </div>

        </header>

        {/* OVERVIEW */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Traditional recruiting tools rely on linear, form-based interfaces that
            limit how recruiters evaluate candidates at scale. Epic Hire explores how
            spatial computing can transform candidate discovery into a more intuitive,
            visual experience.
          </p>

        </section>

        {/* PROBLEM */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Problem
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">

            <p>
              Recruiters manage large volumes of candidates using fragmented ATS systems.
            </p>

            <p>
              Candidate comparison is difficult due to linear list-based interfaces.
            </p>

            <p>
              Decision-making is slow because context is distributed across multiple screens and tabs.
            </p>

          </div>

        </section>

        {/* GOAL */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Goal
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Design a spatial recruiting experience that allows recruiters to:
            visualize candidate data, compare profiles efficiently, and interact
            with hiring workflows in an immersive environment.
          </p>

        </section>

        {/* MY ROLE */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            My Role
          </h2>

          <p className="text-gray-700 leading-relaxed">
            I led product design for a 6-person team, defining the spatial interaction
            model, designing high-fidelity prototypes in Figma, and shaping the end-to-end
            candidate experience for a Vision Pro–based interface.
          </p>

        </section>

        {/* WHAT I DESIGNED */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            What I Designed
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">

            <div className="p-4 border rounded-xl">
              Spatial candidate browsing interface
            </div>

            <div className="p-4 border rounded-xl">
              Immersive job posting and filtering system
            </div>

            <div className="p-4 border rounded-xl">
              Candidate comparison overlays in 3D space
            </div>

            <div className="p-4 border rounded-xl">
              Recruiter workflow dashboard for spatial context
            </div>

            <div className="p-4 border rounded-xl">
              Interaction patterns for Vision Pro UX
            </div>

            <div className="p-4 border rounded-xl">
              High-fidelity Figma prototypes (5+ flows)
            </div>

          </div>

        </section>

        {/* DESIGN THINKING */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Design Approach
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">

            <p>
              I started by mapping traditional recruiting workflows and identifying
              friction points in candidate evaluation and comparison.
            </p>

            <p>
              I then translated these workflows into spatial metaphors, focusing on how
              proximity, layering, and grouping could represent candidate relevance.
            </p>

            <p>
              The design prioritized reducing cognitive load by replacing tab-based navigation
              with spatial clustering of information.
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
              Improved recruiter efficiency in candidate-job matching by <span className="font-medium">45%</span>.
            </p>

            <p>
              Reduced friction in candidate comparison through spatial grouping and visual hierarchy.
            </p>

            <p>
              Helped validate spatial UX patterns for recruiting workflows in emerging AR/VR environments.
            </p>

          </div>

        </section>

        {/* PROTOTYPE DECK */}
        <section className="mb-16">

        <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Prototype Deck
        </h2>

        <div className="border rounded-2xl overflow-hidden bg-gray-50">

            <iframe
            src="/epic-hire-deck.pdf"
            className="w-full h-[650px]"
            />

        </div>

        <a
            href="/epic-hire-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-blue-600 hover:underline"
        >
            Open full deck →
        </a>

        </section>

      </div>

    </main>
  );
}