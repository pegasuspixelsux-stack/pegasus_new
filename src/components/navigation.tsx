"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { SOLUTIONS } from "@/lib/solutions-data";

const NAV_LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#infraestructura", label: "Nuestra Infraestructura" },
  { href: "/#quien-soy", label: "Quién Soy" },
];

const navLinkClasses =
  "text-sm text-white/60 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors";

const ctaClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all h-10 px-5 py-2 text-sm bg-white text-black light:bg-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-800";

export const Navigation = React.memo(function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 light:border-gray-200 bg-black/80 light:bg-white/80 backdrop-blur-md transition-colors">
      <nav className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white light:text-gray-900">
              Pegasus <span className="text-blue-500">Pixels</span>
            </span>
          </div>

          <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="group relative">
              <Link
                href="/#soluciones"
                className={`flex items-center gap-1 py-2 ${navLinkClasses}`}
              >
                Soluciones
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>

              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-56 rounded-xl border border-gray-800 light:border-gray-200 bg-black/95 light:bg-white/95 backdrop-blur-md p-2 shadow-xl">
                  {SOLUTIONS.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/soluciones/${solution.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-white/70 light:text-gray-700 hover:bg-gray-800/60 light:hover:bg-gray-100 hover:text-white light:hover:text-gray-900 transition-colors"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClasses}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/#contacto" className={ctaClasses}>
              Diagnóstico Gratis
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-white light:text-gray-900"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 light:bg-white/95 backdrop-blur-md border-t border-gray-800/50 light:border-gray-200 animate-[slideDown_0.3s_ease-out]">
          <div className="px-6 py-4 flex flex-col gap-4">
            <div>
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen((open) => !open)}
                className={`flex w-full items-center justify-between py-2 ${navLinkClasses}`}
                aria-expanded={mobileSolutionsOpen}
              >
                Soluciones
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  {SOLUTIONS.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/soluciones/${solution.slug}`}
                      className="text-sm text-white/50 light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors py-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 ${navLinkClasses}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-800/50 light:border-gray-200">
              <Link
                href="/#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className={ctaClasses}
              >
                Diagnóstico Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});
