import type { Metadata } from "next";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Dealio — Infraestructura para Concesionarias de Alto Rendimiento | Pegasus Pixels",
  description:
    "Ecosistema operativo diseñado para el sector automotriz: control de inventario en tiempo real, captura total de leads y herramientas móviles para el equipo de ventas.",
};

const CAPABILITIES = [
  {
    title: "Publicación y Control de Inventario",
    description:
      "Gestión centralizada de stock en tiempo real, respaldada por una arquitectura basada en roles (Owner, Manager, Sales Person).",
  },
  {
    title: "Captura Total de Leads",
    description:
      "Canalización automatizada de consultas y prospectos para asegurar un seguimiento impecable, evitando que se pierda ninguna oportunidad comercial.",
  },
  {
    title: "Herramientas Móviles de Bolsillo",
    description:
      "Interfaz optimizada (Mobile-First) para que el equipo de ventas consulte especificaciones y gestione negociaciones directamente desde el celular o tablet mientras caminan el salón.",
  },
];

const WALKTHROUGH = [
  {
    number: "1",
    title: "Gestión de Stock en Tiempo Real",
    points: [
      {
        title: "Control Operativo Total",
        description:
          "Permite al gerente supervisar las unidades disponibles, el estado de preparación de cada vehículo y los costos asociados con absoluta precisión.",
      },
      {
        title: "Ficha Técnica Dinámica",
        description:
          "Ofrece al cliente catálogos de alto rendimiento con especificaciones técnicas claras y galerías fotográficas profesionales.",
      },
    ],
  },
  {
    number: "2",
    title: "Seguimiento Comercial Inteligente",
    points: [
      {
        title: "Cero Oportunidades Perdidas",
        description:
          "El sistema centraliza y asigna automáticamente cada consulta entrante al vendedor correspondiente.",
      },
      {
        title: "Trazabilidad Operativa",
        description:
          "Monitoreo en tiempo real del estado de cada negociación para eliminar la fricción administrativa y acelerar los cierres.",
      },
    ],
  },
];

const ADVANTAGES = [
  {
    title: "Eficiencia Extrema",
    description:
      "Automatización de procesos administrativos repetitivos para que la operación se mueva con agilidad.",
  },
  {
    title: "Ahorro de Tiempo Crítico",
    description:
      "Reducción drástica en los tiempos de respuesta y en la burocracia de cada trámite comercial.",
  },
  {
    title: "Profesionalismo Tecnológico",
    description:
      "Proyecta una imagen corporativa superior que respalda la confianza del comprador desde el primer contacto digital.",
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
            Infraestructura digital para concesionarias de alto rendimiento
          </h1>

          <p className="text-lg text-gray-300 light:text-gray-600 max-w-2xl mx-auto leading-relaxed">
            No es un sitio web estático ni un software genérico. Dealio es un
            ecosistema operativo diseñado específicamente para el sector
            automotriz, conectando su inventario y su equipo comercial bajo
            una infraestructura rápida, segura y a la medida de su negocio.
          </p>
        </Reveal>
      </section>

      {/* Hero image (the only image placeholder on this page) */}
      <section className="px-6 pb-20">
        <Reveal className="max-w-[1100px] mx-auto">
          <ImagePlaceholder caption="Mockup de alta fidelidad mostrando la interfaz de Dealio en un dispositivo móvil y de escritorio dentro de un showroom moderno" />
        </Reveal>
      </section>

      {/* Capacidades Operativas Principales */}
      <section className="py-24 px-6 border-t border-blue-800/60 light:border-gray-200 bg-blue-900/20 light:bg-gray-50 transition-colors">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
              Capacidades Operativas Principales
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPABILITIES.map(({ title, description }, index) => (
              <Reveal key={title} delay={index * 0.1} className="h-full">
                <div className="relative h-full overflow-hidden bg-blue-900/40 light:bg-white border border-blue-800 light:border-gray-200 p-8 rounded-2xl">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
                    aria-hidden="true"
                  />
                  <h3 className="relative text-lg font-bold text-white light:text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="relative text-gray-300 light:text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recorrido Funcional y de Pantallas */}
      <section className="py-24 px-6 border-t border-blue-800/60 light:border-gray-200 transition-colors">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
              Recorrido Funcional y de Pantallas
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {WALKTHROUGH.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.15}>
                <h3 className="text-xl font-normal text-white light:text-gray-900 mb-6">
                  {section.number}. {section.title}
                </h3>
                <ul className="space-y-6">
                  {section.points.map((point) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-24 px-6 border-t border-blue-800/60 light:border-gray-200 bg-blue-900/20 light:bg-gray-50 transition-colors">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
              Ventajas Competitivas
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADVANTAGES.map(({ title, description }, index) => (
              <Reveal key={title} delay={index * 0.1} className="h-full">
                <div className="relative h-full overflow-hidden bg-blue-900/40 light:bg-white border border-blue-800 light:border-gray-200 p-8 rounded-2xl">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
                    aria-hidden="true"
                  />
                  <h3 className="relative text-lg font-bold text-white light:text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="relative text-gray-300 light:text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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

          <div className="mt-12 border-t border-blue-800/60 light:border-gray-200 pt-8">
            <p className="text-white light:text-gray-900 font-bold">
              Alejandro González
            </p>
            <p className="text-gray-500 text-sm">Fundador de Pegasus Pixels</p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
