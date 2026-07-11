import { SERVICES } from "@/constants/services";
import { CASE_STUDIES } from "@/constants/results";
import { CLIENTS } from "@/constants/clients";
import { 
  BarChart, 
  BookOpen, 
  Camera, 
  Globe, 
  LineChart, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Search, 
  Share2, 
  Star 
} from "lucide-react";

const serviceIcons = [
  LineChart,    // Strategy
  Star,         // Branding
  Globe,        // Web Design
  Search,       // SEO
  Share2,       // Social Media
  Camera,       // Photography
  BarChart,     // Advertising
  Mail,         // Email
  MessageSquare,// Reputation
  MapPin,       // GMB
  BookOpen,     // Event Marketing
];

export const homeContent = {
  hero: {
    title: "Growth Marketing That Delivers Results.",
    subtitle: "Tailor-Made Strategies. Measurable Growth.",
    description: "We help hospitality brands strengthen their digital presence, generate qualified leads, and achieve sustainable growth.",
    layout: "image-background" as const,
    backgroundImage: "/HOME%20PAGE/VIDEO%20BANNER/0704.mp4", // Or a fallback image if video is not supported, but HeroBlock uses an image url. We can pass a video poster or an image. Let's pass a placeholder image since HeroBlock only supports images.
    primaryAction: { label: "Book A Call", href: "/getintouch" },
    secondaryAction: { label: "View Results", href: "/results" },
  },
  logoCloud: {
    title: "Trusted by 70+ Businesses",
    subtitle: "From independent businesses to growing multi-location brands, we've helped companies build stronger brands, generate more leads and accelerate growth.",
    // Derived from the client roster (single source of truth): only clients
    // with a real logo file appear, and each links out where a URL exists.
    logos: CLIENTS.filter((c) => c.logo).map((c) => ({
      src: `/images/clients/${c.logo}`,
      alt: c.name,
      href: c.url && c.url !== "#" ? c.url : undefined,
    })),
  },
  openingRemark: {
    features: [
      {
        title: "Tailor-Made Strategies. Measurable Growth.",
        description: "At Gourmetica, we don't believe in generic marketing. Every strategy we develop is built around your objectives, your market, and your ambitions. Combining strategy, creativity, and technology, we help brands strengthen their digital presence, generate qualified leads, and achieve sustainable growth.",
        image: "/images/banner/ChatGPT Image 4 Tem 2026 11_15_58.png",
      }
    ]
  },
  services: {
    subtitle: "Marketing Services",
    title: "Our Expertise",
    features: SERVICES.map((service, index) => ({
      title: service.title,
      description: service.desc,
      icon: serviceIcons[index] || Star,
    }))
  },
  metrics: {
    metrics: [
      { label: "Hospitality Businesses", value: "70+", description: "Trusted by leading restaurants across the UK" },
      { label: "Growth in Leads", value: "3x", description: "Average increase in qualified leads generated" },
      { label: "ROI Delivered", value: "250%", description: "Average return on ad spend for our clients" },
    ],
    theme: "dark" as const
  },
  caseStudies: {
    title: "Featured Results",
    subtitle: "Case Studies",
    description: "Discover how we've helped hospitality brands achieve unprecedented growth.",
    features: CASE_STUDIES.map(study => ({
      title: study.title,
      subtitle: "Case Study",
      description: study.excerpt,
      image: study.image,
      href: study.link,
    }))
  },
  testimonials: {
    title: "What our clients say",
    subtitle: "Testimonials",
    layout: "grid" as const,
    testimonials: [
      {
        quote: "Gourmetica changed the way our kitchen operates. The strategies elevated our brand entirely.",
        author: { name: "Gordon R.", role: "Executive Chef", company: "Hell's Kitchen" }
      },
      {
        quote: "The branding and web design services are unparalleled. Our reservations have doubled since launch.",
        author: { name: "Alice W.", role: "Owner", company: "Chez Panisse" }
      },
      {
        quote: "We use their ongoing marketing services and the ROI has been incredible. Highly recommended.",
        author: { name: "Marco P.", role: "Managing Director" }
      }
    ]
  },
  cta: {
    title: "Ready to grow your business?",
    description: "Let's discuss your goals and build a marketing strategy that delivers measurable results.",
    primaryAction: { label: "Book A Call Now", href: "/getintouch" },
    theme: "brand" as const
  }
};
