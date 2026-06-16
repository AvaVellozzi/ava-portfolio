import Image from "next/image";

export default function Compliance() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* HEADER */}
        <header className="mb-16">

          <h1 className="text-5xl font-semibold tracking-tight mb-4">
            Microsoft Compliance Dashboard
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            A centralized regulatory compliance system designed to reduce
            review time, improve visibility across 2,000+ requirements,
            and help engineering teams ship compliant software faster.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            React • TypeScript • FluentUI • SQL • C#
          </div>

        </header>

        {/* OVERVIEW */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Overview
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Microsoft products must comply with thousands of evolving regulatory
            requirements across regions, security standards, and internal policies.
            However, compliance tracking was fragmented across teams, documents,
            and manual review processes.
          </p>

        </section>

        {/* PROBLEM */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Problem
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">

            <p>
              Compliance information was distributed across spreadsheets, documents,
              and disconnected tracking systems.
            </p>

            <p>
              Engineers struggled to understand which requirements applied to their
              product areas, leading to delays and repeated manual reviews.
            </p>

            <p>
              There was no centralized system to track compliance coverage or identify gaps.
            </p>

          </div>

        </section>

        {/* GOAL */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Goal
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Design and build a unified system that allows stakeholders to:
            view all compliance requirements, track implementation progress,
            and identify coverage gaps across Microsoft products.
          </p>

        </section>

        {/* MY ROLE */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            My Role
          </h2>

          <p className="text-gray-700 leading-relaxed">
            I worked as a software engineer designing both the backend
            data model and frontend dashboard experience. I collaborated
            with stakeholders across multiple teams to define requirements,
            structure the compliance schema, and design the UX for navigating
            complex regulatory data.
          </p>

        </section>

        {/* WHAT I BUILT */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            What I Built
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">

            <div className="p-4 border rounded-xl">
              Centralized compliance database (2,000+ requirements)
            </div>

            <div className="p-4 border rounded-xl">
              Dashboard to track implementation progress across teams
            </div>

            <div className="p-4 border rounded-xl">
              Search + filtering system for regulatory requirements
            </div>

            <div className="p-4 border rounded-xl">
              Coverage gap identification for product teams
            </div>

            <div className="p-4 border rounded-xl">
              Role-based views for stakeholders
            </div>

            <div className="p-4 border rounded-xl">
              React + FluentUI enterprise dashboard UI
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
              I designed a relational data model in SQL to map regulatory requirements
              to products, features, and implementation status across teams.
            </p>

            <p>
              Each requirement was structured with metadata including ownership,
              status, region applicability, and validation state.
            </p>

            <p>
              This allowed the frontend dashboard to dynamically surface gaps
              and provide actionable insights instead of static documentation.
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
              Reduced compliance review time by <span className="font-medium">50%</span>.
            </p>

            <p>
              Eliminated approximately <span className="font-medium">20 hours per week</span>
              of manual tracking effort.
            </p>

            <p>
              Accelerated time-to-market for compliant features by up to
              <span className="font-medium"> 6 weeks</span>.
            </p>

          </div>

        </section>

        {/* OPTIONAL IMAGE */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Interface
          </h2>

          <div className="border rounded-2xl overflow-hidden bg-gray-50">

            <Image
              src="/compliance.png"
              alt="Compliance Dashboard UI"
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