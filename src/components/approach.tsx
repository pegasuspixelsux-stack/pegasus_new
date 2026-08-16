import { Reveal } from "@/components/reveal";

export function Approach() {
  return (
    <section
      id="enfoque"
      className="py-28 px-6 border-t border-gray-800/60 light:border-gray-200 transition-colors"
    >
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="max-w-[960px] mx-auto text-center">
          <span className="text-xs font-medium tracking-wide uppercase text-gray-500">
            Enfoque
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] mb-10 text-white light:text-gray-900">
            Arquitectura tecnológica para negocios en pleno crecimiento
          </h2>
          <div className="text-left space-y-6">
            <p className="text-gray-300 light:text-gray-700 leading-relaxed">
              <strong className="text-white light:text-gray-900 font-bold">
                El Enfoque:
              </strong>{" "}
              Trabajamos con empresas que ya están generando movimiento en el
              mundo digital, pero necesitan mayor eficiencia, procesos claros
              y sistemas robustos para concretar más ventas.
            </p>
            <p className="text-gray-300 light:text-gray-700 leading-relaxed">
              <strong className="text-white light:text-gray-900 font-bold">
                El Resultado:
              </strong>{" "}
              Diseñamos el puente operativo que conecta tu tráfico con un
              flujo de trabajo ordenado, facilitando la labor de tu equipo y
              maximizando el rédito de cada gestión comercial.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
