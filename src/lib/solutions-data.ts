export type Solution = {
  slug: string;
  tag: string;
  name: string;
  desc: string;
  image: string | null;
  industry: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "dealio",
    tag: "🚗 Concesionarias",
    name: "Dealio",
    desc: "Sincronización de stock de vehículos en tiempo real, centralización de leads de alto valor y fichas técnicas automáticas por WhatsApp.",
    image: "/images_soluciones/Dealio.png",
    industry: "Concesionarias",
  },
  {
    slug: "oikos-argus",
    tag: "🏢 Inmobiliarias",
    name: "Oikos & Argus",
    desc: "Catálogo digital de inmuebles, asignación inteligente de prospectos a agentes y flujos optimizados para la reserva de visitas y tasaciones.",
    image: "/images_soluciones/Oikos.png",
    industry: "Inmobiliarias",
  },
  {
    slug: "hermio",
    tag: "🍽️ Restaurantes",
    name: "Hermio",
    desc: "Menú digital interactivo con variantes, control de reservas de mesas y canalización de pedidos directos a tu WhatsApp con Cero Comisiones.",
    image: "/images_soluciones/Hermio.png",
    industry: "Restaurantes",
  },
  {
    slug: "micromercado",
    tag: "🛒 Pequeños Comercios",
    name: "Micromercado",
    desc: "Gestión integral de inventario y pedidos simplificados para tiendas de barrio y comercios minoristas.",
    image: null,
    industry: "Pequeños Comercios",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}
