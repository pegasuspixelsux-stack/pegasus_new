import Image from "next/image";
import Link from "next/link";
import { SOLUTION_ACCENTS, type Solution } from "@/lib/solutions-data";

export function SolutionCard({ item }: { item: Solution }) {
  const accent = SOLUTION_ACCENTS[item.slug];

  return (
    <Link
      href={`/soluciones/${item.slug}`}
      // Fixed height (rather than h-full) so the image and text halves
      // below have real space to split 50/50 — a grid row's auto height
      // can't distribute flex-grow space that doesn't exist yet, and a
      // `fill` image has no intrinsic height of its own to seed that
      // computation.
      className={`overflow-hidden bg-gray-900/80 light:bg-white border border-gray-800 light:border-gray-200 rounded-2xl transition-all duration-300 flex flex-col group h-[500px] ${accent.hoverBorder}`}
    >
      {item.image && (
        <div className="relative w-full flex-1">
          <Image
            src={item.image}
            alt={item.name}
            fill
            // Sized ~20% above the actual display width so the hover
            // scale-105 has real resolution to zoom into instead of
            // upscaling an exact-fit bitmap (blurry).
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 60vw, 100vw"
            quality={90}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div
        className={`p-8 flex-1 ${item.image ? "" : "flex flex-col justify-center"}`}
      >
        <span
          className={`text-xs font-semibold tracking-wider uppercase mb-3 block ${accent.tagText}`}
        >
          {item.tag}
        </span>
        <h3 className="text-xl font-bold text-white light:text-gray-900 mb-3 transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </Link>
  );
}
