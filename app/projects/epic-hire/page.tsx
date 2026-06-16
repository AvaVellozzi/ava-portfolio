import Image from "next/image";

export default function EpicHire() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-gray-900 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-4xl mx-auto px-8 py-24 relative z-10">

        {/* HEADER */}
        <header className="mb-16">

          <h1 className="text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-slate-900 to-indigo-700 bg-clip-text text-transparent">
            Epic Hire — Vision Pro Recruiting
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Reimagining candidate discovery and hiring collaboration through
            spatial computing on Apple Vision Pro.
          </p>

          <div className="mt-6 text-sm text-slate-500">
            Figma • Product Design • Spatial UX • User Research • Prototyping
          </div>

        </header>

        {/* OVERVIEW */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Overview
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Traditional recruiting platforms rely on dashboards, spreadsheets,
            and fragmented applicant tracking systems that make candidate
            evaluation slow and difficult to navigate. Epic Hire explores how
            spatial computing can transform recruiting workflows by making
            candidate information more visual, collaborative, and intuitive.
          </p>

        </section>

        {/* PROBLEM */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Problem
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              Existing recruiting platforms rely heavily on linear, form-based
              interfaces that make it difficult to compare candidates and
              understand hiring pipelines at a glance.
            </p>

            <p>
              Recruiters often switch between multiple screens, tools, and
              spreadsheets while evaluating candidates, creating unnecessary
              friction and context switching.
            </p>

            <p>
              Collaboration between recruiters, hiring managers, and other
              stakeholders is frequently fragmented across separate systems,
              slowing down decision making.
            </p>

          </div>

        </section>

        {/* RESEARCH */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Research Insights
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              Through user research and industry analysis, I identified several
              recurring challenges across recruiting workflows.
            </p>

            <p>
              Recruiters need faster ways to source and evaluate candidates
              using data-driven insights instead of relying on manual review
              processes and disconnected tools.
            </p>

            <p>
              Hiring teams need collaborative environments that allow
              stakeholders to review candidates, share feedback, and make
              decisions together without logistical delays.
            </p>

            <p>
              Candidates increasingly expect personalized experiences,
              meaningful communication, and stronger alignment between their
              goals and potential opportunities.
            </p>

          </div>

        </section>

        {/* GOAL */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Goal
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Design a recruiting experience that leverages spatial computing to
            help recruiters visualize candidate information, compare applicants
            more efficiently, collaborate with hiring teams, and make faster,
            more informed hiring decisions.
          </p>

        </section>

        {/* ROLE */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            My Role
          </h2>

          <p className="text-slate-700 leading-relaxed">
            I led product design for a 6-person team from research through
            high-fidelity prototyping. I conducted user research, defined
            product requirements, mapped recruiting workflows, designed the
            spatial interaction model, and created the end-to-end Vision Pro
            experience in Figma.
          </p>

        </section>

        {/* WHAT I DESIGNED */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            What I Designed
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-700">

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              3D candidate profiles with immersive resume exploration
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              Spatial candidate-job matching workflows
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              Data visualization dashboard for recruiting insights
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              Collaborative review table for hiring teams
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              Real-time feedback and evaluation workflows
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              High-fidelity Vision Pro prototypes across 5+ user flows
            </div>

          </div>

        </section>

        {/* SPATIAL DESIGN PRINCIPLES */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Spatial Design Principles
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              One of the biggest design challenges was determining what
              information should occupy physical space and what should remain
              contextual.
            </p>

            <p>
              I used proximity to communicate candidate relevance, grouping to
              organize hiring workflows, and layering to reveal additional
              information without overwhelming recruiters.
            </p>

            <p>
              The goal was not simply to make recruiting three-dimensional, but
              to use spatial computing to reduce cognitive load and make complex
              hiring decisions easier to understand.
            </p>

          </div>

        </section>

        {/* IMPACT */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Impact
          </h2>

          <div className="space-y-3 text-slate-700 leading-relaxed">

            <p>
              Improved recruiter efficiency in candidate-job matching by
              <span className="font-medium"> 45%</span>.
            </p>

            <p>
              Demonstrated how spatial computing can reduce friction in
              candidate comparison and hiring decision-making.
            </p>

            <p>
              Created a framework for applying Vision Pro interaction patterns
              to enterprise recruiting workflows.
            </p>

            <p>
              Led a multidisciplinary team of six through research, concept
              development, prototyping, and final presentation.
            </p>

          </div>

        </section>

        {/* PROTOTYPE DECK */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Prototype Deck
          </h2>

          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg">

            <iframe
              src="/epic-hire-deck.pdf"
              className="w-full h-[650px]"
            />

          </div>

          <a
            href="/epic-hire-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-indigo-600 hover:text-indigo-700 transition"
          >
            Open full deck →
          </a>

        </section>

      </div>

    </main>
  );
}