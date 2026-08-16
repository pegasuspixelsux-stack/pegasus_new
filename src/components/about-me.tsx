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

const BENEFITS = [
  {
    title: "Eliminación del caos operativo",
    description:
      "Transformo tus chats de WhatsApp desorganizados y tus planillas sueltas en un sistema centralizado donde ningún cliente potencial se pierde en el camino.",
  },
  {
    title: "Rentabilidad real en publicidad",
    description:
      "Si gastas dinero en campañas de redes sociales, me aseguro de que cada peso de tráfico tenga un embudo técnico detrás capaz de convertirlo en una visita al salón y en una venta cerrada.",
  },
  {
    title: "Control gerencial absoluto",
    description:
      "Te doy tableros de rendimiento claros para que dejes de adivinar qué hace tu equipo de ventas y sepas exactamente dónde se cierran los tratos.",
  },
];

export function AboutMe() {
  return (
    <section
      id="quien-soy"
      className="py-28 px-6 border-t border-gray-800/60 light:border-gray-200 bg-gray-900/30 light:bg-gray-50 transition-colors"
    >
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-center mb-16 text-white light:text-gray-900">
            Quién está detrás de Pegasus Pixels
            <br className="hidden sm:block" />
            <span className="text-gray-500">(Y por qué te importa)</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="max-w-[960px] mx-auto">
          <div>
            <div className="float-none w-full mb-6 sm:float-left sm:w-1/6 sm:mx-0 sm:mr-8 sm:mb-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-700 light:border-gray-300 bg-gray-800 light:bg-gray-100">
                <Image
                  src="/foto-perfil.jpg"
                  alt="Quién está detrás de Pegasus Pixels"
                  fill
                  sizes="(min-width: 640px) 480px, 100vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>

            <p className="text-gray-300 light:text-gray-700 leading-relaxed mb-4">
              No te voy a aburrir con una biografía ni con los años que llevo
              escribiendo código. A ti no te importa mi historia: te importa
              tu negocio, tu inventario y cuántos autos de más vas a vender
              este mes.
            </p>
            <p className="text-gray-300 light:text-gray-700 leading-relaxed mb-4">
              Aun así, necesitas saber quién maneja la tecnología que sostiene
              tu operación. Mi rol no es ser un proveedor distante, sino tu
              socio tecnológico de confianza.
            </p>
            <p className="text-gray-300 light:text-gray-700 leading-relaxed mb-6">
              Cuando trabajas conmigo, obtienes ventajas directas y tangibles
              para tu empresa:
            </p>

            <ul className="space-y-4 mb-6">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit.title}
                  className="text-gray-300 light:text-gray-700 leading-relaxed"
                >
                  <strong className="text-white light:text-gray-900 font-bold">
                    {benefit.title}:
                  </strong>{" "}
                  {benefit.description}
                </li>
              ))}
            </ul>

            <p className="text-gray-300 light:text-gray-700 leading-relaxed">
              Mi objetivo no es llenarte de jerga técnica. Es poner a
              funcionar un sistema ultrarrápido y robusto que trabaje para ti,
              proteja tu margen y haga que tu inversión en tecnología se pague
              sola desde el primer mes.
            </p>
          </div>

          <div className="clear-both pt-8 flex flex-wrap gap-2">
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
    </section>
  );
}
