import { PageContainer } from '@/core/primitives';
import { ServiceLayout } from '../layouts/ServiceLayout';
import { ServiceImageHero } from '../components/ServiceImageHero';
import { SplitBackgroundBlock } from '@/blocks';
import { ServiceSectionHeading } from '../components/ServiceSectionHeading';
import { ServiceBodyText } from '../components/ServiceBodyText';
import { ServiceFeatureListGrid } from '../components/ServiceFeatureListGrid';

const INTRO_PARAGRAPHS = [
  'From the initial stages of strategizing to the ultimate execution, our unwavering support encompasses a wide array of services. We deftly craft bespoke strategies tailored to each platform, devising channel-specific solutions that elevate audience engagement. Our adept team oversees every facet of the process, including account creation, branding, campaign management, community nurturing, as well as comprehensive research and analysis.',
  'Be it Facebook, Instagram, Twitter, LinkedIn, Google+, or Pinterest, we possess the expertise to harness the true potential of the platform that best aligns with your objectives. Together, we will cultivate a thriving social media presence, reaping the remarkable benefits that await within this dynamic digital realm.',
];

const FEATURES = [
  {
    icon: '/images/services-ref/social-media/sma1.png',
    title: 'Review Management',
    description: 'Steer conversations in the right direction by keeping an eye on your business reviews and feedback.',
  },
  {
    icon: '/images/services-ref/social-media/sma2.png',
    title: 'Customer Engagement',
    description: 'Use your social media interactions to reward loyal customers and to encourage potential customers.',
  },
  {
    icon: '/images/services-ref/social-media/sma3.png',
    title: 'Social Media Posting',
    description: 'Build a community around your brand. Create posts to strengthen ties with existing and developing customers.',
  },
  {
    icon: '/images/services-ref/social-media/sma4.png',
    title: 'Influencer Engagement',
    description: 'Make a strategic connection with the contacts that matter most. Social media influencers have expansive fan bases that give you access to new networks.',
  },
  {
    icon: '/images/services-ref/social-media/sma4.png',
    title: 'Content Marketing',
    description: 'Creating compelling and relevant content, such as blog posts, articles, and videos, to establish your business as an authoritative source and attract potential customers.',
  },
];

export function SocialMediaPage() {
  return (
    <ServiceLayout>
      <ServiceImageHero
        src="/SERVICES BANNER/SOCIAL MEDIA MANAGEMENT.png"
        alt="Social media management desk scene"
        title="Social Media Management (SMM)"
        align="left"
      />
      <SplitBackgroundBlock>
        <PageContainer size="standard" className="py-[60px] md:py-[80px] flex flex-col gap-6">
          <ServiceSectionHeading heading="Social Media Management (SMM)" />
          <ServiceBodyText paragraphs={INTRO_PARAGRAPHS} />
        </PageContainer>
        <PageContainer size="standard" className="pb-[100px] md:pb-[140px] flex flex-col gap-10">
          <ServiceSectionHeading
            heading="(SMA) Social Media Advertising"
            subtext="Give your brand a voice in the places where customers are listening. Advertising on social media speaks volumes to potential customers."
          />
          <ServiceFeatureListGrid features={FEATURES} />
        </PageContainer>
      </SplitBackgroundBlock>
    </ServiceLayout>
  );
}
