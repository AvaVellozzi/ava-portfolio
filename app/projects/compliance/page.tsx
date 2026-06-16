import Image from "next/image";

export default function Compliance() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-gray-900 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-4xl mx-auto px-8 py-24 relative z-10">

        {/* HEADER */}
        <header className="mb-20">

          <h1 className="text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-slate-900 to-indigo-700 bg-clip-text text-transparent">
            Microsoft Compliance Dashboard
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            A centralized compliance platform built from scratch to manage
            regulatory requirements, streamline review workflows, and help
            engineering teams ship compliant software faster.
          </p>

          <div className="mt-6 text-sm text-slate-500">
            React • TypeScript • FluentUI • SQL • C#
          </div>

        </header>

        {/* OVERVIEW */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Overview
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Microsoft products must comply with thousands of regulatory and
            security requirements across regions, industries, and internal
            standards. The existing process relied heavily on spreadsheets,
            documents, and manual reviews, making it difficult for teams to
            understand requirements, track implementation progress, and
            maintain compliance at scale.
          </p>

        </section>

        {/* PROBLEM */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Problem
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              Compliance requirements, known as controls, were managed through
              a fragmented collection of spreadsheets and documents.
            </p>

            <p>
              Teams struggled to understand which controls applied to their
              products, how those controls were being implemented, and where
              reviews were blocked or incomplete.
            </p>

            <p>
              The process lacked a centralized workflow for creating,
              updating, reviewing, and tracking compliance requirements.
            </p>

          </div>

        </section>

        {/* GOAL */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Goal
          </h2>

          <p className="text-slate-700 leading-relaxed">
            Design and build a centralized platform where stakeholders could
            manage compliance requirements, monitor implementation progress,
            review changes, and identify coverage gaps across Microsoft
            products.
          </p>

        </section>

        {/* MY ROLE */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            My Role
          </h2>

          <p className="text-slate-700 leading-relaxed">
            I owned the project end-to-end, from backend architecture to
            frontend experience. I worked with stakeholders to define
            requirements, designed the SQL data model, built backend services
            in C#, developed the React dashboard, and implemented workflow
            logic supporting the full lifecycle of compliance requirements.
          </p>

        </section>

        {/* BUILDING THE PLATFORM */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Building the Platform
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              The platform was built from scratch to replace a manual
              compliance process with a centralized system covering the
              entire regulatory workflow.
            </p>

            <p>
              I designed the SQL schema used to store controls,
              implementation details, ownership information, approval
              status, version history, and supporting metadata.
            </p>

            <p>
              I then built the frontend experience in React and TypeScript,
              creating dashboards and workflows that allowed users to
              manage, review, and track compliance requirements from a
              single location.
            </p>

          </div>

        </section>

        {/* WHAT I BUILT */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            What I Built
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-700">

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              Centralized database managing 2,000+ compliance requirements
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              React dashboard for monitoring implementation progress
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              Search and filtering across large regulatory datasets
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              Approval workflows for reviewing and updating controls
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              Version history and audit tracking
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 transition-all duration-300">
              Excel-to-SQL ingestion pipeline for legacy compliance data
            </div>

          </div>

        </section>

        {/* WORKFLOW DESIGN */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Workflow Design
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              A major challenge was simplifying how compliance requirements
              moved through review and approval.
            </p>

            <p>
              Controls could exist in draft, active, or in-review states.
              Users could create new controls, edit existing requirements,
              submit changes for review, request deletions, and track
              approval progress through a structured workflow.
            </p>

            <p>
              Records were automatically locked while under review,
              ensuring data consistency and creating a clear audit trail
              for every change.
            </p>

          </div>

        </section>

        {/* SYSTEM DESIGN */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            System Design
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              One of the largest technical challenges was structuring a
              complex regulatory dataset in a way that could scale while
              remaining easy to navigate.
            </p>

            <p>
              I designed a relational SQL schema connecting compliance
              controls, implementation details, ownership information,
              approval states, and version history.
            </p>

            <p>
              To migrate existing data, I built a one-time ingestion
              process using PowerShell and SQL scripts that transformed
              a large legacy Excel dataset into normalized database tables.
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
              Reduced compliance review time by{" "}
              <span className="font-medium">50%</span>.
            </p>

            <p>
              Eliminated approximately{" "}
              <span className="font-medium">20 hours per week</span> of
              manual tracking effort.
            </p>

            <p>
              Accelerated time-to-market for compliant solutions by up to{" "}
              <span className="font-medium">6 weeks</span>.
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
                src="/c1.jpg"
                alt="Compliance Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/c2.jpg"
                alt="Compliance Workflow"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/c4.jpg"
                alt="Compliance Management"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/c3.jpg"
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