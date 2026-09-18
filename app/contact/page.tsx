import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="lattice-texture bg-[var(--forest-deep)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-display text-lg text-[var(--sage-light)]">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl text-[var(--stone)] md:text-5xl">
          Ready to get started? Or just have questions?
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-[var(--stone)]/75">
          Send a few details below and we&rsquo;ll be in touch shortly to
          schedule a walkthrough.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl px-6">
        <ContactForm />
      </div>

      <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-[var(--stone)]/15 px-6 pt-10 text-sm text-[var(--stone)]/80">
        <div>
          <p className="font-medium text-[var(--stone)]">Call</p>
          <a href="tel:12059991871" className="mt-1 block hover:underline">
            205-999-1871
          </a>
        </div>
        <div>
          <p className="font-medium text-[var(--stone)]">Email</p>
          <a
            href="mailto:info@lmcconstructionco.com"
            className="mt-1 block hover:underline"
          >
            info@lmcconstructionco.com
          </a>
        </div>
        <div>
          <p className="font-medium text-[var(--stone)]">Service area</p>
          <p className="mt-1">Birmingham, AL and surrounding areas</p>
        </div>
        <div>
          <p className="font-medium text-[var(--stone)]">Hours</p>
          <p className="mt-1">Mon&ndash;Fri, 7am&ndash;6pm &middot; Sat by appointment</p>
        </div>
      </div>
    </div>
  );
}
