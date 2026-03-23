export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}) {
  const centered = align === 'center';
  const darkTheme = theme === 'dark';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span
        className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] ${
          darkTheme
            ? 'border-white/10 bg-white/5 text-emerald-300'
            : 'border-emerald-200 bg-emerald-50 text-emerald-700'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-6 font-heading text-4xl font-bold tracking-tight md:text-5xl ${
          darkTheme ? 'text-white' : 'text-brand-slate'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-lg leading-8 ${
          darkTheme ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {description}
      </p>
    </div>
  );
}
