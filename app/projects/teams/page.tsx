import Image from "next/image";

export default function TeamsDiagnostic() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />

      <div className="relative max-w-4xl mx-auto px-6 py-20">

        {/* HEADER */}
        <header className="mb-16">

          <h1 className="text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-slate-900 to-indigo-700 bg-clip-text text-transparent">
            Teams Diagnostic App
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed">
            A developer diagnostic platform that helps engineers test, debug,
            and troubleshoot Microsoft TeamsJS APIs through real-time execution,
            structured logging, and interactive diagnostics.
          </p>

          <div className="mt-6 text-sm text-slate-500">
            React • TypeScript • TeamsJS • FluentUI • Jest • Developer Tools
          </div>

        </header>

        {/* OVERVIEW */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Overview
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Developers building applications on Microsoft Teams often need to
            test APIs across different environments, validate SDK behavior,
            and troubleshoot unexpected failures. Existing debugging workflows
            relied heavily on manual testing, fragmented logs, and documentation,
            making it difficult to quickly identify and resolve issues.
          </p>

        </section>

        {/* PROBLEM */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Problem
          </h2>

          <div className="space-y-4 text-slate-600 leading-relaxed">

            <p>
              Developers lacked dedicated troubleshooting tools for validating
              TeamsJS APIs during development.
            </p>

            <p>
              Debugging required switching between application logs,
              documentation, browser tools, and multiple testing environments.
            </p>

            <p>
              Limited visibility into API execution and response behavior slowed
              development, maintenance, and release cycles.
            </p>

          </div>

        </section>

        {/* GOAL */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Goal
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Create a centralized diagnostic experience that allows developers to
            execute TeamsJS APIs, inspect responses, monitor execution behavior,
            and quickly identify issues without leaving their development workflow.
          </p>

        </section>

        {/* MY ROLE */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            My Role
          </h2>

          <p className="text-slate-600 leading-relaxed">
            As a Software Engineering Intern at Microsoft, I contributed to the
            design and development of the diagnostic platform, building API
            testing experiences, structured logging systems, and debugging
            workflows that improved visibility into TeamsJS API behavior.
          </p>

        </section>

        {/* WHAT I BUILT */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            What I Built
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-600">

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              Interactive API testing interface for 50+ TeamsJS APIs
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              Real-time response visualization and diagnostics
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              Structured logging framework for API execution
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              Scenario-based testing workflows
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              Error monitoring and troubleshooting tools
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              Developer-focused UI built with React and FluentUI
            </div>

          </div>

        </section>

        {/* SYSTEM DESIGN */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            System Design
          </h2>

          <div className="space-y-4 text-slate-600 leading-relaxed">

            <p>
              The platform was designed around a diagnostic execution pipeline
              where developers can select APIs, configure test parameters,
              execute requests, and immediately inspect responses within a
              centralized interface.
            </p>

            <p>
              Every API execution generates structured logs containing metadata
              such as execution timestamps, request context, response payloads,
              and error details, enabling faster root-cause analysis.
            </p>

            <p>
              By consolidating testing, logging, and diagnostics into a single
              workflow, the platform reduces context switching and accelerates
              developer iteration cycles.
            </p>

          </div>

        </section>

        {/* IMPACT */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Impact
          </h2>

          <div className="space-y-3 text-slate-600 leading-relaxed">

            <p>
              Enabled over <span className="font-medium">10,000 developers</span>
              to test and troubleshoot TeamsJS APIs more efficiently.
            </p>

            <p>
              Reduced troubleshooting effort by approximately{" "}
              <span className="font-medium">15 hours per week</span>
              through centralized diagnostics and logging.
            </p>

            <p>
              Improved API usability by providing real-time visibility into
              execution behavior, response data, and system errors.
            </p>

          </div>

        </section>

        {/* INTERFACE */}
                <section>
        
                  <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
                    Interface
                  </h2>
        
                  <div className="space-y-6">
        
                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/diagnostic1.jpg"
                        alt="Compliance Dashboard"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
        
                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/diagnostic2.jpg"
                        alt="Compliance Workflow"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
        
                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/diagnostic3.jpg"
                        alt="Compliance Management"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
        
                  </div>
        
                </section>

      </div>

    </main>
  );
}