import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Database,
  Eye,
  Handshake,
  LineChart,
  Megaphone,
  RefreshCw,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { DealioLeadForm } from "./dealio-lead-form";

export const metadata: Metadata = {
  title: "Dealio — El Sistema Operativo para tu Automotora | Pegasus Pixels",
  description:
    "Convierte el tráfico de redes sociales en ventas reales sin perder un solo lead. Inventario en tiempo real, pipeline comercial y tablero gerencial para tu automotora.",
};

const FLOW = [
  {
    number: "01",
    icon: Megaphone,
    title: "Módulo de Adquisición (Redes Sociales)",
    description:
      "El tráfico generado por tus campañas de marketing y anuncios en redes desemboca en un sistema diseñado para no dejar escapar ningún interesado.",
  },
  {
    number: "02",
    icon: Database,
    title: "El Hub Central (Dealio)",
    description:
      "Funciona como el centro neurálgico donde reside todo el inventario actualizado en tiempo real y donde los leads de WhatsApp, web e Instagram se ordenan de forma automática.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "El Pipeline de Seguimiento y Cierre",
    description:
      "Un proceso estructurado donde el lead se captura, se contesta de inmediato con fichas técnicas automáticas, y se lleva paso a paso por las etapas de seguimiento, negociación y resolución de objeciones (ya sea evaluar una permuta o coordinar la entrega).",
  },
];

const FEATURES = [
  {
    icon: RefreshCw,
    title: "Inventario en Tiempo Real",
    description:
      "Actualiza precios, estado y disponibilidad de las unidades al instante. Evita que un cliente consulte por un vehículo ya señado.",
  },
  {
    icon: Zap,
    title: "Captura y Respuesta Inmediata",
    description:
      "Facilita el primer contacto con el interesado, entregando especificaciones técnicas precisas y registrando sus datos para ingresarlo directo al flujo de trabajo del equipo de ventas.",
  },
  {
    icon: Handshake,
    title: "Gestión de Objeciones en el Terreno",
    description:
      "Los vendedores cuentan con el historial y las herramientas para destrabar los obstáculos habituales del comprador (tasación de permutas, financiación o condiciones de entrega), ganando la confianza necesaria para cerrar el trato.",
  },
];

const DASHBOARD = [
  {
    icon: Eye,
    title: "Monitoreo de Asesores",
    description:
      "Visualiza qué leads entraron a cada vendedor, cómo es su comportamiento de seguimiento y qué tasa de conversión maneja cada integrante del equipo.",
  },
  {
    icon: LineChart,
    title: "Medición del Retorno de Inversión (ROI)",
    description:
      "Permite medir exactamente cuántos contactos genera cada peso invertido en marketing, qué porcentaje de esos contactos se aprovechan y cuáles terminan convirtiéndose en una venta real.",
  },
  {
    icon: Target,
    title: "Optimización Continua",
    description:
      "Detecta dónde se caen los prospectos en el embudo comercial para ajustar la estrategia y lograr un aprovechamiento máximo de cada consulta.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico sin compromiso",
    description:
      "Analizamos cómo gestionas tu stock y tus consultas actuales, sin costo ni compromiso.",
  },
  {
    number: "02",
    title: "Configuración a medida",
    description:
      "Configuramos Dealio a la medida de tu inventario multimarca.",
  },
  {
    number: "03",
    title: "Entrenamiento en la cancha",
    description:
      'Vamos a tu salón en Maldonado o Punta del Este y entrenamos a tu equipo de ventas "en la cancha".',
  },
];

