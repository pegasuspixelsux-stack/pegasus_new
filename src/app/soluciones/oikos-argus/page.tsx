import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CircleDollarSign,
  Clock,
  Database,
  Globe,
  KeyRound,
  LayoutGrid,
  Lock,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { OikosLeadForm } from "./oikos-lead-form";

export const metadata: Metadata = {
  title: "Oikos & Argus — Infraestructura Inmobiliaria | Pegasus Pixels",
  description:
    "Unifica tu cartera, protege tus exclusivas y acelera el cierre con clientes de alto poder adquisitivo en Punta del Este, La Barra y José Ignacio.",
};

const PAIN_POINTS = [
  {
    icon: KeyRound,
    title: "Fuga de exclusividades",
    description:
      "Asesores que manejan propiedades por fuera de un sistema centralizado, generando duplicidad de datos, confusiones con colegas y pérdida de control sobre las llaves y las visitas.",
  },
  {
    icon: Globe,
    title: "Leads internacionales desatendidos",
    description:
      "Clientes de Buenos Aires, Brasil o Europa que consultan fuera de horario y reciben respuestas tarde porque el embudo de leads está desorganizado en un WhatsApp personal.",
  },
  {
    icon: CircleDollarSign,
    title: "Dependencia de portales caros",
    description:
      "Pagar fortunas mes a mes para aparecer en clasificados masivos donde tu marca se desdibuja al lado de la competencia y te cobran comisiones por cada contacto.",
  },
];

const FEATURES = [
  {
    icon: Database,
    title: "Base de Datos por Cliente (Modelo Independiente)",
    description:
      "Cada agencia opera con su propio entorno seguro en Supabase. Tus datos, contratos y fichas de propiedades de Punta del Este son 100% tuyos y privados.",
  },
  {
    icon: UserCog,
    title: "Control de Permisos y Asesores",
    description:
      "Asigna propiedades a brokers específicos, gestiona comisiones compartidas de forma transparente y lleva un registro exacto de cada interacción con inversores y compradores.",
  },
  {
    icon: LayoutGrid,
    title: "Catálogo Web Inmersivo y Ultrarrápido",
    description:
      "Una interfaz impecable optimizada para mostrar mansiones, penthouses y terrenos frente al mar, con filtros avanzados de ubicación, tipología y rango de precios que cargan de forma instantánea.",
  },
];

const RESULTS = [
  {
    icon: Clock,
    title: "Cierres más rápidos",
    description:
      "Menos fricción entre la consulta y la visita: los leads de alto valor reciben respuesta antes que la competencia.",
  },
  {
    icon: Users,
    title: "Cero leads internacionales perdidos",
    description:
      "Cada consulta desde Buenos Aires, Brasil o Europa cae en el pipeline correcto, sin depender de un WhatsApp personal.",
  },
  {
    icon: ShieldCheck,
    title: "Control total de exclusivas",
    description:
      "Sabés en todo momento quién maneja cada propiedad, sus llaves y el estado real de cada visita.",
  },
  {
    icon: Lock,
    title: "Datos 100% privados y tuyos",
    description:
      "Sin depender de portales de terceros: tu cartera, tus contratos y tu marca quedan bajo tu control.",
  },
  {
    icon: UserCog,
    title: "Equipo alineado con permisos claros",
    description:
      "Cada broker sabe qué propiedades gestiona y cómo se reparten las comisiones compartidas.",
  },
  {
    icon: Building2,
    title: "Marca protegida, sin ruido de portales",
    description:
      "Tu catálogo se muestra en tu propio sitio, con tu identidad, sin competencia al lado ni comisiones por contacto.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico sin compromiso",
    description:
      "Analizamos cómo estructurás hoy tu cartera de propiedades y tu captación de leads.",
  },
  {
    number: "02",
    title: "Migración a medida",
    description:
      "Migramos tu inventario a Oikos & Argus con dominio propio y diseño de alta gama.",
  },
  {
    number: "03",
    title: "Capacitación presencial",
    description:
      "Capacitamos a tus brokers de forma presencial en tu oficina (Península, La Barra o Manantiales) para que dominen el sistema desde el primer día.",
  },
];

export default function OikosArgusPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-black light:bg-white text-white light:text-gray-900 transition-colors">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-[#D9BE93]/40 blur-[110px]"
          aria-hidden="true"
        />

        <Reveal className="relative max-w-[1200px] mx-auto text-center">
          <Link
            href="/#soluciones"
            className="text-sm text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors"
          >
            ← Volver a Soluciones
          </Link>

          <span className="mt-8 mb-4 block text-xs font-medium tracking-wide uppercase text-gray-500">
            Oikos & Argus · Infraestructura Inmobiliaria
          </span>

          <h1 className="text-4xl sm2:text-5xl md:text-6xl font-normal tracking-[-0.04em] leading-[1.05] mb-6 text-white light:text-gray-900">
            Unifica tu cartera, protege tus exclusivas y acelera el cierre con
            clientes de alto poder adquisitivo
          </h1>

          <p className="text-lg text-gray-400 light:text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Gestiona propiedades de lujo, controla múltiples asesores y
            publica en tu propio sitio web sin comisiones ni intermediarios.
            Oikos & Argus es el motor tecnológico diseñado para inmobiliarias
            en Punta del Este que exigen velocidad, diseño y control absoluto
            de sus datos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent font-semibold transition-all duration-300 px-8 py-4 text-base bg-white text-black light:bg-gray-900 light:text-white hover:scale-105 hover:bg-black hover:text-white hover:border-white light:hover:bg-white light:hover:text-gray-900 light:hover:border-gray-900"
            >
              Solicitar Auditoría Inmobiliaria (Gratis)
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-gray-700 light:border-gray-300 font-semibold transition-all duration-300 px-8 py-4 text-base text-white light:text-gray-900 hover:border-gray-500 light:hover:border-gray-500"
            >
              Ver Demo de la Plataforma
            </a>
          </div>
        </Reveal>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-20">
        <Reveal className="relative max-w-[1100px] mx-auto">
          <div className="relative h-64 md:h-[28rem] w-full overflow-hidden rounded-2xl border border-[#C9A876]/40 light:border-[#C9A876]">
            <Image
              src="/images_soluciones/Oikos.png"
              alt="Propiedad de lujo gestionada con Oikos & Argus"
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
              El costo oculto de operar con software genérico o planillas
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
              Una arquitectura robusta, multi-sucursal y blindada
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
              Así cambia la eficiencia de tu inmobiliaria
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm2:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESULTS.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.1}>
                <div className="bg-gray-900/80 light:bg-white border border-gray-800 light:border-gray-200 p-8 rounded-2xl h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#C9A876]/30 bg-[#C9A876]/10 text-[#C9A876] light:text-[#8B6F47]">
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
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] mb-4 text-white light:text-gray-900">
              Desarrollo a medida con soporte presencial en Maldonado
            </h2>
            <p className="text-gray-400 light:text-gray-600 text-lg">
              El mercado inmobiliario esteño tiene dinámicas únicas de
              temporada alta y baja. No te instalamos un sistema estándar
              importado; configuramos la plataforma para cómo trabaja tu
              equipo.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.15}>
                <div>
                  <span className="text-sm font-mono text-[#C9A876] light:text-[#8B6F47]">
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
              ¿Listo para profesionalizar la operación de tu inmobiliaria?
            </h2>
            <p className="text-gray-400 light:text-gray-600 text-sm md:text-base">
              Hablemos de cómo unificar tu cartera esta semana y potenciar
              tus cierres.
            </p>
          </div>

          <OikosLeadForm />
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
