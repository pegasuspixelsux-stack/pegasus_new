import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  DEDICATED_SOLUTION_PAGES,
  SOLUTIONS,
  SOLUTION_ACCENTS,
  getSolution,
} from "@/lib/solutions-data";

export function generateStaticParams() {
  return SOLUTIONS.filter(
    (solution) => !DEDICATED_SOLUTION_PAGES.includes(solution.slug)
  ).map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata(
  props: PageProps<"/soluciones/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const solution = getSolution(slug);

  if (!solution) {
    return { title: "Solución no encontrada — Pegasus Pixels" };
  }

  return {
    title: `${solution.name} — Pegasus Pixels`,
    description: solution.desc,
  };
}

export default async function SolutionPage(
  props: PageProps<"/soluciones/[slug]">
) {
  const { slug } = await props.params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  const otherSolutions = SOLUTIONS.filter((s) => s.slug !== solution.slug);
  const accent = SOLUTION_ACCENTS[solution.slug];

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-black light:bg-white text-white light:text-gray-900 transition-colors">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/#soluciones"
            className="text-sm text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors"
          >
            ← Volver a Soluciones
          </Link>

          <span
            className={`mt-6 block text-xs font-semibold tracking-wider uppercase ${accent.tagText}`}
          >
            {solution.tag}
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-normal tracking-[-0.04em] leading-[0.95] mb-8 text-white light:text-gray-900">
            {solution.name}
          </h1>

          {solution.image && (
            <div className="relative h-64 md:h-96 w-full mb-8 overflow-hidden rounded-2xl border border-gray-800 light:border-gray-200">
              <Image
                src={solution.image}
                alt={solution.name}
                fill
                sizes="(min-width: 960px) 960px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          <p className="text-lg text-gray-300 light:text-gray-700 leading-relaxed mb-10">
            {solution.desc}
          </p>

          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all px-8 py-4 text-base bg-white text-black light:bg-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-800"
          >
            Quiero implementar {solution.name}
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-800/60 light:border-gray-200 transition-colors">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-xl font-medium text-white light:text-gray-900 mb-8">
            Otras soluciones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherSolutions.map((item) => {
              const otherAccent = SOLUTION_ACCENTS[item.slug];
              return (
                <Link
                  key={item.slug}
                  href={`/soluciones/${item.slug}`}
                  className={`bg-gray-900/80 light:bg-gray-50 border border-gray-800 light:border-gray-200 p-6 rounded-2xl transition-colors ${otherAccent.hoverBorder}`}
                >
                  <span
                    className={`text-xs font-semibold tracking-wider uppercase mb-2 block ${otherAccent.tagText}`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white light:text-gray-900">
                    {item.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