export default function DealioPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#040a1a] light:bg-white text-white light:text-gray-900 transition-colors">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-[20px] sm:px-6">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-sky-300/40 blur-[110px]"
          aria-hidden="true"
        />

        <Reveal className="relative max-w-[1200px] mx-auto text-center">
          <Link
            href="/#soluciones"
            className="text-sm text-gray-300 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors"
          >
            ← Volver a Soluciones
          </Link>

          <span className="mt-8 mb-4 block text-xs font-medium tracking-wide uppercase text-gray-400 light:text-gray-600">
            Dealio · El Sistema Operativo para tu Automotora
          </span>

          <h1 className="text-4xl sm2:text-5xl md:text-6xl font-normal tracking-[-0.04em] leading-[1.05] mb-6 text-white light:text-gray-900 sm:bg-gradient-to-b sm:from-blue-500 sm:via-blue-300 sm:to-white sm:bg-clip-text sm:text-transparent sm:light:from-blue-700 sm:light:via-blue-500 sm:light:to-gray-900">
            Digitaliza tu stock, centraliza leads y acelera la venta de tus
            vehículos
            <br />
            con <span className="text-white light:text-gray-900">Dealio</span>.
          </h1>

          <p className="text-lg text-gray-300 light:text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dealio es la plataforma integral diseñada para automotoras
            multimarca que invierten en redes sociales pero pierden
            rentabilidad por un seguimiento desorganizado. Centraliza tu
            inventario en tiempo real, captura consultas al instante, guía al
            vendedor en el pipeline comercial y dale al manager el control
            total del rendimiento publicitario.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#diagnostico"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-semibold transition-all duration-300 px-8 py-5 sm:py-4 text-lg sm:text-base bg-white text-black light:bg-gray-900 light:text-white hover:scale-105 hover:bg-black hover:text-white hover:border-white light:hover:bg-white light:hover:text-gray-900 light:hover:border-gray-900"
            >
              Agenda tu Consulta
            </a>
            <a
              href="#como-funciona"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-full border border-blue-700 light:border-gray-300 font-semibold transition-all duration-300 px-8 py-5 sm:py-4 text-lg sm:text-base text-white light:text-gray-900 hover:scale-105 hover:border-blue-400 hover:bg-blue-900/40 light:hover:border-gray-500 light:hover:bg-gray-50"
            >
              Ver Demo Interactiva en Vivo
            </a>
          </div>
        </Reveal>
      </section>

      {/* Hero image */}
      <section className="px-[20px] sm:px-6 pb-20">
        <Reveal className="relative max-w-[1200px] mx-auto">
          <div className="relative aspect-square sm:aspect-video w-full overflow-hidden rounded-2xl border border-sky-500/30 light:border-sky-300">
            <Image
              src="/images_soluciones/Dealio.png"
              alt="Showroom digitalizado con Dealio"
              fill
              sizes="(min-width: 1100px) 1100px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </section>

      {/* 1. El Flujo Comercial Completo */}
      <section
        id="como-funciona"
        className="py-20 px-[20px] sm:px-6 border-t border-blue-800/60 light:border-gray-200 bg-blue-900/20 light:bg-gray-50 scroll-mt-24 transition-colors"
      >
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-medium tracking-wide uppercase text-gray-400 light:text-gray-600">
              El Flujo Comercial Completo
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-white light:text-gray-900">
              De la Red Social al Cierre
            </h2>
            <p className="mt-4 text-gray-300 light:text-gray-600 text-base">
              La venta moderna de vehículos no empieza en el salón; empieza
              en las plataformas de social media. Dealio conecta todo el
              proceso en tres etapas clave.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLOW.map(({ number, title, description }, index) => (
              <Reveal key={title} delay={index * 0.15}>
                <div className="relative overflow-hidden bg-blue-900/40 light:bg-white border border-blue-800 light:border-gray-200 p-8 rounded-2xl h-full">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
                    aria-hidden="true"
                  />
                  <span className="relative block mb-4 text-[3.5rem] font-mono font-bold leading-none text-sky-400 light:text-sky-600">
                    {number}
                  </span>
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

      {/* 2. Características Clave del Sistema */}
      <section className="py-20 px-[20px] sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-white light:text-gray-900">
              Características Clave del Sistema
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {FEATURES.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.15}>
                <div className="relative overflow-hidden bg-blue-900/20 light:bg-gray-50 border border-blue-800 light:border-gray-200 p-8 rounded-2xl h-full">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-blue-700 light:border-gray-300 bg-blue-800/50 light:bg-gray-100 text-white light:text-gray-900">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
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

      {/* 3. Tablero Gerencial y Control de Rendimiento */}
      <section className="py-20 px-[20px] sm:px-6 border-t border-blue-800/60 light:border-gray-200 bg-blue-900/20 light:bg-gray-50 transition-colors">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-medium tracking-wide uppercase text-gray-400 light:text-gray-600">
              Dashboard para Managers
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-white light:text-gray-900">
              Tablero Gerencial y Control de Rendimiento
            </h2>
            <p className="mt-4 text-gray-300 light:text-gray-600 text-base">
              El director o gerente del dealership tiene acceso a un tablero
              de control centralizado con visibilidad absoluta de toda la
              operación.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DASHBOARD.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.15}>
                <div className="relative overflow-hidden bg-blue-900/40 light:bg-white border border-blue-800 light:border-gray-200 p-8 rounded-2xl h-full">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-sky-400/30 bg-sky-400/10 text-sky-400 light:text-sky-600">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
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

      {/* Local approach */}
      <section className="py-20 px-[20px] sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="max-w-[960px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] mb-4 text-white light:text-gray-900">
              No vendemos software genérico.
              <br />
              Implementamos soluciones en tu local.
            </h2>
            <p className="text-gray-300 light:text-gray-600 text-lg">
              Sabemos cómo se mueve el mercado automotor en la zona esteña.
              <br />
              No te dejamos solo con un usuario y contraseña.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.15}>
                <div>
                  <span className="block text-[3.5rem] font-mono font-bold leading-none text-sky-400 light:text-sky-600">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white light:text-gray-900 mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 light:text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        id="diagnostico"
        className="py-20 px-[20px] sm:px-6 border-t border-blue-800/60 light:border-gray-200 scroll-mt-24 transition-colors"
      >
        <Reveal className="max-w-3xl mx-auto bg-blue-900/50 light:bg-gray-50 border border-blue-800 light:border-gray-200 p-5 md:p-12 rounded-3xl shadow-2xl light:shadow-gray-300/40">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-normal tracking-[-0.04em] leading-[1.3] sm:leading-[0.95] mb-3 text-white light:text-gray-900">
              ¿Listo para profesionalizar la gestión comercial de tu
              automotora?
            </h2>
            <p className="text-gray-300 light:text-gray-600 text-sm md:text-base">
              Dejá atrás el caos de los chats sueltos y las planillas
              desconectadas. Lleva el control absoluto de tu stock y de tus
              vendedores.
            </p>
          </div>

          <DealioLeadForm />
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
