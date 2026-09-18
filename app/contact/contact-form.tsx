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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm">
          <span className="text-[var(--ink)]/70">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full border border-[var(--forest-deep)]/25 bg-transparent px-3 py-2 text-[15px] outline-none focus:border-[var(--forest-deep)]"
            type="text"
          />
        </label>
        <label className="block text-sm">
          <span className="text-[var(--ink)]/70">Email</span>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border border-[var(--forest-deep)]/25 bg-transparent px-3 py-2 text-[15px] outline-none focus:border-[var(--forest-deep)]"
            type="email"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="text-[var(--ink)]/70">Project type</span>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="mt-2 w-full border border-[var(--forest-deep)]/25 bg-transparent px-3 py-2 text-[15px] outline-none focus:border-[var(--forest-deep)]"
        >
          <option value="">Select one</option>
          <option>Custom home</option>
          <option>Addition</option>
          <option>Kitchen or bath renovation</option>
          <option>Structural repair</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label className="block text-sm">
        <span className="text-[var(--ink)]/70">Tell us about the project</span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="mt-2 w-full border border-[var(--forest-deep)]/25 bg-transparent px-3 py-2 text-[15px] outline-none focus:border-[var(--forest-deep)]"
        />
      </label>

      <button
        type="submit"
        className="bg-[var(--forest-deep)] px-6 py-3 text-sm text-[var(--stone)] transition-colors hover:bg-[var(--forest-mid)]"
      >
        Send inquiry
      </button>
    </form>
  );
}
