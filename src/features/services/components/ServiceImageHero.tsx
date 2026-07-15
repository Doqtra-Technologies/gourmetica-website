import { PageContainer } from '@/core/primitives';
import { cn } from '@/core/utils';

interface ServiceImageHeroProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function ServiceImageHero({ src, alt, title, subtitle, align = 'left' }: ServiceImageHeroProps) {
  return (
    <section className="relative w-full h-[420px] md:h-[560px] lg:h-[660px] overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      {/* Scrim: the banners are bright, so a flat wash leaves white text unreadable.
          Left-aligned heroes get a directional gradient that darkens only behind the copy. */}
      <div
        className={cn(
          'absolute inset-0',
          align === 'left'
            ? 'bg-gradient-to-r from-black/80 via-black/50 to-black/10'
            : 'bg-black/45'
        )}
      />
      <div className="absolute inset-0 flex items-center">
        <PageContainer size="standard" className="w-full">
          <h1
            className={cn(
              'font-heading font-semibold uppercase text-white leading-[1.02] tracking-[-0.01em]',
              'text-[34px] sm:text-[44px] md:text-[58px] lg:text-[72px]',
              align === 'left' ? 'max-w-[780px]' : 'mx-auto max-w-[900px] text-center'
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                'mt-5 text-[16px] md:text-[18px] leading-[1.7] text-white/80',
                align === 'left' ? 'max-w-[620px]' : 'mx-auto max-w-[700px] text-center'
              )}
            >
              {subtitle}
            </p>
          )}
        </PageContainer>
      </div>
    </section>
  );
}
