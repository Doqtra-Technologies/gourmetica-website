import type { CaseStudy, CaseStudyDetail } from "@/types";

export interface ExtendedCaseStudy {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "No5 DINING & LOUNGE",
    excerpt: "NO5, a prominent fine dining restaurant in North London, sought to establish a strong brand presence and differentiate themselves in the fine dining sector.",
    image: "/images/results/GBD/_DSF8945 kopya.jpg",
    link: "/results/no5"
  },
  {
    title: "SWISS SCENT",
    excerpt: "Swiss Scent B2B platform needed a scalable digital system capable of managing fragrances, inventory, B2B account orders, and operations.",
    image: "/images/services/ChatGPT Image 4 Tem 2026 16_58_47.png",
    link: "/results/swiss-scent"
  },
  {
    title: "LEONIDAS CHOCOLATES",
    excerpt: "A premium Belgian chocolate retailer partnering with Gourmetica to scale e-commerce operations and search advertising campaigns.",
    image: "/images/results/LEONIDAS/kendi-kutunu-olustur-leonidas-cikolata-2.jpg",
    link: "/results/leonidas"
  },
  {
    title: "PHOENIX FINANCE",
    excerpt: "Phoenix Commercial Finance required website redesign and conversion strategy to drive commercial SME finance queries.",
    image: "/images/results/PHOENIX/30 JULY.png",
    link: "/results/phoenix"
  }
];

export const ALL_CASE_STUDIES: ExtendedCaseStudy[] = [
  {
    slug: "no5",
    title: "No5 DINING & LOUNGE",
    category: "Hospitality",
    image: "/images/banner/No5NewBg.jpg",
    excerpt: "NO5, a prominent fine dining restaurant in North London, sought to establish a strong brand presence and differentiate themselves from competitors."
  },
  {
    slug: "ottokitchen",
    title: "Otto Kitchen",
    category: "Hospitality",
    image: "/images/banner/OttoNewBackground.jpg",
    excerpt: "Otto Kitchen, a renowned fine dining restaurant located in the heart of Leamington Spa, approached Gourmetica with the goal of elevating their digital brand."
  },
  {
    slug: "42holborn",
    title: "42 HOLBORN",
    category: "Hospitality",
    image: "/images/banner/42newBackground.jpg",
    excerpt: "Gourmetica proudly presents 42 Holborn, a vibrant culinary destination situated in the heart of London at 42 Kingsway."
  },
  {
    slug: "lizz",
    title: "LIZZ RESTAURANT",
    category: "Hospitality",
    image: "/images/banner/LizzNewBg.jpg",
    excerpt: "Gourmetica introduces Lizz, a fine dining Mediterranean restaurant located in the charming town of Gosport, setting high standards of guest attraction."
  },
  {
    slug: "mysa",
    title: "MYSA",
    category: "Hospitality",
    image: "/images/banner/mysanewbackground.jpg",
    excerpt: "Gourmetica proudly presents Mysa, a Mediterranean-inspired dining destination situated in the heart of Hoddesdon."
  },
  {
    slug: "payiz",
    title: "Payiz Restaurant",
    category: "Hospitality",
    image: "/images/banner/PiyazMain-min-min.jpg",
    excerpt: "Payiz Restaurant, a luxurious Mediterranean venue in London, embarked on a growth marketing journey to redefine upscale dining visibility."
  },
  {
    slug: "rustiq",
    title: "Rustiq Restaurant",
    category: "Hospitality",
    image: "/images/banner/RustiqMain-min-min.jpg",
    excerpt: "Collaborating with Rustiq to build comprehensive digital marketing campaigns including social retargeting, TikTok, and local search SEO."
  },
  {
    slug: "liman",
    title: "Liman Restaurant",
    category: "Hospitality",
    image: "/images/banner/bglimannew.jpg",
    excerpt: "Gourmetica restaurant marketing agency proudly presents Liman Restaurant, a captivating Mediterranean dining experience in Islington, London."
  },
  {
    slug: "swiss-scent",
    title: "SWISS SCENT",
    category: "Hospitality",
    image: "/images/banner/swissbackground.jpg",
    excerpt: "Re-platforming and marketing Swiss Scent premium fragrance B2B solutions, building a centralized inventory, orders, and CMS framework."
  },
  {
    slug: "leonidas",
    title: "LEONIDAS",
    category: "E-Commerce",
    image: "/images/results/LEONIDAS/kendi-kutunu-olustur-leonidas-cikolata-2.jpg",
    excerpt: "Premium Belgian chocolate e-commerce retailer partnering with Gourmetica to boost search, shopping, and social retargeting ad campaigns."
  },
  {
    slug: "biitest",
    title: "BiiTest Diagnostics",
    category: "Healthcare",
    image: "/images/results/BIITEST/3 (1).png",
    excerpt: "Healthcare digital growth strategy for innovative diagnostic testing products, scaling traffic, and setting e-commerce marketing systems."
  },
  {
    slug: "phoenix",
    title: "PHOENIX FINANCE",
    category: "Finance",
    image: "/images/results/PHOENIX/30 JULY.png",
    excerpt: "Phoenix Commercial Finance brokerage required a modern corporate website redesign and lead generation campaigns to acquire commercial lending queries."
  },
  {
    slug: "great-british-doner",
    title: "Great British Doner",
    category: "Multi-Location & Franchise",
    image: "/images/results/GBD/ChatGPT Image 22 May 2026 15_22_25 (2).png",
    excerpt: "Supporting franchise expansion and local location acquisition for Great British Doner through custom web development and social campaigns."
  }
];

