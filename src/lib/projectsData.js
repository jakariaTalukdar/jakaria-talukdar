export const projectCategories = [
  {
    id: "ecommerce",
    label: "E-commerce",
    description: "Online stores and shopping platforms.",
  },
  {
    id: "company",
    label: "Company Website",
    description: "Corporate and business presence sites.",
  },
  {
    id: "others",
    label: "Others",
    description: "Education, hospitality, and specialized platforms.",
  },
];

export const projectsData = [
  {
    id: "watchshopbd",
    title: "WatchShopBd",
    url: "https://watchshopbd.com/",
    domain: "watchshopbd.com",
    role: "Frontend Developer",
    category: "ecommerce",
    year: "2024",
    client: "WatchShopBd",
    stack: ["Laravel", "React", "Inertia.js", "MySQL"],
    summary:
      "Nationwide luxury watch storefront for authentic branded watches with category shopping, outlets, and blog content.",
    overview:
      "Watch Shop BD is a trusted Bangladeshi retailer of authentic luxury and lifestyle watches (Seiko, Citizen, Tissot, Rado, Casio, and more). The online storefront helps customers browse men’s and ladies’ collections, discover new arrivals, and shop with nationwide delivery support, while also connecting shoppers to physical outlets and brand storytelling content.",
    technology:
      "Built as a Laravel application with an Inertia.js + React frontend, Vite-compiled assets, CSRF-protected forms, and MySQL-backed catalog/content data. Product and category pages are served as Inertia components (for example Product/Category) with shared SEO and customer auth props.",
    structure:
      "Storefront is organized around Home, category browsing (e.g. men’s/ladies watches), new arrivals, outlets, blog, and contact. Shared layout props handle SEO, customer authentication, and flash messaging, keeping product discovery and brand pages consistent across devices.",
    features: [
      "Category-based watch catalog (men’s & ladies collections)",
      "New arrivals and brand-focused product discovery",
      "Outlet listing and customer contact/WhatsApp paths",
      "SEO-ready pages with shared meta props",
      "Responsive storefront for mobile and desktop shoppers",
    ],
    responsibilities: [
      "Implemented responsive product and category UI experiences",
      "Structured frontend Inertia pages for catalog browsing",
      "Polished visual hierarchy for conversion-focused shopping",
    ],
    screenshots: [],
  },
  {
    id: "mahijewellers",
    title: "Mahi Jewellers",
    url: "https://mahijewellers.com.bd/",
    domain: "mahijewellers.com.bd",
    role: "Full Stack Developer",
    category: "ecommerce",
    year: "2025",
    client: "Mahi Jewellers",
    stack: ["Laravel", "MySQL", "Vite", "Swiper"],
    summary:
      "Full-stack jewelry e-commerce for gold, diamond, silver, and bridal collections with store locator and shopping policies.",
    overview:
      "Mahi Jewellers Pvt. Ltd. is a jewelry commerce platform covering gold, diamond, silver, bridal, party, and everyday collections. The site supports gender-based browsing, featured deals, bridal storytelling (Brides of Bangladesh), multi-store presence, and commerce essentials like cart, account, and policy pages for buyback, exchange, shipping, and refunds.",
    technology:
      "Laravel + MySQL backend with Vite-built frontend assets, CSRF-protected sessions, and Swiper-powered merchandising carousels. Product catalog, categories, cart, authentication, and content pages are driven dynamically from the database.",
    structure:
      "Customer area includes Home, Categories (gold, diamond, rings, necklaces, bridal, and more), Product detail, Cart, Login/Account, Our Stores, Blog, CSR, Help/FAQ, and a full Policies section. Admin-ready catalog workflows support ongoing product and promotional updates.",
    features: [
      "Rich jewelry taxonomy (gold, diamond, silver, bridal, party, regular wear)",
      "Product detail pages with hallmark/certified messaging",
      "Cart, login, and account flows",
      "Store locator and bridal campaign content",
      "Commerce policies (shipping, refund, buyback, exchange)",
    ],
    responsibilities: [
      "Developed end-to-end Laravel storefront and catalog features",
      "Modeled product/category data and policy content in MySQL",
      "Delivered responsive UI with merchandising carousels and conversion flows",
    ],
    screenshots: [],
  },
  {
    id: "cozy",
    title: "Cozy",
    url: "https://cozy-bd.com/",
    domain: "cozy-bd.com",
    role: "Full Stack Developer",
    category: "ecommerce",
    year: "2025",
    client: "Cozy BD",
    stack: ["Laravel", "MySQL", "Vite"],
    summary:
      "Fashion e-commerce for occasion and everyday wear with categories, collections, wishlist, compare, and order-help flows.",
    overview:
      "Cozy is a Bangladesh fashion e-commerce store focused on category and collection shopping—Eid dress, couple dress, corporate wear, family packs, seasonal campaigns, and more. The platform highlights featured, new, and best-selling products, and supports cart, wishlist, compare, outlets, FAQ, and order guidance for a complete retail experience.",
    technology:
      "Laravel + MySQL full-stack commerce with Vite assets, session CSRF protection, category/brand/collection listing routes, and an admin site-settings area for store configuration.",
    structure:
      "Key routes cover Home, category/subcategory/brand product listings, collections, product detail, cart/wishlist/compare, login/register, outlets, company profile, how-to-order/help center, and policy pages. Admin settings support ongoing storefront configuration.",
    features: [
      "Occasion-driven category shopping (Eid, couple, corporate, seasonal)",
      "Featured, new collection, and best-selling product sections",
      "Cart, wishlist, and compare tools",
      "Outlets, FAQ, and order-help content",
      "Policy suite for shipping, refund, warranty, and privacy",
    ],
    responsibilities: [
      "Built full-stack e-commerce modules and listing flows",
      "Implemented category/collection browsing and product presentation",
      "Maintained clean MySQL-backed catalog and content models",
    ],
    screenshots: [],
  },
  {
    id: "doubleaa",
    title: "Double AA",
    url: "https://doubleaa.org/",
    domain: "doubleaa.org",
    role: "Full Stack Developer",
    category: "ecommerce",
    year: "2025",
    client: "Double AA",
    stack: ["Laravel", "MySQL", "React", "Inertia.js"],
    summary:
      "Premium apparel e-commerce with React/Inertia UI, wishlist/compare, brand menus, and dynamic home merchandising.",
    overview:
      "DOUBLE A is a premium clothing e-commerce brand (Gazipur-based) selling men’s, women’s, and kids apparel across formal and casual categories—blazers, dresses, kurtis, jeans, party wear, and more. The experience emphasizes polished UI, curated showcases, and modern shopping utilities such as cart, wishlist, and compare.",
    technology:
      "Laravel + MySQL backend with React pages delivered through Inertia.js. Home props include sliders, home sections, categories, brands, best-sellers, feedback, cart/wishlist/compare counts, and paginated product data for a fully dynamic storefront.",
    structure:
      "Inertia Home component receives site settings, header brand/category menus, merchandising blocks, and shopping state. Catalog browsing is organized by Men/Women/Kids brands and apparel categories, with shared auth/flash handling across pages.",
    features: [
      "Premium fashion catalog across Men, Women, and Kids",
      "Dynamic home sliders, showcases, and best-selling sections",
      "Cart, wishlist, and compare utilities",
      "Brand/category header navigation and filtered browsing",
      "Customer feedback and outlet-aware footer content",
    ],
    responsibilities: [
      "Delivered full-stack Inertia.js commerce implementation",
      "Built polished React UI components for premium brand presentation",
      "Connected frontend experiences to Laravel product and content models",
    ],
    screenshots: [],
  },
  {
    id: "alhera",
    title: "Al Hera Motors",
    url: "https://alheramotors.com/",
    domain: "alheramotors.com",
    role: "Full Stack Developer",
    category: "ecommerce",
    year: "2025",
    client: "Al Hera Motors",
    stack: ["Laravel", "MySQL", "Vite"],
    summary:
      "Auto accessories and parts e-commerce with brand/category shopping, deals, wishlist, and COD-friendly trust messaging.",
    overview:
      "Al Hera Motors is an automobile accessories and parts storefront in Bangladesh, selling car care, interior accessories, chargers, Android players, and related products. The site guides shoppers through category and brand discovery, new arrivals, hot deals, featured picks, and trust signals like free shipping thresholds, cash on delivery, and easy returns.",
    technology:
      "Laravel + MySQL commerce stack with Vite assets and CSRF-protected customer sessions. Listing endpoints support category/brand product browsing, customer login, and product detail pages for a complete retail workflow.",
    structure:
      "Customer journeys flow through Home merchandising (sliders, new arrivals, brands, hot deals, featured), category/brand listing pages, product pages, cart, and customer login. Supporting sections cover company info, help center, and returns/warranty.",
    features: [
      "Category and brand-based auto-parts browsing",
      "New arrivals, hot deals, and featured product modules",
      "Customer login and wishlist-oriented product actions",
      "Trust messaging: COD, free shipping, support, easy returns",
      "Help center and returns/warranty information",
    ],
    responsibilities: [
      "Developed full-stack storefront and backend catalog features",
      "Structured product/brand/category data for parts retail",
      "Shipped a production-ready responsive commerce experience",
    ],
    screenshots: [],
  },
  {
    id: "srsit",
    title: "SRS IT Solution LTD",
    url: "https://srsit.com.bd/",
    domain: "srsit.com.bd",
    role: "Full Stack Developer",
    category: "company",
    year: "2025",
    client: "SRS IT Solution LTD.",
    stack: ["Laravel", "MySQL"],
    summary:
      "Corporate IT company website covering services, software products, careers, and lead-generation content.",
    overview:
      "SRS IT is a Bangladesh web design and software company site presenting services (web development, WordPress, e-commerce, mobile apps, SEO, SMS, email marketing, hosting/domain) and product lines such as ERP, CRM, inventory, hospital, HR, POS, and real-estate systems. The site positions the company for leads with service packages, product pages, team, careers, and contact paths.",
    technology:
      "Laravel + MySQL company platform with compiled CSS assets and dynamic content for services, products, and marketing sections. Content is structured for SEO-focused service/product landing pages and business conversion.",
    structure:
      "Information architecture spans Home, About, Services (individual service pages), Products (ERP/CRM/HR and more), Team, Careers, Contact, and Sitemap. Each service/product page supports detailed offering copy and quote CTAs.",
    features: [
      "Service catalog for web, e-commerce, apps, SEO, and marketing",
      "Software product pages (ERP, CRM, hospital, inventory, and more)",
      "Company about, team, and careers sections",
      "Lead-generation CTAs and contact flows",
      "SEO-oriented service/product landing structure",
    ],
    responsibilities: [
      "Built the company website end-to-end",
      "Implemented service/product content architecture and pages",
      "Delivered production-ready marketing and conversion features",
    ],
    screenshots: [],
  },
  {
    id: "greenzm",
    title: "Green ZM",
    url: "https://green-zm.com/",
    domain: "green-zm.com",
    role: "Full Stack Developer",
    category: "company",
    year: "2025",
    client: "Green ZM",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    summary:
      "Engineering consultancy website for MEP/HVAC services, sector pages, project portfolio, and consultation leads.",
    overview:
      "Green ZM presents professional Mechanical, Electrical, Plumbing (MEP), HVAC, Fire Safety, ELV, BMS, and engineering consultancy services across Bangladesh and related markets. The site highlights services, sector expertise (oil & gas, power & energy, GESD), multi-industry project portfolio, clients, careers, and consultation/quote funnels.",
    technology:
      "Laravel + MySQL backend with Tailwind-styled frontend pages, CSRF-protected forms, and media-rich service/project content served from storage. Consultation and quote requests are handled through site forms.",
    structure:
      "Pages include Home, About, Services (engineering design, oil & gas consultancy, process engineering, project management), Industries/Sectors, Projects by industry (healthcare, garments, commercial, residential, industrial, educational), Clients, Blog, Careers, and Contact.",
    features: [
      "Service pages for MEP and engineering consultancy offerings",
      "Sector-focused content (oil & gas, power, GESD)",
      "Filterable project portfolio by industry",
      "Consultation and quote request lead forms",
      "Clients, careers, and company storytelling sections",
    ],
    responsibilities: [
      "Developed full-stack corporate website and content models",
      "Organized multi-service and portfolio information architecture",
      "Delivered responsive business UI with lead-capture flows",
    ],
    screenshots: [],
  },
  {
    id: "signature",
    title: "Signature Group BD",
    url: "https://signature.srsit.com.bd/",
    domain: "signature.srsit.com.bd",
    role: "Full Stack Developer",
    category: "company",
    year: "2025",
    client: "Signature Group BD",
    stack: ["Laravel", "React", "Inertia.js", "MySQL"],
    summary:
      "Property development showcase for Signature Living joint-venture projects across Dhaka and Narayanganj.",
    overview:
      "Signature Group (Signature Living) showcases selective residential and commercial joint-venture developments with the tagline “Creating Benchmark in Vertical Living.” The site communicates brand story, project/company presence across Dhaka and Narayanganj, news, FAQs, and contact channels for prospective clients and partners.",
    technology:
      "Laravel + MySQL with React frontend via Inertia.js and Ziggy-routed navigation. Role-based admin area manages about content, settings, users/roles/permissions, while public pages consume site and about props.",
    structure:
      "Public routes include Home, About, Companies, Cities, News, FAQs, Terms, and Contact. Admin modules cover dashboard, about-us, settings, users, roles, and permissions for ongoing content control.",
    features: [
      "Brand and about storytelling for Signature Living",
      "Company and city-based development presentation",
      "News, FAQ, and terms content pages",
      "Contact form with company phone/email/address details",
      "Admin CMS for settings, users, and about content",
    ],
    responsibilities: [
      "Built interactive frontend with React/Inertia",
      "Implemented Laravel backend models and admin content workflows",
      "Delivered a polished real-estate development portfolio site",
    ],
    screenshots: [],
  },
  {
    id: "winmark",
    title: "Winmark OPC",
    url: "https://winmarkopc.com/",
    domain: "winmarkopc.com",
    role: "Full Stack Developer",
    category: "company",
    year: "2025",
    client: "Winmark OPC",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    summary:
      "Corporate sourcing site for pharmaceutical, dairy, food, feed, herbal, and industrial ingredient segments.",
    overview:
      "Winmark Technology OPC connects global manufacturers with local markets across pharmaceutical APIs/excipients, dairy & infant nutrition, food/feed ingredients, herbals, industrial specialty products, machinery, and packaging. The site emphasizes trust, quality assurance, company profile downloads, leadership messages, and multi-segment service pages.",
    technology:
      "Laravel + MySQL corporate website with Tailwind UI, Swiper media components, downloadable company profile, and an admin area for content operations.",
    structure:
      "Information architecture includes Home, Services (segment pages), Mission & Vision, Leadership Team, Messages from Leaders, Clients, Certificates, Photo Gallery, Video, Company Profile (view/download), Contact, and Admin.",
    features: [
      "Multi-industry service/segment pages",
      "Company profile brochure download",
      "Leadership, mission/vision, and trust messaging",
      "Client, certificate, gallery, and video sections",
      "Contact and quote-oriented conversion paths",
    ],
    responsibilities: [
      "Developed full-stack company website and segment pages",
      "Structured industry content and media sections",
      "Shipped production-ready corporate presence with admin support",
    ],
    screenshots: [],
  },
  {
    id: "attic",
    title: "Attic Design",
    url: "https://atticdesign.com.bd/",
    domain: "atticdesign.com.bd",
    role: "Full Stack Developer",
    category: "company",
    year: "2025",
    client: "Attic Design",
    stack: ["Laravel", "React", "Inertia.js", "MySQL"],
    summary:
      "Architecture and interior design company site with portfolio projects, services, team, and CMS-driven sections.",
    overview:
      "Attic Design is an architecture and design company website presenting services from 3D visualization and construction supervision to project management and authority approval. The home experience combines story-in-numbers, portfolio projects (residential, interior, commercial), services, and sectioned storytelling for architecture and interior work.",
    technology:
      "Laravel + MySQL with React/Inertia frontend, Ziggy routes, and a full admin CMS for projects, services, sliders, sections, teams, blogs, messages, roles/permissions, and site settings.",
    structure:
      "Public pages: Home, About, Team, Services, Projects, Blogs, Messages, Contact. Admin CRUD covers projects, services, sliders, sections, teams, blogs, about/story-in-numbers, users/roles/permissions, and settings—enabling fully dynamic content management.",
    features: [
      "Architecture/interior service presentation",
      "Dynamic project portfolio with case-style entries",
      "Team, blog, and contact modules",
      "Scroll-reveal style frontend composition",
      "Comprehensive admin CMS for all major content types",
    ],
    responsibilities: [
      "Built full-stack architecture company site with Inertia",
      "Implemented CMS modules for projects, services, and team content",
      "Connected design-focused UI to Laravel-backed content models",
    ],
    screenshots: [],
  },
  {
    id: "btigroup",
    title: "BTI Group BD",
    url: "https://btigroupbd.com/",
    domain: "btigroupbd.com",
    role: "Full Stack Developer",
    category: "others",
    year: "2025",
    client: "Brain Tree International School",
    stack: ["Laravel", "React", "Inertia.js", "MySQL"],
    summary:
      "Dynamic English-medium school website for notices, academics, admissions, gallery, and learning content.",
    overview:
      "Brain Tree International School’s website presents an English-medium institutional experience—mission/vision, admissions messaging, notices, blogs, success stories, academic calendar, classes, gallery, and structured learning categories. The platform is designed so school staff can manage content dynamically rather than through static pages alone.",
    technology:
      "Laravel + MySQL with React pages via Inertia.js. Home props hydrate site settings, sliders, about/stats, notices, blogs, admissions, learning categories/menu, gallery, classes, and academic calendar for a CMS-driven school portal.",
    structure:
      "Frontend home aggregates institutional modules (about, notices, blogs, learning menu, gallery, academics). Learning content is hierarchical (categories → subcategories → contents). Site settings control branding colors, logo, contact, and social links.",
    features: [
      "Dynamic school branding and site settings",
      "About, mission/vision, and stats storytelling",
      "Notices, blogs, and success-story modules",
      "Learning categories with nested educational content",
      "Admissions, gallery, classes, and academic calendar support",
    ],
    responsibilities: [
      "Developed dynamic school website features with Inertia",
      "Implemented CMS-style content handling for academics and notices",
      "Delivered modern responsive education UI",
    ],
    screenshots: [],
  },
  {
    id: "kuakata",
    title: "Hotel Kuakata Inn",
    url: "https://hotelkuakatainn.com.bd/",
    domain: "hotelkuakatainn.com.bd",
    role: "Frontend Developer",
    category: "others",
    year: "2024",
    client: "Hotel Kuakata Inn",
    stack: ["Tailwind CSS", "Alpine.js"],
    summary:
      "Luxury beachfront resort frontend with room booking UI, facilities, dining, and guest-experience sections.",
    overview:
      "Hotel Kuakata Inn is presented as a luxury beachfront resort on the Bay of Bengal. The website highlights rooms and suites, booking search, amenities, restaurant/dining, conference facilities, guest reviews, nearby attractions, and transport—focused on atmosphere and conversion to inquiries/bookings.",
    technology:
      "Frontend built with Tailwind CSS and Alpine.js interactivity, with CSRF-aware forms for booking/contact flows. Layout emphasizes large imagery, room cards, and hospitality CTAs across devices.",
    structure:
      "Key pages include Home (hero booking widget + rooms preview), Rooms (VIP Deluxe, Family, Twin, Couple, Non-AC), Restaurant, Conference, Gallery, Tour Places, Transport, and Contact. Home sections cover facilities, reviews, dining menus, and amenity highlights.",
    features: [
      "Room search widget with dates and guest counts",
      "Detailed rooms & suites presentation with pricing cues",
      "Facilities, dining, spa/conference, and amenity sections",
      "Guest testimonials and culinary menus",
      "Gallery, tour places, transport, and contact pages",
    ],
    responsibilities: [
      "Designed and built the hospitality frontend interface",
      "Crafted responsive visual layouts with Tailwind CSS",
      "Delivered polished booking-oriented page composition",
    ],
    screenshots: [],
  },
  {
    id: "mozahar",
    title: "Mozahar.com",
    url: "https://mozahar.com/",
    domain: "mozahar.com",
    role: "Frontend Developer",
    category: "others",
    year: "2024",
    client: "Mozahar.com",
    stack: ["Next.js", "React"],
    summary:
      "Bangladeshi e-learning platform for teachers and students—question banks, model tests, job prep, institutes, and agent tools.",
    overview:
      "Mozahar.com is a popular Bangladeshi educational platform offering multi-functional tools for teachers and students: create/print questions, board questions, model tests, job preparation exams, packages, institutes, courses, bookshelf practice, language club modules, offers, and agent/affiliate workflows. It is positioned as an online education service serving learners across Bangladesh.",
    technology:
      "Next.js (Pages Router) + React frontend with client-rendered app routes, auth flows, dashboards, and specialized tool modules. Route map covers student/teacher features, agent portals, packages, jobs, institutes, and practice/report flows.",
    structure:
      "Major areas include public marketing pages (home, about, contact, offers, packages), learning tools (model-test, jobs/exams, institute, courses, bookshelf, presentation, language club), authenticated dashboards (profile, my questions), and an agent portal (institutes, question entry, teachers, subscriptions, referrals). Nested routes support practice sessions, answersheets, and reports.",
    features: [
      "Question creation, viewing, and printing tools for teachers",
      "Model tests, job prep exams, and practice reports",
      "Institute and course discovery experiences",
      "Bookshelf practice with answersheet/report flows",
      "Agent portal for institutes, questions, teachers, and subscriptions",
    ],
    responsibilities: [
      "Built frontend experiences with Next.js and React",
      "Implemented responsive educational UI across multi-tool flows",
      "Supported teacher/student/agent journey presentation",
    ],
    screenshots: [],
  },
];

