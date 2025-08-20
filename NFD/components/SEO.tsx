import { memo } from 'react';

interface ProductData {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'product' | 'article';
  product?: {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    price?: string;
    availability?: string;
  };
  structuredData?: any[];
}

const SEO = memo(({ 
  title = "NFD - Neuro Flow Dynamics | Leading Neurovascular Medical Devices",
  description = "NFD develops cutting-edge solutions for neuro-intervention procedures and stroke treatment technologies. Trusted by healthcare professionals worldwide with 25+ years of expertise in medical device management.",
  keywords = [
    "neurovascular devices", "stroke treatment", "medical devices", "neuro intervention",
    "aneurysm treatment", "thrombectomy", "cerebral angiography", "medical technology",
    "healthcare solutions", "neurosurgery", "interventional radiology", "brain surgery",
    "cerebrovascular disease", "medical equipment", "FDA approved", "ISO certified"
  ],
  image = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop",
  url = "https://nfd-medical.com",
  type = "website",
  product,
  structuredData = []
}: SEOProps) => {
  
  // Base structured data for the organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "NFD - Neuro Flow Dynamics",
    "alternateName": "NFD Medical",
    "description": "Leading manufacturer of neurovascular medical devices and solutions for stroke treatment and neuro-intervention procedures.",
    "url": url,
    "logo": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
    "image": image,
    "foundingDate": "1998",
    "founder": {
      "@type": "Person",
      "name": "NFD Founders"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Global Operations"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXX-XXXXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/nfd-medical",
      "https://twitter.com/nfd_medical",
      "https://www.facebook.com/nfd.medical"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ISO 13485 Medical Device Quality Management"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "CE Marking European Compliance"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "CDSCO India Medical Device Approval"
      }
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Neurovascular Medical Devices",
        "serviceType": "Medical Device Manufacturing"
      }
    }
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NFD - Neuro Flow Dynamics",
    "url": url,
    "description": description,
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "NFD - Neuro Flow Dynamics"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/product-selector?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Product schema (if product page)
  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "MedicalDevice",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "NFD - Neuro Flow Dynamics"
    },
    "manufacturer": {
      "@type": "MedicalOrganization",
      "name": "NFD - Neuro Flow Dynamics",
      "url": url
    },
    "category": product.category,
    "identifier": product.id,
    "medicalSpecialty": "Neurology",
    "purpose": "Treatment of neurovascular conditions including stroke, aneurysms, and cerebrovascular diseases",
    "contraindication": "Consult medical professional for contraindications",
    "warning": "For use by trained medical professionals only",
    "availableAtOrFrom": {
      "@type": "MedicalOrganization",
      "name": "NFD - Neuro Flow Dynamics"
    }
  } : null;

  // Combine all schemas
  const allSchemas = [
    organizationSchema,
    websiteSchema,
    ...(productSchema ? [productSchema] : []),
    ...structuredData
  ];

  const pageTitle = title.includes('NFD') ? title : `${title} | NFD - Neuro Flow Dynamics`;
  const canonical = url;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="NFD - Neuro Flow Dynamics" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="NFD - Neuro Flow Dynamics" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@nfd_medical" />
      <meta property="twitter:site" content="@nfd_medical" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="application-name" content="NFD Medical" />
      <meta name="apple-mobile-web-app-title" content="NFD Medical" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Preload critical resources */}
      <link rel="preload" as="style" href="/styles/globals.css" />
      
      {/* Resource hints for performance */}
      <link rel="prefetch" href="/pages/ProductsPage.tsx" />
      <link rel="prefetch" href="/pages/ContactPage.tsx" />
      
      {/* Optimize Google Fonts loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Medical device industry specific meta tags */}
      <meta name="application-name" content="NFD Medical Devices" />
      <meta name="msapplication-tooltip" content="Neurovascular Medical Device Solutions" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="format-detection" content="address=yes" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Medical/Healthcare specific meta tags */}
      <meta name="medical-disclaimer" content="For professional medical use only. Not intended for consumer use." />
      <meta name="target-audience" content="Healthcare Professionals, Medical Practitioners, Neurosurgeons" />
      <meta name="industry" content="Medical Devices, Healthcare, Neurovascular" />
      <meta name="geographical-coverage" content="Global" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(allSchemas)
        }}
      />
    </>
  );
});

SEO.displayName = 'SEO';

export default SEO;