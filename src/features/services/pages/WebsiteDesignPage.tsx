import { PageContainer } from '@/core/primitives';
import { Zap } from 'lucide-react';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceImageHero } from '../components/ServiceImageHero';
import { SplitBackgroundBlock } from '@/blocks';
import { ServiceFeatureListGrid } from '../components/ServiceFeatureListGrid';

// Icons reused from gourmetica.co.uk/webdesigndevelopment.php's icon set.
// The reference site has no "speed/performance" icon among its 5 web design icons,
// so Fast Performance falls back to a lucide icon in the same visual weight.
const FEATURES = [
  {
    icon: '/images/services-ref/website-design/web1.png',
    title: 'Custom Design',
    description: 'Every website is uniquely designed to reflect your brand and support your business objectives.',
  },
  {
    icon: '/images/services-ref/website-design/web3.png',
    title: 'Responsive Design',
    description: 'Optimised for desktop, tablet and mobile to deliver a seamless experience on every device.',
  },
  {
    icon: '/images/services-ref/website-design/web2.png',
    title: 'Easy Content Management',
    description: 'Update pages, images and content effortlessly through a simple, user-friendly CMS.',
  },
  {
    icon: '/images/services-ref/website-design/web4.png',
    title: 'SEO Ready',
    description: 'Built with technical SEO best practices to improve visibility and support long-term growth.',
  },
  {
    icon: <Zap size={26} strokeWidth={1.5} className="text-amber-500" />,
    title: 'Fast Performance',
    description: 'Optimised for speed, security and reliability to deliver an exceptional user experience.',
  },
  {
    icon: '/images/services-ref/seo/seo2.png',
    title: 'Conversion Focused',
    description: 'Designed to turn visitors into enquiries, bookings and customers through thoughtful user journeys.',
  },
];

export function WebsiteDesignPage() {
  return (
    <ServiceLayout>
      <ServiceImageHero
        src="/SERVICES BANNER/Website Design.png"
        alt="Website design and development workspace"
        title="Website Design and Development"
        align="left"
      />
      <SplitBackgroundBlock>
        <PageContainer size="standard" className="pt-[100px] md:pt-[140px] pb-[100px] md:pb-[140px]">
          <ServiceFeatureListGrid features={FEATURES} />
        </PageContainer>
      </SplitBackgroundBlock>
    </ServiceLayout>
  );
}
