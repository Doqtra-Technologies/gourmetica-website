"use client";

import Link from "next/link";
import {
  HeroBlock,
  LogoCloudBlock
} from "@/blocks";
import { homeContent } from "@/features/home/content/home";
import { HomeServicesSection } from "@/features/services/components/HomeServicesSection";

const sliderSlides = [
  {
    title: "Advertising",
    tag: "Case Study",
    excerpt: "Our advertising team welds their Growth Marketing background together with the fresh dynamics of digital technologies. From Google Ads to display ads, we have the answers for every kind of question to advertise your restaurant.",
    image: "/images/banner/No5Main-min-min.jpg",
    link: "/results/no5",
    partners: [
      { src: "/HOME PAGE/product/badge-google-partner.png", alt: "Google Partner" },
      { src: "/HOME PAGE/product/badge-google-hotel-ads.jpg", alt: "Google Hotel Ads" }
    ]
  },
  {
    title: "Website Design",
    tag: "Case Study",
    excerpt: "Neatly designed website architectures, captivating landing pages, chic and simple designs. Our website designs will hand you the keys to ultimate success, higher conversion rates, increased sales, and impressed visitors by applying your marketing strategies into a web design.",
    image: "/images/banner/OttoKichenMain-min-min.jpg",
    link: "/results/ottokitchen",
    partners: [
      { src: "/HOME PAGE/product/logo-hubspot.png", alt: "Hubspot" },
      { src: "/HOME PAGE/product/logo-wordpress.png", alt: "WordPress" }
    ]
  },
  {
    title: "Digital Strategy",
    tag: "Case Study",
    excerpt: "Rest assured, your brand's digital success is our top priority. Let our expert team be your guiding light on the journey towards digital excellence. With Gourmetica by your side, you can trust that your digital presence is in the hands of skilled professionals.",
    image: "/images/banner/PiyazMain-min-min.jpg",
    link: "/results/payiz",
    partners: []
  }
];

