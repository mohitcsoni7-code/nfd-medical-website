import { getProductById } from '../data/productsData';

export interface SEOData {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'product';
  keywords: string[];
  product?: {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
  };
}

export const generateSEOData = (currentRoute: string, params: any): SEOData => {
  const baseUrl = 'https://nfd-medical.com';
  const currentProduct = currentRoute === 'product' && params?.id 
    ? getProductById(params.id) 
    : null;

  switch (currentRoute) {
    case 'products':
      return {
        title: "All Products - NFD Neurovascular Medical Devices",
        description: "Explore NFD's complete portfolio of advanced neurovascular medical devices including HELIOS, Polaris Catheter Series, and Terra Coil Systems for stroke treatment and neuro-intervention procedures.",
        url: `${baseUrl}/products`,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop",
        keywords: [
          "neurovascular devices", "medical devices portfolio", "stroke treatment", "aneurysm treatment",
          "thrombectomy devices", "embolization coils", "micro catheters", "aspiration systems"
        ]
      };
      
    case 'home':
      return {
        title: "NFD - Neuro Flow Dynamics | Leading Neurovascular Medical Devices",
        description: "NFD develops cutting-edge solutions for neuro-intervention procedures and stroke treatment technologies. Trusted by healthcare professionals worldwide with 25+ years of expertise.",
        url: baseUrl,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop",
        keywords: [
          "neurovascular devices", "stroke treatment", "medical devices", "neuro intervention",
          "aneurysm treatment", "thrombectomy", "cerebral angiography", "medical technology"
        ]
      };
      
    case 'product':
      if (currentProduct) {
        return {
          title: `${currentProduct.name} - Advanced Neurovascular Solution`,
          description: `${currentProduct.fullDescription} Professional-grade medical device for neurovascular procedures by NFD.`,
          url: `${baseUrl}/product/${currentProduct.id}`,
          image: currentProduct.image || currentProduct.gallery?.[0] || "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop",
          type: 'product' as const,
          keywords: [
            currentProduct.name.toLowerCase(),
            currentProduct.category.toLowerCase(),
            "neurovascular device",
            "medical equipment",
            "stroke treatment",
            "aneurysm treatment"
          ],
          product: {
            id: currentProduct.id,
            name: currentProduct.name,
            description: currentProduct.fullDescription,
            image: currentProduct.image || currentProduct.gallery?.[0] || "",
            category: currentProduct.category
          }
        };
      }
      return {
        title: "Product - NFD Medical Devices",
        description: "Explore our advanced neurovascular medical devices designed for precision and safety.",
        url: `${baseUrl}/product`,
        keywords: ["medical devices", "neurovascular", "stroke treatment"]
      };
      
    case 'contact':
      return {
        title: "Contact NFD - Get Expert Medical Device Support",
        description: "Contact NFD for expert support, product demonstrations, and technical consultation. Connect with our global team of neurovascular specialists.",
        url: `${baseUrl}/contact`,
        keywords: ["contact nfd", "medical device support", "technical consultation", "product demonstration"]
      };
      
    case 'thank-you':
      return {
        title: "Thank You - NFD Medical Device Consultation",
        description: "Thank you for your interest in NFD's neurovascular solutions. Our team will contact you shortly.",
        url: `${baseUrl}/thank-you`,
        keywords: ["thank you", "consultation", "medical devices"]
      };

    case 'terms-of-use':
      return {
        title: "Terms of Use - NFD Legal Information",
        description: "Terms and conditions for using NFD's website and accessing our medical device information. Professional use guidelines.",
        url: `${baseUrl}/terms-of-use`,
        keywords: ["terms of use", "legal terms", "medical device terms", "professional use"]
      };

    case 'privacy-policy':
      return {
        title: "Privacy Policy - NFD Data Protection",
        description: "NFD's privacy policy explaining how we collect, use, and protect healthcare professional data in compliance with GDPR.",
        url: `${baseUrl}/privacy-policy`,
        keywords: ["privacy policy", "data protection", "GDPR", "healthcare privacy"]
      };

    case 'cookie-policy':
      return {
        title: "Cookie Policy - NFD Website Cookies",
        description: "Learn about NFD's use of cookies and tracking technologies on our medical device website for healthcare professionals.",
        url: `${baseUrl}/cookie-policy`,
        keywords: ["cookie policy", "website cookies", "tracking", "web analytics"]
      };

    case 'gdpr-compliance':
      return {
        title: "GDPR Compliance - NFD Data Rights",
        description: "NFD's commitment to GDPR compliance and your data protection rights as a healthcare professional.",
        url: `${baseUrl}/gdpr-compliance`,
        keywords: ["GDPR compliance", "data rights", "EU privacy", "healthcare data protection"]
      };

    case 'accessibility':
      return {
        title: "Accessibility Statement - NFD Website Accessibility",
        description: "NFD's commitment to digital accessibility for all healthcare professionals, including WCAG compliance information.",
        url: `${baseUrl}/accessibility`,
        keywords: ["accessibility statement", "WCAG compliance", "digital accessibility", "inclusive design"]
      };
      
    default:
      return {
        title: "NFD - Neuro Flow Dynamics | Leading Neurovascular Medical Devices",
        description: "NFD develops cutting-edge solutions for neuro-intervention procedures and stroke treatment technologies.",
        url: baseUrl,
        keywords: ["neurovascular devices", "medical technology"]
      };
  }
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Disallow: /thank-you

# Sitemaps
Sitemap: https://nfd-medical.com/sitemap.xml

# Crawl delay for good measure
Crawl-delay: 1

# Allow specific medical search bots
User-agent: Medlinebot
Allow: /

User-agent: PubMedbot  
Allow: /

# Healthcare-specific bots
User-agent: NIH-Bot
Allow: /

User-agent: FDA-Bot
Allow: /

# Block aggressive crawlers that might not be relevant for medical sites
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /`;
};

export const generateSitemapXML = () => {
  const baseUrl = 'https://nfd-medical.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      url: baseUrl,
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/#products`,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/#about`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/#why-choose`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/#expertise`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/#mission`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/#contact`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/contact`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/product-selector`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    // Individual product pages
    {
      url: `${baseUrl}/product/helios`,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/product/polaris-aspiration`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/product/polaris-micro-acute`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/product/terra-coil`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/product/polaris-distal-access`,
      changefreq: 'monthly',
      priority: '0.8'
    }
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;
};

