"use client";

import { useEffect, useState } from "react";
import { cn } from "@/core/utils";

/**
 * Decides which chip a logo will actually read on. Light artwork (white or
 * pale-gray marks made for dark sites) needs a dark chip; dark artwork gets a
 * white chip. Opaque files bring their own background, so they always stay on
 * the white chip.
 */
export function useLogoTone(src: string): "light" | "dark" {
  const [tone, setTone] = useState<"light" | "dark">("dark");

  useEffect(() => {
    let active = true;
    const img = new Image();
    // NB: img.decode() is deliberately avoided — with many logos mounting at
    // once Chromium rejects part of the decode queue and the tone silently
    // stays at the default. onload + drawImage has no such limit.
    img.onload = () => {
      if (!active) return;
      try {
        const size = 48;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, size, size);
        const d = ctx.getImageData(0, 0, size, size).data;

        const total = size * size;
        let visible = 0;
        let lumaSum = 0;
        for (let i = 0; i < d.length; i += 4) {
          if (d[i + 3]! > 25) {
            visible++;
            lumaSum += 0.2126 * d[i]! + 0.7152 * d[i + 1]! + 0.0722 * d[i + 2]!;
          }
        }
        if (visible / total > 0.98 || visible === 0) return;
        if (lumaSum / visible > 175) setTone("light");
      } catch {
        /* keep the safe default */
      }
    };
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  return tone;
}

export interface ClientLogoChipProps {
  /** Filename inside /images/clients/ */
  logo: string;
  name: string;
  className?: string;
  imgClassName?: string;
}

/**
 * Shared client-logo tile: natural-color artwork on a tone-aware surface.
 * Pair with the global `.client-logo-img` styles (full natural color; the
 * transform transition supports the `.group`-hover scale effect).
 */
export function ClientLogoChip({ logo, name, className, imgClassName }: ClientLogoChipProps) {
  const tone = useLogoTone(`/images/clients/${logo}`);
  return (
    <div
      className={cn(
        "flex items-center justify-center transition-all duration-300",
        tone === "light" ? "bg-[#26262b] border border-white/10" : "bg-white",
        className
      )}
    >
      <img
        src={`/images/clients/${logo}`}
        alt={`${name} Logo`}
        className={cn("client-logo-img max-h-full max-w-[82%] object-contain", imgClassName)}
      />
    </div>
  );
}
