import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeftRight,
  Boxes,
  Filter,
  Gauge,
  LineChart,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { DealioLeadForm } from "./dealio-lead-form";

export const metadata: Metadata = {
  title: "Dealio — Sistema para Automotoras | Pegasus Pixels",
  description:
    "Digitaliza tu stock, centraliza leads y acelera la venta de vehículos en Maldonado y Punta del Este con Dealio.",
};

const PAIN_POINTS = [
  {
    icon: AlertTriangle,
    title: "El caos de los leads",
    description:
      "Clientes que escriben por MercadoLibre, Instagram y WhatsApp. Sin un embudo claro, las consultas se pierden y los vendedores no hacen seguimiento.",
  },
  {
    icon: TrendingDown,
    title: "Stock desactualizado",
    description:
      "Autos que ya se señaron o vendieron pero siguen figurando online, o vehículos nuevos que tardan días en subirse a la web.",
  },
  {
    icon: Boxes,
    title: "Pérdida de margen en remozamiento",
    description:
      "Costos ocultos de detailing, chapa, pintura y mecánica ligera que no se registran por unidad, comiéndote la rentabilidad de la reventa.",
  },
];

const FEATURES = [
  {
    icon: Boxes,
    title: "Inventario Centralizado y Sincronizado",
    description:
      "Cada vehículo que entra al salón se registra una sola vez con su ficha técnica, costos, fotos y estado de documentación. Se publica automáticamente en tu web sin depender de portales lentos.",
  },
  {
    icon: ArrowLeftRight,
    title: "Gestión de Permutas y Tasaciones",
    description:
      "Registra de forma limpia los vehículos tomados como parte de pago, controlando su valuación real y el estado de reacondicionamiento necesario antes de ponerlos en piso.",
  },
  {
    icon: Filter,
    title: "Embudo de Ventas para Vendedores",
    description:
      "Cada lead de WhatsApp o web cae directo en el pipeline del equipo de ventas. Se sabe exactamente qué asesor tiene asignado cada cliente y en qué etapa de la negociación está.",
  },
];

