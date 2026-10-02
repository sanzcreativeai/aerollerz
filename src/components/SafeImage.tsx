"use client";
import { useState } from "react";

export default function SafeImage({ src, alt, className = "", loading = "lazy", sizes }: { src: string; alt: string; className?: string; loading?: "lazy" | "eager"; sizes?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className={`bg-mesh ${className}`} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading={loading} decoding="async" sizes={sizes} onError={() => setFailed(true)} className={className} />;
}