export const projectsNote =
  "Also delivered: CRM, HRM, hospital management, and 150+ other professional web projects.";

export function getProjectsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return projectsData;
  return projectsData.filter((project) => project.category === categoryId);
}

export function getGroupedProjects() {
  return projectCategories.map((category) => ({
    ...category,
    projects: projectsData.filter((project) => project.category === category.id),
  }));
}

export function getCategoryLabel(categoryId) {
  return (
    projectCategories.find((category) => category.id === categoryId)?.label ||
    "Project"
  );
}

export function getProjectById(id) {
  return projectsData.find((project) => project.id === id) || null;
}

export function getRelatedProjects(project, limit = 3) {
  return projectsData
    .filter(
      (item) => item.category === project.category && item.id !== project.id
    )
    .slice(0, limit);
}

/** Maps project id -> local screenshot folder under /public/project-screenshots */
const projectScreenshotFolders = {
  watchshopbd: { folder: "watchshop", desktop: 6, mobile: 5 },
  mahijewellers: { folder: "mahi-jewellers", desktop: 8, mobile: 5 },
  cozy: { folder: "cozy", desktop: 4, mobile: 5 },
  doubleaa: { folder: "doubleA", desktop: 6, mobile: 6 },
  alhera: { folder: "al-hera-motors", desktop: 7, mobile: 5 },
  srsit: { folder: "srsit", desktop: 5, mobile: 6 },
  greenzm: { folder: "greenzm", desktop: 4, mobile: 6 },
  signature: { folder: "signature", desktop: 12, mobile: 5 },
  winmark: { folder: "winmark", desktop: 8, mobile: 5 },
  attic: { folder: "attic-design", desktop: 7, mobile: 7 },
  btigroup: { folder: "bti", desktop: 3, mobile: 5 },
  kuakata: { folder: "kuakata", desktop: 10, mobile: 7 },
  mozahar: { folder: "mozahar", desktop: 22, mobile: 7 },
};

