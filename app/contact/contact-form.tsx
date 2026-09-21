"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "395e2526-59aa-4781-a51e-b78c92a3b9a9";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({
  inquiryProject,
}: {
  inquiryProject?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const subject = inquiryProject
      ? `New inquiry about ${inquiryProject} from ${name || "website visitor"}`
      : `New project inquiry from ${name || "website visitor"}`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: "LMC Construction website",
          name,
          email,
          inquiring_about: inquiryProject || undefined,
          project_type: projectType,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setProjectType("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-10 text-center">
        <p className="font-display text-2xl text-[var(--stone)]">
          Message sent.
        </p>
        <p className="mt-3 text-[15px] text-[var(--stone)]/75">
          Thanks for reaching out — we&rsquo;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {inquiryProject && (
        <div className="flex items-center gap-3 border border-[var(--sage-light)]/40 bg-[var(--stone)]/5 px-4 py-3 text-sm text-[var(--stone)]">
          <span className="text-[var(--sage-light)]">Inquiring about:</span>
          <span className="font-medium">{inquiryProject}</span>
        </div>
      )}

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="sr-only">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name*"
            className="underline-field"
            type="text"
          />
        </label>
        <label className="block text-sm">
          <span className="sr-only">Email</span>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            className="underline-field"
            type="email"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="sr-only">Project type</span>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="underline-field"
        >
          <option value="" className="text-[var(--ink)]">
            Project type
          </option>
          <option className="text-[var(--ink)]">Custom home</option>
          <option className="text-[var(--ink)]">Addition</option>
          <option className="text-[var(--ink)]">
            Kitchen or bath remodel
          </option>
          <option className="text-[var(--ink)]">Structural repair</option>
          <option className="text-[var(--ink)]">Not sure yet</option>
        </select>
      </label>

      <label className="block text-sm">
        <span className="sr-only">Message</span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder={
            inquiryProject
              ? `Tell us what you'd like to know about ${inquiryProject}`
              : "Tell us about the project"
          }
          className="underline-field resize-none"
        />
      </label>

      {status === "error" && (
        <p className="text-center text-sm text-[#e2a56a]">
          Something went wrong sending that. Please try again, or call
          205-999-1871 directly.
        </p>
      )}

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Send inquiry"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--forest-mid)] text-[var(--stone)] transition-colors hover:bg-[var(--sage-light)] hover:text-[var(--forest-deep)] disabled:opacity-60"
        >
          {status === "sending" ? (
            <span className="text-xs tracking-wide">...</span>
          ) : (
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
              <path
                d="M1 1L23 9L1 17L6 9L1 1Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}
