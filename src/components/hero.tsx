import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:px-6">
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-blue-500/40 blur-[110px]"
        aria-hidden="true"
      />

      <Reveal className="relative max-w-[1440px] mx-auto px-6 text-center">
        <span className="mb-4 block text-xs font-medium tracking-wide uppercase text-white light:text-gray-900">
          Pegasus Pixels · Socio Tecnológico
        </span>
        <h1 className="max-w-[960px] mx-auto text-5xl sm2:text-6xl md:text-7xl font-normal tracking-[-0.04em] leading-[0.95] mb-6 text-white light:text-gray-900">
          Diseño y desarrollo de tu infraestructura digital
        </h1>
        <p className="text-lg md:text-xl text-gray-400 light:text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Implementamos sistemas validados tu negocio, entrenamos a tu equipo
          en tu local y mantenemos tu infraestructura activa a largo plazo.
        </p>
        <div>
          <a
            href="#soluciones"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-semibold transition-all duration-300 px-8 py-4 text-base bg-white text-black light:bg-gray-900 light:text-white hover:scale-105 hover:bg-black hover:text-white hover:border-white light:hover:bg-white light:hover:text-gray-900 light:hover:border-gray-900"
          >
            Elegir mi Industria y Empezar
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="text-sm text-gray-400 light:text-gray-600">
            5.0 en Google
          </span>
        </div>
      </Reveal>
    </section>
  );
}
