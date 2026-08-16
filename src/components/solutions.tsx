import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS, SOLUTION_ACCENTS } from "@/lib/solutions-data";
import { Reveal } from "@/components/reveal";

export function Solutions() {
  return (
    <section
      id="soluciones"
      className="py-28 px-6 border-t border-gray-800/60 light:border-gray-200 bg-gray-900/30 light:bg-gray-50 transition-colors"
    >
      <div className="max-w-[1260px] mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-medium tracking-wide uppercase text-gray-500">
            Soluciones
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] mb-4 text-white light:text-gray-900">
            Plataformas Diseñadas para Rendir desde el Día Uno
          </h2>
          <p className="text-gray-400 light:text-gray-600 text-lg">
            Infraestructura tecnológica especializada adaptada a las reglas
            reales de tu sector.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((item, index) => {
            const accent = SOLUTION_ACCENTS[item.slug];
            return (
              <Reveal key={item.slug} delay={index * 0.1}>
                <Link
                  href={`/soluciones/${item.slug}`}
                  // Fixed height (rather than h-full) so the image and text
                  // halves below have real space to split 50/50 — a grid
                  // row's auto height can't distribute flex-grow space that
                  // doesn't exist yet, and a `fill` image has no intrinsic
                  // height of its own to seed that computation.
                  className={`overflow-hidden bg-gray-900/80 light:bg-white border border-gray-800 light:border-gray-200 rounded-2xl transition-all duration-300 flex flex-col group h-[500px] ${accent.hoverBorder}`}
                >
                  {item.image && (
                    <div className="relative w-full flex-1">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        // Sized ~20% above the actual display width so the
                        // hover scale-105 has real resolution to zoom into
                        // instead of upscaling an exact-fit bitmap (blurry).
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 60vw, 100vw"
                        quality={90}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div
                    className={`p-8 flex-1 ${item.image ? "" : "flex flex-col justify-center"}`}
                  >
                    <span
                      className={`text-xs font-semibold tracking-wider uppercase mb-3 block ${accent.tagText}`}
                    >
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white light:text-gray-900 mb-3 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
