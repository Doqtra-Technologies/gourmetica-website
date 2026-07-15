import { PageContainer } from '@/core/primitives';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceImageHero } from '../components/ServiceImageHero';
import { SplitBackgroundBlock } from '@/blocks';
import { ServiceBodyImage } from '../components/ServiceBodyImage';
import { ServiceBodyText } from '../components/ServiceBodyText';
import { ServiceFeatureListGrid } from '../components/ServiceFeatureListGrid';

const PARAGRAPHS = [
  'As a Gourmetica specializing in hospitality marketing, we are primed to assist you in forging an indelible brand identity, enabling you to shine brilliantly amidst the fiercest competition.',
  'Harnessing the potency of compelling marketing tools and delectable ideas, we extend our unwavering support in an array of areas. Our expertise encompasses captivating graphic design, meticulous logo creation, crafting resonant brand messaging, strategic brand positioning, and the cultivation of an authentic brand voice. Each facet is meticulously tailored to elevate your establishment above the rest, fostering an enduring imprint in the hearts and minds of your esteemed clientele.',
  'Embrace our proven methodologies and let us orchestrate a symphony of branding prowess, ensuring that your establishment resonates powerfully with discerning audiences and emerges as a veritable beacon of distinction within the hospitality industry.',
];

const FEATURES = [
  {
    icon: '/images/services-ref/branding/branding1.png',
    title: 'Logo Design',
    description: 'Your logo carries your business identity everywhere it goes. Make sure it is unique, bold, and worth remembering.',
  },
  {
    icon: '/images/services-ref/branding/branding2.png',
    title: 'Signage & Interior Design',
    description: 'Make sure every detail reflects your brand. Create a cohesive identity for your space with signage and interior design.',
  },
  {
    icon: '/images/services-ref/branding/branding3.png',
    title: 'Print Collateral',
    description: 'Support and enhance your brand with print collateral designed to connect with customers.',
  },
];

export function BrandingPage() {
  return (
    <ServiceLayout>
      <ServiceImageHero
        src="/SERVICES BANNER/Branding.png"
        alt="Brand identity moodboard being designed on a laptop"
        title="Restaurant Branding"
        subtitle="Be the best choice for your customers - every time. A memorable logo and consistent branding are keys to getting inside customers' minds and staying there."
      />
      <SplitBackgroundBlock>
        <PageContainer size="standard" className="pb-[60px] md:pb-[80px]">
          <ServiceBodyImage
            src="/images/services-ref/branding/UpdatedVersion.jpg"
            alt="Gourmetica branded packaging"
            maxWidth={1320}
          />
        </PageContainer>
        <PageContainer size="standard" className="pb-[60px] md:pb-[80px]">
          <ServiceBodyText paragraphs={PARAGRAPHS} />
        </PageContainer>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px]">
          <ServiceFeatureListGrid features={FEATURES} />
        </PageContainer>
      </SplitBackgroundBlock>
    </ServiceLayout>
  );
}
