import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SOLUTIONS } from "@/lib/solutions-data";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/social-icons";

const LINKS = [
  { href: "/#soluciones", label: "Soluciones" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#infraestructura", label: "Nuestra Infraestructura" },
  { href: "/#quien-soy", label: "Quién Soy" },
  { href: "/#contacto", label: "Diagnóstico Gratis" },
];

const HOURS = [
  { day: "Lunes a Viernes", time: "9:00 – 18:00" },
  { day: "Sábados", time: "10:00 – 13:00" },
  { day: "Domingos", time: "Cerrado" },
];

const SOCIAL_LINKS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: GoogleIcon, href: "#", label: "Google" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-800 light:border-gray-200 bg-black light:bg-white py-16 px-6 transition-colors">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1.2fr_0.8fr] gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="font-bold text-white light:text-gray-900 text-base">
              Pegasus Pixels
            </span>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              Diseñamos sistemas de gestión y automatización de negocios.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white light:text-gray-900 mb-3">
              Enlaces
            </h3>
            <ul className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white light:text-gray-900 mb-3">
              Soluciones
            </h3>
            <ul className="flex flex-col gap-2">
              {SOLUTIONS.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    href={`/soluciones/${solution.slug}`}
                    className="text-sm text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white light:text-gray-900 mb-3">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400 light:text-gray-600">
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="shrink-0 text-blue-400" />
                <span>Punta del Este, Uruguay</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="shrink-0 text-blue-400" />
                <span>Rockville, MD, US</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-blue-400" />
                <a
                  href="mailto:hello@pegasuspixels.com"
                  className="hover:text-white light:hover:text-gray-900 transition-colors"
                >
                  hello@pegasuspixels.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={16} className="shrink-0 text-blue-400" />
                <a
                  href="https://wa.me/59891028324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white light:hover:text-gray-900 transition-colors"
                >
                  WhatsApp: 091 028 324
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-blue-400" />
                <a
                  href="tel:+13012574500"
                  className="hover:text-white light:hover:text-gray-900 transition-colors"
                >
                  +1 301 257 4500
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-blue-400" />
                <a
                  href="tel:+59891028324"
                  className="hover:text-white light:hover:text-gray-900 transition-colors"
                >
                  091 028 324
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white light:text-gray-900 mb-3">
              Horario
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400 light:text-gray-600">
              {HOURS.map((item) => (
                <li key={item.day} className="flex justify-between gap-4">
                  <span>{item.day}</span>
                  <span className="text-gray-500">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/50 light:border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-500 light:text-gray-500">
            <p>
              © {new Date().getFullYear()} Pegasus Pixels. Todos los derechos
              reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-white light:hover:text-gray-900 transition-colors"
              >
                Privacidad
              </a>
              <a
                href="#"
                className="hover:text-white light:hover:text-gray-900 transition-colors"
              >
                Oportunidades
              </a>
              <a
                href="#"
                className="hover:text-white light:hover:text-gray-900 transition-colors"
              >
                Términos de Uso
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-500 light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
