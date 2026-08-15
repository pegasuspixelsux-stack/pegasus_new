const CLIENTS = [
  "Sprouting Owls Day Care Center",
  "A&M Towing",
  "Jim Coleman Honda",
  "Gospodinoff",
  'Fundación "Los Niños de María"',
  "Los Amigos Authentic Mexican Restaurant",
  "Academy Ford",
  "Absolute Motors",
  "Mt Airy Auto Parts",
] as const;

// Duplicated once so the track can loop seamlessly at -50%.
const TICKER_ITEMS = [...CLIENTS, ...CLIENTS];

export function ClientLogosTicker() {
  return (
    <section className="border-t border-gray-800/60 light:border-gray-200 py-16 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[0.95] text-white light:text-gray-900">
          Empresas que confiaron en nosotros
        </h2>
      </div>

      <div
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-12 hover:[animation-play-state:paused]">
          {TICKER_ITEMS.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="shrink-0 whitespace-nowrap text-lg md:text-xl font-medium text-gray-500"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
