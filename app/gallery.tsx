"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }
  function next() {
    setIndex((i) => (i + 1) % total);
  }

  return (
    <div>
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-6 flex items-center justify-center gap-6 text-[var(--stone)]">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="flex h-9 w-9 items-center justify-center border border-[var(--stone)]/40 transition-colors hover:border-[var(--stone)]"
        >
          <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
            <path
              d="M13.5 5H1M1 5L5 1M1 5L5 9"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </button>
        <p className="font-display text-lg">
          {index + 1} / {total}
        </p>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="flex h-9 w-9 items-center justify-center border border-[var(--stone)]/40 transition-colors hover:border-[var(--stone)]"
        >
          <svg width="12" height="10" viewBox="0 0 14 10" fill="none">
            <path
              d="M0.5 5H13M13 5L9 1M13 5L9 9"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
