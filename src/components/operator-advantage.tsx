import Image from "next/image";

export function OperatorAdvantage() {
  return (
    <section
      id="infraestructura"
      className="py-20 px-6 border-t border-gray-800/60 light:border-gray-200 transition-colors"
    >
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-center mb-16 bg-gradient-to-b from-white via-blue-300 to-blue-500 bg-clip-text text-transparent light:bg-none light:text-gray-900">
          ¿Qué significa tener un Socio Tecnológico?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/40 light:bg-red-50 border border-red-500/20 light:border-red-200 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-red-400 light:text-red-600 mb-4">
              El software tradicional
            </h3>
            <p className="text-gray-400 light:text-gray-600 text-sm md:text-base leading-relaxed">
              Te venden una licencia empaquetada, te dan un manual en PDF y te
              dejan solo frente al sistema y la frustración de tus empleados
              que terminan volviendo al cuaderno o al Excel.
            </p>
          </div>

          <div className="relative overflow-hidden bg-gray-900/80 light:bg-white border border-gray-700 light:border-gray-200 rounded-2xl shadow-xl shadow-black/40 light:shadow-gray-300/40">
            <span className="absolute top-4 right-4 z-10 bg-white text-black light:bg-gray-900 light:text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Recomendado
            </span>
            <div className="relative h-72 w-full">
              <Image
                src="/empresario.png"
                alt="Socio tecnológico trabajando junto a un cliente"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white light:text-gray-900 mb-4">
                Tu Socio Tecnológico (Pegasus Pixels)
              </h3>
              <p className="text-gray-300 light:text-gray-600 text-sm md:text-base leading-relaxed">
                Implemento en tu operación, testeo bajo tu ritmo de trabajo
                real, entreno a tu personal mano a mano y aseguro el
                mantenimiento técnico continuo para que nunca dejes de
                facturar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
