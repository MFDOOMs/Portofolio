"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";

type CopyButtonProps = {
  value: string;
  label: string;
  /** Announced to screen readers once the copy succeeds. */
  copiedMessage: string;
};

const RESET_AFTER_MS = 2500;

/**
 * Copies a value to the clipboard and says whether it worked.
 *
 * The visible label changes for sighted users; a status region announces the
 * same result to screen readers, which don't reliably read a button's label
 * changing under focus. The Clipboard API is unavailable on insecure origins
 * and can be refused, so failure is reported rather than silently ignored.
 */
export function CopyButton({ value, label, copiedMessage }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), RESET_AFTER_MS);
    return () => clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <>
      <Button variant="outline" onClick={copy}>
        {status === "copied"
          ? "Copied"
          : status === "failed"
            ? "Couldn’t copy"
            : label}
      </Button>
      <span role="status" className="sr-only">
        {status === "copied"
          ? copiedMessage
          : status === "failed"
            ? "Couldn’t copy. Select the text on the page instead."
            : ""}
      </span>
    </>
  );
}
