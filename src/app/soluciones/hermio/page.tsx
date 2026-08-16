import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Hermio — Infraestructura Digital para Restaurantes y Delivery | Pegasus Pixels",
  description:
    "Convierta su menú en una herramienta de ventas automatizada: pedidos estructurados sin errores, gestión de menú en tiempo real y remarketing directo por WhatsApp.",
};

const VENTAJAS_OPERATIVAS = [
  {
    title: "Pedidos estructurados y sin errores",
    description:
      "El cliente navega por su menú, selecciona platos, elige variantes (términos de cocción, aderezos, tamaños) y añade instrucciones especiales directamente en la plataforma. Usted recibe un mensaje formateado y claro, eliminando las confusiones típicas de la comunicación verbal.",
  },
  {
    title: "Gestión dinámica del menú en tiempo real",
    description:
      "¿Se agotó un ingrediente? ¿Un plato está fuera de temporada? Suspenda, active o elimine ítems de su menú al instante desde su panel de control. El cliente siempre verá una oferta actualizada, evitando frustraciones y pedidos imposibles de cumplir.",
  },
  {
    title: "Eficiencia operativa y ahorro de tiempo",
    description:
      "Olvídese de perder minutos valiosos tomando pedidos por teléfono o intentando descifrar notas de voz. Hermio agiliza todo el proceso, permitiendo que su personal se enfoque exclusivamente en la preparación y la calidad del servicio.",
  },
  {
    title: "Trazabilidad y registro de ventas",
    description:
      "Cada pedido queda documentado. Usted mantiene un historial claro de lo que se solicitó, lo que facilita la conciliación de cuentas, el control de caja y la organización de los despachos.",
  },
  {
    title: "Comunicación fluida y humana",
    description:
      "Al utilizar WhatsApp como canal de entrega, Hermio combina la eficiencia de un sistema estructurado con la flexibilidad de un chat directo. Si hay una duda o se necesita ajustar un detalle, la conversación ya está abierta y lista para gestionarse.",
  },
  {
    title: "Base de datos propia y remarketing",
    description:
      "Cada cliente que utiliza Hermio entra en contacto directo con usted a través de WhatsApp. Esto le permite construir su propia base de datos, enviar promociones personalizadas, anunciar nuevos platos y fidelizar a sus comensales con un solo clic.",
  },
  {
    title: "Integración de pagos ágil",
    description:
      "Una vez recibido el pedido estructurado, usted puede responder instantáneamente con el enlace de pago o coordinar el cobro, reduciendo los tiempos de cierre de venta al mínimo.",
  },
];

const URGENCY_POINTS = [
  {
    title: "Profesionalización de la marca",
    description:
      "Una carta digital navegable transmite una imagen de modernidad y orden que eleva de inmediato el valor percibido de su propuesta gastronómica frente a la competencia.",
  },
  {
    title: "Eliminación de fricciones",
    description:
      "El cliente moderno prefiere no llamar ni complicarse. Hermio le ofrece un entorno visual limpio donde puede decidir sin presiones, lo que se traduce en un mayor ticket promedio y cero abandono de compra.",
  },
  {
    title: "Escalabilidad total",
    description:
      "Ya sea que su volumen de pedidos sea alto o incipiente, Hermio escala con su negocio. Mantenga su operación bajo control sin necesidad de saturar las líneas telefónicas ni contratar personal exclusivo para atención de llamadas.",
  },
];

export default function HermioPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#0f0703] light:bg-white text-white light:text-gray-900 transition-colors">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-orange-400/30 blur-[110px]"
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
            Hermio
          </h1>

          <p className="text-2xl md:text-3xl font-normal tracking-[-0.02em] leading-snug mb-6 text-gray-300 light:text-gray-700">
            Infraestructura Digital para Restaurantes y Delivery
          </p>

          <p className="text-lg text-gray-300 light:text-gray-600 max-w-2xl leading-relaxed mb-4">
            El sector gastronómico no puede permitirse la ineficiencia de los
            pedidos tomados por teléfono o chats desorganizados. Hermio
            transforma su menú en una herramienta de ventas automatizada,
            permitiendo que sus clientes armen pedidos estructurados y
            precisos que llegan directamente a su WhatsApp, listos para ser
            procesados.
          </p>

          <p className="text-lg text-white light:text-gray-900 font-bold max-w-2xl leading-relaxed">
            Es la solución definitiva para eliminar el caos en la cocina y
            optimizar la experiencia de compra.
          </p>
        </Reveal>

        {/* Hero image */}
        <Reveal className="relative max-w-[960px] mx-auto mt-12">
          <div className="relative aspect-square sm:aspect-video w-full overflow-hidden rounded-2xl border border-orange-500/30 light:border-gray-200">
            <Image
              src="/images_soluciones/Hermio.png"
              alt="Restaurante gestionando pedidos con Hermio"
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
              La hostelería moderna exige inmediatez y precisión. Los
              sistemas tradicionales de toma de pedidos son vulnerables a
              errores humanos, fatiga del personal y pérdida de información
              crítica que termina costando dinero y clientes.
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
            ¿Su restaurante necesita dar el siguiente salto?
          </h2>
          <p className="text-gray-300 light:text-gray-600 text-lg mb-10">
            Deje atrás las llamadas perdidas y las notas confusas en la
            cocina. Lleve el control absoluto de sus pedidos y de su
            relación con cada cliente.
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
