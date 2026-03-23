import {
  Building2,
  FileText,
  FlaskConical,
  Gauge,
  RadioTower,
  Scale,
  Sprout,
  TreePine,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const projectTabs = [
  { key: 'helitube', label: 'HeliTube' },
  { key: 'agro', label: 'Agro Harmonia' },
  { key: 'imo', label: 'Imo Harmonia' },
];

const projectContent = {
  helitube: {
    eyebrow: 'HeliTube',
    title: 'HeliTube, explicado de forma objetiva.',
    description:
      'Um sistema circular com materiais bio-based, regulacao quimica e monitorizacao em tempo real.',
    flow: [
      { title: '1. Helicicultura', text: 'A origem biologica do circuito.' },
      { title: '2. Nutrientes', text: 'A estabilidade quimica do sistema.' },
      { title: '3. Hidroponia', text: 'A producao circular em ambiente controlado.' },
    ],
    pillars: [
      {
        icon: TreePine,
        title: 'Bracejo',
        text: 'Material regional usado como matriz estrutural.',
      },
      {
        icon: FlaskConical,
        title: 'Bio-resina',
        text: 'Resina bio-based para ligar material e desempenho.',
      },
      {
        icon: Scale,
        title: 'Carbonato',
        text: 'Ajuda a regular o pH e a estabilizar o circuito.',
      },
      {
        icon: RadioTower,
        title: 'IoT',
        text: 'Sensores para leitura continua de pH e condutividade.',
      },
    ],
    summaryEyebrow: 'Leitura rapida',
    summaryTitle: 'Material, quimica e dados na mesma solucao.',
    summaryText:
      'O HeliTube combina materiais, regulacao quimica e sensores numa solucao observavel, tecnica e facil de apresentar.',
    metrics: [
      { icon: Gauge, label: 'pH', value: '6.2', note: 'janela de estabilidade' },
      { icon: RadioTower, label: 'EC', value: '1.8', note: 'condutividade monitorizada' },
      { icon: FlaskConical, label: 'Bio-based', value: '2', note: 'materiais-chave do sistema' },
    ],
  },
  agro: {
    eyebrow: 'Agro Harmonia',
    title: 'Agro Harmonia, gestao agricola com menos friccao.',
    description:
      'Uma plataforma para automatizar rotinas, acompanhar mercado e apoiar decisoes mais informadas na exploracao.',
    flow: [
      { title: '1. Automatizacao', text: 'Processos repetitivos passam a exigir menos tempo manual.' },
      { title: '2. Analise', text: 'Dados, mercado e relatorios ajudam a ler melhor a operacao.' },
      { title: '3. Decisao', text: 'A exploracao ganha mais controlo e capacidade de resposta.' },
    ],
    pillars: [
      {
        icon: Sprout,
        title: 'Processos',
        text: 'Automatizacao de tarefas burocraticas e operacionais.',
      },
      {
        icon: Gauge,
        title: 'Financeiro',
        text: 'Gestao mais clara de custos, atividade e rentabilidade.',
      },
      {
        icon: RadioTower,
        title: 'Mercado',
        text: 'Leitura de tendencias e apoio a decisao estrategica.',
      },
      {
        icon: FileText,
        title: 'Equipamentos',
        text: 'Acompanhamento da operacao e dos recursos da exploracao.',
      },
    ],
    summaryEyebrow: 'Leitura rapida',
    summaryTitle: 'Operacao, mercado e gestao no mesmo produto.',
    summaryText:
      'O Agro Harmonia ajuda a ganhar produtividade, reduzir dispersao operacional e tomar decisoes com mais contexto.',
    metrics: [
      { icon: Sprout, label: 'Foco', value: 'Gestao', note: 'operacao agricola' },
      { icon: Gauge, label: 'Camada', value: 'Dados', note: 'relatorios e analise' },
      { icon: FileText, label: 'Impacto', value: 'Decisao', note: 'mais produtividade' },
    ],
  },
  imo: {
    eyebrow: 'Imo Harmonia',
    title: 'Imo Harmonia, normas urbanisticas com mais clareza.',
    description:
      'Uma plataforma com IA e automacao para interpretar regulamentos, validar documentacao e reduzir incerteza tecnica.',
    flow: [
      { title: '1. Interpretacao', text: 'Os regulamentos sao lidos de forma mais clara e orientada.' },
      { title: '2. Verificacao', text: 'Memorias, requisitos e documentos sao revistos antes da submissao.' },
      { title: '3. Avanco', text: 'O projeto segue com menos erro, retrabalho e incerteza.' },
    ],
    pillars: [
      {
        icon: Building2,
        title: 'Verificacao IA',
        text: 'Analise inteligente de memorias descritivas e inconsistencias.',
      },
      {
        icon: Scale,
        title: 'Checklists',
        text: 'Guias automatizados para confirmar requisitos e submissao.',
      },
      {
        icon: FileText,
        title: 'Alertas',
        text: 'Acompanhamento de novas normas e alteracoes legislativas.',
      },
      {
        icon: Gauge,
        title: 'BIM + Geo',
        text: 'Integracao com BIM e leitura georreferenciada de terrenos.',
      },
    ],
    summaryEyebrow: 'Leitura rapida',
    summaryTitle: 'Normas, verificacao e submissao no mesmo fluxo.',
    summaryText:
      'O Imo Harmonia acelera a leitura urbanistica, reduz erros documentais e ajuda a avancar projetos com mais seguranca.',
    metrics: [
      { icon: Scale, label: 'Motor', value: 'IA', note: 'interpreta regulamentos' },
      { icon: FileText, label: 'Camada', value: 'BIM', note: 'apoio tecnico adicional' },
      { icon: Building2, label: 'Impacto', value: 'Geo', note: 'analise de terreno e contexto' },
    ],
  },
};

export default function HeliTubeSection({
  activeProject = 'helitube',
  onProjectSelect = () => {},
}) {
  const project = projectContent[activeProject] || projectContent.helitube;

  return (
    <section id="helitube" className="relative overflow-hidden bg-brand-slate py-24 text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_28%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={project.eyebrow}
          title={project.title}
          description={project.description}
          align="center"
          theme="dark"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {projectTabs.map((tab) => {
            const isActive = tab.key === activeProject;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onProjectSelect(tab.key)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-white/20 bg-white text-brand-slate'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div key={activeProject} className="transition-opacity duration-300">
          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
            <div className="grid gap-4 md:grid-cols-3">
              {project.flow.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/30 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-100">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {project.pillars.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-300">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-200">
                {project.summaryEyebrow}
              </p>
              <h3 className="mt-4 font-heading text-3xl font-bold text-white">
                {project.summaryTitle}
              </h3>
              <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-300">
                {project.summaryText}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map(({ icon: Icon, label, value, note }) => (
                <div
                  key={label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-violet-100">
                    <Icon size={20} />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                    {label}
                  </p>
                  <p className="mt-2 font-heading text-4xl font-bold text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
