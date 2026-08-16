"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full bg-black light:bg-white border border-blue-800 light:border-gray-300 rounded-xl px-4 py-3 text-white light:text-gray-900 text-sm focus:outline-none focus:border-blue-400 light:focus:border-gray-500";

const labelClasses =
  "block text-xs font-semibold uppercase tracking-wider text-gray-300 light:text-gray-600 mb-2";

export function DealioLeadForm() {
  const [formData, setFormData] = useState({
    automotora: "",
    responsable: "",
    whatsapp: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Hola. Quiero coordinar un Diagnóstico de Inventario con Dealio. Automotora: ${formData.automotora}. Responsable: ${formData.responsable}. WhatsApp: ${formData.whatsapp}.`;
    const whatsappUrl = `https://wa.me/59891028324?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClasses}>Nombre de la Automotora</label>
        <input
          type="text"
          required
          placeholder="Ej. Automotora del Este"
          value={formData.automotora}
          onChange={(e) =>
            setFormData({ ...formData, automotora: e.target.value })
          }
          className={inputClasses}
        />
      </div>
      <div>
        <label className={labelClasses}>Nombre del Responsable</label>
        <input
          type="text"
          required
          placeholder="Ej. Juan Pérez"
          value={formData.responsable}
          onChange={(e) =>
            setFormData({ ...formData, responsable: e.target.value })
          }
          className={inputClasses}
        />
      </div>
      <div>
        <label className={labelClasses}>Número de WhatsApp</label>
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
      <button
        type="submit"
        className="w-full border border-transparent bg-white text-black light:bg-gray-900 light:text-white hover:scale-[1.02] hover:bg-black hover:text-white hover:border-white light:hover:bg-white light:hover:text-gray-900 light:hover:border-gray-900 font-bold py-4 rounded-full text-base transition-all duration-300"
      >
        Coordinar Diagnóstico de Inventario
      </button>
    </form>
  );
}
