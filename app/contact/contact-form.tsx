"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project inquiry from ${name || "website visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
    );
    window.location.href = `mailto:info@lmcconstruction.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
          placeholder="Tell us about the project"
          className="underline-field resize-none"
        />
      </label>

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          aria-label="Send inquiry"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--forest-mid)] text-[var(--stone)] transition-colors hover:bg-[var(--sage-light)] hover:text-[var(--forest-deep)]"
        >
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <path
              d="M1 1L23 9L1 17L6 9L1 1Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
