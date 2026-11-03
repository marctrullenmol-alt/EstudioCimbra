import { brand, contact, footer } from '../content'

export function Contact() {
  return (
    <section id="contacto" data-section className="flex min-h-svh flex-col justify-end">
      <div data-reveal className="mx-auto w-full max-w-3xl px-6 pb-20 text-center">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
          {contact.title} <span className="text-gradient">{contact.highlight}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/65">{contact.text}</p>
        <div className="mt-10">
          <a href={`mailto:${brand.email}`} className="btn-primary">
            {contact.cta}
          </a>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-ink/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/45 md:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.fullName}. Todos los derechos reservados.
          </p>
          <ul className="flex gap-6">
            {footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </section>
  )
}