export const CASE_STUDY_DETAILS: Record<string, CaseStudyDetail> = {
  no5: {
    title: "No5 DINING & LOUNGE",
    banner: "/images/banner/No5NewBg.jpg",
    scope: ["SEO Friendly Content Writing", "Review Management", "Brand Reputation Management", "Menu-Food Bible", "Glossary Design"],
    overview: "NO5, a prominent fine dining restaurant in North London, sought to establish a strong brand presence and differentiate themselves from competitors in the fiercely competitive fine dining sector. With the goal of attracting discerning customers, increasing bookings, and outshining their rivals, they partnered with our marketing agency to develop a comprehensive digital marketing strategy.",
    challenge: "The restaurant faced stiff competition in the bustling London restaurant scene, making it crucial to stand out and showcase their unique offerings. They needed a marketing solution that would not only enhance their online visibility but also position them as an authority in the industry, enticing potential customers to choose their restaurant for unparalleled dining experiences.",
    solution: "Our marketing agency conducted extensive market research to understand the client's business goals, target audience, and competitive landscape. We devised a comprehensive strategy that focused on several key elements to uplift and differentiate the restaurant from its competitors.",
    stats: [
      { label: "Return On Investment", val: "36 x ROI" },
      { label: "Conversion Rate", val: "3.7%" },
      { label: "New Guests", val: "120" }
    ],
    gallery: [
      "/images/results/no5-ref/no5_1.jpg",
      "/images/results/no5-ref/no5_2.jpg",
      "/images/results/no5-ref/no5_3.jpg",
      "/images/results/no5-ref/no5_4.jpg",
      "/images/results/no5-ref/no5_5.jpg"
    ],
    servicesDelivered: [
      { title: "SEO-Friendly Website Blog Writing", description: "Recognizing the importance of content marketing and search engine optimization (SEO), our team of experienced writers crafted engaging, informative, and SEO-optimized blog posts. The content revolved around various aspects of fine dining, culinary trends, and the unique offerings of the client's restaurant. By incorporating relevant keywords and providing valuable insights, we aimed to position the client as an authority in the industry and drive organic traffic to their website." },
      { title: "Review Management on Google and TripAdvisor", description: "Online reviews are pivotal in shaping a restaurant's reputation. Our dedicated team implemented a comprehensive review management system to monitor and respond to customer reviews on platforms like Google and TripAdvisor. We actively engaged with customers, addressing their feedback and leveraging positive reviews to enhance the client's reputation." },
      { title: "Menu Design", description: "To create a lasting impression on potential customers, we revamped the client's menu design. Our team collaborated with talented designers to develop visually appealing menus that reflected the restaurant's brand identity, utilizing enticing food photography and elegant typography." },
      { title: "Glossary", description: "In addition to the Food Bible, we developed a glossary of culinary terms and jargon commonly used in the fine dining industry. This glossary served as a reference guide for customers, allowing them to navigate through the restaurant's menu and understand the nuances of the dishes offered." }
    ]
  },
  ottokitchen: {
    title: "Otto Kitchen",
    banner: "/images/banner/OttoNewBackground.jpg",
    scope: ["Advertising", "Social Media Management", "Website Design", "Branding", "Photography", "Email Marketing"],
    overview: "Otto Kitchen, a renowned fine dining restaurant located in the heart of Leamington Spa, approached our marketing agency with the goal of elevating their brand presence and driving customer engagement. With a vision to establish themselves as the go-to destination for exceptional culinary experiences, they sought our expertise in social media management, Google and Facebook advertising, as well as review management.",
    challenge: "",
    solution: "",
    stats: [
      { label: "Return On Investment", val: "21 x ROI" },
      { label: "Conversion Rate", val: "2.6%" },
      { label: "New Guests", val: "96" }
    ],
    gallery: [
      "/images/results/ottokitchen-ref/otto1.jpg",
      "/images/results/ottokitchen-ref/otto2.jpg",
      "/images/results/ottokitchen-ref/otto3.jpg",
      "/images/results/ottokitchen-ref/otto4.jpg",
      "/images/results/ottokitchen-ref/otto5.jpg"
    ],
    servicesDelivered: [
      { title: "Website Design and Development", description: "We crafted a visually stunning website that reflected the restaurant's sophistication and elegance, with intuitive navigation, clear calls to action, and enticing visuals showcasing the restaurant's ambiance and cuisine. Online reservations, menus, and special event promotions were built in to drive customer engagement and conversions." },
      { title: "Social Media Management", description: "We conducted an in-depth analysis of Otto Kitchen's target audience, brand identity, and competitors, then developed a comprehensive social media strategy focused on enhancing their online presence, fostering engagement, and showcasing their culinary excellence." },
      { title: "Google and Facebook Advertising", description: "We crafted highly targeted advertising campaigns on Google and Facebook, using careful keyword research and audience segmentation to reach individuals actively seeking fine dining experiences in the Leamington Spa area." },
      { title: "Review Management", description: "We closely monitored review platforms including Google Reviews, Yelp, and TripAdvisor, responding promptly and professionally to both positive and negative feedback to protect and grow the restaurant's reputation." },
      { title: "Website Performance", description: "The revamped website provided an immersive and user-friendly experience, resulting in a 40% increase in online reservations and a 30% decrease in bounce rates." },
      { title: "Social Media Growth", description: "Increased social media following by 45% within the first six months and achieved an average engagement rate of 8%, exceeding industry benchmarks." },
      { title: "Advertising Reach", description: "Successfully reached over 150,000 targeted individuals with advertising campaigns, achieving a 30% increase in website conversions while reducing cost per click by 20%." },
      { title: "Review & Reputation", description: "Maintained a positive online reputation with a consistent 4.5-star rating across various review platforms, responding to 95% of customer reviews within 24 hours." }
    ]
  },
  "swiss-scent": {
    title: "SWISS SCENT",
    banner: "/images/banner/swissbackground.jpg",
    scope: ["B2B E-Commerce Development", "Product Management Dashboard", "Inventory Tracking Setup", "B2B Custom Pricing Setup", "Reporting Tools"],
    overview: "Swiss Scent is a UK-based fragrance company specialising in premium scent solutions for businesses. The company supplies commercial fragrance products through a dedicated B2B platform, helping organisations enhance customer experiences with tailored scenting solutions.\n\nAs the business continued to grow, Swiss Scent required more than a standard e-commerce website. They needed a scalable digital platform capable of managing products, inventory, customer orders and day-to-day operations through one centralised system while providing a seamless purchasing experience for their business customers.",
    challenge: "Swiss Scent struggled with separate product catalogues and order channels, which caused inventory discrepancies. They required a unified platform that combined a smooth B2B purchasing user experience for corporate clients with powerful operations and reporting tools for their backend team.",
    solution: "Gourmetica designed and developed a bespoke B2B e-commerce platform. We implemented real-time inventory tracking, flexible multi-tier pricing for bulk corporate purchases, assignable user roles, and a custom product management dashboard designed for speed and flexibility.",
    stats: [
      { label: "Order Lead Times", val: "-40% faster" },
      { label: "B2B Conversions", val: "+28%" },
      { label: "Centralized Catalog", val: "100% synced" }
    ],
    gallery: [],
    servicesDelivered: [
      { title: "E-Commerce Platform Development", description: "We build scalable e-commerce platforms that combine exceptional user experience with powerful operational tools—helping businesses manage products, orders and inventory from one intuitive system." },
      { title: "Product Management", description: "Easily organise, update and manage your entire product catalogue through a centralised dashboard designed for speed, flexibility and growth." },
      { title: "Inventory Management", description: "Track inventory in real time, manage stock levels efficiently and streamline day-to-day operations with an intuitive inventory management system." },
      { title: "Order Management", description: "Manage incoming orders, monitor fulfilment and simplify your sales workflow through one central platform." },
      { title: "Content Management System (CMS)", description: "Update products, pages, blogs and website content effortlessly without relying on developers." },
      { title: "B2B Commerce", description: "Build secure B2B purchasing experiences with tailored pricing, account management and business-focused ordering workflows." },
      { title: "Multi-User Management", description: "Assign different user roles and permissions, giving every team member the right level of access." },
      { title: "Reporting & Analytics", description: "Monitor website performance, customer activity and sales through clear, actionable reporting." },
      { title: "Secure & Scalable Infrastructure", description: "Built to grow with your business while delivering enterprise-level security, speed and reliability." },
      { title: "SEO Optimised Commerce", description: "Every platform is built with technical SEO best practices to maximise search visibility and support long-term growth." }
    ]
  },
  leonidas: {
    title: "LEONIDAS CHOCOLATES",
    banner: "/images/results/LEONIDAS/kendi-kutunu-olustur-leonidas-cikolata-2.jpg",
    scope: ["E-Commerce Growth Strategy", "Google Ads & PMax Setup", "Meta Advertising Campaigns", "Social Media Management", "Conversion Optimization"],
    websiteUrl: "https://leonidasbrighton.co.uk/",
    overview: "Leonidas is a premium Belgian chocolate retailer offering handcrafted chocolates, gift collections and seasonal products through its e-commerce website, serving customers across the UK.\n\nAs online demand continued to grow, the business partnered with Gourmetica to strengthen its digital presence, increase online sales and maximise the performance of its e-commerce marketing strategy. Our objective was to attract more qualified customers, improve conversion opportunities and support sustainable revenue growth through data-driven marketing.",
    challenge: "Although the business had a strong product offering and an established e-commerce website, it required a more strategic digital marketing approach to drive sustainable online growth.\n\nThe objective was to increase qualified traffic, improve conversion performance, maximise advertising efficiency and build stronger brand awareness across multiple digital channels.",
    solution: "Gourmetica developed and implemented a comprehensive e-commerce growth strategy combining paid advertising, social media marketing and continuous performance optimisation.\n\nBy integrating Google Ads, Meta advertising and organic social media into one unified strategy, we focused on increasing online revenue, improving customer acquisition and creating long-term sustainable growth.",
    stats: [
      { label: "Increase in Online Revenue", val: "+240%" },
      { label: "Return On Ad Spend (ROAS)", val: "4.8x" },
      { label: "Customer Acquisition Cost", val: "-35%" }
    ],
    gallery: [
      "/images/results/LEONIDAS/IMG_8786.jpg",
      "/images/results/LEONIDAS/kendi-kutunu-olustur-leonidas-cikolata-12.jpg"
    ],
    servicesDelivered: [
      { title: "E-commerce Growth Strategy", description: "Developed a tailored digital marketing strategy designed to increase online revenue, customer acquisition and long-term business growth." },
      { title: "Google Ads Management", description: "Planned, launched and continuously optimised Google Search, Shopping and Performance Max campaigns to maximise visibility, qualified traffic and return on ad spend." },
      { title: "Meta Advertising", description: "Created and managed high-performing Facebook and Instagram campaigns focused on increasing online purchases, remarketing performance and customer acquisition." },
      { title: "Social Media Management", description: "Delivered engaging social media content designed to strengthen brand awareness, build customer loyalty and support ongoing e-commerce growth." },
      { title: "Conversion Optimisation", description: "Analysed customer behaviour and continuously optimised campaigns, landing pages and advertising performance to improve conversion rates." },
      { title: "Performance Analytics & Reporting", description: "Monitored campaign performance through detailed reporting and actionable insights, enabling continuous optimisation and data-driven decision making." }
    ]
  },
  biitest: {
    title: "BiiTest DIAGNOSTICS",
    banner: "/images/results/BIITEST/3 (1).png",
    scope: ["Healthcare Growth Strategy", "E-Commerce Strategy", "Social Media Content", "Google Ads Management", "Meta Advertising", "Reporting"],
    websiteUrl: "https://biitest.com/",
    overview: "BiiTest is a UK-based healthcare brand specialising in the development of innovative diagnostic testing solutions. With a focus on quality, reliability and accessibility, the company develops advanced testing products designed to support modern healthcare needs.\n\nAs the business continued to expand its digital presence, BiiTest partnered with Gourmetica to strengthen its online growth strategy. Our objective was to build a scalable digital marketing approach that increased brand visibility, supported e-commerce growth and created a stronger foundation for long-term customer acquisition.",
    challenge: "BiiTest required a comprehensive digital marketing strategy capable of supporting its long-term growth objectives while strengthening its online presence across multiple digital channels.\n\nThe goal was to improve brand awareness, increase qualified traffic, maximise advertising performance and establish a scalable marketing framework to support future e-commerce growth.",
    solution: "Gourmetica developed a fully integrated digital growth strategy combining paid advertising, social media and e-commerce marketing into one performance-driven approach.\n\nThrough continuous optimisation, audience targeting and data-driven decision making, we focused on increasing visibility, strengthening customer engagement and supporting sustainable online growth.",
    stats: [
      { label: "Diagnostic Sales Growth", val: "3.5x increase" },
      { label: "CPA Reduction", val: "-42%" },
      { label: "Search Visibility", val: "+310%" }
    ],
    gallery: [
      "/images/results/BIITEST/1.jpg",
      "/images/results/BIITEST/6.jpg"
    ],
    servicesDelivered: [
      { title: "Healthcare Digital Growth Strategy", description: "Developed a tailored digital marketing strategy aligned with BiiTest's business objectives and long-term growth plans." },
      { title: "E-commerce Strategy", description: "Created a scalable e-commerce marketing strategy designed to improve customer acquisition and support future online growth." },
      { title: "Social Media Strategy", description: "Developed a strategic content and communication plan focused on strengthening brand awareness and customer engagement." },
      { title: "Google Ads Management", description: "Planned, launched and continuously optimised Google Ads campaigns to increase qualified traffic and maximise advertising performance." },
      { title: "Meta Advertising", description: "Created and managed high-performing Facebook and Instagram campaigns focused on increasing brand awareness, customer acquisition and campaign efficiency." },
      { title: "Performance Analytics & Reporting", description: "Monitored campaign performance, customer behaviour and marketing effectiveness through ongoing reporting and continuous optimisation." }
    ]
  },
  phoenix: {
    title: "PHOENIX COMMERCIAL FINANCE",
    banner: "/images/results/PHOENIX/30 JULY.png",
    scope: ["Corporate Redesign & Dev", "Digital Lead Gen Strategy", "Google Search Ads Management", "Meta Advertising Setup", "Social Media Strategy", "Reporting"],
    websiteUrl: "https://phoenixcf.co.uk/",
    overview: "Phoenix Commercial Finance is a UK-based commercial finance brokerage providing tailored funding solutions to businesses across a wide range of industries. With a relationship-driven approach and access to a broad network of lenders, the company helps SMEs secure the funding they need to grow and achieve their long-term ambitions.\n\nAs part of Phoenix's digital growth journey, Gourmetica partnered with the business to strengthen its online presence through a complete website redesign and an integrated digital marketing strategy. Our objective was to build a modern, conversion-focused digital platform while increasing brand visibility, generating qualified enquiries and supporting long-term business growth.",
    challenge: "Phoenix faced challenges in effectively marketing their brokerage services online and generating high-quality commercial finance leads. They needed a modern, conversion-focused digital platform that projected authority, alongside paid acquisition campaigns designed to target business owners seeking funding.",
    solution: "Gourmetica designed and developed a bespoke, conversion-focused corporate website. Alongside the new website, we launched targeted Google Ads and Meta campaigns to capture commercial finance enquiries, optimizing copy and landing pages to maximize conversion efficiency.",
    stats: [
      { label: "Commercial Enquiries", val: "+290%" },
      { label: "Cost Per Lead (CPL)", val: "-50% drop" },
      { label: "SME Reach", val: "15k+ business owners" }
    ],
    gallery: [
      "/images/results/PHOENIX/20 AUG.png",
      "/images/results/PHOENIX/6 AUG.png"
    ],
    servicesDelivered: [
      { title: "Digital Growth Strategy", description: "Developed a tailored digital marketing strategy aligned with Phoenix's commercial objectives, target audience and long-term growth plans." },
      { title: "Google Ads Management", description: "Planned, launched and continuously optimised Google Ads campaigns to generate high-quality commercial finance enquiries and maximise return on investment." },
      { title: "Meta Advertising", description: "Created and managed targeted Facebook and Instagram advertising campaigns focused on increasing brand visibility, audience engagement and lead generation." },
      { title: "Social Media Management", description: "Delivered a consistent social media strategy designed to strengthen brand awareness, communicate industry expertise and support ongoing business growth." },
      { title: "Performance Analytics & Reporting", description: "Tracked campaign performance, user behaviour and lead generation through continuous reporting and data-driven optimisation to support measurable business growth." }
    ]
  },
  "great-british-doner": {
    title: "GREAT BRITISH DONER",
    banner: "/images/results/GBD/ChatGPT Image 22 May 2026 15_22_25 (2).png",
    scope: ["Responsive Website Design", "Multi-Location Navigation Map", "Social Media Management", "Google Ads Setup", "Meta Ads Management", "Content Creation"],
    websiteUrl: "https://www.greatbritishdoner.com/",
    overview: "Great British Doner is a fast-growing multi-location restaurant brand redefining modern street food across the UK. As the business continued to expand, the brand required a scalable digital presence capable of supporting customer acquisition, franchise growth and consistent brand communication across multiple locations.\n\nGourmetica partnered with Great British Doner to design and develop a modern, high-performance website while delivering an integrated digital marketing strategy. Through ongoing social media management, Google Ads and Meta advertising, we continue to strengthen the brand's online visibility, drive customer acquisition and support its long-term expansion strategy.",
    challenge: "The brand needed a centralized website that allowed users to easily find their nearest location, view menus, and order online, while maintaining a single, consistent brand message. They also needed localized advertising campaigns to drive traffic to newly opened franchise locations.",
    solution: "To support the rapid growth of Great British Doner, we developed a digital ecosystem built around performance, scalability and brand consistency.\n\nA bespoke website was designed and developed to showcase the brand, support multiple locations and simplify the customer journey. Alongside the new website, we implemented a comprehensive digital marketing strategy including social media management, Google Ads and Meta advertising to increase brand awareness, generate qualified traffic and drive measurable business growth.\n\nEvery marketing activity was aligned with the brand's expansion objectives, ensuring a consistent digital experience while supporting customer engagement and future franchise growth.",
    stats: [
      { label: "Franchise Leads", val: "+140%" },
      { label: "Total Web Bookings", val: "4.1x increase" },
      { label: "Foot Traffic Growth", val: "+45% per venue" }
    ],
    gallery: [
      "/images/results/GBD/ChatGPT Image 24 May 2026 23_05_39 (1).png",
      "/images/results/GBD/_DSF8945 kopya.jpg"
    ],
    servicesDelivered: [
      { title: "Website Design & Development" },
      { title: "UX & UI Design" },
      { title: "Social Media Management" },
      { title: "Google Ads Management" },
      { title: "Meta Ads Management" },
      { title: "Digital Growth Strategy" },
      { title: "Brand Content Creation" },
      { title: "Performance Marketing" },
      { title: "Landing Page Optimisation" },
      { title: "Analytics & Reporting" }
    ]
  },
  "42holborn": {
    title: "42 HOLBORN",
    banner: "/images/banner/42newBackground.jpg",
    scope: ["Social Media Management", "Email Marketing", "Google & Facebook Advertising", "Review Management"],
    overview: "Gourmetica proudly presents 42 Holborn, a vibrant culinary destination situated in the heart of London at 42 Kingsway. With a menu showcasing the diverse flavors of the Mediterranean, 42 Holborn pays homage to the region's culinary heritage while infusing modern twists into each dish. Specializing in social media management, Google and Facebook advertising, and campaign management, our agency's capabilities align seamlessly with 42 Holborn's goals.",
    challenge: "",
    solution: "",
    stats: [
      { label: "Return On Investment", val: "15 x ROI" },
      { label: "Conversion Rate", val: "8.2%" },
      { label: "New Guests", val: "70" }
    ],
    gallery: [
      "/images/results/42holborn-ref/holbornimg1.jpg",
      "/images/results/42holborn-ref/holbornimg2.jpg",
      "/images/results/42holborn-ref/holbornimg3.jpg",
      "/images/results/42holborn-ref/holbornimg4.jpg"
    ],
    servicesDelivered: [
      { title: "Social Media Management", description: "Our partnership with 42 Holborn began by conducting a thorough analysis of their target demographic, brand identity, and market competitors. Drawing upon these findings, we developed a comprehensive social media strategy designed to enhance 42 Holborn's digital visibility, stimulate audience interaction, and spotlight the restaurant's culinary expertise." },
      { title: "Email Marketing", description: "We implemented a targeted email marketing campaign, tailored to various customer segments, including businesses. This approach resulted in a notable increase in reservations, underscoring the efficacy of personalized email outreach in driving customer engagement and retention." },
      { title: "Google and Facebook Advertising", description: "We intricately crafted targeted advertising campaigns on Google and Facebook. Through meticulous keyword research and audience segmentation, we refined the advertisements to resonate with individuals actively searching for exceptional dining opportunities in the London area." },
      { title: "Review Management", description: "Diligently monitoring platforms such as Google Reviews and TripAdvisor, we promptly and professionally addressed both positive and constructive feedback, adopting a proactive stance in preserving 42 Holborn's online standing." }
    ]
  },
  lizz: {
    title: "LIZZ RESTAURANT",
    banner: "/images/banner/LizzNewBg.jpg",
    scope: ["Custom Website Creation", "Social Media Management"],
    overview: "Gourmetica proudly introduces Lizz, a fine dining Mediterranean restaurant located in the charming town of Gosport. Lizz provides a chic, luxurious atmosphere perfect for any fine dining experience. The modern design and ample space create a lasting impression, while the blend of traditional and modern styles offers an inviting yet sophisticated vibe.",
    challenge: "",
    solution: "",
    stats: [
      { label: "Return On Investment", val: "12 x ROI" },
      { label: "Conversion Rate", val: "7.5%" },
      { label: "New Guests", val: "60" }
    ],
    gallery: [
      "/images/results/lizz-ref/lizznew3.jpg",
      "/images/results/lizz-ref/lizznew2.png",
      "/images/results/lizz-ref/Resizelizz.jpg",
      "/images/results/lizz-ref/lizznew4.jpg",
      "/images/results/lizz-ref/lizznew5.jpg"
    ],
    servicesDelivered: [
      { title: "Custom Website Creation", description: "To elevate Lizz's online presence, we designed and developed a custom website tailored to reflect the restaurant's luxurious ambiance and unique offerings. The website features an elegant design, user-friendly navigation, and showcases the menu, upcoming events, and reservation options." },
      { title: "Social Media Management", description: "Our collaboration with Lizz commenced with an in-depth analysis of their target audience, brand positioning, and competitive landscape. We crafted a robust social media strategy to enhance Lizz's online presence, foster audience engagement, and showcase the restaurant's culinary artistry." }
    ]
  },
  mysa: {
    title: "MYSA RESTAURANT",
    banner: "/images/banner/mysanewbackground.jpg",
    scope: ["Social Media Management", "Review Management"],
    overview: "Gourmetica proudly presents Mysa, a Mediterranean-inspired restaurant located in the heart of Hoddesdon. Mysa offers a delightful blend of breakfast, brunch, and a la carte options, providing a taste of the Mediterranean in every bite. Specializing in digital marketing, social media management, and website design, our partnership with Mysa reflects our commitment to helping them grow their brand and engage their local audience.",
    challenge: "",
    solution: "",
    stats: [
      { label: "Return On Investment", val: "10 x ROI" },
      { label: "Conversion Rate", val: "8%" },
      { label: "New Guests", val: "50" }
    ],
    gallery: [
      "/images/results/mysa-ref/mysa1.jpg",
      "/images/results/mysa-ref/mysa2.jpg",
      "/images/results/mysa-ref/mysa3.jpg",
      "/images/results/mysa-ref/mysa4.jpg"
    ],
    servicesDelivered: [
      { title: "Social Media Management", description: "We conducted a comprehensive analysis of Mysa's target audience, brand identity, and local competitors, then developed a strategic social media plan to boost their online visibility, generate interaction, and highlight the unique Mediterranean-inspired dishes they offer." },
      { title: "Review Management", description: "By closely monitoring Google Reviews and TripAdvisor, we ensured that feedback was promptly addressed, whether positive or constructive—bolstering Mysa's reputation as a go-to Mediterranean dining spot in Hoddesdon." }
    ]
  },
  payiz: {
    title: "Payiz Restaurant",
    banner: "/images/banner/PiyazMain-min-min.jpg",
    scope: ["Website Design & Development", "Review Management", "Brand Reputation Management", "Campaign Management"],
    overview: "Payiz Restaurant, a luxurious Mediterranean venue in London, sought to optimize online reputation metrics.",
    challenge: "Payiz faced unique challenges in their pursuit of culinary excellence. As a posh Mediterranean restaurant, Payiz needed to cultivate an exclusive and upscale brand image to attract high-end clients, differentiating themselves from other restaurants in the market and conveying their commitment to delivering exceptional dining experiences.",
    solution: "Gourmetica set up reputation audits, optimized Google maps listings, launched high-ROI search campaigns, and created social content showcasing their signature dishes.",
    stats: [
      { label: "Avg. Spend Per Customer", val: "+30%" },
      { label: "Website Traffic Surge", val: "+50%" },
      { label: "Bookings via Online System", val: "70%" }
    ],
    gallery: [
      "/images/results/payiz-ref/piyaz1.jpg",
      "/images/results/payiz-ref/piyaz2.jpg"
    ],
    servicesDelivered: [
      { title: "Exclusive Brand Positioning", description: "The exclusive brand positioning helped Payiz differentiate itself in the market. It attracted high-end clientele seeking exceptional dining experiences and resulted in a remarkable 30% increase in average spending per customer." },
      { title: "Targeted Digital Advertising", description: "To effectively reach Payiz's desired audience, our agency implemented a targeted digital advertising campaign. Leveraging data-driven insights, we identified individuals with an affinity for luxury dining and Mediterranean cuisine." },
      { title: "Advertising Campaign Results", description: "The targeted digital advertising campaign delivered exceptional results, driving a staggering 50% increase in website traffic from their target audience, resulting in a surge of online reservations." },
      { title: "Website & Booking System", description: "Gourmetica helped Payiz build a visually stunning website with a user-friendly interface. We implemented a reservation and booking system and focused on SEO-friendly blog writing and technical SEO to drive organic traffic." },
      { title: "SEO & Organic Traffic Growth", description: "The combination of a visually appealing website, seamless reservation system, and SEO efforts generated tremendous website traffic, further increasing their online visibility and attracting potential customers." }
    ]
  },
  rustiq: {
    title: "Rustiq Restaurant",
    banner: "/images/banner/RustiqMain-min-min.jpg",
    scope: ["Google My Business Optimization", "Influencer Collaboration"],
    overview: "Gourmetica collaborated closely with Rustiq to develop a comprehensive digital marketing strategy that included social media management on platforms like TikTok, Instagram, and Facebook, as well as performance marketing on Google and Facebook to tap into cold audiences.",
    challenge: "When we initially partnered with Rustiq, they faced the challenge of limited visibility in the highly competitive Leamington Spa dining scene. Although they had a strong offline reputation and a dedicated customer base, they were struggling to reach potential customers and expand their clientele. Our goal was to increase their brand awareness, engage with the local community, and drive more foot traffic to their establishment.",
    solution: "We directed custom social videos, launched retargeting social campaigns for users who visited their website, and optimized search ads.",
    stats: [
      { label: "Video Views", val: "450k+ views" },
      { label: "Weekend Table Fill", val: "100% capacity" },
      { label: "Meta Ad ROAS", val: "5.2x" }
    ],
    gallery: [],
    servicesDelivered: [
      { title: "Social Media Growth", description: "Through Gourmetica's social media management efforts, the restaurant witnessed a significant boost in brand awareness. Engaging posts, viral TikTok videos, and aesthetically pleasing Instagram content attracted a growing number of followers and generated positive buzz." },
      { title: "Performance Marketing", description: "The performance marketing campaigns successfully penetrated the cold audience, attracting new customers who had not previously been aware of the restaurant, driving a substantial increase in reservations and foot traffic." },
      { title: "Online Reputation", description: "Gourmetica's continuous efforts in managing the restaurant's online presence led to positive customer reviews and feedback, with guests praising the exceptional dining experience, authentic Spanish flavors, and impeccable service." }
    ]
  },
  liman: {
    title: "Liman Restaurant",
    banner: "/images/banner/bglimannew.jpg",
    scope: ["Advertising", "Social Media Management", "Website Design", "Branding", "Photography", "Email Marketing"],
    overview: "Gourmetica Restaurant Marketing Agency proudly presents Liman Restaurant, a captivating Mediterranean venue in Islington, London. Rooted in the historic \"Fertile Crescent\" to the Levant, Liman seamlessly blends tradition with a modern touch. Our expertise in social media management, Google and Facebook advertising, and review management aligned with Liman's goal, marking the beginning of a strategic partnership.",
    challenge: "Fierce local competition in Islington meant Liman needed to dominate keywords like 'Turkish restaurant Islington' to drive booking volumes.",
    solution: "We implemented technical local SEO, optimized their Google Business Profile, and updated website content to optimize search keyword density.",
    stats: [
      { label: "Return On Investment", val: "18 x ROI" },
      { label: "Conversion Rate", val: "2.8%" },
      { label: "New Guests", val: "85" }
    ],
    gallery: [
      "/images/results/liman-ref/liman2.jpg",
      "/images/results/liman-ref/liman3.jpg",
      "/images/results/liman-ref/liman4.jpg",
      "/images/results/liman-ref/liman5.jpg",
      "/images/results/liman-ref/liman6.jpg"
    ],
    servicesDelivered: [
      { title: "Social Media Management", description: "Our marketing journey with Liman Restaurant commenced with an in-depth analysis of their target audience, brand identity, and competitors, formulating a robust social media strategy aimed at amplifying Liman's online presence and showcasing the restaurant's culinary excellence." },
      { title: "Email Marketing", description: "We crafted compelling messages in a strategic email marketing campaign reaching various customer segments, including business companies, resulting in a substantial increase in reservations." },
      { title: "Photography", description: "Our tailored photoshoot for Liman Restaurant has become a cornerstone in our marketing strategy—professionally captured visuals showcasing the restaurant's ambiance and dining experience that draw patrons in across social media and online ads." },
      { title: "Google and Facebook Advertising", description: "We meticulously designed targeted advertising campaigns on Google and Facebook, using precise keyword research and audience segmentation to connect with individuals actively seeking outstanding dining experiences in the Islington area." },
      { title: "Review Management", description: "Vigilantly monitoring platforms such as Google Reviews and TripAdvisor, we responded promptly and professionally to both positive and constructive feedback, maintaining Liman's online reputation." }
    ]
  }
};
