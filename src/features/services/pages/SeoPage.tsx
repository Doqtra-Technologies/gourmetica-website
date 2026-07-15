import { PageContainer } from '@/core/primitives';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceImageHero } from '../components/ServiceImageHero';
import { SplitBackgroundBlock } from '@/blocks';
import { ServiceBodyImage } from '../components/ServiceBodyImage';
import { ServiceSectionHeading } from '../components/ServiceSectionHeading';
import { ServiceBodyText } from '../components/ServiceBodyText';
import { ServiceFeatureListGrid } from '../components/ServiceFeatureListGrid';

const INTRO_PARAGRAPHS = [
  'We develop SEO strategies that improve your visibility, increase organic traffic and help your business rank for the searches that matter most. Every strategy is built around sustainable, measurable growth—not short-term wins.',
];

const SUCCESS_PARAGRAPHS = [
  'Unleashing the full potential of Search Engine Optimization, we empower your business to gain substantial traction in the online realm. With our unwavering commitment to delivering exceptional results, we utilize cutting-edge techniques, meticulous keyword research, and optimized content to propel your website towards the pinnacle of search engine rankings. As a result, your enterprise will enjoy enhanced visibility, increased website traffic, and a formidable online presence that will solidify its standing as a force to be reckoned with.',
  'Partner with us to unlock the remarkable benefits that SEO bestows upon businesses of all sizes. Together, we shall embark on a path towards lasting success, firmly establishing your brand at the forefront of the digital landscape and garnering the attention and acclaim it truly deserves.',
];

const FEATURES = [
  {
    icon: '/images/services-ref/seo/seo1.png',
    title: 'On-Site SEO',
    description: 'The content and design of your page is more important than you may think. Make sure your website is primed to read relevant to search engines.',
  },
  {
    icon: '/images/services-ref/seo/seo2.png',
    title: 'Conversion Tracking',
    description:
      "While your website may possess an appealing aesthetic and provide valuable information, it's crucial to assess its true revenue-generating potential. Monitor customer engagement with your website to determine the actual conversion rates and uncover the tangible impact it has on your bottom line.",
  },
  {
    icon: '/images/services-ref/seo/seo3.png',
    title: 'Off-Site SEO',
    description:
      'While your website boasts an abundance of valuable content, it is imperative to establish a sense of trust with search engines. Forge connections with esteemed and reputable resources within your industry to gain the recognition you rightfully deserve. By aligning your website with authoritative entities, you can enhance its credibility and foster a stronger relationship with search engines.',
  },
];

export function SeoPage() {
  return (
    <ServiceLayout>
      <ServiceImageHero
        src="/SERVICES BANNER/SEO.png"
        alt="Analysing search performance data on a laptop"
        title="Search Engine Optimisation (SEO)"
        subtitle="Great businesses deserve to be found."
      />
      <SplitBackgroundBlock>
        <PageContainer size="standard" className="pb-[60px] md:pb-[80px]">
          <ServiceBodyText paragraphs={INTRO_PARAGRAPHS} />
        </PageContainer>
        <PageContainer size="standard" className="pb-[60px] md:pb-[80px]">
          <ServiceBodyImage src="/images/services-ref/seo/bannerseo.jpg.png" alt="Google search results mockup" maxWidth={999} />
        </PageContainer>
        <PageContainer size="standard" className="pb-[60px] md:pb-[80px] flex flex-col gap-6">
          <ServiceSectionHeading heading="Gain long Terms Success through our proven SEO expertise" />
          <ServiceBodyText paragraphs={SUCCESS_PARAGRAPHS} />
        </PageContainer>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px] flex flex-col gap-10">
          <ServiceSectionHeading
            heading="SEO Audit"
            subtext="Not sure where you stand in results? An SEO Audit demystifies the process it takes for customers to find your information."
          />
          <ServiceFeatureListGrid features={FEATURES} />
        </PageContainer>
      </SplitBackgroundBlock>
    </ServiceLayout>
  );
}
