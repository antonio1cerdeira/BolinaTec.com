import { ArrowRight, Cpu, SearchCheck, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';

const services = [
  {
    icon: SearchCheck,
    title: 'Diagnostico',
    description: 'Identificamos o problema, o contexto e o melhor proximo passo.',
  },
  {
    icon: Wrench,
    title: 'Prototipagem',
    description: 'Testamos a solucao em pequena escala antes de investir mais.',
  },
  {
    icon: Cpu,
    title: 'Integracao',
    description: 'Ligamos sensores, dados e operacao para tornar o sistema utilizavel.',
  },
];

export default function ConsultingSection() {
  return (
    <section id="consultoria" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Consultoria"
          title="Consultoria para decidir, validar e implementar."
          description="Acompanhamos projetos desde o diagnostico inicial ate ao piloto e a integracao tecnica."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 text-center shadow-panel transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-slate text-white">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 font-heading text-3xl font-bold text-brand-slate">{title}</h3>
              <p className="mt-4 text-sm leading-8 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-brand-slate px-7 py-6 text-white shadow-panel">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-200">
                Metodo de trabalho
              </p>
              <p className="mt-2 font-heading text-3xl font-bold text-white">
                Diagnosticar. Validar. Implementar.
              </p>
            </div>
            <a
              href="#contactos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-cta text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Pedir conversa tecnica
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
