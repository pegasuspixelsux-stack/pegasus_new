import Image from "next/image";

const IMAGES = [
  { src: "/images_ticker/dealership-showroom.png", alt: "Showroom de concesionaria de autos de lujo" },
  { src: "/images_ticker/pickup-truck.png", alt: "Camioneta pickup en sala de exhibición" },
  { src: "/images_ticker/classic-mustang.png", alt: "Auto clásico en la ruta" },
  { src: "/images_ticker/real-estate-poolside.png", alt: "Propiedad frente al mar con piscina infinita" },
  { src: "/images_ticker/real-estate-team.png", alt: "Equipo de agentes inmobiliarios" },
  { src: "/images_ticker/accounting-software.jpg", alt: "Software de gestión contable" },
] as const;

// Duplicated once so the track can loop seamlessly at -50%.
const TICKER_ITEMS = [...IMAGES, ...IMAGES];

export function ImageTicker() {
  return (
    <div
      className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-hidden="true"
    >
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-6 [backface-visibility:hidden] [transform:translateZ(0)] will-change-transform hover:[animation-play-state:paused]">
        {TICKER_ITEMS.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-56 w-56 shrink-0 overflow-hidden rounded-2xl border border-gray-800 light:border-gray-200 sm:h-64 sm:w-64"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 256px, 224px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
