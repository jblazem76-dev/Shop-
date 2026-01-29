import type { Program } from "@/data/programs";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="rounded-3xl border border-mist bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-ink">{program.name}</h3>
      <div className="mt-4 space-y-3 text-sm text-slate">
        <p>
          <span className="font-semibold text-ink">Problem:</span> {program.problem}
        </p>
        <p>
          <span className="font-semibold text-ink">Solution:</span> {program.solution}
        </p>
        <p>
          <span className="font-semibold text-ink">Why bundled:</span> {program.whyBundled}
        </p>
        <p>
          <span className="font-semibold text-ink">When to use:</span> {program.timing}
        </p>
      </div>
    </div>
  );
}
