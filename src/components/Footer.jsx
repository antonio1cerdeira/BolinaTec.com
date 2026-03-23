import logoMark from '../../assets/img/logo.png';

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Consultoria', href: '#consultoria' },
  { label: 'Solucoes', href: '#solucoes' },
  { label: 'HeliTube', href: '#helitube' },
  { label: 'Equipa', href: '#equipa' },
  { label: 'Contactos', href: '#contactos' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
            <img src={logoMark} alt="" className="h-8 w-8" loading="lazy" decoding="async" />
          </div>
          <div>
            <p className="font-heading text-lg font-bold text-brand-slate">Bolina Tec</p>
            <p className="text-sm text-slate-500">Consultoria tecnologica e sistemas aplicados.</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-emerald-600">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
