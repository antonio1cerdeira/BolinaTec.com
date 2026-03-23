import { ArrowRight, Building2, FlaskConical, Sprout } from 'lucide-react';
import SectionHeading from './SectionHeading';

const solutions = [
  {
    key: 'helitube',
    icon: FlaskConical,
    name: 'HeliTube',
    focus: 'Circularidade, biocompositos e IoT',
    description:
      'Sistema circular apresentado como estudo de caso tecnologico com materiais bio-based, regulacao quimica e sensores.',
  },
  {
    key: 'agro',
    icon: Sprout,
    name: 'Agro Harmonia',
    focus: 'IA e gestao agricola',
    description:
      'Automatiza tarefas, organiza gestao e apoia decisoes com dados e relatorios.',
  },
  {
    key: 'imo',
    icon: Building2,
    name: 'Imo Harmonia',
    focus: 'Urbanismo e normas',
    description:
      'Interpreta normas, valida documentacao e reduz erros antes da submissao.',
  },
];

export default function SolutionsSection({
  activeProject = 'helitube',
  onProjectSelect = () => {},
}) {
  const handleSelect = (key) => {
    onProjectSelect(key);

    requestAnimationFrame(() => {
      document.getElementById('helitube')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <section id="solucoes" className="bg-brand-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Solucoes"
          title="Escolha o projeto e veja o detalhe tecnico abaixo."
          description="HeliTube, Agro Harmonia e Imo Harmonia usam o mesmo painel de deep dive para manter a leitura consistente."
          align="center"
        />

        <div className="mt-6 text-center text-sm text-slate-500">
          {activeProject === 'helitube'
            ? 'O HeliTube esta ativo no painel tecnico abaixo.'
            : 'O painel tecnico abaixo ja esta sincronizado com a solucao selecionada.'}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map(({ key, icon: Icon, name, focus, description }) => {
            const isActive = key === activeProject;

            return (
              <button
                key={key}
                type="button"
                aria-pressed={isActive}
                aria-controls="helitube"
                onClick={() => handleSelect(key)}
                className={`rounded-[2rem] border p-8 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-brand-slate bg-white shadow-panel'
                    : 'border-slate-200 bg-white hover:-translate-y-1 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      key === 'agro'
                        ? 'bg-emerald-50 text-emerald-600'
                        : key === 'imo'
                          ? 'bg-sky-50 text-sky-600'
                          : 'bg-violet-50 text-violet-600'
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] ${
                      isActive
                        ? 'bg-brand-slate text-white'
                        : 'border border-slate-200 bg-slate-50 text-slate-500'
                    }`}
                  >
                    {isActive ? 'Selecionado' : focus}
                  </span>
                </div>

                <h3 className="mt-8 font-heading text-4xl font-bold text-brand-slate">{name}</h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">{description}</p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                  Ver detalhe tecnico
                  <ArrowRight size={18} />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
