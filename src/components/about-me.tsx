import Image from "next/image";
import { Reveal } from "@/components/reveal";

const PILLARS = [
  {
    title: "Ingeniería orientada a resultados",
    description:
      "Infraestructura diseñada para acelerar procesos internos y proteger la rentabilidad del negocio.",
  },
  {
    title: "Sin intermediarios",
    description:
      "Gestión directa con el arquitecto que diseña, construye y despliega la tecnología.",
  },
  {
    title: "A la medida de su industria",
    description:
      "Desarrollo sobre stacks modernos y robustos (Next.js, Supabase, Vercel) adaptados a la realidad comercial del sector.",
  },
];

export function AboutMe() {
  return (
    <section
      id="quien-soy"
      className="py-28 px-6 border-t border-gray-800/60 light:border-gray-200 bg-gray-900/30 light:bg-gray-50 transition-colors"
    >
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-medium tracking-wide uppercase text-gray-500">
            Quién Soy
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
            Por qué fundé Pegasus Pixels
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-700 light:border-gray-300 bg-gray-800 light:bg-gray-100">
              <Image
                src="/foto-perfil.jpg"
                alt="Alejandro González, fundador de Pegasus Pixels"
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover object-[center_30%]"
              />
            </div>

            <div>
              <p className="text-gray-300 light:text-gray-700 leading-relaxed mb-4">
                Fundé Pegasus Pixels con un objetivo claro: eliminar la
                brecha entre las operaciones reales de cada sector y el
                software empresarial disponible en el mercado. Demasiadas
                organizaciones operan con sistemas rígidos que obligan a sus
                equipos a adaptarse a limitaciones tecnológicas, en lugar de
                optimizar sus flujos de trabajo.
              </p>

              <p className="text-gray-300 light:text-gray-700 leading-relaxed mb-4">
                La propuesta se sustenta en tres pilares operativos:
              </p>

              <ul className="space-y-4 mb-6">
                {PILLARS.map((pillar) => (
                  <li
                    key={pillar.title}
                    className="text-gray-300 light:text-gray-700 leading-relaxed"
                  >
                    <strong className="text-white light:text-gray-900 font-bold">
                      {pillar.title}:
                    </strong>{" "}
                    {pillar.description}
                  </li>
                ))}
              </ul>

              <p className="text-gray-300 light:text-gray-700 leading-relaxed mb-8">
                El propósito es actuar como socio técnico permanente,
                asegurando una operación rápida, segura y escalable.
              </p>

              <div className="border-t border-gray-800 light:border-gray-200 pt-6">
                <p className="text-white light:text-gray-900 font-bold">
                  Alejandro González
                </p>
                <p className="text-gray-500 text-sm">
                  Fundador de Pegasus Pixels
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
