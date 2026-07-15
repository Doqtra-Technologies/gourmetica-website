import type { Metadata } from "next";
import Link from "next/link";
import { ALL_CASE_STUDIES } from "@/constants/results";
import { PageContainer } from "@/core/primitives";
import { WorkGrid } from "./WorkGrid";

/** The story promoted above the grid. */
const FEATURED_SLUG = "no5";

export const metadata: Metadata = {
  title: "Client Stories | Case Studies",
  description: "Browse our performance-driven growth cases spanning fine dining restaurants, e-commerce, healthcare diagnostics, commercial finance, and franchise brands."
};

export default function WorkIndex() {
  const featured = ALL_CASE_STUDIES.find((study) => study.slug === FEATURED_SLUG);

  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative w-full h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/banner/OttoNewBackground.jpg"
          alt="Guests raising a toast"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Scrim keeps the copy readable over the bright areas of the photo. */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-0 flex items-center">
          <PageContainer size="standard" className="w-full">
            <h1 className="font-heading font-bold uppercase text-white text-[40px] md:text-[58px] lg:text-[72px] leading-[1.02] tracking-[-0.01em] max-w-[780px]">
              Client Stories
            </h1>
            <p className="mt-5 max-w-[620px] text-[16px] md:text-[18px] leading-[1.7] text-white/80">
              Getting started is easy! Simply reach out to us through our contact form or give us a call, and our team will schedule a consultation to discuss your marketing needs and provide you with a tailored solution to propel your business forward.
            </p>
          </PageContainer>
        </div>
      </section>

      {/* Featured client story */}
      {featured && (
        <PageContainer size="standard" className="pt-[60px] pb-[60px] md:pt-[80px] md:pb-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Link
              href={`/results/${featured.slug}`}
              className="relative block overflow-hidden group aspect-[4/3] bg-black"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div>
              <p className="font-heading font-semibold uppercase text-[11px] tracking-[0.16em] text-primary mb-4">
                Featured Client Story
              </p>
              <h2 className="font-heading font-bold text-black text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[0.01em] mb-5">
                {featured.title}
              </h2>
              <p className="text-[16px] md:text-[17px] leading-[1.7] text-neutral-600 mb-7 max-w-[560px]">
                {featured.excerpt}
              </p>
              <Link
                href={`/results/${featured.slug}`}
                className="inline-flex items-center gap-2 text-primary font-heading font-bold uppercase text-[12px] tracking-widest"
              >
                Read Case Study <i className="fa fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </PageContainer>
      )}

      <WorkGrid cases={ALL_CASE_STUDIES} />
    </main>
  );
}