export default function Home() {
  return (
    <main className="home-page-wrapper">
      {/* 1. Hero Block */}
      <HeroBlock
        title="Growth Marketing That Delivers Results."
        media={
          <video>
            <source src="/HOME PAGE/VIDEO BANNER/0704.mp4" type="video/mp4" />
          </video>
        }
      />

      {/* 2. Client Logo Cloud Block */}
      <LogoCloudBlock
        title="Trusted by 70+ Businesses"
        subtitle="From independent businesses to growing multi-location brands, we've helped companies build stronger brands, generate more leads and accelerate growth."
        logos={homeContent.logoCloud.logos}
        variant="marquee"
      />

      {/* 3. Opening Remark Section */}
      <section className="opening-remark-section section-padding">
        <div className="container">
          <div className="opening-remark">
            <div className="opening-remark-txt">
              <h2 className="opening-remark-txt--heading">
                Tailor-Made Strategies for Your Business
              </h2>
              <div className="opening-remark-txt--richtext">
                <p>
                  At Gourmetica, we specialize in providing top-notch marketing solutions tailored specifically for businesses in the hospitality sector. With a deep understanding of the industry and a passion for helping our clients succeed, we are dedicated to driving growth and maximizing your brand&apos;s potential. Trust us to deliver innovative marketing strategies that will elevate your business and leave a lasting impression on your guests
                </p>
                <p>
                  Learn more about our proven process and explore how Gourmetica can help you maximize results by scheduling a short introductory call with us.
                </p>
              </div>
              <Link href="/whygourmetica" className="view-all-link" style={{ marginTop: "24px", display: "inline-flex" }}>
                Why Gourmetica <i className="not-italic" aria-hidden="true">→</i>
              </Link>
            </div>
            <div className="opening-remark-img">
              <img
                src="/images/banner/sevices2.jpg"
                alt="Strategy Banner"
                loading="lazy"
                width={441}
                height={565}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Marketing Services Section */}
      <HomeServicesSection />

      {/* 5. Interactive Case Study slider section */}
      <section className="casestudy-section section-padding">
        <div className="container">
          <div className="section-header-row">
            <h2>Featured Results</h2>
            <Link href="/results" className="view-all-link">
              View All Client Stories <i className="not-italic" aria-hidden="true">→</i>
            </Link>
          </div>

          <div className="casestudy-card">
            {sliderSlides.map((study, idx) => (
              <div
                key={idx}
                className="casestudy-card--container"
              >
                <div className="casestudy-card--main">
                  <div className="casestudy-card--main-img">
                    <img src={study.image} alt={study.title} />
                  </div>
                  <div className="casestudy-card--main-text">
                    <Link className="read-case-study" href={study.link}>
                      Read Case Study
                      <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 11">
                          <path d="m5.594 4.879-3.886-3.71a.955.955 0 0 0-1.302 0 .855.855 0 0 0-.267.617c0 .23.096.453.267.616L3.65 5.5.406 8.597a.855.855 0 0 0-.267.617c0 .232.096.453.267.617a.953.953 0 0 0 .65.254.953.953 0 0 0 .652-.254l3.886-3.71a.84.84 0 0 0 0-1.243Z"></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="casestudy-card-secondary">
                  <div className="casestudy-card-secondary--text">
                    <h4>{study.title}</h4>
                    <p>{study.excerpt}</p>
                  </div>
                  <div className="casestudy-card-secondary--partners">
                    {study.partners.map((partner, pIdx) => (
                      <img
                        key={pIdx}
                        src={partner.src}
                        alt={partner.alt}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <style jsx>{`
        /* Local Scoped Component Styles */
        .home-page-wrapper {
          width: 100%;
        }

        .hero-badge {
          background-color: var(--color-primary);
          color: white;
          padding: 6px 15px;
          border-radius: 4px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: inline-block;
          margin-bottom: 25px;
        }

        .text-red {
          color: var(--color-primary);
        }

        .font-medium {
          font-weight: 600;
        }

        .hero-buttons {
          margin-top: 30px;
          margin-bottom: 40px;
        }

        .trusted-by {
          font-family: var(--font-secondary);
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          display: flex;
          align-items: center;
        }

        /* Logo Marquee */
        .marquee-section {
          background-color: #050505;
          padding: 40px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .marquee-container {
          max-width: 1346px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .marquee-title {
          font-family: var(--font-heading);
          color: rgba(255, 255, 255, 0.3);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-align: center;
          margin-bottom: 25px;
          font-weight: 800;
        }

        .marquee-content {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 60px;
          animation: scrollMarquee 40s linear infinite;
        }

        .marquee-logo {
          height: 35px;
          display: flex;
          align-items: center;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        .marquee-logo:hover {
          opacity: 0.9;
        }

        .marquee-logo img {
          height: 100%;
          width: auto;
          filter: grayscale(1) brightness(2);
        }

        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Opening Remark */
        .opening-remark-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .opening-remark-content h2 {
          font-size: 42px;
          margin-bottom: 25px;
        }

        .lead-text {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .opening-remark-content p {
          margin-bottom: 20px;
          color: #555;
        }

        .opening-remark-image img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        /* Services */
        .our-expertise {
          background-color: var(--color-black);
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 80px;
          row-gap: 30px;
          align-items: start;
        }

        .accordion-sub-list {
          list-style: none;
          margin-top: 15px;
          padding-left: 15px;
          border-left: 2px solid var(--color-primary);
        }

        .accordion-sub-list li {
          font-size: 13px;
          color: var(--color-text-gray);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .accordion-sub-list li::before {
          content: "• ";
          color: var(--color-primary);
        }

        /* Case study slider */
        .section-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 50px;
        }

        .section-header-row h2 {
          font-size: 36px;
        }

        .view-all-link {
          font-family: var(--font-heading);
          font-weight: 900;
          color: var(--color-primary);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .view-all-link i {
          margin-left: 5px;
          transition: transform 0.3s ease;
        }

        .view-all-link:hover i {
          transform: translateX(5px);
        }

        .slider-showcase-container {
          position: relative;
          min-height: 480px;
          width: 100%;
        }

        .case-showcase-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
          background-color: var(--color-gray-light);
          border-radius: 8px;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease-in-out;
          align-items: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04);
        }

        .case-showcase-card.active {
          opacity: 1;
          pointer-events: all;
          position: relative;
        }

        .card-image {
          height: 100%;
          width: 100%;
          min-height: 450px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 6s ease;
        }

        .case-showcase-card.active .card-image img {
          transform: scale(1.08);
        }

        .card-content {
          padding: 50px;
        }

        .case-tag {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-primary);
          display: inline-block;
          margin-bottom: 15px;
        }

        .card-content h3 {
          font-size: 32px;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .card-content p {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .read-case-study-btn {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-black);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .read-case-study-btn i {
          font-size: 10px;
          color: var(--color-primary);
          transition: transform 0.3s ease;
        }

        .read-case-study-btn:hover i {
          transform: translateX(4px);
        }

        /* Ebook CTA */
        .ebook-cta-section {
          background-color: var(--color-black);
          color: white;
          background-image: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(228, 37, 40, 0.08) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ebook-cta-section h2 {
          color: white;
          font-size: 48px;
          margin-bottom: 20px;
        }

        .ebook-cta-section p {
          color: var(--color-text-gray);
          font-size: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Responsive */
        @media (max-width: 767px) {
          .section-header-row {
            flex-wrap: wrap;
            gap: 12px;
          }
        }

        @media (max-width: 991px) {
          .opening-remark-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .case-showcase-card {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .card-image {
            min-height: 300px;
          }
        }

        @media (max-width: 767px) {
          .opening-remark-content h2 {
            font-size: 32px;
          }
          
          .card-content {
            padding: 30px;
          }
          
          .card-content h3 {
            font-size: 24px;
          }
          
          .ebook-cta-section h2 {
            font-size: 32px;
          }
          
          .ebook-cta-section p {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}
