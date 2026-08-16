import { Reveal } from "@/components/reveal";

// Placeholder posts. Real articles will be authored and published from
// the dashboard once it exists — swap this array for that data source
// then.
const POSTS = [
  {
    title: "Cómo eliminar el caos operativo en tu negocio",
    author: "Alejandro González",
    date: "15 de agosto, 2026",
    intro:
      "Un sistema centralizado convierte los chats de WhatsApp y las planillas sueltas en un flujo de trabajo real, donde ningún cliente potencial se pierde en el camino.",
  },
  {
    title: "3 señales de que tu software está frenando tu crecimiento",
    author: "Alejandro González",
    date: "8 de agosto, 2026",
    intro:
      "Cuando tu equipo vuelve al cuaderno o al Excel para resolver lo que el sistema no puede, la herramienta dejó de ayudarte. Así se detecta a tiempo.",
  },
  {
    title: "Por qué la infraestructura importa más que el diseño",
    author: "Alejandro González",
    date: "1 de agosto, 2026",
    intro:
      "Un sitio prolijo no vende solo. Lo que sostiene la operación día a día es la infraestructura técnica detrás: velocidad, automatización y datos confiables.",
  },
];

export function Blog() {
  return (
    <section
      id="blog"
      className="py-28 px-6 border-t border-gray-800/60 light:border-gray-200 transition-colors"
    >
      <div className="max-w-[1260px] mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-medium tracking-wide uppercase text-gray-500">
            Blog
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-normal tracking-[-0.04em] leading-[1.15] mb-4 text-white light:text-gray-900">
            Ideas para escalar tu operación
          </h2>
          <p className="text-gray-400 light:text-gray-600 text-lg">
            Notas breves sobre infraestructura, automatización y crecimiento
            operativo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.1} className="h-full">
              <article className="h-full rounded-2xl border border-gray-800 light:border-gray-200 bg-gray-900/30 light:bg-gray-50 p-8 transition-colors duration-300 hover:border-gray-600 light:hover:border-gray-400">
                <div className="text-xs text-gray-500 mb-4">
                  {post.author} · {post.date}
                </div>
                <h3 className="text-xl font-bold text-white light:text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
                  {post.intro}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