const RESULTS = [
  {
    icon: Gauge,
    title: "Rotación de stock más rápida",
    description:
      "Publicá un vehículo en minutos, no días. Menos tiempo en el salón significa menos capital inmovilizado.",
  },
  {
    icon: Users,
    title: "Cero leads perdidos",
    description:
      "Cada consulta de WhatsApp, Instagram o web cae en el pipeline correcto, con un responsable asignado desde el primer mensaje.",
  },
  {
    icon: ShieldCheck,
    title: "Márgenes protegidos",
    description:
      "Costos de reacondicionamiento registrados por unidad: sabés exactamente cuánto te cuesta cada vehículo antes de venderlo.",
  },
  {
    icon: LineChart,
    title: "Decisiones con datos",
    description:
      "Visibilidad total de inventario, permutas y pipeline de ventas en tiempo real, sin depender de planillas dispersas.",
  },
  {
    icon: TrendingUp,
    title: "Equipo de ventas más productivo",
    description:
      "Tus vendedores saben qué hacer con cada lead, sin confusión ni consultas que se caen entre las grietas.",
  },
  {
    icon: Boxes,
    title: "Imagen profesional",
    description:
      "Tu salón se ve —y opera— como una marca seria: ficha técnica prolija, fotos consistentes y respuestas rápidas.",
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
    <main className="flex flex-col flex-1 min-h-screen bg-black light:bg-white text-white light:text-gray-900 transition-colors">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-sky-300/40 blur-[110px]"
          aria-hidden="true"
        />

        <Reveal className="relative max-w-[960px] mx-auto text-center">
          <Link
            href="/#soluciones"
            className="text-sm text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors"
          >
            ← Volver a Soluciones
          </Link>

          <span className="mt-8 mb-4 block text-xs font-medium tracking-wide uppercase text-gray-500">
            Dealio · Sistema para Automotoras
          </span>

          <h1 className="text-4xl sm2:text-5xl md:text-6xl font-normal tracking-[-0.04em] leading-[1.05] mb-6 text-white light:text-gray-900">
            Digitaliza tu stock, centraliza leads y acelera la venta de
            vehículos en Maldonado
          </h1>

          <p className="text-lg text-gray-400 light:text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Olvídate del Excel y de perder consultas de WhatsApp. Dealio es el
            sistema de gestión e inventario web diseñado específicamente para
            automotoras multimarca que quieren profesionalizar su salón,
            controlar el estado de sus unidades y vender más rápido.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-semibold transition-all duration-300 px-8 py-4 text-base bg-white text-black light:bg-gray-900 light:text-white hover:scale-105 hover:bg-black hover:text-white hover:border-white light:hover:bg-white light:hover:text-gray-900 light:hover:border-gray-900"
            >
              Solicitar Auditoría de Stock (Gratis)
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-gray-700 light:border-gray-300 font-semibold transition-all duration-300 px-8 py-4 text-base text-white light:text-gray-900 hover:border-gray-500 light:hover:border-gray-500"
            >
              Ver Demo en Vivo
            </a>
          </div>
        </Reveal>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-20">
        <Reveal className="relative max-w-[1100px] mx-auto">
          <div className="relative h-64 md:h-[28rem] w-full overflow-hidden rounded-2xl border border-sky-500/30 light:border-sky-300">
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

      {/* Pain points */}
      <section className="py-20 px-6 border-t border-gray-800/60 light:border-gray-200 bg-gray-900/30 light:bg-gray-50 transition-colors">
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-white light:text-gray-900">
              El problema de vender autos hoy con herramientas improvisadas
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAIN_POINTS.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.1}>
                <div className="bg-gray-900/80 light:bg-white border border-gray-800 light:border-gray-200 p-8 rounded-2xl h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-red-500/30 bg-red-500/10 text-red-400 light:text-red-600">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-white light:text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="como-funciona" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-white light:text-gray-900">
              Una plataforma robusta, diseñada para operar sin fricción
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.1}>
                <div className="bg-gray-900/30 light:bg-gray-50 border border-gray-800 light:border-gray-200 p-8 rounded-2xl h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 light:border-gray-300 bg-gray-800/50 light:bg-gray-100 text-white light:text-gray-900">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-white light:text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results & efficiency */}
      <section className="py-20 px-6 border-t border-gray-800/60 light:border-gray-200 bg-gray-900/30 light:bg-gray-50 transition-colors">
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-medium tracking-wide uppercase text-gray-500">
              Resultados
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-white light:text-gray-900">
              Así cambia la eficiencia de tu concesionaria
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESULTS.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.1}>
                <div className="bg-gray-900/80 light:bg-white border border-gray-800 light:border-gray-200 p-8 rounded-2xl h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-sky-400/30 bg-sky-400/10 text-sky-400 light:text-sky-600">
                    <Icon size={18} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-white light:text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local approach */}
      <section className="py-20 px-6">
        <div className="max-w-[960px] mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] mb-4 text-white light:text-gray-900">
              No vendemos software genérico. Implementamos soluciones en tu
              local.
            </h2>
            <p className="text-gray-400 light:text-gray-600 text-lg">
              Sabemos cómo se mueve el mercado automotor en la zona esteña. No
              te dejamos solo con un usuario y contraseña.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.15}>
                <div>
                  <span className="text-sm font-mono text-sky-400 light:text-sky-600">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white light:text-gray-900 mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
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
        className="py-20 px-6 border-t border-gray-800/60 light:border-gray-200 scroll-mt-24 transition-colors"
      >
        <Reveal className="max-w-3xl mx-auto bg-gray-900/90 light:bg-gray-50 border border-gray-800 light:border-gray-200 p-8 md:p-12 rounded-3xl shadow-2xl light:shadow-gray-300/40">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-normal tracking-[-0.04em] leading-[0.95] mb-3 text-white light:text-gray-900">
              ¿Listo para acelerar la rotación de tu salón?
            </h2>
            <p className="text-gray-400 light:text-gray-600 text-sm md:text-base">
              Hablemos de cómo digitalizar tu inventario esta misma semana.
            </p>
          </div>

          <DealioLeadForm />
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
