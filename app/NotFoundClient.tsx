"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundClient() {
  const router = useRouter();

  return (
    <div
      id="not-found-page"
      className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center"
      style={{
        minHeight: "70vh",
        background:
          "radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--accent) 8%, transparent) 0%, transparent 70%)",
      }}
    >
      <div
        className="animate-float"
        style={{
          fontSize: "clamp(6rem, 20vw, 10rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          background:
            "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          userSelect: "none",
          marginBottom: "0.25em",
        }}
      >
        404
      </div>

      <div
        style={{
          width: 48,
          height: 4,
          borderRadius: 2,
          background:
            "linear-gradient(90deg, var(--primary), var(--accent))",
          marginBottom: 24,
        }}
      />

      <h1
        className="text-3xl font-semibold tracking-tight"
        style={{
          color: "var(--foreground)",
          marginBottom: 12,
        }}
      >
        Page not found
      </h1>

      <p
        className="max-w-sm text-base leading-relaxed"
        style={{
          color: "var(--muted-foreground)",
          marginBottom: 32,
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been
        moved. Let&apos;s get you back on track.
      </p>

      <div
        className="flex flex-wrap items-center justify-center gap-3"
        style={{ marginBottom: 48 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md"
          style={{
            background:
              "linear-gradient(135deg, var(--primary), var(--accent))",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Home
        </Link>

        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold shadow-sm transition-all hover:shadow-md"
          style={{
            borderColor: "var(--border)",
            color: "var(--foreground)",
            background: "var(--card)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Go Back
        </button>
      </div>
    </div>
  );
}
