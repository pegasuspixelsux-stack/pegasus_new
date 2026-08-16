import Image from "next/image";

const IMAGES = [
  { src: "/images_ticker/dealership-showroom.png", alt: "Showroom de concesionaria de autos de lujo" },
  { src: "/images_ticker/pickup-truck.png", alt: "Camioneta pickup en sala de exhibición" },
  { src: "/images_ticker/classic-mustang.png", alt: "Auto clásico en la ruta" },
  { src: "/images_ticker/real-estate-poolside.png", alt: "Propiedad frente al mar con piscina infinita" },
  { src: "/images_ticker/real-estate-team.png", alt: "Equipo de agentes inmobiliarios" },
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
            className="relative aspect-square w-[75vw] shrink-0 overflow-hidden rounded-2xl border border-gray-800 light:border-gray-200 sm:w-64"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              // Ticker sits right below the hero, so it's often still above
              // the fold — load it eagerly instead of lazily so it isn't
              // blank until the user scrolls.
              priority={index < IMAGES.length}
              loading={index < IMAGES.length ? undefined : "eager"}
              // Request more than the display size so the browser isn't
              // forced to upscale during the continuous marquee transform.
              sizes="(min-width: 640px) 384px, 75vw"
              quality={90}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
