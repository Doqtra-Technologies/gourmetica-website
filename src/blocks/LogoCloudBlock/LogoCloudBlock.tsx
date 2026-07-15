"use client";

import * as React from 'react';
import { cn } from '@/core/utils';
import { FadeIn, FadeUp, trustMotion } from '@/core/motion';
import { ClientLogoChip } from '@/core/components/ClientLogoChip';
import { LogoCloudBlockProps } from './LogoCloudBlock.types';

export const LogoCloudBlock = React.forwardRef<HTMLDivElement, LogoCloudBlockProps>(
  (
    {
      title,
      subtitle,
      logos,
      variant = 'marquee',
      className,
      ...props
    },
    ref
  ) => {
    const [isPaused, setIsPaused] = React.useState(false);

    /* Same rendering foundation as the /clients grid and the /products trust
       bar: natural-color artwork in a fixed-size tone-aware chip — no white-out
       filter, so opaque-background files can never flatten into gray boxes. */
    const renderLogo = (logo: { src: string; alt: string; href?: string }, index: number) => {
      const filename = logo.src.split('/').pop() ?? logo.src;
      const chip = (
        <div className="group shrink-0" title={logo.alt}>
          <ClientLogoChip
            logo={filename}
            name={logo.alt}
            className="w-40 h-20 rounded-lg p-3 border border-neutral-200 shadow-sm"
            imgClassName="group-hover:scale-105"
          />
        </div>
      );

      if (logo.href) {
        return (
          <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline-none">
            {chip}
          </a>
        );
      }
      return <React.Fragment key={index}>{chip}</React.Fragment>;
    };

    return (
      <section
        ref={ref}
        className={cn('w-full overflow-hidden', className)}
        style={{ backgroundColor: '#FAFAF9' }}
        aria-label="Trusted partners"
        {...props}
      >
        {/* ── Gradient Transition from Hero ── */}
        <div
          style={{
            height: 80,
            background: 'linear-gradient(to bottom, rgba(9,9,11,0.10) 0%, rgba(250,250,249,0.45) 30%, rgba(250,250,249,0.80) 65%, #FAFAF9 100%)',
          }}
        />

        {/* ── Section Content ── */}
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: 1320,
            paddingLeft: 'var(--page-gutter)',
            paddingRight: 'var(--page-gutter)',
          }}
        >
          {/* Intro line */}
          <FadeIn
            delay={trustMotion.divider.delay}
            duration={trustMotion.divider.duration}
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center"
          >
            {subtitle && (
              <p
                className="text-center"
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#6B6B6B',
                  maxWidth: 620,
                  margin: 0,
                }}
              >
                {subtitle}
              </p>
            )}
          </FadeIn>

          {/* 20px before heading */}
          <div style={{ height: 20 }} />

          {/* Heading */}
          <FadeUp
            delay={trustMotion.heading.delay}
            duration={trustMotion.heading.duration}
            yOffset={14}
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center"
          >
            {title && (
              <h2
                className="text-center font-heading font-bold"
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  lineHeight: 1.15,
                  color: 'var(--color-black)',
                  margin: 0,
                }}
              >
                {title}
              </h2>
            )}
          </FadeUp>

          {/* 24px before divider */}
          <div style={{ height: 24 }} />

          {/* Accent Divider */}
          <FadeIn
            delay={trustMotion.heading.delay + 0.06}
            duration={trustMotion.divider.duration}
            viewport={{ once: true, margin: '-40px' }}
            className="flex justify-center"
          >
            <div
              style={{
                width: 56,
                height: 3,
                borderRadius: 2,
                backgroundColor: 'var(--color-primary)',
              }}
            />
          </FadeIn>

          {/* 40px before logo band */}
          <div style={{ height: 40 }} />

          {/* Logo Band with structural borders */}
          <FadeIn
            delay={trustMotion.logos.delay}
            duration={trustMotion.logos.duration}
            viewport={{ once: true, margin: '-40px' }}
          >
            <div
              className="overflow-hidden"
              style={{
                borderTop: '1px solid rgba(0,0,0,0.08)',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                paddingTop: 44,
                paddingBottom: 44,
                /* Fade the strip edges so logos never appear hard-cropped */
                maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Exactly two copies: the -50% marquee keyframe then loops seamlessly
                  (three copies made the loop point jump by half a copy). */}
              <div
                className={cn(
                  "flex w-max items-center",
                  !isPaused && "animate-marquee"
                )}
                style={{
                  gap: 56,
                  paddingRight: 56, // equal to the gap so the -50% loop seam is invisible
                  animationDuration: '55s',
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              >
                {[...logos, ...logos].map((logo, index) => renderLogo(logo, index))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 80px bottom spacing before next section */}
        <div style={{ height: 80 }} />
      </section>
    );
  }
);
LogoCloudBlock.displayName = 'LogoCloudBlock';
