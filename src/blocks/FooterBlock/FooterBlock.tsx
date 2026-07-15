"use client";

import * as React from 'react';
import Link from 'next/link';

export interface FooterBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
}

export const FooterBlock = React.forwardRef<HTMLDivElement, FooterBlockProps>(
  ({ logo = <img src="/images/logo/logo.png" alt="Gourmetica Logo" className="max-w-[200px] h-auto block" />, className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className="footer-custom"
        {...props}
      >
        <div className="page-center">
          {/* Top Row Grid */}
          <div className="footer-logo">
            <Link href="/">{logo}</Link>
          </div>
          
          {/* Custom Footer Menu */}
          <div className="custom-footer-menu">
            <ul role="menu">
              {/* Contact Column */}
              <li role="none">
                <span role="heading" aria-level={4}>Contact</span>
                <ul role="menu">
                  <li className="flex items-center gap-3">
                    <svg className="w-[14px] h-[14px] text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:07826597767">07826597767</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-[14px] h-[14px] text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@gourmetica.co.uk" className="lowercase">info@gourmetica.co.uk</a>
                  </li>
                </ul>
              </li>

              {/* Navigation Column */}
              <li role="none">
                <span role="heading" aria-level={4}>Navigation</span>
                <ul role="menu">
                  <li><Link href="/#services">Services</Link></li>
                  <li><Link href="/results">Work</Link></li>
                  <li><Link href="/faqs">FAQ&apos;S</Link></li>
                  <li><Link href="/aboutus">About</Link></li>
                </ul>
              </li>

              {/* Marketing Services Column */}
              <li role="none">
                <span role="heading" aria-level={4}>Marketing Services</span>
                <ul role="menu">
                  <li><Link href="/#services">Branding</Link></li>
                  <li><Link href="/#services">Advertising</Link></li>
                  <li><Link href="/#services">Search Engine Optimization</Link></li>
                  <li><Link href="/#services">Social Media Management</Link></li>
                  <li><Link href="/#services">Photography</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Footer Middle (Separator and badges/socials) */}
          <div className="footer-middle">
            {/* Connect With Us */}
            <div className="connect">
              <h6>Connect With Us</h6>
              {/* Facebook */}
              <a href="https://www.facebook.com/gourmeticauk/" target="_blank" rel="noopener noreferrer" style={{ width: '30px', fontSize: '30px' }} aria-label="Facebook">
                <svg viewBox="0 0 32 32">
                  <path d="M30.976 15.488c0-8.554-6.934-15.488-15.488-15.488s-15.488 6.934-15.488 15.488c0 7.73 5.664 14.138 13.068 15.3v-10.823h-3.933v-4.477h3.933v-3.412c0-3.882 2.312-6.026 5.85-6.026 1.694 0 3.467 0.303 3.467 0.303v3.811h-1.953c-1.924 0-2.524 1.194-2.524 2.42v2.904h4.296l-0.687 4.477h-3.609v10.823c7.404-1.162 13.068-7.569 13.068-15.3z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/gourmeticauk" target="_blank" rel="noopener noreferrer" style={{ width: '38px', fontSize: '54px', marginTop: '-6px' }} aria-label="LinkedIn">
                <svg viewBox="0 0 32 32">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/gourmetica.agency/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '31px' }} aria-label="Instagram">
                <svg viewBox="0 0 32 32">
                  <path d="M15.488 2.789c4.138 0 4.628 0.018 6.256 0.091 1.512 0.067 2.329 0.321 2.874 0.532 0.72 0.278 1.24 0.617 1.779 1.156 0.544 0.545 0.877 1.059 1.156 1.779 0.212 0.545 0.466 1.367 0.532 2.874 0.073 1.633 0.091 2.124 0.091 6.256 0 4.138-0.018 4.628-0.091 6.256-0.067 1.513-0.321 2.329-0.532 2.874-0.278 0.72-0.617 1.24-1.156 1.779-0.544 0.544-1.059 0.877-1.779 1.156-0.544 0.212-1.367 0.466-2.874 0.532-1.634 0.073-2.124 0.091-6.256 0.091-4.138 0-4.628-0.018-6.256-0.091-1.513-0.067-2.329-0.321-2.874-0.532-0.72-0.278-1.24-0.617-1.779-1.156-0.545-0.545-0.877-1.059-1.156-1.779-0.212-0.545-0.466-1.367-0.532-2.874-0.073-1.634-0.091-2.124-0.091-6.256 0-4.138 0.018-4.628-0.091-6.256 0.067-1.513 0.321-2.329 0.532-2.874 0.278-0.72 0.617-1.24 1.156-1.779 0.545-0.545 1.059-0.877 1.779-1.156 0.545-0.212 1.367-0.466 2.874-0.532 1.627-0.073 2.117-0.091 6.256-0.091zM15.488 0c-4.205 0-4.731 0.018-6.383 0.091-1.646 0.073-2.777 0.339-3.757 0.72-1.022 0.399-1.888 0.926-2.747 1.791-0.865 0.859-1.391 1.724-1.791 2.741-0.381 0.986-0.647 2.111-0.72 3.757-0.073 1.658-0.091 2.184-0.091 6.389s0.018 4.731 0.091 6.383c0.073 1.646 0.339 2.777 0.72 3.757 0.399 1.022 0.926 1.888 1.791 2.747 0.859 0.859 1.724 1.392 2.741 1.785 0.986 0.381 2.111 0.647 3.757 0.72 1.652 0.073 2.178 0.091 6.383 0.091s4.731-0.018 6.383-0.091c1.646-0.073 2.777-0.339 3.757-0.72 1.016-0.393 1.882-0.926 2.741-1.785s1.392-1.724 1.785-2.741c0.381-0.986 0.647-2.111 0.72-3.757 0.073-1.652 0.091-2.178 0.091-6.383s-0.018-4.731-0.091-6.383c-0.073-1.646-0.339-2.777-0.72-3.757-0.381-1.029-0.908-1.894-1.773-2.753-0.859-0.859-1.724-1.391-2.741-1.785-0.986-0.381-2.111-0.647-3.757-0.72-1.658-0.079-2.184-0.097-6.389-0.097zM15.488 7.532c-4.392 0-7.956 3.563-7.956 7.956s3.563 7.956 7.956 7.956 7.956-3.564 7.956-7.956c0-4.392-3.563-7.956-7.956-7.956zM15.488 20.649c-2.85 0-5.161-2.311-5.161-5.161s2.311-5.161 5.161-5.161 5.161 2.311 5.161 5.161c0 2.85-2.311 5.161-5.161 5.161zM25.616 7.218c0 1.029-0.835 1.857-1.857 1.857-1.028 0-1.857-0.835-1.857-1.857 0-1.029 0.835-1.857 1.857-1.857s1.857 0.835 1.857 1.857z"></path>
                </svg>
              </a>
            </div>

            {/* Copyright Site Info */}
            <div className="site-info">
              <p>Copyright &copy; 2024 Gourmetica All rights reserved.</p>
              <p>
                Gourmetica is a brand of Ozkaya Engineering and Consultancy Ltd, <br />
                Ozkaya Engineering and Consultancy Ltd (t/a Gourmetica) - Registered in England No. 13509943
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);
FooterBlock.displayName = 'FooterBlock';
