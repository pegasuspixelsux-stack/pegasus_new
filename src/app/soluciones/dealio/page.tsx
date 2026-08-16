import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

export default function DealioPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#040a1a] light:bg-white text-white light:text-gray-900 transition-colors">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-sky-300/40 blur-[110px]"
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
            Dealio
          </h1>

          <p className="text-2xl md:text-3xl font-normal tracking-[-0.02em] leading-snug mb-6 text-gray-300 light:text-gray-700">
            Infraestructura digital para concesionarias de alto rendimiento
          </p>

          <p className="text-lg text-gray-300 light:text-gray-600 max-w-2xl leading-relaxed">
            No es un sitio web estático ni un software genérico. Dealio es un
            ecosistema operativo diseñado específicamente para el sector
            automotriz, conectando su inventario y su equipo comercial bajo
            una infraestructura rápida, segura y a la medida de su negocio.
          </p>
        </Reveal>

        {/* Hero image */}
        <Reveal className="relative max-w-[960px] mx-auto mt-12">
          <div className="relative aspect-square sm:aspect-video w-full overflow-hidden rounded-2xl border border-blue-800/60 light:border-gray-200">
            <Image
              src="/images_dealio/consesionaria_3.png"
              alt="Showroom de concesionaria equipado con Dealio"
              fill
              sizes="(min-width: 960px) 960px, 100vw"
              quality={90}
              priority
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Capacidades Operativas Principales */}
      <section className="py-24 px-6 transition-colors">
        <div className="max-w-[960px] mx-auto">
          <Reveal className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
              Capacidades Operativas Principales
            </h2>
          </Reveal>

          <div className="space-y-10">
            {CAPABILITIES.map(({ title, description }, index) => (
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

      {/* Recorrido Funcional y de Pantallas */}
      <section className="py-24 px-6 transition-colors">
        <div className="max-w-[960px] mx-auto">
          <Reveal className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
              Recorrido Funcional y de Pantallas
            </h2>
          </Reveal>

          <div className="space-y-12">
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
      <section className="py-24 px-6 transition-colors">
        <div className="max-w-[960px] mx-auto">
          <Reveal className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
              Ventajas Competitivas
            </h2>
          </Reveal>

          <div className="space-y-10">
            {ADVANTAGES.map(({ title, description }, index) => (
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

      {/* Closing CTA */}
      <section className="py-28 px-6 transition-colors">
        <Reveal className="max-w-[960px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] mb-4 text-white light:text-gray-900">
            ¿Su concesionaria necesita dar el siguiente salto?
          </h2>
          <p className="text-gray-300 light:text-gray-600 text-lg mb-10">
            Deje atrás el caos de los chats sueltos y las planillas
            desconectadas. Lleve el control absoluto de su stock y de su
            equipo comercial.
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
