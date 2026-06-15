export default function CompliancePage() {
  return (
    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-6">
        Microsoft Compliance Dashboard
      </h1>

      <p className="text-xl mb-12">
        Designing a centralized compliance
        tracking platform for Microsoft.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Problem
        </h2>

        <p>
          Teams struggled to understand
          compliance coverage across thousands
          of regulatory requirements.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">
          Solution
        </h2>

        <p>
          Built dashboards that surfaced
          regulatory coverage, ownership,
          and implementation status.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">
          Impact
        </h2>

        <ul className="list-disc pl-5">
          <li>50% reduction in review time</li>
          <li>20 hours saved weekly</li>
        </ul>
      </section>

    </main>
  );
}