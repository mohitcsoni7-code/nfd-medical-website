import { memo } from 'react';

interface SitemapEntry {
  url: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  lastmod?: string;
}

const Sitemap = memo(() => {
  // Generate sitemap data
  const sitemapEntries: SitemapEntry[] = [
    {
      url: 'https://nfd-medical.com',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: 'https://nfd-medical.com/products',
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: 'https://nfd-medical.com/product-selector',
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://nfd-medical.com/about',
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: 'https://nfd-medical.com/contact',
      changefreq: 'monthly',
      priority: 0.8
    },
    // Individual product pages
    {
      url: 'https://nfd-medical.com/product/helios',
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      url: 'https://nfd-medical.com/product/polaris-aspiration',
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://nfd-medical.com/product/polaris-micro-acute',
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://nfd-medical.com/product/terra-coil',
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://nfd-medical.com/product/polaris-distal-access',
      changefreq: 'monthly',
      priority: 0.8
    }
  ];

  // Generate XML sitemap content
  const generateSitemapXML = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

    return xml;
  };

  // Generate robots.txt content
  const generateRobotsTxt = () => {
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

# Block common bots that might not be relevant
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /`;
  };

  return (
    <div className="hidden">
      {/* This component is hidden but provides SEO metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NFD - Neuro Flow Dynamics",
            "url": "https://nfd-medical.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nfd-medical.com/product-selector?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://www.linkedin.com/company/nfd-medical",
              "https://twitter.com/nfd_medical",
              "https://www.facebook.com/nfd.medical"
            ]
          })
        }}
      />
      
      {/* Breadcrumb schema for navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nfd-medical.com"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Products",
                "item": "https://nfd-medical.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Product Selector",
                "item": "https://nfd-medical.com/product-selector"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact",
                "item": "https://nfd-medical.com/contact"
              }
            ]
          })
        }}
      />
    </div>
  );
});

Sitemap.displayName = 'Sitemap';

export { Sitemap, type SitemapEntry };
export default Sitemap;