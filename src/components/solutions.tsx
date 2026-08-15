import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS } from "@/lib/solutions-data";
import { Reveal } from "@/components/reveal";

export function Solutions() {
  return (
    <section
      id="soluciones"
      className="py-20 px-6 border-t border-gray-800/60 light:border-gray-200 bg-gray-900/30 light:bg-gray-50 transition-colors"
    >
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] mb-4 text-white light:text-gray-900">
            Soluciones Listas para Operar
          </h2>
          <p className="text-gray-400 light:text-gray-600 text-lg">
            Infraestructura tecnológica especializada adaptada a las reglas
            reales de tu sector.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 lg2:grid-cols-4 gap-6">
          {SOLUTIONS.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.1}>
              <Link
                href={`/soluciones/${item.slug}`}
                className="overflow-hidden bg-gray-900/80 light:bg-white border border-gray-800 light:border-gray-200 rounded-2xl hover:border-gray-600 light:hover:border-gray-300 transition-all duration-300 flex flex-col group h-full"
              >
                {item.image && (
                  <div className="relative h-40 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-8 flex-1">
                  <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3 block">
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
          ))}
        </div>
      </div>
    </section>
  );
}
