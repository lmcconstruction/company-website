import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="max-w-xl">
        <p className="font-display text-lg text-[var(--forest-mid)]">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl text-[var(--forest-deep)] md:text-5xl">
          Tell us about your project.
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-[var(--ink)]/80">
          Send a few details and we'll get back to you to schedule a walkthrough.
        </p>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-[3fr_2fr]">
        <ContactForm />

        <div className="corner-mark space-y-6 p-8 text-sm text-[var(--ink)]/75">
          <div>
            <p className="font-medium text-[var(--forest-deep)]">Call</p>
            <p className="mt-1">
              <a href="tel:12059991871" className="hover:underline">
                205-999-1871
              </a>
            </p>
          </div>
          <div>
            <p className="font-medium text-[var(--forest-deep)]">
              Service area
            </p>
            <p className="mt-1">Birmingham, AL and surrounding areas</p>
          </div>
          <div>
            <p className="font-medium text-[var(--forest-deep)]">Hours</p>
            <p className="mt-1">Mon&ndash;Fri, 7am&ndash;6pm</p>
            <p>Saturday by appointment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
