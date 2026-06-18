"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/types";

export function ProjectCodeViewer({
  projectTitle,
  sourceCode
}: {
  projectTitle: string;
  sourceCode: NonNullable<Project["sourceCode"]>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const lines = useMemo(() => sourceCode.code.split("\n"), [sourceCode.code]);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(sourceCode.code);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = sourceCode.code;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="focus-ring rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink"
      >
        Source Code
      </button>

      {isOpen ? (
        <div className="code-modal fixed inset-0 z-50 grid place-items-center bg-ink/45 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${projectTitle} source code`}>
          <div className="code-window w-full max-w-5xl overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
            <div className="flex flex-col justify-between gap-3 border-b border-line px-5 py-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{sourceCode.language}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{sourceCode.fileName}</h3>
                <p className="mt-1 text-sm text-muted">{projectTitle}</p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={copyCode} className="focus-ring rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink">
                  {copied ? "Copied" : "Copy Code"}
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className="focus-ring rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5">
                  Close
                </button>
              </div>
            </div>

            <div className="code-scroll max-h-[68vh] overflow-auto">
              <pre className={`language-${sourceCode.language} min-w-full p-0 text-sm leading-6`}>
                <code>
                  {lines.map((line, index) => (
                    <span key={`${sourceCode.fileName}-${index}`} className="code-line block whitespace-pre">
                      <span className="code-line-number inline-block w-12 select-none pr-4 text-right text-muted">{index + 1}</span>
                      <span>{line || " "}</span>
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
