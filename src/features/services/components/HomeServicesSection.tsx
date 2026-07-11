"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { motionTokens } from '../motion.tokens';
import { SERVICES } from '@/constants/services';

const SERVICES_WITH_PAGES = [
  'Branding',
  'Website Design & Development',
  'Search Engine Optimisation (SEO)',
  'Social Media Management',
  'Photography',
  'Advertising',
];

const SERVICE_SLUGS: Record<string, string> = {
  'Branding': 'branding',
  'Website Design & Development': 'website-design-development',
  'Search Engine Optimisation (SEO)': 'search-engine-optimisation',
  'Social Media Management': 'social-media-management',
  'Photography': 'photography',
  'Advertising': 'advertising',
};

/* ─── Inline style constants (mirrors original gourmetica.co.uk exactly) ─── */
const FONT_HEADING = '"Eina 03", Montserrat, sans-serif';
const FONT_BODY = 'Raleway, sans-serif';
const FONT_SERIF = 'TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif';
const COLOR_WHITE = '#ffffff';
const COLOR_BRAND = '#e62656';
const BORDER_DEFAULT = 'rgba(255,255,255,0.1)';
const COUNT_DEFAULT = 'rgba(255,255,255,0.3)';

export function HomeServicesSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const leftServices = SERVICES.slice(0, Math.ceil(SERVICES.length / 2));
  const rightServices = SERVICES.slice(Math.ceil(SERVICES.length / 2));

  const renderAccordionItem = (
    service: typeof SERVICES[0],
    globalIndex: number,
    isFirstInColumn: boolean,
  ) => {
    const isActive = activeAccordion === globalIndex;
    const num = globalIndex + 1;
    const hasPage = SERVICES_WITH_PAGES.includes(service.title);
    const slug = SERVICE_SLUGS[service.title] || '';

    return (
      <div
        key={globalIndex}
        style={{
          display: 'block',
          position: 'relative',
          marginTop: isFirstInColumn ? 0 : '28px',
        }}
      >
        {/* Panel Heading */}
        <div>
          <h4
            style={{
              fontFamily: FONT_HEADING,
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              lineHeight: 1,
              margin: 0,
              color: COLOR_WHITE,
            }}
          >
            <a
              onClick={() => toggleAccordion(globalIndex)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleAccordion(globalIndex); }}
              aria-expanded={isActive}
              style={{
                fontFamily: FONT_HEADING,
                padding: '22px 31px 22px 19px',
                color: 'inherit',
                display: 'block',
                position: 'relative',
                cursor: 'pointer',
                borderBottom: `1px solid ${BORDER_DEFAULT}`,
                transition: 'color 0.2s ease-in-out, border-color 0.2s ease-in-out',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderBottomColor = COLOR_BRAND;
                el.style.color = COLOR_BRAND;
                el.querySelectorAll<HTMLElement>('[data-plus-line]').forEach(
                  (l) => (l.style.borderColor = COLOR_BRAND),
                );
                const count = el.querySelector<HTMLElement>('[data-count]');
                if (count) count.style.color = COLOR_BRAND;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderBottomColor = BORDER_DEFAULT;
                el.style.color = COLOR_WHITE;
                el.querySelectorAll<HTMLElement>('[data-plus-line]').forEach(
                  (l) => (l.style.borderColor = COLOR_WHITE),
                );
                const count = el.querySelector<HTMLElement>('[data-count]');
                if (count) count.style.color = COUNT_DEFAULT;
              }}
            >
              {/* Title text */}
              <span>{service.title}</span>

              {/* Plus (+) / Close (×) icon — CSS-only cross built from two border-lines */}
              <i
                style={{
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  height: '12px',
                  width: '12px',
                  position: 'absolute',
                  top: '50%',
                  transform: `translateY(-50%)${isActive ? ' rotate(45deg)' : ''}`,
                  right: '10px',
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                {/* Horizontal bar */}
                <span
                  data-plus-line=""
                  style={{
                    display: 'block',
                    position: 'absolute',
                    boxSizing: 'border-box',
                    left: 0,
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderStyle: 'solid',
                    borderWidth: '2px 0 0 0',
                    borderColor: COLOR_WHITE,
                    transition: 'border-color 0.2s ease-in-out',
                  }}
                />
                {/* Vertical bar (hidden when open → the rotated cross shows ×) */}
                {!isActive && (
                  <span
                    data-plus-line=""
                    style={{
                      display: 'block',
                      position: 'absolute',
                      boxSizing: 'border-box',
                      left: '50%',
                      bottom: 0,
                      top: 0,
                      transform: 'translateX(-50%)',
                      borderStyle: 'solid',
                      borderWidth: '0 0 0 2px',
                      borderColor: COLOR_WHITE,
                      transition: 'border-color 0.2s ease-in-out',
                    }}
                  />
                )}
              </i>

              {/* Count number (positioned left of the title text) */}
              <span
                data-count=""
                style={{
                  bottom: '-3px',
                  color: COUNT_DEFAULT,
                  display: 'block',
                  fontFamily: FONT_SERIF,
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.03em',
                  lineHeight: 1,
                  paddingRight: '10px',
                  position: 'absolute',
                  right: '100%',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s ease-in-out',
                }}
              >
                {num}
              </span>
            </a>
          </h4>
        </div>

        {/* Panel Body — animated expand / collapse */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'auto',
                opacity: 1,
                transition: {
                  height: {
                    duration: motionTokens.standard.duration,
                    ease: motionTokens.standard.ease,
                  },
                  opacity: {
                    duration: motionTokens.standard.duration,
                    ease: motionTokens.standard.ease,
                    delay: 0.05,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: motionTokens.standard.duration,
                    ease: motionTokens.standard.ease,
                  },
                  opacity: {
                    duration: motionTokens.standard.duration * 0.6,
                    ease: motionTokens.standard.ease,
                  },
                },
              }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '35px 0 38px 19px', color: COLOR_WHITE }}>
                {/* The base-layer `p { color: … }` rule beats inherited color,
                    so the paragraph must set white explicitly. */}
                <p
                  style={{
                    fontFamily: FONT_BODY,
                    fontSize: '16px',
                    fontWeight: 400,
                    letterSpacing: '0.03em',
                    lineHeight: 1.7,
                    margin: 0,
                    color: COLOR_WHITE,
                  }}
                >
                  {service.desc}
                </p>

                {hasPage && (
                  <p style={{ margin: '27px 0 0' }}>
                    <Link
                      href={`/services/${slug}`}
                      style={{
                        fontFamily: FONT_BODY,
                        color: COLOR_WHITE,
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 400,
                        letterSpacing: '0.03em',
                        lineHeight: 1.7,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                    >
                      Learn more
                    </Link>
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section
      className="our-expertise"
      id="services"
      style={{ backgroundColor: '#000000' }}
    >
      {/* ── Section Heading ── */}
      <div
        className="px-6 md:px-[50px]"
        style={{
          color: COLOR_WHITE,
          fontSize: '14px',
          fontFamily: FONT_HEADING,
          fontWeight: 600,
          letterSpacing: '0.15em',
          lineHeight: 1,
          margin: '0 auto',
          maxWidth: '1140px',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <img
          src="/images/logo/PNG.4.png"
          alt="Gourmetica Logo"
          style={{ height: '32px', width: 'auto', marginRight: '16px', display: 'block' }}
        />

        {/* Arrow SVG (exact match from original site) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="8"
          fill="none"
          style={{ display: 'inline-block', marginRight: '30px', verticalAlign: 'middle', flexShrink: 0 }}
        >
          <path
            fill="rgba(255,255,255,0.2)"
            d="M30.354 4.354a.5.5 0 0 0 0-.708L27.172.464a.5.5 0 1 0-.707.708L29.293 4l-2.828 2.828a.5.5 0 1 0 .707.708l3.182-3.182ZM0 4.5h30v-1H0v1Z"
          />
        </svg>

        {/* Title text */}
        <span>Marketing Services</span>
      </div>

      {/* ── Content Container ── single column on mobile, two columns from lg up */}
      <div style={{ margin: '0 auto', maxWidth: '1140px' }}>
        <div className="flex flex-wrap py-[64px] lg:pt-[103px] lg:pb-[147px]">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 box-border px-6 md:px-[50px]">
            {leftServices.map((service, idx) =>
              renderAccordionItem(service, idx, idx === 0),
            )}
          </div>

          {/* Right Column — on mobile it continues the single column, so its first
              item keeps the standard top margin instead of column-top spacing */}
          <div className="w-full lg:w-1/2 box-border px-6 md:px-[50px] mt-[28px] lg:mt-0">
            {rightServices.map((service, idx) =>
              renderAccordionItem(service, idx + leftServices.length, idx === 0),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
