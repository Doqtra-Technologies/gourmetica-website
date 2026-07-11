import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Box } from "@/core/primitives";
import { Heading, Text } from "@/core/typography";
import { Button } from "@/core/components";
import { ARTICLE_DETAILS } from "@/constants/articles";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return [
    { slug: "how-to-generate-more-leads-2026" },
    { slug: "10-website-mistakes-costing-customers" },
    { slug: "why-branding-matters-more-than-ever" }
  ];
}

export default async function NewsDetail({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLE_DETAILS[slug];

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#fafaf9] min-h-screen pb-24" style={{ backgroundColor: "#fafaf9", paddingTop: "8rem", paddingBottom: "6rem" }}>
      <Container size="wide">
        <Box 
          className="mx-auto bg-white border border-neutral-200/50 rounded-sm shadow-sm p-6 md:p-12 lg:p-16"
          style={{ 
            maxWidth: "860px", 
            backgroundColor: "#ffffff", 
            marginTop: "20px" 
          }}
        >
          {/* Back button */}
          <Box className="mb-6">
            <Link 
              href="/news" 
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#E42528] font-bold text-[12px] uppercase tracking-wider transition-colors duration-200 no-underline"
            >
              ← Back to Insights
            </Link>
          </Box>

          {/* Metadata line */}
          <Box className="flex items-center gap-2 text-neutral-400 font-secondary text-[13px] mb-3">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </Box>

          {/* Title */}
          <Heading level={1} className="font-mont font-black text-[28px] md:text-[38px] lg:text-[44px] text-neutral-900 leading-tight mb-8">
            {article.title}
          </Heading>

          {/* Featured Image */}
          <Box className="overflow-hidden aspect-[16/9] rounded-sm bg-neutral-100 mb-10">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover" 
            />
          </Box>

          {/* Article Paragraphs */}
          {/* Justified text forms whitespace rivers at phone widths — left-align below md */}
          <Box className="flex flex-col gap-6 text-neutral-800 leading-relaxed text-left md:text-justify" style={{ fontSize: "17.5px" }}>
            {article.content.map((p, idx) => (
              <p 
                key={idx} 
                className={idx === 0 ? "text-[19px] md:text-[20px] font-medium leading-relaxed text-neutral-900" : ""}
                style={{ 
                  lineHeight: "1.75", 
                  fontFamily: "var(--font-body)" 
                }}
              >
                {p}
              </p>
            ))}
          </Box>

          {/* Footer CTA */}
          <Box 
            className="mt-16 pt-12 flex flex-col gap-4 text-center max-w-xl mx-auto" 
            style={{ borderTop: "1px solid rgba(229, 229, 229, 0.5)" }}
          >
            <Heading level={3} className="font-mont font-extrabold text-[20px] md:text-[24px] text-neutral-900">
              Want to accelerate your company&apos;s growth?
            </Heading>
            <Text size="body-sm" className="text-neutral-500 leading-relaxed">
              Reach out to Gourmetica today. Our strategy team can review your digital assets and construct a tailored growth framework for your business.
            </Text>
            <Box className="pt-2" style={{ paddingTop: "0.5rem" }}>
              <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[30px] py-[15px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto">
                <Link href="/getintouch">
                  Schedule A Discovery Call
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
