import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/core/primitives";
import { SplitBackgroundBlock } from "@/blocks";

export const metadata: Metadata = {
  title: "Why Gourmetica",
  description: "Gourmetica is a UK-based growth marketing agency helping businesses generate more leads, increase revenue, and build brands that stand out."
};

const VALUE_SECTIONS = [
  {
    heading: "Built for Growth, Not Just Marketing",
    paragraph: "We help ambitious businesses generate more enquiries, increase revenue, and build stronger brands through data-driven marketing.",
  },
  {
    heading: "Industry Expertise",
    paragraph: "With over 10 years of experience, we've worked with restaurants, hospitality businesses, professional services, retail, and growing brands across the UK.",
  },
  {
    heading: "Results-Driven Strategy",
    paragraph: "Every campaign is built around measurable growth—from website conversions and lead generation to paid advertising, SEO, branding, and social media.",
  },
  {
    heading: "A Long-Term Partner",
    paragraph: "We're more than an agency. We become an extension of your team, helping you make smarter marketing decisions and scale your business sustainably.",
  },
];

export default function WhyGourmetica() {
  return (
    <main className="min-h-screen">
      <section className="w-full bg-white pt-[110px] pb-[60px] md:pt-[140px] md:pb-[70px]">
        <PageContainer size="standard" className="text-center">
          <h1 className="font-heading font-bold text-black text-[28px] md:text-[33px] lg:text-[37px] mb-6">
            Why Gourmetica?
          </h1>
          <p className="mx-auto max-w-[750px] text-[16px] md:text-[18px] leading-[1.7] text-neutral-600">
            Gourmetica is a UK-based growth marketing agency helping businesses generate more leads, increase revenue, and build brands that stand out.
          </p>
        </PageContainer>
      </section>

      <SplitBackgroundBlock>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px]">
          <div className="flex flex-col gap-10">
            {VALUE_SECTIONS.map((section, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h2 className="font-heading font-bold text-primary text-[20px] md:text-[22px] lg:text-[26px]">
                  {section.heading}
                </h2>
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-black text-justify">
                  {section.paragraph}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </SplitBackgroundBlock>

      {/* Closing CTA */}
      <section className="w-full bg-neutral-950 text-white text-center py-[100px] md:py-[140px]">
        <PageContainer size="standard">
          <h2 className="font-heading font-bold text-white text-[28px] md:text-[36px] lg:text-[42px] mb-5">
            Ready to grow your business?
          </h2>
          <p className="mx-auto max-w-[650px] text-[16px] md:text-[18px] leading-[1.7] text-neutral-400 mb-10">
            Let&apos;s discuss your goals and build a marketing strategy that delivers measurable results.
          </p>
          <Link
            href="/getintouch"
            className="inline-block bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[28px] pt-[16px] pb-[14px] font-bold uppercase tracking-[0.05em] text-[12px] transition-colors duration-200"
          >
            Book A Call
          </Link>
        </PageContainer>
      </section>
    </main>
  );
}
