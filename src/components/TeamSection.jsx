import { ArrowUpRight } from 'lucide-react';
import antonioPhoto from '../../assets/img/team/Coe.jpg';
import SectionHeading from './SectionHeading';

const highlights = ['Estrategia', 'Territorio', 'Parcerias'];

export default function TeamSection() {
  return (
    <section id="equipa" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Equipa"
          title="Lideranca com foco claro."
          description="Uma apresentacao simples, direta e institucional."
          align="center"
        />

        <article className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-panel">
          <div className="grid md:grid-cols-[0.72fr_1.28fr]">
            <div className="min-h-[420px] overflow-hidden bg-slate-200">
              <img
                src={antonioPhoto}
                alt="Antonio Cerdeira"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="inline-flex w-fit items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Bolina Tec
              </span>
              <h3 className="mt-6 font-heading text-4xl font-bold text-brand-slate">
                Antonio Cerdeira
              </h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Chief Executive Officer
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                Responsavel pelo posicionamento estrategico, pelas relacoes institucionais e pelo
                desenvolvimento de oportunidades para a Bolina Tec e para o HeliTube.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="#contactos"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600"
              >
                Falar com a Bolina Tec
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
