import { SOLUTIONS } from "@/lib/solutions-data";
import { SolutionCard } from "@/components/solution-card";
import { Reveal } from "@/components/reveal";

export function OtherSolutions({ currentSlug }: { currentSlug: string }) {
  const others = SOLUTIONS.filter((item) => item.slug !== currentSlug);

  if (others.length === 0) return null;

  return (
    <section className="py-24 px-6 transition-colors">
      <div className="max-w-[1260px] mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-medium tracking-wide uppercase text-gray-500">
            Soluciones
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
            Otras Soluciones
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.1}>
              <SolutionCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
