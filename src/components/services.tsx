import {
  CalendarCheck,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  MessageCircle,
  Share2,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    icon: Share2,
    title: "Redes Sociales y Contenido",
    description:
      "Gestión y creación de contenido (no incluye grabación ni edición de video).",
  },
  {
    icon: LayoutTemplate,
    title: "Diseño Web",
    description: "Sitios web a medida, diseñados para convertir.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description: "Visualizaciones de datos a medida para tu negocio.",
  },
  {
    icon: MessageCircle,
    title: "Pedidos por WhatsApp",
    description: "Canalización directa de pedidos por WhatsApp.",
  },
  {
    icon: CalendarCheck,
    title: "Sistemas de Reservas",
    description: "Flujos de agenda y turnos automatizados.",
  },
  {
    icon: Users,
    title: "Dashboards de Leads",
    description: "Seguimiento de pipeline y clientes en un solo lugar.",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description: "Automatización de flujos de trabajo del negocio.",
  },
  {
    icon: Wrench,
    title: "Soporte",
    description: "Mantenimiento técnico continuo.",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Marketing por email e infraestructura de envío.",
  },
] as const;

export function Services() {
  return (
    <section
      id="servicios"
      className="py-28 px-6 border-t border-gray-800/60 light:border-gray-200 transition-colors"
    >
      <div className="max-w-[960px] mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-medium tracking-wide uppercase text-gray-500">
            Servicios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] text-white light:text-gray-900">
            El ecosistema tecnológico que su empresa necesita hoy
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, description }, index) => {
            const isFirst = index === 0;
            return (
              <Reveal key={title} delay={(index % 3) * 0.1} className="h-full">
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:border-white hover:bg-white light:hover:border-gray-900 light:hover:bg-gray-900 ${
                    isFirst
                      ? "border-white bg-white light:border-gray-900 light:bg-gray-900"
                      : "border-gray-800 bg-gray-900/30 light:border-gray-200 light:bg-gray-50"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl transition-opacity duration-300 group-hover:opacity-0 ${
                      isFirst ? "opacity-0 light:opacity-100" : ""
                    }`}
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border text-white light:text-gray-900 transition-colors duration-300 group-hover:border-black group-hover:bg-black light:group-hover:border-white light:group-hover:bg-white ${
                        isFirst
                          ? "border-black bg-black light:border-white light:bg-white"
                          : "border-gray-700 bg-gray-800/50 light:border-gray-300 light:bg-gray-100"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <h3
                      className={`text-base font-medium mb-2 transition-colors duration-300 group-hover:text-black light:group-hover:text-white ${
                        isFirst ? "text-black light:text-white" : "text-white light:text-gray-900"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700 light:group-hover:text-gray-300 ${
                        isFirst
                          ? "text-gray-700 light:text-gray-300"
                          : "text-gray-400 light:text-gray-600"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
