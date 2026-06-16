import Image from "next/image";

export default function TeamsDiagnostic() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* HEADER */}
        <header className="mb-16">

          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            Teams Diagnostic App
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            A developer diagnostic tool designed to help engineers test,
            debug, and visualize 50+ Microsoft TeamsJS APIs through a
            real-time interactive interface.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            React • TypeScript • FluentUI • API Debugging • Developer Tools UX
          </div>

        </header>

        {/* OVERVIEW */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Developers building on Microsoft Teams APIs often struggle with
            unclear error messages, fragmented documentation, and lack of
            real-time debugging tools. This project aimed to centralize API
            testing into a unified diagnostic experience.
          </p>

        </section>

        {/* PROBLEM */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Problem
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">

            <p>
              Developers had to manually test APIs across multiple environments
              with no consistent feedback loop.
            </p>

            <p>
              Debugging required switching between logs, documentation, and external tools.
            </p>

            <p>
              There was no real-time visibility into API responses or system behavior.
            </p>

          </div>

        </section>

        {/* GOAL */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Goal
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Build a unified diagnostic environment where developers can execute
            API calls, view structured responses in real time, and quickly identify
            issues across TeamsJS APIs.
          </p>

        </section>

        {/* MY ROLE */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            My Role
          </h2>

          <p className="text-gray-700 leading-relaxed">
            I designed and built the full diagnostic experience end-to-end,
            including the UI workflow for API selection, real-time response rendering,
            and log visualization. I also worked on improving developer usability
            through structured feedback and error clarity.
          </p>

        </section>

        {/* KEY FEATURES */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">

            <div className="p-4 border rounded-xl">
              Interactive API testing interface for 50+ endpoints
            </div>

            <div className="p-4 border rounded-xl">
              Real-time response viewer with structured output
            </div>

            <div className="p-4 border rounded-xl">
              Drag-and-drop workflow for configuring API calls
            </div>

            <div className="p-4 border rounded-xl">
              Centralized logging system for debugging sessions
            </div>

            <div className="p-4 border rounded-xl">
              Error handling + structured diagnostics output
            </div>

            <div className="p-4 border rounded-xl">
              Developer-focused UX optimized for fast iteration
            </div>

          </div>

        </section>

        {/* SYSTEM DESIGN */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            System Design
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">

            <p>
              The system was designed around an execution pipeline where API calls
              are constructed, executed, and streamed back into a structured UI.
            </p>

            <p>
              Each request is logged with metadata including execution time,
              response status, and payload structure to enable debugging at scale.
            </p>

            <p>
              The architecture prioritizes fast feedback loops so developers can
              iterate on API usage without leaving the diagnostic environment.
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
              Enabled over <span className="font-medium">10,000 developers</span> to test
              and debug TeamsJS APIs more efficiently.
            </p>

            <p>
              Reduced troubleshooting time by <span className="font-medium">15 hours per week</span>
              through improved diagnostic workflows.
            </p>

            <p>
              Improved API usability by centralizing testing, logging, and response visibility.
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
              src="/teams.png"
              alt="Teams Diagnostic App UI"
              width={1200}
              height={800}
              className="w-full h-auto"
            />

          </div>

        </section>

      </div>

    </main>
  );
}