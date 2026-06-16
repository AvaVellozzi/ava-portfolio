import Image from "next/image";

export default function LabSpec() {
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
            LabSpec Dashboard
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed">
            A full-stack Laboratory Information Management System (LIMS)
            built from scratch to streamline specimen intake, tracking,
            and lab operations through a centralized dashboard.
          </p>

          <div className="mt-6 text-sm text-slate-500">
            React • FastAPI • PostgreSQL • Supabase • Product Design
          </div>

        </header>

        {/* OVERVIEW */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Overview
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Laboratories often rely on spreadsheets, paper records, and
            disconnected software to manage specimens throughout their
            lifecycle. These fragmented workflows create inefficiencies,
            increase the risk of human error, and make it difficult to
            maintain accurate specimen records.
          </p>

          <p className="text-slate-600 leading-relaxed mt-4">
            LabSpec was designed as a centralized Laboratory Information
            Management System (LIMS) that brings specimen intake,
            tracking, metadata management, and laboratory workflows into
            a single platform.
          </p>

        </section>

        {/* PROBLEM */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Problem
          </h2>

          <div className="space-y-4 text-slate-600 leading-relaxed">

            <p>
              Labs often rely on spreadsheets or disconnected systems to
              track specimens, creating gaps in traceability and data consistency.
            </p>

            <p>
              Manual entry and lookup processes increase the likelihood of
              errors while slowing down day-to-day laboratory operations.
            </p>

            <p>
              There is often no centralized workflow for specimen intake,
              status tracking, and metadata management across teams.
            </p>

          </div>

        </section>

        {/* GOAL */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Goal
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Design and build a modern laboratory management system that
            improves specimen traceability, reduces manual work, and gives
            laboratory staff a centralized view of specimen data and workflow
            status.
          </p>

        </section>

        {/* MY ROLE */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            My Role
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">

            <p>
              I worked on a team of three to design and build the LabSpec Dashboard.
              My contributions spanned both product design and engineering,
              including dashboard UX, frontend development in React,
              database schema design in PostgreSQL, API development with
              FastAPI, and authentication workflows.
            </p>

            <p>
              Working across the stack allowed me to help shape the user
              experience while also building the infrastructure needed to
              support specimen tracking, barcode-based intake, and lab
              operations management.
            </p>

          </div>

        </section>

        {/* WHAT I BUILT */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            What I Built
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-600">

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              Barcode-based specimen intake workflow
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              Centralized specimen tracking dashboard
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              Role-based authentication and access controls
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              CRUD workflows for specimen management
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              FastAPI backend and REST API architecture
            </div>

            <div className="p-4 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all">
              PostgreSQL + Supabase data layer
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
              The platform was built around a centralized specimen data model
              that tracks each specimen from intake through processing and analysis.
            </p>

            <p>
              Every specimen receives a unique barcode identifier, allowing
              users to quickly retrieve records and maintain traceability
              throughout the laboratory workflow.
            </p>

            <p>
              On the backend, PostgreSQL and Supabase manage specimen data,
              user permissions, and workflow state, while FastAPI provides
              the service layer connecting the dashboard to the database.
            </p>

          </div>

        </section>

        {/* DESIGN DECISIONS */}
        <section className="mb-16">

          <h2 className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-6">
            Design Decisions
          </h2>

          <div className="space-y-4 text-slate-600 leading-relaxed">

            <p>
              Because laboratory staff frequently interact with large volumes
              of specimen records, the interface was designed to prioritize
              speed, visibility, and minimal context switching.
            </p>

            <p>
              Barcode-based workflows reduced manual lookup effort, while a
              centralized dashboard surfaced specimen status and metadata in
              a single view.
            </p>

            <p>
              The goal was to create a system that felt intuitive for users
              while maintaining the structure and reliability required for
              laboratory operations.
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
              Centralized specimen intake, tracking, and metadata management
              into a single platform.
            </p>

            <p>
              Reduced reliance on manual spreadsheets and fragmented workflows.
            </p>

            <p>
              Improved specimen traceability and operational visibility across
              laboratory processes.
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
                        src="/lab1.jpg"
                        alt="Compliance Dashboard"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
        
                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/lab2.jpg"
                        alt="Compliance Workflow"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
        
                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/lab3.jpg"
                        alt="Compliance Management"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                      />
                    </div>
        
                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src="/lab4.jpg"
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