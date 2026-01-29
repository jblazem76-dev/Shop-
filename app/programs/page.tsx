import { ProgramCard } from "@/components/ProgramCard";
import { programs } from "@/data/programs";

export default function ProgramsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-ink">Programs</h1>
        <p className="max-w-2xl text-slate">
          CTA programs bundle inputs that are designed to work together. Each program keeps timing simple
          and reduces guesswork for seasonal priorities.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </div>
  );
}
