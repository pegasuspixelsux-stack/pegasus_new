"use client";

import { useState, type FormEvent } from "react";

const INDUSTRIES = [
  { value: "Automotor", label: "Automotor / Concesionaria" },
  { value: "Inmobiliaria", label: "Inmobiliaria / Propiedades" },
  { value: "Gastronomía", label: "Gastronomía / Restaurante" },
  { value: "Micromercado", label: "Micromercado / Tienda" },
  { value: "Otra", label: "Otra industria" },
] as const;

const inputClasses =
  "w-full bg-black light:bg-white border border-gray-800 light:border-gray-300 rounded-xl px-4 py-3 text-white light:text-gray-900 text-sm focus:outline-none focus:border-gray-500 light:focus:border-gray-500";

const labelClasses =
  "block text-xs font-semibold uppercase tracking-wider text-gray-400 light:text-gray-600 mb-2";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    whatsapp: "",
    industria: "Automotor",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Hola. Acabo de completar el formulario en tu sitio web. Soy ${formData.nombre} de la empresa ${formData.empresa} (WhatsApp: ${formData.whatsapp}). Me interesa coordinar la sesión de diagnóstico privado para la división de ${formData.industria}. Quedo atento a tu agenda.`;
    const whatsappUrl = `https://wa.me/59891028324?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contacto"
      className="py-20 px-6 border-t border-gray-800/60 light:border-gray-200 transition-colors"
    >
      <div className="max-w-3xl mx-auto bg-gray-900/90 light:bg-gray-50 border border-gray-800 light:border-gray-200 p-8 md:p-12 rounded-3xl shadow-2xl light:shadow-gray-300/40">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-normal tracking-[-0.04em] leading-[0.95] mb-3 bg-gradient-to-b from-white via-blue-300 to-blue-500 bg-clip-text text-transparent light:bg-none light:text-gray-900">
            Analicemos tu presencia digital.
          </h2>
          <p className="text-gray-400 light:text-gray-600 text-sm md:text-base">
            Descubrí en qué está perdiendo oportunidades tu negocio y coordiná
            tu sesión de diagnóstico privado.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>
                Tu Nombre y Apellido
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Juan Pérez"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>
                Nombre de tu Empresa / Negocio
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Automotora del Este"
                value={formData.empresa}
                onChange={(e) =>
                  setFormData({ ...formData, empresa: e.target.value })
                }
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>
                WhatsApp de contacto directo
              </label>
              <input
                type="tel"
                required
                placeholder="Ej. +598 99 000 000"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>
                Industria
              </label>
              <select
                value={formData.industria}
                onChange={(e) =>
                  setFormData({ ...formData, industria: e.target.value })
                }
                className={inputClasses}
              >
                {INDUSTRIES.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-100 text-black light:bg-gray-900 light:text-white light:hover:bg-gray-800 font-bold py-4 rounded-xl text-base transition-all"
            >
              Enviar Datos y Agendar Sesión de Diagnóstico
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
