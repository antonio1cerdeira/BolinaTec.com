import SectionHeading from './SectionHeading';

export default function SolutionsSection() {

  return (
    <section id="solucoes" className="bg-brand-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Solucoes"
          title="As nossas solucoes tecnicas"
          description="HeliTube, Agro Harmonia e Imo Harmonia sao apresentados no painel tecnico abaixo."
          align="center"
        />

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-base leading-8 text-slate-600">
            Explore os projetos no modulo seguinte e veja os detalhes de cada solucao de forma simples.
          </p>
        </div>
      </div>
    </section>
  );
}
