import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Oikos — Infraestructura Comercial para Inmobiliarias | Pegasus Pixels",
  description:
    "Motor comercial de alta velocidad para inmobiliarias: publicación instantánea de inventario, captura de prospectos sin fricción y pipeline de leads en tiempo real.",
};

const VENTAJAS_OPERATIVAS = [
  {
    title: "Publicación instantánea y control total del inventario",
    description:
      "Gestione su catálogo con agilidad quirúrgica. Suba, edite, oculte o actualice propiedades de forma inmediata desde cualquier interfaz, eliminando la fricción de los sistemas pesados y asegurando que su oferta comercial esté siempre sincronizada con la disponibilidad real del mercado.",
  },
  {
    title: "Experiencia visual superior (Páginas de video optimizadas)",
    description:
      "Incorpore páginas de video dedicadas y de carga instantánea para cada propiedad. Permita que los compradores potenciales realicen un recorrido inmersivo y detallado desde cualquier teléfono antes de coordinar la visita presencial, filtrando a los curiosos y atrayendo prospectos altamente calificados.",
  },
  {
    title: "Captura de prospectos sin fricción",
    description:
      "Implemente puntos de contacto inteligentes y formularios directos en cada listado y página de aterrizaje. Cada interacción del usuario se convierte automáticamente en una oportunidad estructurada, evitando que los datos de los interesados se pierdan en correos electrónicos dispersos o chats informales.",
  },
  {
    title: "Pipeline y alertas de leads en tiempo real",
    description:
      "Utilice un embudo comercial centralizado que categoriza visualmente cada etapa de la negociación. El sistema emite alertas instantáneas directamente a su equipo de ventas en el momento exacto en que ingresa un nuevo interesado, permitiendo una capacidad de respuesta inmediata que define el cierre de la venta.",
  },
  {
    title: "Información en el bolsillo de sus agentes",
    description:
      "Ponga la inmobiliaria entera en las manos de sus asesores. Con acceso móvil optimizado, todo el inventario, el estado de las propiedades y el historial completo de los prospectos están disponibles en tiempo real desde cualquier smartphone o tablet, garantizando que sus agentes nunca pierdan una oportunidad mientras están en la calle.",
  },
];

const URGENCY_POINTS = [
  {
    title: "Cero leads perdidos",
    description:
      "Las alertas instantáneas y el pipeline unificado garantizan una trazabilidad del 100% desde el primer clic hasta la firma de la escritura.",
  },
  {
    title: "Independencia operativa y móvil",
    description:
      "Sus asesores comerciales llevan la inmobiliaria entera en el bolsillo, pudiendo responder consultas y actualizar el estado de un cliente mientras están en la calle.",
  },
  {
    title: "Ventaja competitiva decisiva",
    description:
      "La agilidad en la gestión de listados compartidos define quién gana el mercado. Oikos le otorga esa ventaja técnica insustituible para superar a cualquier competidor tradicional.",
  },
];

export default function OikosArgusPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#0a0704] light:bg-white text-white light:text-gray-900 transition-colors">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-[#C9A876]/30 blur-[110px]"
          aria-hidden="true"
        />

        <Reveal className="relative max-w-[960px] mx-auto text-left">
          <Link
            href="/#soluciones"
            className="text-sm text-gray-300 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors"
          >
            ← Volver a Soluciones
          </Link>

          <h1 className="mt-8 text-4xl sm2:text-5xl md:text-6xl font-normal tracking-[-0.04em] leading-[1.15] mb-4 text-white light:text-gray-900">
            Oikos
          </h1>

          <p className="text-2xl md:text-3xl font-normal tracking-[-0.02em] leading-snug mb-6 text-gray-300 light:text-gray-700">
            Infraestructura Comercial para Inmobiliarias
          </p>

          <p className="text-lg text-gray-300 light:text-gray-600 max-w-2xl leading-relaxed mb-4">
            El mercado inmobiliario actual no perdona las demoras. Con
            múltiples agencias compitiendo por el mismo inventario y
            compartiendo listados de propiedades, la regla es absoluta: el
            primero que responde al cliente es el que se queda con la
            operación. Continuar operando con sistemas obsoletos, planillas
            sueltas o portales lentos significa perder comisiones todos los
            días frente a competidores más ágiles.
          </p>

          <p className="text-lg text-white light:text-gray-900 font-bold max-w-2xl leading-relaxed">
            Oikos es un motor comercial de alta velocidad diseñado
            exclusivamente para inmobiliarias que necesitan dominar la
            captura, el seguimiento y el cierre de clientes en tiempo real.
          </p>
        </Reveal>

        {/* Hero image */}
        <Reveal className="relative max-w-[960px] mx-auto mt-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#C9A876]/30 light:border-gray-200">
            <Image
              src="/images_soluciones/Oikos.png"
              alt="Propiedad de alto valor gestionada con Oikos"
              fill
              sizes="(min-width: 960px) 960px, 100vw"
              quality={90}
              priority
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Ventajas Operativas */}
      <section className="py-24 px-6 transition-colors">
        <div className="max-w-[960px] mx-auto">
          <Reveal className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
              Ventajas Operativas
            </h2>
          </Reveal>

          <div className="space-y-10">
            {VENTAJAS_OPERATIVAS.map(({ title, description }, index) => (
              <Reveal key={title} delay={index * 0.1}>
                <h3 className="text-xl font-normal text-white light:text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-300 light:text-gray-600 leading-relaxed">
                  {description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué es urgente reemplazar sus sistemas antiguos */}
      <section className="py-24 px-6 transition-colors">
        <div className="max-w-[960px] mx-auto">
          <Reveal className="text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] mb-6 text-white light:text-gray-900">
              Por qué es urgente reemplazar sus sistemas antiguos
            </h2>
            <p className="text-gray-300 light:text-gray-600 leading-relaxed">
              En el negocio inmobiliario, la velocidad de respuesta es el
              factor de conversión número uno. Los sistemas heredados son
              lentos, obligan a los agentes a depender de computadoras de
              escritorio y generan retrasos operativos fatales donde el
              cliente termina comprando con la competencia que respondió
              primero.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-6">
              {URGENCY_POINTS.map((point) => (
                <li
                  key={point.title}
                  className="text-gray-300 light:text-gray-600 leading-relaxed"
                >
                  <strong className="text-white light:text-gray-900 font-bold">
                    {point.title}:
                  </strong>{" "}
                  {point.description}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-28 px-6 transition-colors">
        <Reveal className="max-w-[960px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] mb-4 text-white light:text-gray-900">
            ¿Su inmobiliaria necesita dar el siguiente salto?
          </h2>
          <p className="text-gray-300 light:text-gray-600 text-lg mb-10">
            Deje atrás los listados desactualizados y los leads que se
            pierden en el chat. Lleve el control absoluto de su inventario y
            de su equipo de ventas.
          </p>
          <a
            href="/#contacto"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-semibold transition-all duration-300 px-8 py-4 text-base bg-white text-black light:bg-gray-900 light:text-white hover:scale-105 hover:bg-black hover:text-white hover:border-white light:hover:bg-white light:hover:text-gray-900 light:hover:border-gray-900"
          >
            Solicitar Auditoría y Asesoramiento
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
