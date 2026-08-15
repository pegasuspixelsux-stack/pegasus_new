import Image from "next/image";
import { Reveal } from "@/components/reveal";

const STACK = [
  "MySpace",
  "WordPress",
  "Webflow",
  "Framer",
  "Next.js",
  "React",
  "Supabase",
  "Firebase",
  "Vercel",
  "Anthropic",
  "OpenAI",
  "Gemini",
  "Manus",
  "Kimi",
  "y más",
];

export function AboutMe() {
  return (
    <section
      id="quien-soy"
      className="py-20 px-6 border-t border-gray-800/60 light:border-gray-200 bg-gray-900/30 light:bg-gray-50 transition-colors"
    >
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-center mb-16 text-white light:text-gray-900">
            La mente detrás de Pegasus Pixels
          </h2>
        </Reveal>

        <div className="max-w-[960px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-700 light:border-gray-300 bg-gray-800 light:bg-gray-100">
              <Image
                src="/foto-perfil.jpg"
                alt="La mente detrás de Pegasus Pixels"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover object-[center_30%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2 space-y-6">
            <p className="text-gray-300 light:text-gray-700 leading-relaxed">
              Mi camino en el mundo de la tecnología comenzó en la década de
              1990, importando, armando y reparando hardware cuando las
              computadoras personales desembarcaban en las empresas. Fui
              pionero en el desarrollo web temprano y en la promoción digital
              en plataformas como MySpace.
            </p>
            <p className="text-gray-300 light:text-gray-700 leading-relaxed">
              Durante mis años viviendo y trabajando en Estados Unidos, apliqué
              estos conocimientos en el sector automotor y la hospitalidad.
              Hoy construyo soluciones ultra-rápidas utilizando el estándar
              tecnológico global.
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 light:bg-gray-100 border border-gray-700 light:border-gray-300 text-gray-300 light:text-gray-700 text-xs px-3 py-1.5 rounded-md font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