// SEO-optimized keywords for different content types
export const seoKeywords = {
  general: [
    'neurovascular devices',
    'stroke treatment',
    'medical devices',
    'neuro intervention',
    'aneurysm treatment',
    'thrombectomy',
    'cerebral angiography',
    'medical technology',
    'healthcare solutions',
    'neurosurgery',
    'interventional radiology',
    'brain surgery',
    'cerebrovascular disease',
    'medical equipment'
  ],
  products: [
    'medical device',
    'neurovascular equipment',
    'stroke intervention',
    'catheter system',
    'aspiration device',
    'embolization coil',
    'micro catheter',
    'distal access catheter',
    'thrombectomy device'
  ],
  company: [
    'NFD medical',
    'neuro flow dynamics',
    'medical device manufacturer',
    'healthcare technology',
    'ISO certified',
    'FDA approved',
    'make in india',
    'medical innovation',
    'clinical excellence'
  ],
  location: [
    'Mumbai medical devices',
    'India healthcare',
    'Indian medical technology',
    'global medical solutions',
    'neurovascular India'
  ]
};

// Generate meta description based on content type
export const generateMetaDescription = (type: string, productName?: string) => {
  const baseCompany = "NFD - Neuro Flow Dynamics";
  
  switch (type) {
    case 'product':
      return `${productName} by ${baseCompany} - Advanced neurovascular medical device for stroke treatment and neuro-intervention procedures. Trusted by healthcare professionals worldwide.`;
    case 'contact':
      return `Contact ${baseCompany} for expert medical device support, product demonstrations, and technical consultation. Connect with our global team of neurovascular specialists.`;
    case 'about':
      return `About ${baseCompany} - Leading manufacturer of neurovascular medical devices with 25+ years of expertise in stroke treatment and cerebrovascular solutions.`;
    case 'products':
      return `Explore ${baseCompany}'s comprehensive range of neurovascular medical devices including thrombectomy systems, catheters, and embolization solutions.`;
    default:
      return `${baseCompany} develops cutting-edge solutions for neuro-intervention procedures and stroke treatment technologies. Trusted by healthcare professionals worldwide.`;
  }
};

export default {
  generateRobotsTxt,
  generateSitemapXML,
  seoKeywords,
  generateMetaDescription
};