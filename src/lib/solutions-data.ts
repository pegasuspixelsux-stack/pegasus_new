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

// Slugs with their own dedicated page (app/soluciones/<slug>/page.tsx)
// instead of the generic app/soluciones/[slug]/page.tsx template.
export const DEDICATED_SOLUTION_PAGES = ["dealio", "oikos-argus"];

// Literal Tailwind classes (Tailwind's compiler needs full class names in
// source, not interpolated strings) used to give each solution its own
// accent color across the homepage grid and detail pages.
export const SOLUTION_ACCENTS: Record<
  string,
  { tagText: string; hoverBorder: string }
> = {
  dealio: {
    tagText: "text-sky-400 light:text-sky-600",
    hoverBorder: "hover:border-sky-500/60 light:hover:border-sky-400",
  },
  "oikos-argus": {
    tagText: "text-[#C9A876] light:text-[#8B6F47]",
    hoverBorder: "hover:border-[#C9A876]/60 light:hover:border-[#C9A876]",
  },
  hermio: {
    tagText: "text-orange-400 light:text-orange-600",
    hoverBorder: "hover:border-orange-500/60 light:hover:border-orange-400",
  },
  micromercado: {
    tagText: "text-emerald-400 light:text-emerald-600",
    hoverBorder: "hover:border-emerald-500/60 light:hover:border-emerald-400",
  },
};
