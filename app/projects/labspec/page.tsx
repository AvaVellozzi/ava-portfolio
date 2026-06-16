import Image from "next/image";

export default function LabSpec() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* TITLE */}
        <header className="mb-16">

          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            LabSpec Dashboard
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            A full-stack Laboratory Information Management System (LIMS)
            designed to streamline specimen tracking, intake workflows,
            and lab operations through a centralized dashboard.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            React • FastAPI • PostgreSQL • Supabase
          </div>

        </header>

        {/* OVERVIEW */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Lab environments rely on fragmented systems for tracking specimens,
            often leading to data inconsistency, manual errors, and inefficient workflows.
            LabSpec was designed to unify specimen intake, tracking, and metadata management
            into a single structured system.
          </p>

        </section>

        {/* PROBLEM */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Problem
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed">

            <p>
              Labs often rely on spreadsheets or disconnected systems to manage specimens.
            </p>

            <p>
              This creates issues with traceability, human error, and inefficient workflows.
            </p>

            <p>
              There is no centralized system for barcode-based intake + real-time tracking.
            </p>

          </div>

        </section>

        {/* MY ROLE */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            My Role
          </h2>

          <p className="text-gray-700 leading-relaxed">
            I designed and built the full-stack system end-to-end, including
            database schema design, frontend dashboard UX, authentication,
            and API architecture.
          </p>

        </section>

        {/* FEATURES */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">

            <div className="p-4 border rounded-xl">
              Barcode-based specimen intake system
            </div>

            <div className="p-4 border rounded-xl">
              Role-based authentication (lab tech vs admin)
            </div>

            <div className="p-4 border rounded-xl">
              Real-time dashboard for specimen tracking
            </div>

            <div className="p-4 border rounded-xl">
              CRUD workflows for lab operations
            </div>

            <div className="p-4 border rounded-xl">
              PostgreSQL + Supabase backend integration
            </div>

            <div className="p-4 border rounded-xl">
              API layer built with FastAPI
            </div>

          </div>

        </section>

        {/* SYSTEM VIEW */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            System Design
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">

            <p>
              The system was designed around a centralized specimen entity
              that flows through multiple stages of intake, labeling,
              processing, and analysis.
            </p>

            <p>
              Each specimen is assigned a unique barcode identifier,
              enabling fast retrieval and reducing manual lookup errors.
            </p>

          </div>

        </section>

        {/* IMPACT */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Impact
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Improved lab workflow efficiency by centralizing specimen tracking
            and reducing manual data handling across multiple touchpoints.
          </p>

        </section>

        {/* OPTIONAL IMAGE PLACEHOLDER */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Interface
          </h2>

          <div className="border rounded-2xl overflow-hidden bg-gray-50">

            <Image
              src="/labspec.png"
              alt="LabSpec Dashboard UI"
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