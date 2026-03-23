import { ArrowRight, BriefcaseBusiness, ChevronDown, Cpu, MapPin } from 'lucide-react';

const companyAreas = [
  {
    icon: BriefcaseBusiness,
    title: 'Consultoria',
    text: 'Diagnostico, validacao e orientacao tecnica.',
  },
  {
    icon: Cpu,
    title: 'Solucoes digitais',
    text: 'Dados, integracao e sistemas aplicados.',
  },
  {
    icon: MapPin,
    title: 'Projetos aplicados',
    text: 'Territorio, operacao e implementacao.',
  },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white px-6 pb-20 pt-36 text-slate-900 md:pb-28 md:pt-44"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.10),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.08),_transparent_28%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
          Bolina Tec
        </span>

        <h1 className="mx-auto mt-8 max-w-5xl font-heading text-5xl font-bold leading-[0.95] tracking-tight text-brand-slate sm:text-6xl xl:text-7xl">
          Consultoria tecnologica para transformar contexto em execução.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          Somos uma empresa que ajuda a realizar projetos a clarificar problemas, validar solucoes e
          implementar sistemas com mais seguranca.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#consultoria"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-slate px-7 py-4 font-cta text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-800"
          >
            Conhecer a empresa
            <ArrowRight size={18} />
          </a>
          <a
            href="#contactos"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-cta text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:text-slate-900"
          >
            Falar connosco
          </a>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {companyAreas.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 text-left shadow-panel"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-brand-slate">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold text-brand-slate">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#consultoria"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900"
          >
            Ver mais
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