function buildDeviceScreenshots(project, folder, device, count) {
  const labelPrefix = device === "desktop" ? "Desktop" : "Mobile";
  return Array.from({ length: count }, (_, index) => {
    const n = index + 1;
    return {
      src: `/project-screenshots/${folder}/${device}/${n}.png`,
      alt: `${project.title} ${device} screenshot ${n}`,
      label: `${labelPrefix} ${n}`,
      device,
    };
  });
}

function buildLocalScreenshots(project, meta) {
  return [
    ...buildDeviceScreenshots(project, meta.folder, "desktop", meta.desktop || 0),
    ...buildDeviceScreenshots(project, meta.folder, "mobile", meta.mobile || 0),
  ];
}

/** Local screenshots if provided; otherwise folder map; else live-site preview captures */
export function getProjectScreenshots(project) {
  if (project.screenshots?.length) {
    return project.screenshots.map((shot, index) =>
      typeof shot === "string"
        ? {
            src: shot,
            alt: `${project.title} screenshot ${index + 1}`,
            label: `Screenshot ${index + 1}`,
          }
        : shot
    );
  }

  const mapped = projectScreenshotFolders[project.id];
  if (mapped) {
    return buildLocalScreenshots(project, mapped);
  }

  return [
    {
      src: `https://image.thum.io/get/width/1400/crop/900/noanimate/${project.url}`,
      alt: `${project.title} desktop preview`,
      label: "Desktop",
      remote: true,
      device: "desktop",
    },
    {
      src: `https://image.thum.io/get/width/420/crop/820/noanimate/${project.url}`,
      alt: `${project.title} mobile preview`,
      label: "Mobile",
      remote: true,
      device: "mobile",
    },
  ];
}
