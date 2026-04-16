import { useMemo, useState } from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const initialFormState = {
  name: '',
  email: '',
  company: '',
  message: '',
  website: '',
};

const details = [
  {
    icon: Mail,
    title: 'Email',
    value: 'no-reply@bolinatec.com',
    note: 'Canal para pedidos comerciais, parcerias e contacto institucional.',
  },
  {
    icon: MapPin,
    title: 'Localizacao',
    value: 'Guarda, Portugal',
    note: 'Base da Bolina Tec e ponto de enquadramento dos projetos da empresa.',
  },
];

function validateForm(values) {
  const nextErrors = {};

  if (values.name.trim().length < 2) {
    nextErrors.name = 'Indique um nome valido.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    nextErrors.email = 'Indique um email valido.';
  }

  if (values.message.trim().length < 20) {
    nextErrors.message = 'Descreva melhor a mensagem.';
  }

  return nextErrors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const useWeb3Forms = Boolean(web3FormsAccessKey);

  const endpoint = useMemo(
    () =>
      useWeb3Forms
        ? 'https://api.web3forms.com/submit'
        : import.meta.env.VITE_CONTACT_ENDPOINT || `${import.meta.env.BASE_URL}forms/contact.php`,
    [useWeb3Forms],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const nextErrors = validateForm(formData);

    setErrors((current) => {
      const next = { ...current };

      if (nextErrors[name]) {
        next[name] = nextErrors[name];
      } else {
        delete next[name];
      }

      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: 'error',
        message: 'Verifique os campos antes de enviar.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('company', formData.company);
    formPayload.append('subject', 'Novo contacto via website Bolina Tec');
    formPayload.append(
      'message',
      `${formData.message}\n\nEmpresa/Organizacao: ${formData.company || 'Nao indicada'}`,
    );
    formPayload.append('website', formData.website);

    try {
      const response = await fetch(
        endpoint,
        useWeb3Forms
          ? {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify({
                access_key: web3FormsAccessKey,
                name: formData.name,
                email: formData.email,
                company: formData.company,
                subject: 'Novo contacto via website Bolina Tec',
                message: `${formData.message}\n\nEmpresa/Organizacao: ${formData.company || 'Nao indicada'}`,
                from_name: 'Website Bolina Tec',
                botcheck: formData.website,
              }),
            }
          : {
              method: 'POST',
              body: formPayload,
            },
      );

      const contentType = response.headers.get('content-type') || '';
      const data = contentType.includes('application/json')
        ? await response.json()
        : { message: await response.text() };

      if (!response.ok || (useWeb3Forms && data.success === false)) {
        throw new Error(data.message || 'Nao foi possivel enviar a mensagem.');
      }

      setStatus({
        type: 'success',
        message: data.message || 'Mensagem enviada com sucesso.',
      });
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'O envio falhou.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactos" className="relative overflow-hidden bg-brand-mist py-28">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.08),_transparent_22%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.08),_transparent_24%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contactos"
              title="Vamos falar sobre o seu projeto."
              description="Um ponto de contacto simples para pedidos comerciais, conversas tecnicas e novas parcerias."
            />

            <div className="mt-10 rounded-[2.5rem] border border-slate-200 bg-white/80 p-7 backdrop-blur">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
                  Resposta 24-48h
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Contacto institucional
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {details.map(({ icon: Icon, title, value, note }) => (
                  <div
                    key={title}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-slate text-white">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                          {title}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-brand-slate">{value}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.75rem] border border-slate-200 bg-white shadow-panel">
            <div className="border-b border-slate-200 bg-[linear-gradient(135deg,_rgba(248,250,252,1),_rgba(241,245,249,0.92))] px-7 py-6 md:px-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                Formulario
              </p>
              <h3 className="mt-3 font-heading text-3xl font-bold text-brand-slate">
                Inicie a conversa com contexto.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Partilhe o essencial e a Bolina Tec responde com o proximo passo.
              </p>
            </div>

            <form className="space-y-5 px-7 py-7 md:px-8 md:py-8" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Nome</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    className={`w-full rounded-2xl border bg-slate-50/90 px-4 py-3 text-base text-slate-900 outline-none transition focus:bg-white focus:ring-2 ${
                      errors.name
                        ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100'
                        : 'border-slate-200 focus:border-slate-400 focus:ring-slate-100'
                    }`}
                  />
                  {errors.name ? <p className="text-sm text-rose-600">{errors.name}</p> : null}
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-semibold text-slate-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    className={`w-full rounded-2xl border bg-slate-50/90 px-4 py-3 text-base text-slate-900 outline-none transition focus:bg-white focus:ring-2 ${
                      errors.email
                        ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100'
                        : 'border-slate-200 focus:border-slate-400 focus:ring-slate-100'
                    }`}
                  />
                  {errors.email ? <p className="text-sm text-rose-600">{errors.email}</p> : null}
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Empresa</span>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/90 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
                />
              </label>

              <label className="hidden">
                <span>Website</span>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Mensagem</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="7"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  placeholder="Descreva o contexto do projeto, da parceria ou do pedido."
                  className={`min-h-[210px] w-full resize-none rounded-[1.75rem] border bg-slate-50/90 px-4 py-3 text-base text-slate-900 outline-none transition focus:bg-white focus:ring-2 ${
                    errors.message
                      ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100'
                      : 'border-slate-200 focus:border-slate-400 focus:ring-slate-100'
                  }`}
                />
                {errors.message ? <p className="text-sm text-rose-600">{errors.message}</p> : null}
              </label>

              <div className="rounded-[1.75rem] bg-brand-mist p-4 md:p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-xl text-sm leading-7 text-slate-600">
                    Resposta simples, validacao essencial e retorno rapido.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-cta text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'A enviar...' : 'Enviar mensagem'}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {status.message ? (
                <div
                  className={`rounded-[1.5rem] px-5 py-4 text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'bg-rose-50 text-rose-800'
                  }`}
                  aria-live="polite"
                >
                  {status.message}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
