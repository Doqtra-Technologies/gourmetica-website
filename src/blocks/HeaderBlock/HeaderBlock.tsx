"use client";

import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Flex } from '@/core/primitives';
import { Button } from '@/core/components';
import { cn } from '@/core/utils';
import { useScrollHeader } from '@/core/hooks/useScrollHeader';

/* ───────────────────────────────────────────
   Types
   ─────────────────────────────────────────── */
export interface NavItem { label: string; href: string; }
export interface HeaderBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  cta?: NavItem;
}

import { getServiceNavItems } from '@/features/services/repositories/service.repository';

/* ───────────────────────────────────────────
   Service Items (from repository — single source of truth)
   ─────────────────────────────────────────── */
const SERVICES = getServiceNavItems();

/* ───────────────────────────────────────────
   Navigation defaults
   ─────────────────────────────────────────── */
const defaultNavItems: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/products' },
  { label: 'Work', href: '/results' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Clients', href: '/clients' },
  { label: 'News', href: '/news' },
  { label: 'FAQs', href: '/faqs' },
];
const defaultCta: NavItem = { label: 'Get In Touch', href: '/getintouch' };

/* ───────────────────────────────────────────
   Component
   ─────────────────────────────────────────── */
export const HeaderBlock = React.forwardRef<HTMLDivElement, HeaderBlockProps>(
  ({ logo, navItems = defaultNavItems, cta = defaultCta, className, ...props }, ref) => {
    const { isScrolled } = useScrollHeader(20);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const closeTimer = useRef<NodeJS.Timeout | null>(null);

    // Close on outside click
    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Mobile menu: lock body scroll and close on Escape while open
    useEffect(() => {
      if (!isOpen) return;
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      document.addEventListener('keydown', onKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        document.removeEventListener('keydown', onKeyDown);
      };
    }, [isOpen]);

    const enter = useCallback(() => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setDropdownOpen(true);
    }, []);

    const leave = useCallback(() => {
      closeTimer.current = setTimeout(() => setDropdownOpen(false), 220);
    }, []);

    const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.includes('#')) {
        const parts = href.split('#');
        const hash = parts[parts.length - 1];
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }, []);

    const logoSrc = isScrolled ? "/images/logo/logoscroll.png" : "/images/logo/logo.png";
    const resolvedLogo = logo || (
      <img
        src={logoSrc}
        alt="Gourmetica Logo"
        className="transition-all duration-300 block"
        style={{ height: isScrolled ? 44 : 52, width: 'auto', maxHeight: '100%' }}
      />
    );

    const navLinkStyle: React.CSSProperties = { fontSize: 13.5, letterSpacing: '0.04em' };
    const navLinkClass = "font-heading font-semibold whitespace-nowrap text-white/90 hover:text-white transition-colors duration-200 uppercase";

    return (
      <header
        ref={ref}
        className={cn(
          'fixed top-0 left-0 w-full z-[1000] flex items-center transition-all duration-300 border-b border-white/5',
          isScrolled
            ? 'h-[64px] md:h-[72px] lg:h-[88px] shadow-[0_8px_40px_rgba(0,0,0,0.28)]'
            : 'h-[72px] md:h-[80px] lg:h-[104px]',
          className
        )}
        style={{
          /* Never fully transparent: the nav text is always white, but several
             routes (news, faqs, results, articles…) open on white sections.
             A dark glass layer is imperceptible over the dark heroes and
             guarantees ~6:1 contrast over light pages. */
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.72)" : "rgba(9, 9, 11, 0.62)",
          backdropFilter: isScrolled ? "blur(18px) saturate(160%)" : "blur(14px) saturate(140%)",
          WebkitBackdropFilter: isScrolled ? "blur(18px) saturate(160%)" : "blur(14px) saturate(140%)",
        }}
        {...props}
      >
        <div
          className="w-full mx-auto max-w-[1440px] flex items-center justify-between gap-x-8"
          style={{ paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }}
        >
          <Link href="/" className="logo-link shrink-0" onClick={() => setIsOpen(false)}>
            {resolvedLogo}
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden xl:flex items-center min-w-0">
            <ul className="flex items-center list-none" style={{ gap: 12 }}>
              {navItems.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <li
                      key="services"
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={enter}
                      onMouseLeave={leave}
                    >
                      <Link
                        href={item.href}
                        className={cn(navLinkClass, "flex items-center gap-1.5 bg-transparent border-none cursor-pointer")}
                        style={navLinkStyle}
                        onClick={(e) => {
                          setDropdownOpen(false);
                          handleLinkClick(e, item.href);
                        }}
                      >
                        {item.label}
                        <svg
                          className={cn("w-2.5 h-2.5 transition-transform duration-200 ml-0.5", dropdownOpen && "rotate-180")}
                          fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setDropdownOpen(!dropdownOpen);
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>

                      {/* ── Compact Dropdown ── */}
                      <div
                        className={cn(
                          "absolute top-full left-0 pt-3 transition-all duration-[180ms] ease-out origin-top-left",
                          dropdownOpen
                            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                            : "opacity-0 -translate-y-1.5 scale-[0.98] pointer-events-none"
                        )}
                      >
                        {/* Dropdown card — small, dark premium */}
                        <div
                          className="rounded-xl overflow-hidden"
                          style={{
                            width: 'min(248px, calc(100vw - 32px))',
                            backgroundColor: 'rgba(12,12,12,0.97)',
                            backdropFilter: 'blur(24px) saturate(150%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                            boxShadow: '0 20px 45px rgba(0,0,0,0.4), 0 4px 14px rgba(0,0,0,0.2)',
                            border: '1px solid rgba(255,255,255,0.07)',
                          }}
                        >
                          {/* Service list */}
                          <div className="py-1.5 px-1.5 flex flex-col">
                            {SERVICES.map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                className="group relative flex items-center gap-2 rounded-lg transition-colors duration-150 text-white/85"
                                style={{ padding: '7px 10px' }}
                                onClick={(e) => {
                                  setDropdownOpen(false);
                                  handleLinkClick(e, service.href);
                                }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                                }}
                              >
                                <span
                                  className="shrink-0 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                                  style={{ width: 4, height: 4 }}
                                  aria-hidden
                                />
                                <span
                                  className="font-heading font-semibold text-white/85 group-hover:text-white transition-colors duration-150"
                                  style={{ fontSize: 12.5, letterSpacing: '0.01em' }}
                                >
                                  {service.title}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.label} className="nav-item">
                    <Link
                      href={item.href}
                      className={navLinkClass}
                      style={navLinkStyle}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              {cta && (
                <li className="nav-item cta-btn ml-2">
                  <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[24px] py-3 font-bold uppercase tracking-[0.04em] text-[12px] h-auto whitespace-nowrap">
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                </li>
              )}
            </ul>
          </nav>

          {/* ── Mobile Toggle ── */}
          <button
            className="xl:hidden flex flex-col justify-center items-center w-11 h-11 space-y-1.5 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={cn('block w-6 h-0.5 bg-white transition-transform duration-300', isOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block w-6 h-0.5 bg-white transition-opacity duration-300', isOpen && 'opacity-0')} />
            <span className={cn('block w-6 h-0.5 bg-white transition-transform duration-300', isOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 bg-neutral-950 z-40 xl:hidden flex flex-col h-[100dvh] overflow-y-auto"
            style={{ paddingTop: 96, paddingBottom: 40, paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }}
          >
            <Flex direction="col" gap="md" as="nav">
              {navItems.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <div key="services-mobile">
                      <div className="flex items-center justify-between w-full">
                        <Link
                          href={item.href}
                          className="font-heading font-bold text-2xl uppercase text-white hover:text-brand-500 transition-colors py-1.5"
                          onClick={(e) => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                            handleLinkClick(e, item.href);
                          }}
                        >
                          {item.label}
                        </Link>
                        <button
                          className="w-11 h-11 flex items-center justify-center text-white hover:text-brand-500 bg-transparent border-none cursor-pointer"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          aria-label="Toggle services menu"
                          aria-expanded={mobileServicesOpen}
                        >
                          <svg
                            className={cn("w-6 h-6 transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="mt-3 ml-1 flex flex-col border-l border-white/10 pl-4 overflow-hidden">
                          {SERVICES.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.href}
                              className="font-heading font-medium text-white/70 hover:text-white py-3 transition-colors"
                              style={{ fontSize: 15 }}
                              onClick={(e) => {
                                setIsOpen(false);
                                setMobileServicesOpen(false);
                                handleLinkClick(e, service.href);
                              }}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-heading font-bold text-2xl uppercase text-white hover:text-brand-500 transition-colors py-1.5"
                    onClick={(e) => {
                      setIsOpen(false);
                      handleLinkClick(e, item.href);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {cta && (
                <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto min-h-[44px] w-full mt-4">
                  <Link href={cta.href} onClick={() => setIsOpen(false)}>{cta.label}</Link>
                </Button>
              )}
            </Flex>
          </motion.div>
        )}
        </AnimatePresence>
      </header>
    );
  }
);
HeaderBlock.displayName = 'HeaderBlock';
