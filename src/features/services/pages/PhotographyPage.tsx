import { PageContainer } from '@/core/primitives';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceImageHero } from '../components/ServiceImageHero';
import { SplitBackgroundBlock } from '@/blocks';
import { ServiceSectionHeading } from '../components/ServiceSectionHeading';
import { ServiceFeatureListGrid } from '../components/ServiceFeatureListGrid';

const FEATURES = [
  {
    icon: '/images/services-ref/photography/pht1.png',
    title: 'Product Photography',
    description: 'Express that your brand is more than food and location by displaying all of your offerings creatively.',
  },
  {
    icon: '/images/services-ref/photography/pht2.png',
    title: 'Interior Photography',
    description: 'Invite your customers into your space by showing off the atmosphere of your business.',
  },
  {
    icon: '/images/services-ref/photography/pht3.png',
    title: 'Cinemagraphs',
    description: 'Experience the perfect fusion of visual enchantment, captivating your customers with dynamic imagery that mesmerizes their senses.',
  },
  {
    icon: '/images/services-ref/photography/pht4.png',
    title: 'Virtual Tours',
    description:
      'Immerse customers in the enticing experience of your busines by enticing them to step inside and guiding them on a captivating journey throughout your welcoming establishment.',
  },
];

export function PhotographyPage() {
  return (
    <ServiceLayout>
      <ServiceImageHero
        src="/SERVICES BANNER/Photography.png"
        alt="Photographer capturing food and drink"
        title="Photography"
        align="center"
      />
      <SplitBackgroundBlock>
        <PageContainer size="standard" className="py-[70px] md:py-[110px] flex flex-col gap-10">
          <ServiceSectionHeading
            heading="Photography"
            subtext="It's all about presentation. Create images of your cuisine to entice customers"
          />
          <ServiceFeatureListGrid features={FEATURES} />
        </PageContainer>
      </SplitBackgroundBlock>
    </ServiceLayout>
  );
}
