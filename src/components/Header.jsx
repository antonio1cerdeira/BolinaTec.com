import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoMark from '../../assets/img/logo.png';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Consultoria', href: '#consultoria' },
  { label: 'Solucoes', href: '#solucoes' },
  { label: 'HeliTube', href: '#helitube' },
  { label: 'Equipa', href: '#equipa' },
  { label: 'Contactos', href: '#contactos' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Bolina Tec">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white">
            <img src={logoMark} alt="" className="h-8 w-8" />
          </div>
          <div>
            <div className="font-heading text-lg font-bold tracking-tight text-brand-slate">
              Bolina Tec
            </div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
              Consultoria tecnologica
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors duration-200 hover:text-slate-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contactos"
            className="rounded-full bg-brand-slate px-5 py-3 font-cta text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-800"
          >
            Pedir reuniao
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contactos"
              className="mt-2 rounded-2xl bg-brand-slate px-4 py-3 text-center font-cta text-sm font-semibold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Pedir reuniao
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
