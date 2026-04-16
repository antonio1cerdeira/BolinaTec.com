import { Suspense, lazy, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

const ConsultingSection = lazy(() => import('./components/ConsultingSection'));
const SolutionsSection = lazy(() => import('./components/SolutionsSection'));
const HeliTubeSection = lazy(() => import('./components/HeliTubeSection'));
const TeamSection = lazy(() => import('./components/TeamSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

function SectionSkeleton({ tone = 'light' }) {
  const isLight = tone === 'light';

  return (
    <section className={isLight ? 'bg-white' : 'bg-brand-slate text-white'}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div
          className={`h-5 w-40 rounded-full ${
            isLight ? 'bg-slate-200' : 'bg-white/10'
          } motion-safe:animate-pulse`}
        />
        <div
          className={`mt-6 h-12 max-w-2xl rounded-2xl ${
            isLight ? 'bg-slate-200' : 'bg-white/10'
          } motion-safe:animate-pulse`}
        />
        <div
          className={`mt-4 h-28 max-w-3xl rounded-3xl ${
            isLight ? 'bg-slate-100' : 'bg-white/5'
          } motion-safe:animate-pulse`}
        />
      </div>
    </section>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState('helitube');

  return (
    <div className="min-h-screen bg-brand-mist text-slate-900">
      <a
        href="#conteudo"
        className="sr-only z-[100] rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <Suspense fallback={<SectionSkeleton tone="light" />}>
          <ConsultingSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton tone="light" />}>
          <SolutionsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton tone="dark" />}>
          <HeliTubeSection
            activeProject={activeProject}
            onProjectSelect={setActiveProject}
          />
        </Suspense>
        <Suspense fallback={<SectionSkeleton tone="light" />}>
          <TeamSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton tone="dark" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
