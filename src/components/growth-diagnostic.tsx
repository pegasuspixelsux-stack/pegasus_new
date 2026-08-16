import { Reveal } from "@/components/reveal";

const POINTS = [
  {
    title: "Diagnóstico Operativo",
    description:
      "Analizamos en profundidad sus flujos de trabajo actuales para identificar cuellos de botella críticos, fricciones administrativas y oportunidades reales de mejora en la eficiencia.",
  },
  {
    title: "Estrategia e Infraestructura",
    description:
      "Diseñamos, construimos y desplegamos sistemas robustos y a la medida de su sector, asegurando que cada componente tecnológico trabaje para proteger sus márgenes y escalar su negocio.",
  },
];

export function GrowthDiagnostic() {
  return (
    <section
      id="diagnostico"
      className="py-28 px-6 border-t border-gray-800/60 light:border-gray-200 transition-colors"
    >
      <div className="max-w-[960px] mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-medium tracking-wide uppercase text-gray-500">
            Diagnóstico
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
            ¿Su operación necesita dar el siguiente salto?
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          <div>
            <h3 className="text-xl font-normal text-white light:text-gray-900 mb-4">
              ¿Su empresa opera con sistemas que limitan su crecimiento?
            </h3>
            <p className="text-gray-300 light:text-gray-700 leading-relaxed">
              Si su organización exige estándares más altos, procesos
              optimizados y una infraestructura tecnológica que realmente
              responda a las exigencias de su industria, pero no sabe por
              dónde empezar, podemos evaluar su caso.
            </p>
          </div>

          <div>
            <ul className="space-y-6 mb-8">
              {POINTS.map((point) => (
                <li
                  key={point.title}
                  className="text-gray-300 light:text-gray-700 leading-relaxed"
                >
                  <strong className="text-white light:text-gray-900 font-bold">
                    {point.title}:
                  </strong>{" "}
                  {point.description}
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-semibold transition-all duration-300 px-8 py-4 text-base bg-white text-black light:bg-gray-900 light:text-white hover:scale-105 hover:bg-black hover:text-white hover:border-white light:hover:bg-white light:hover:text-gray-900 light:hover:border-gray-900"
              >
                Solicitar Auditoría y Asesoramiento
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
