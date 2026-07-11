"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageContainer } from "@/core/primitives";
import { cn } from "@/core/utils";
import type { ExtendedCaseStudy } from "@/constants/results";

interface WorkGridProps {
  cases: ExtendedCaseStudy[];
}

const FILTERS: { label: string; value: string | null }[] = [
  { label: "All", value: null },
  { label: "Hospitality", value: "Hospitality" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Ecommerce", value: "E-Commerce" },
  { label: "Finance", value: "Finance" },
  { label: "Multi-Location & Franchise", value: "Multi-Location & Franchise" },
];

export function WorkGrid({ cases }: WorkGridProps) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeLabel = FILTERS.find((f) => f.value === activeFilter)?.label ?? "All";

  const filteredCases = useMemo(
    () => (activeFilter ? cases.filter((c) => c.category === activeFilter) : cases),
    [cases, activeFilter]
  );

  const handleSelectFilter = (value: string | null) => {
    setIsOpen(false);

    if (value === null) {
      setActiveFilter(null);
      return;
    }

    const matches = cases.filter((c) => c.category === value);
    // A category with only one case study skips the grid entirely and goes straight to its page.
    if (matches.length === 1 && matches[0]) {
      router.push(`/results/${matches[0].slug}`);
      return;
    }

    setActiveFilter(value);
  };

  return (
    <>
      {/* Filter dropdown */}
      <PageContainer size="standard" className="relative z-30 pb-[40px] md:pb-[50px]">
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            className="flex items-center gap-3 font-heading font-bold uppercase text-[12px] tracking-widest px-5 py-3 border border-neutral-300 bg-white text-black hover:border-black transition-colors duration-200 min-w-[220px] justify-between"
          >
            {activeLabel}
            <svg
              className={cn("w-3 h-3 transition-transform duration-200", isOpen && "rotate-180")}
              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            role="listbox"
            className={cn(
              "absolute left-0 top-full mt-2 w-full min-w-[220px] bg-white border border-neutral-200 shadow-lg z-20 transition-all duration-200 ease-out",
              isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
            )}
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.label}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => handleSelectFilter(filter.value)}
                  className={cn(
                    "block w-full text-left font-heading font-bold uppercase text-[12px] tracking-widest px-5 py-3 transition-colors duration-150",
                    isActive ? "bg-black text-white" : "text-neutral-700 hover:bg-neutral-100"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </PageContainer>

      {/* Desktop / tablet — edge-to-edge square photo grid */}
      <div className="hidden md:grid md:grid-cols-3">
        {filteredCases.map((study) => (
          <Link
            key={study.slug}
            href={`/results/${study.slug}`}
            className="relative block overflow-hidden group aspect-square bg-black"
          >
            <img
              src={study.image}
              alt={study.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            />
            <span
              className="absolute inset-0 flex items-end p-9 font-heading font-bold text-white text-[24px] lg:text-[32px] xl:text-[37px] leading-[1] tracking-[0.01em] [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]"
            >
              {study.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile — stacked list with excerpt and read more link */}
      <PageContainer size="standard" className="md:hidden pb-[60px] flex flex-col">
        {filteredCases.map((study) => (
          <div key={study.slug} className="py-8 border-t border-neutral-200 first:border-t-0 first:pt-0">
            <div className="relative w-full h-[250px] mb-5 overflow-hidden">
              <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <h2 className="font-heading font-bold text-black text-[25px] leading-[1.1] tracking-[0.01em] mb-2">{study.title}</h2>
            <p className="text-[14px] leading-[1.6] text-neutral-600 mb-3 line-clamp-2">{study.excerpt}</p>
            <Link
              href={`/results/${study.slug}`}
              className="inline-flex items-center gap-2 text-primary font-heading font-bold uppercase text-[12px] tracking-widest"
            >
              Read More <i className="not-italic" aria-hidden="true">→</i>
            </Link>
          </div>
        ))}
      </PageContainer>

      {filteredCases.length === 0 && (
        <PageContainer size="standard" className="pb-[100px] text-center">
          <p className="text-neutral-500 text-[15px]">No case studies in this category yet.</p>
        </PageContainer>
      )}
    </>
  );
}
