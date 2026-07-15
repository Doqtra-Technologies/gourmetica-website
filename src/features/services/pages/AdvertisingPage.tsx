import Link from 'next/link';
import { PageContainer } from '@/core/primitives';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceImageHero } from '../components/ServiceImageHero';
import { SplitBackgroundBlock } from '@/blocks';
import { ServiceBodyText } from '../components/ServiceBodyText';
import { ServiceBodyImage } from '../components/ServiceBodyImage';
import { ServiceFeatureListGrid } from '../components/ServiceFeatureListGrid';

const PARAGRAPHS = [
  'From Google Ads and Meta campaigns to remarketing and conversion optimisation, we help businesses reach the right audience, reduce wasted spend and generate real business results.',
];

const FEATURES = [
  {
    icon: '/images/services-ref/advertising/adver1.png',
    title: 'Display Advertising',
    description: 'Get more than just a glance and help customers visualize your business through effective image.',
  },
  {
    icon: '/images/services-ref/advertising/adver2.png',
    title: '(SEM) Search Engine Marketing',
    description: 'Make sure your ads are present when a customer is searching.',
  },
  {
    icon: '/images/services-ref/advertising/adver3.png',
    title: 'Video Marketing',
    description: 'Invite customers to see themselves inside of your business with video ads.',
  },
  {
    icon: '/images/services-ref/advertising/adver4.png',
    title: 'Retargeting',
    description: 'Ensure that your advertisements have left a lasting impact and occupy.',
  },
];

export function AdvertisingPage() {
  return (
    <ServiceLayout>
      <ServiceImageHero
        src="/SERVICES BANNER/Advertising.png"
        alt="Advertising performance dashboard on a laptop"
        title="Advertising"
        subtitle="Performance-driven advertising that delivers measurable growth."
      />
      <SplitBackgroundBlock>
        <PageContainer size="standard" className="pb-[50px] md:pb-[60px]">
          <ServiceBodyText paragraphs={PARAGRAPHS} />
        </PageContainer>
        <PageContainer size="standard" className="pb-[60px] md:pb-[80px]">
          <ServiceBodyImage
            src="/images/services-ref/advertising/advertistbg3.jpg"
            alt="Restaurant marketing spend illustration"
            maxWidth={620}
          />
        </PageContainer>
        <PageContainer size="standard" className="pb-[60px] md:pb-[90px]">
          <ServiceFeatureListGrid features={FEATURES} />
        </PageContainer>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px] text-center">
          <p className="text-[15px] md:text-[16px] text-black">
            Learn more about our{' '}
            <Link href="/#services" className="text-[#e8503a] font-semibold hover:underline">
              Restaurant Marketing
            </Link>{' '}
            services.
          </p>
        </PageContainer>
      </SplitBackgroundBlock>
    </ServiceLayout>
  );
}
