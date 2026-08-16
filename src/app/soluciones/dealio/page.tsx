import type { Metadata } from "next";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Dealio — Infraestructura para el Negocio Automotriz | Pegasus Pixels",
  description:
    "Inventario en tiempo real, captura total de leads, precalificación de trade-in y herramientas móviles para el equipo de ventas. Dealio es la infraestructura de Pegasus Pixels para concesionarias.",
};

const FEATURES = [
  {
    title: "Publicación y Control de Inventario",
    imageCaption: "Panel de gestión de stock y detalle de vehículos",
    points: [
      {
        title: "Control Operativo Total",
        description:
          "Arquitectura basada en roles (Owner, Manager, Sales Person) para gestionar el inventario en tiempo real.",
      },
      {
        title: "Ficha Técnica Detallada",
        description:
          "Catálogo digital de alto rendimiento con especificaciones claras y galerías fotográficas profesionales para el cliente final.",
      },
    ],
  },
  {
    title: "Captura Total de Leads",
    imageCaption: "Vista de bandeja de entrada y asignación de prospectos",
    points: [
      {
        title: "Cero Oportunidades Perdidas",
        description:
          "Canalización automática de consultas para asegurar un seguimiento impecable de cada cliente.",
      },
      {
        title: "Supervisión en Tiempo Real",
        description:
          "Asignación inteligente de prospectos para que el equipo comercial responda al instante.",
      },
    ],
  },
  {
    title: "Precalificación y Tasación Remota (Trade-In)",
    imageCaption: "Formulario de carga de documentación y fotos para tasación",
    points: [
      {
        title: "Precalificación Documental",
        description:
          "Canal seguro para que el cliente cargue la documentación inicial y agilice la evaluación crediticia.",
      },
      {
        title: "Tasación de Vehículos",
        description:
          "Sección dedicada para recibir fotografías y detalles del vehículo actual del cliente antes de coordinar la visita al salón.",
      },
    ],
  },
  {
    title: "Herramientas de Bolsillo para el Vendedor",
    imageCaption: "Interfaz móvil optimizada para uso en el salón de ventas",
    points: [
      {
        title: "Mobile-First",
        description:
          "Interfaz ligera y rápida para que los vendedores consulten stock y presenten opciones desde el celular o tablet mientras caminan el salón.",
      },
      {
        title: "Ahorro de Tiempo",
        description:
          "Registro de interacciones en segundos para enfocar la energía en el cierre de la venta.",
      },
    ],
  },
];

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-sky-500/30 light:border-sky-300 bg-blue-900/20 light:bg-gray-50 p-6 text-center">
      <div className="flex flex-col items-center gap-3 text-gray-400 light:text-gray-500">
        <ImageIcon size={28} strokeWidth={1.5} />
        <span className="text-xs uppercase tracking-wide">{caption}</span>
      </div>
    </div>
  );
}

export default function DealioPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#040a1a] light:bg-white text-white light:text-gray-900 transition-colors">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-sky-300/40 blur-[110px]"
          aria-hidden="true"
        />

        <Reveal className="relative max-w-[1100px] mx-auto text-center">
          <Link
            href="/#soluciones"
            className="text-sm text-gray-300 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors"
          >
            ← Volver a Soluciones
          </Link>

          <span className="mt-8 mb-4 block text-xs font-medium tracking-wide uppercase text-gray-400 light:text-gray-600">
            Dealio
          </span>

          <h1 className="text-4xl sm2:text-5xl md:text-6xl font-normal tracking-[-0.04em] leading-[1.15] mb-6 text-white light:text-gray-900">
            Diseñado para el Negocio Automotriz
          </h1>

          <p className="text-lg text-gray-300 light:text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Una infraestructura de alta velocidad desarrollada para
            concesionarias que exigen control total, eficiencia operativa y
            cero fricción comercial.
          </p>
        </Reveal>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-20">
        <Reveal className="max-w-[1100px] mx-auto">
          <ImagePlaceholder caption="Mockup principal de la plataforma Dealio en dispositivos móviles y de escritorio" />
        </Reveal>
      </section>

      {/* Feature sections */}
      {FEATURES.map((feature, index) => {
        const imageOnRight = index % 2 === 1;
        return (
          <section
            key={feature.title}
            className={`py-24 px-6 border-t border-blue-800/60 light:border-gray-200 transition-colors ${
              index % 2 === 0 ? "bg-blue-900/20 light:bg-gray-50" : ""
            }`}
          >
            <div className="max-w-[1100px] mx-auto">
              <Reveal className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
                  {feature.title}
                </h2>
              </Reveal>

              <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className={imageOnRight ? "md:order-2" : ""}>
                  <ImagePlaceholder caption={feature.imageCaption} />
                </div>

                <div>
                  <ul className="space-y-6">
                    {feature.points.map((point) => (
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
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Closing CTA */}
      <section className="py-28 px-6 border-t border-blue-800/60 light:border-gray-200 transition-colors">
        <Reveal className="max-w-[960px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] mb-10 text-white light:text-gray-900">
            ¿Su concesionaria necesita dar el siguiente salto?
          </h2>
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
