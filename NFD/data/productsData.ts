const newHeliosImage = '/images/product-2.png';
const newProductImage2 = '/images/product-2.png';
const newMicroCatheterImage = '/images/micro-catheter.png';
const newDistalAccessImage = '/images/distal-access.png';
const newAspirationImage = '/images/aspiration.png';
const newSupportCatheterImage = '/images/support-catheter.png';

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductSpec {
  category: string;
  items: Array<{
    label: string;
    value: string;
  }>;
}

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  duration: string;
  category: string;
  features: ProductFeature[];
  specifications: ProductSpec[];
  benefits: string[];
  clinicalData?: {
    title: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  certifications: string[];
  gallery: string[];
  // Additional properties for detailed product pages
  overview?: string;
  applications?: string[];
  keyCapabilities?: string[];
  technicalAdvantages?: string[];
  // PDF brochure URL
  brochurePDF?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  products: ProductData[];
}

// Define common product data to avoid duplication
const polarisMicroCatheterData: ProductData = {
  id: 'polaris-micro',
  name: 'POLARIS Micro Catheter',
  tagline: 'Your Guide Through the Universe of Precision/Precision as Vast as the Cosmos',
  shortDescription: 'Ultra-precision micro catheter engineered for complex neurovascular navigation',
  fullDescription: 'The POLARIS Micro Catheter is your essential guide through the most complex neurovascular pathways. Built with flexibility, torque control, and ultra-soft distal design, it offers unmatched precision for delicate interventions. With visibility markers and space-grade deliverability, POLARIS navigates the neuro-universe with stellar accuracy and reliability.',
  image: newMicroCatheterImage,
  duration: '3:15',
  category: 'Micro Catheter',
  brochurePDF: 'https://quantumheights.uk/pdf/POLARIS-Micro-Catheter.pdf',
  overview: 'POLARIS Micro Catheter is engineered to handle intricate neurovascular procedures with ease. Its soft laser-treated tip, Ni-Ti support, and high trackability make it ideal for micro-level interventions requiring consistent performance and exceptional control.',
  applications: [
    'Neurovascular microcatheter procedures',
    'Navigation through tortuous intracranial anatomy',
    'Support for embolization or diagnostic agents',
    'Use in ischemic stroke or aneurysm coiling support'
  ],
  keyCapabilities: [
    'Long effective length for extended procedural access',
    'Reduced resistance for effortless device delivery',
    'Soft tip technology for enhanced neuro safety'
  ],
  technicalAdvantages: [
    'Ni-Ti core for optimal torque balance',
    'Platinum-iridium markers for fluoroscopic guidance',
    'Atraumatic distal tip ensures vessel protection',
    'Available in multiple lengths and diameters for clinical flexibility'
  ],
  features: [
    {
      title: 'Galactic Support & Torquability',
      description: 'Ni-Ti wire construction ensures stability and seamless guidance through complex anatomy, providing stellar control across the cosmic expanse of neurovascular pathways.'
    },
    {
      title: 'Stellar Visibility',
      description: 'Platinum-iridium alloy markers allow precise fluoroscopic control, shining like stars to guide your navigation through the darkest regions of the neuro-universe.'
    },
    {
      title: 'Interstellar Deliverability',
      description: 'Advanced hydrophilic coating reduces resistance for smooth advancement, enabling effortless travel through the vast cosmos of cerebral vessels.'
    },
    {
      title: 'Cosmic Soft Tip',
      description: 'Laser-treated atraumatic tip designed to protect delicate neurovasculature, gentle as stardust yet precise as a navigational beacon.'
    },
    {
      title: 'Extended Reach',
      description: 'Effective length of 153 cm for broader access with control, extending your reach across the infinite expanse of neurovascular space.'
    },
    {
      title: 'Universal Compatibility',
      description: 'Triple Diameter Options (0.017" and 0.021" and 0.027") provide cosmic versatility for diverse procedural requirements and device compatibility.'
    }
  ],
  specifications: [
    {
      category: '0.017" Models',
      items: [
        { label: 'P*MC*17153', value: '153 cm, 1.9Fr (0.63 mm), 0.017" (0.43 mm) ID' }
      ]
    },
    {
      category: '0.021" Models',
      items: [
        { label: 'P*MC-21153', value: '153 cm, 2.5Fr (0.83mm), 0.021" (0.53mm) ID' }
      ]
    },
    {
      category: '0.027" Models',
      items: [
        { label: 'P*MC-27153', value: '153 cm, 2.9Fr (0.97mm), 0.027" (0.69mm) ID' }
      ]
    },
    {
      category: 'Technical Features',
      items: [
        { label: 'Tip Design', value: 'Laser-treated atraumatic soft tip' },
        { label: 'Core Construction', value: 'Ni-Ti wire for optimal torque control' },
        { label: 'Markers', value: 'Platinum-iridium alloy for visibility' },
        { label: 'Coating', value: 'Advanced hydrophilic coating' },
        { label: 'Sterilization', value: 'Ethylene Oxide (EtO) sterilized' }
      ]
    },
    {
      category: 'Performance Specifications',
      items: [
        { label: 'Flexibility', value: 'Superior compared to competition' },
        { label: 'Resistance', value: '50% less microcatheter resistance' },
        { label: 'Navigation Success', value: '99.8% successful navigation' },
        { label: 'Trackability', value: 'Enhanced through tortuous anatomy' },
        { label: 'Pushability', value: 'Reliable device delivery control' }
      ]
    }
  ],
  benefits: [
    'Flexibility Performance Test: Tested with 2mm axial downward shift at 2mm/min on universal tester',
    'Result: Superior flexibility compared to competition, adapting effortlessly like stars across the cosmos',
    'Smooth navigation through tortuous vessels with cosmic precision',
    'Reduced risk of vessel trauma with atraumatic soft tip technology',
    'Precise targeting with reliable pushability and torque control',
    'Excellent fluoroscopic visibility and trackability for stellar guidance'
  ],
  clinicalData: {
    title: 'Clinical Performance',
    stats: [
      { value: '99.8%', label: 'Navigation Success' },
      { value: '50%', label: 'Less Microcatheter Resistance' },
      { value: '70+', label: 'Clinical Sites' },
      { value: '10,000+', label: 'Interventions' }
    ]
  },
  certifications: [
    'ISO 13485 Compliant',
    'Make in India Certified',
    'Good Manufacturing Practice (GMP)'
  ],
  gallery: [newMicroCatheterImage, newProductImage2, newAspirationImage, newDistalAccessImage]
};

export const productCategories: ProductCategory[] = [
  {
    id: 'acute-stroke',
    name: 'Acute Stroke Solution',
    description: 'Comprehensive devices for mechanical thrombectomy and acute ischemic stroke intervention',
    products: [
      // HELIOS TEMPORARILY HIDDEN - Uncomment to restore
      // {
      //   id: 'helios',
      //   name: 'HELIOS™',
      //   tagline: 'Translating the Power of the Cosmos into Measurable Patient Benefits',
      //   shortDescription: 'Stent-based thrombectomy device for acute ischemic stroke intervention',
      //   fullDescription: 'Inspired by cosmic precision, the HELIOS Thrombectomy Device redefines stroke intervention by delivering safe, efficient, and highly reliable clot retrieval. With superior delivery mechanics, HELIOS achieves optimal revascularization and patient outcomes. Its multi-marker stent design, innovative spiral-winding markers, and consistent cell architecture work in harmony to navigate the most complex neurovascular pathways with accuracy and control.',
      //   image: newHeliosImage,
      //   duration: '3:45',
      //   category: 'Thrombectomy Device',
      //   brochurePDF: 'https://quantumheights.uk/pdf/NFD-HELIOS.pdf',
      //   // ... rest of HELIOS data
      // },
      {
        id: 'polaris-aspiration',
        name: 'Polaris Aspiration Catheter',
        tagline: 'Enhanced Trackability/Redefining Aspiration Excellence',
        shortDescription: 'Aspiration catheter with superior trackability and lumen integrity',
        fullDescription: 'The Polaris Aspiration Catheter sets a new standard for stroke intervention with exceptional accessibility, superior aspiration power, and unmatched lumen integrity. Designed with a dual-layer braided structure, hydrophilic coating, and anti-ovalization performance, Polaris empowers neuro-interventionists to navigate complex vasculature with ease while ensuring optimal clot retrieval efficiency.',
        image: newAspirationImage,
        duration: '4:12',
        category: 'Aspiration Catheter',
        brochurePDF: 'https://quantumheights.uk/pdf/Polaris-Aspiration-Catheter.pdf',
        overview: 'Polaris is built to deliver high aspiration efficiency and smooth vessel access, even in the most challenging neurovascular anatomies. Its multi-segment design, large lumen, and precision-engineered tip give interventionists the confidence to achieve better outcomes in less time.',
        applications: [
          'Acute ischemic stroke thrombectomy',
          'Distal vessel aspiration',
          'Complex clot removal in tortuous neurovascular anatomy'
        ],
        keyCapabilities: [
          'Precision-engineered catheter shaft for smooth navigation',
          'High aspiration force with large lumen design',
          'Hydrophilic coating for reduced friction',
          'Maintains lumen integrity under stress'
        ],
        technicalAdvantages: [
          'Dual-layer braided structure for enhanced structural integrity',
          'Multi-segment lumen for optimized flexibility',
          'Superior collapse resistance at distal tip',
          'Engineered for improved first-pass success rates'
        ],
        features: [
          {
            title: 'Enhanced Structural Integrity',
            description: 'Dual-layer braided structure ensures lumen integrity and prevents breakage, even in the most tortuous vessels during complex procedures.'
          },
          {
            title: 'High Accessibility',
            description: 'Multi-segment design provides smooth distal access, allowing navigation through challenging anatomical pathways with enhanced control.'
          },
          {
            title: 'Large Lumen (0.071-inch)',
            description: 'Enhanced aspiration efficiency with large lumen design that maximizes clot retrieval capabilities and improves first-pass success rates.'
          },
          {
            title: 'Anti-Ovalization Performance',
            description: 'Flexible, durable tip resists collapse under high negative pressure, maintaining optimal aspiration contact with thrombus.'
          },
          {
            title: 'Hydrophilic Coating',
            description: '40cm hydrophilic coating reduces friction during navigation, enabling smoother catheter advancement through complex vasculature.'
          },
          {
            title: 'Multi-Segment Lumen',
            description: 'Engineered with multiple segments to provide optimal flexibility where needed while maintaining pushability and torque control.'
          }
        ],
        specifications: [
          {
            category: 'Polaris Aspiration Catheter Models',
            items: [
              { label: 'P/ASC-5F130', value: '130 cm, 5F, 0.058 in ID' },
              { label: 'P/ASC-5F132', value: '132 cm, 5F, 0.058 in ID' },
              { label: 'P/ASC-6F125', value: '125 cm, 6F, 0.071 in ID, 40 cm coating' },
              { label: 'P/ASC-6F132', value: '132 cm, 6F, 0.071 in ID, 40 cm coating' }
            ]
          },
          {
            category: 'Extension Tube',
            items: [
              { label: 'P/ASC-T290', value: '290 cm effective length, 2.2 mm ID' }
            ]
          },
          {
            category: 'Technical Features',
            items: [
              { label: 'Coating Length', value: '40 cm hydrophilic coating (6F models)' },
              { label: 'Lumen Design', value: 'Multi-segment for optimal flexibility' },
              { label: 'Tip Design', value: 'Anti-ovalization, soft tip' },
              { label: 'Construction', value: 'Dual-layer braided structure' },
              { label: 'Sterilization', value: 'Ethylene Oxide (EtO) sterilized' }
            ]
          },
          {
            category: 'Performance Specifications',
            items: [
              { label: 'Lumen Integrity', value: '99% maintained under stress' },
              { label: 'Navigation Time', value: '35% faster than standard catheters' },
              { label: 'Collapse Resistance', value: 'Superior anti-ovalization performance' },
              { label: 'Tip Softness', value: 'Safer navigation vs competitors' }
            ]
          }
        ],
        benefits: [
          'Accessibility Test: Easily reaches M2 in silicone model – improved trackability',
          'Anti-Twist Test: Maintains lumen under twisting – consistent aspiration flow',
          'Anti-Ovalization Test: Maintains shape under vacuum – effective thrombus contact',
          'Tip Softness Test: Softer tip for safer navigation compared to competitors',
          'Enhanced first-pass success rates with large lumen design',
          'Reduced procedure time through superior navigation capabilities'
        ],
        clinicalData: {
          title: 'Clinical Performance',
          stats: [
            { value: '99%', label: 'Lumen Integrity' },
            { value: '35%', label: 'Faster Navigation Time' },
            { value: '60+', label: 'Clinical Sites' },
            { value: '12,000+', label: 'Procedures' }
          ]
        },
        certifications: [
          'ISO 13485 Compliant',
          'Make in India Certified',
          'CDSCO Approved',
          'Good Manufacturing Practice (GMP)'
        ],
        gallery: [newAspirationImage, newSupportCatheterImage, newProductImage2, newMicroCatheterImage]
      },
      // Polaris Micro Catheter for Acute Stroke
      { ...polarisMicroCatheterData, id: 'polaris-micro-acute' }
    ]
  },
  {
    id: 'hemorrhagic-stroke',
    name: 'Hemorrhagic Stroke Solution',
    description: 'Advanced embolization and support systems for aneurysm treatment and hemorrhagic stroke management',
    products: [
      {
        id: 'terra-coil',
        name: 'Terra Embolization Coil System',
        tagline: 'Precision embolization/Advanced coil technology',
        shortDescription: 'Comprehensive embolization coil system for aneurysm and AVM treatment',
        fullDescription: 'The Terra Embolization Coil System represents the next generation of neurovascular embolization technology. Featuring advanced coil design, precise deployment control, and comprehensive sizing options, Terra enables the physician to achieve optimal aneurysm occlusion and AVM embolization with enhanced safety and efficacy. The system combines innovative coil materials with intuitive delivery mechanisms for superior clinical outcomes.',
        image: newProductImage2,
        duration: '6:30',
        category: 'Embolization Coil System',
        brochurePDF: 'https://quantumheights.uk/pdf/Terra-Embolization-Coil-System.pdf',
        overview: 'Terra Embolization Coil System provides comprehensive solutions for neurovascular embolization procedures. Its precise delivery system enables optimal aneurysm treatment and AVM embolization.',
        applications: [
          'Intracranial aneurysm embolization',
          'AVM embolization procedures',
          'Pseudoaneurysm treatment',
          'Vascular malformation occlusion'
        ],
        keyCapabilities: [
          'Precise deployment and positioning control',
          'Comprehensive size and shape options'
        ],
        technicalAdvantages: [
          'Platinum alloy construction for optimal visibility',
          'Controlled detachment mechanism for precise placement',
          'Advanced coil memory for optimal packing density'
        ],
        features: [
          {
            title: 'Advanced Platinum Alloy Construction',
            description: 'Premium platinum alloy materials provide excellent radiopacity, biocompatibility, and optimal mechanical properties for reliable embolization.'
          },
          {
            title: 'Precise Detachment Control',
            description: 'Innovative detachment mechanism allows for precise coil positioning and controlled release, enabling optimal placement before final deployment.'
          },
          {
            title: 'Optimal Coil Memory Design',
            description: 'Engineered coil memory ensures optimal shape restoration and packing density within aneurysms and vascular malformations.'
          },
          {
            title: 'Comprehensive Size Matrix',
            description: 'Extensive range of coil diameters, lengths, and configurations to match diverse anatomical requirements and procedural needs.'
          },
          {
            title: 'Enhanced Delivery System',
            description: 'Advanced delivery catheter system provides smooth coil advancement and precise positioning with minimal friction and optimal control.'
          },
          {
            title: 'Sustainability',
            description: 'Eco-conscious manufacturing processes and materials selection to reduce environmental impact while maintaining the highest quality standards for neurovascular care.'
          }
        ],
        specifications: [
          {
            category: 'Coil Specifications',
            items: [
              { label: 'Coil Diameters', value: '1mm - 25mm (multiple sizes)' },
              { label: 'Coil Lengths', value: '1cm - 50cm' },
              { label: 'Material', value: 'Platinum alloy' },
              { label: 'Coil Shapes', value: 'Helical and 3D configurations' },
              { label: 'Detachment', value: 'Unique pusher wire break design' }
            ]
          },
          {
            category: 'Delivery System',
            items: [
              { label: 'Delivery Catheter', value: 'Compatible with standard 0.017" ID microcatheters' },
              { label: 'Pusher Wire', value: 'Flexible stainless steel construction' },
              { label: 'Detachment Zone', value: 'Innovative Pusher Wire Break Design' },
              { label: 'Radiopacity', value: 'Excellent visualization under fluoroscopy' },
              { label: 'Packaging', value: 'Sterile, single-use packaging' }
            ]
          },
          {
            category: 'Performance Features',
            items: [
              { label: 'Packing Density', value: 'Optimized for complete occlusion' },
              { label: 'Repositioning', value: 'Retrievable before detachment' },
              { label: 'Biocompatibility', value: 'ISO 10993 tested and certified' }
            ]
          }
        ],
        benefits: [
          'Precise coil placement with controlled detachment system',
          'Reduced procedure time through improved delivery mechanics',
          'Comprehensive sizing options for diverse anatomical needs',
          'Superior radiopacity for excellent visualization',
          'Enhanced long-term stability and durability'
        ],
        clinicalData: {
          title: 'Clinical Performance',
          stats: [
            { value: '94%', label: 'Complete Occlusion Rate' },
            { value: '25%', label: 'Faster Deployment Time' },
            { value: '45+', label: 'Clinical Sites' },
            { value: '3,200+', label: 'Procedures' }
          ]
        },
        certifications: [
          'ISO 13485 Compliant',
          'Make in India Certified',
          'CDSCO Approved',
          'Good Manufacturing Practice (GMP)'
        ],
        gallery: [newProductImage2, newMicroCatheterImage, newSupportCatheterImage, newDistalAccessImage]
      },
      {
        id: 'polaris-distal-access',
        name: 'Polaris Distal Access Catheter',
        tagline: 'Unmatched Flexibility/Reliability You Can Trust',
        shortDescription: 'Distal access catheter for complex neurovascular navigation',
        fullDescription: 'The Polaris Distal Access Catheter is engineered for smooth navigation to distal neurovascular targets while providing exceptional support for device delivery. With its large lumen, soft atraumatic tip, and advanced kink resistance, Polaris ensures reliable performance in even the most challenging neuro-interventional cases.',
        image: newDistalAccessImage,
        duration: '2:38',
        category: 'Distal Access Catheter',
        brochurePDF: 'https://quantumheights.uk/pdf/Polaris-Distal-Access-Catheter.pdf',
        overview: 'Polaris Distal Access Catheter delivers both flexibility and structural integrity, enabling safe and efficient navigation to complex distal targets. Its advanced design ensures minimal trauma and superior device compatibility.',
        applications: [
          'Aneurysm embolization procedures',
          'Support for microcatheter and coil navigation',
          'Distal vessel access for embolization devices'
        ],
        keyCapabilities: [
          'Designed for safe and efficient distal navigation',
          'Enhanced support for microcatheter procedures',
          'Excellent compatibility with embolization devices',
          'Minimizes trauma during navigation'
        ],
        technicalAdvantages: [
          'Ni-Ti wire for torque transmission and flexibility',
          '13-segment shaft for controlled delivery',
          'Hydrophilic coating for smoother insertion',
          'Soft tip design for atraumatic vessel entry'
        ],
        features: [
          {
            title: '0.071 Larger Inner Lumen',
            description: 'Enhanced device compatibility and superior support with large inner diameter design for optimal procedural efficiency in embolization procedures.'
          },
          {
            title: 'Soft & Anti-Kink Tip',
            description: 'Visible tip design for easy navigation with maintained lumen integrity, preventing kinking during complex embolization maneuvers.'
          },
          {
            title: '13-Segment Shaft Design',
            description: 'Multi-segment construction provides optimal balance of flexibility and pushability for precise catheter control and delivery.'
          },
          {
            title: 'Ni-Ti Core Construction',
            description: 'Nickel-titanium wire construction ensures excellent torque transmission and flexibility for navigating complex vascular anatomy.'
          },
          {
            title: 'Hydrophilic Coating',
            description: 'Advanced hydrophilic coating reduces friction and enhances deliverability through tortuous vessel pathways.'
          },
          {
            title: 'Compatibility Excellence',
            description: 'Designed for seamless compatibility with a wide range of embolization devices and microcatheters for versatile procedural applications.'
          }
        ],
        specifications: [
          {
            category: 'Polaris Distal Access Catheter Models',
            items: [
              { label: 'P/DAC-6F115', value: '115 cm, 6F, 0.071 in ID' },
              { label: 'P/DAC-6F125', value: '125 cm, 6F, 0.071 in ID' },
              { label: 'P/DAC-5F115', value: '115 cm, 5F, 0.058 in ID' },
              { label: 'P/DAC-5F125', value: '125 cm, 5F, 0.058 in ID' }
            ]
          },
          {
            category: 'Technical Features',
            items: [
              { label: 'Shaft Design', value: '13-segment construction' },
              { label: 'Core Material', value: 'Ni-Ti wire for torque transmission' },
              { label: 'Tip Design', value: 'Soft, anti-kink, visible tip' },
              { label: 'Coating', value: 'Hydrophilic coating for enhanced deliverability' },
              { label: 'Sterilization', value: 'Ethylene Oxide (EtO) sterilized' }
            ]
          },
          {
            category: 'Performance Specifications',
            items: [
              { label: 'Lumen Integrity', value: '99.5% maintained under stress' },
              { label: 'Kink Resistance', value: 'Superior anti-kink performance' },
              { label: 'Deliverability', value: 'Enhanced through tortuous anatomy' },
              { label: 'Device Compatibility', value: 'Compatible with standard embolization devices' }
            ]
          }
        ],
        benefits: [
          'Enhanced support for microcatheter navigation and device delivery',
          'Superior kink resistance maintains lumen integrity during procedures',
          'Optimal balance of flexibility and pushability for precise control',
          'Excellent compatibility with embolization devices and coils',
          'Reduced procedure time through improved navigation capabilities',
          'Minimal trauma design for safer vessel access'
        ],
        clinicalData: {
          title: 'Clinical Performance',
          stats: [
            { value: '99.5%', label: 'Lumen Integrity' },
            { value: '40%', label: 'Improved Navigation Time' },
            { value: '35+', label: 'Clinical Sites' },
            { value: '5,500+', label: 'Procedures' }
          ]
        },
        certifications: [
          'ISO 13485 Compliant',
          'Make in India Certified',
          'CDSCO Approved',
          'Good Manufacturing Practice (GMP)'
        ],
        gallery: [newDistalAccessImage, newSupportCatheterImage, newMicroCatheterImage, newAspirationImage]
      },
      {
        id: 'polaris-support',
        name: 'Polaris Support Catheter',
        tagline: 'Unmatched Support/Exceptional Control',
        shortDescription: 'Support catheter designed for optimal procedural control and device delivery',
        fullDescription: 'The Polaris Support Catheter provides exceptional support and control for complex neurovascular procedures. Engineered with advanced materials and innovative design, it ensures reliable performance and optimal device delivery while maintaining excellent navigational capabilities through challenging vascular anatomy.',
        image: newSupportCatheterImage,
        duration: '3:20',
        category: 'Support Catheter',
        brochurePDF: 'https://quantumheights.uk/pdf/Polaris-Support-Catheter.pdf',
        overview: 'Polaris Support Catheter combines superior support with excellent flexibility, enabling precise device delivery and optimal procedural control in neurovascular interventions.',
        applications: [
          'Support for complex embolization procedures',
          'Microcatheter and device delivery support',
          'Navigation through tortuous vascular anatomy'
        ],
        keyCapabilities: [
          'Excellent support and stability for device delivery',
          'Superior navigation through complex anatomy',
          'Optimal balance of flexibility and rigidity',
          'Enhanced procedural control and precision'
        ],
        technicalAdvantages: [
          'Advanced composite construction for optimal support',
          'Tapered tip design for smooth navigation',
          'Reinforced shaft for enhanced pushability',
          'Radiopaque markers for precise positioning'
        ],
        features: [
          {
            title: 'Superior Support Structure',
            description: 'Advanced composite construction provides exceptional support for device delivery while maintaining excellent flexibility for navigation.'
          },
          {
            title: 'Optimized Tip Design',
            description: 'Tapered tip design ensures smooth navigation through tortuous vessels while providing optimal support for microcatheter advancement.'
          },
          {
            title: 'Enhanced Pushability',
            description: 'Reinforced shaft construction delivers superior pushability and torque control for precise catheter positioning and device delivery.'
          },
          {
            title: 'Radiopaque Visibility',
            description: 'Strategic radiopaque markers provide excellent fluoroscopic visibility for precise positioning and procedural guidance.'
          },
          {
            title: 'Flexible Support Balance',
            description: 'Engineered to provide optimal balance between support and flexibility for versatile procedural applications.'
          },
          {
            title: 'Reliable Performance',
            description: 'Consistent performance across diverse procedural requirements with proven reliability in complex neurovascular interventions.'
          }
        ],
        specifications: [
          {
            category: 'Polaris Support Catheter Models',
            items: [
              { label: 'P/SC-6F125', value: '125 cm, 6F, 0.070 in ID' },
              { label: 'P/SC-6F135', value: '135 cm, 6F, 0.070 in ID' },
              { label: 'P/SC-5F125', value: '125 cm, 5F, 0.056 in ID' },
              { label: 'P/SC-5F135', value: '135 cm, 5F, 0.056 in ID' }
            ]
          },
          {
            category: 'Technical Features',
            items: [
              { label: 'Construction', value: 'Advanced composite materials' },
              { label: 'Tip Design', value: 'Tapered for smooth navigation' },
              { label: 'Shaft', value: 'Reinforced for enhanced pushability' },
              { label: 'Markers', value: 'Radiopaque for positioning' },
              { label: 'Sterilization', value: 'Ethylene Oxide (EtO) sterilized' }
            ]
          },
          {
            category: 'Performance Specifications',
            items: [
              { label: 'Support Level', value: 'Superior support for device delivery' },
              { label: 'Flexibility', value: 'Optimal balance for navigation' },
              { label: 'Pushability', value: 'Enhanced torque control' },
              { label: 'Visibility', value: 'Excellent fluoroscopic markers' }
            ]
          }
        ],
        benefits: [
          'Superior support for complex device delivery procedures',
          'Excellent navigation through challenging vascular anatomy',
          'Optimal balance of flexibility and support for versatile use',
          'Enhanced procedural control and precision',
          'Reduced procedure complexity through reliable performance',
          'Improved outcomes with consistent device delivery support'
        ],
        clinicalData: {
          title: 'Clinical Performance',
          stats: [
            { value: '98%', label: 'Successful Device Delivery' },
            { value: '45%', label: 'Improved Procedural Efficiency' },
            { value: '25+', label: 'Clinical Sites' },
            { value: '3,000+', label: 'Procedures' }
          ]
        },
        certifications: [
          'ISO 13485 Compliant',
          'Make in India Certified',
          'CDSCO Approved',
          'Good Manufacturing Practice (GMP)'
        ],
        gallery: [newSupportCatheterImage, newDistalAccessImage, newMicroCatheterImage, newProductImage2]
      },
      // Polaris Micro Catheter for Hemorrhagic Stroke
      { ...polarisMicroCatheterData, id: 'polaris-micro-hemorrhagic' }
    ]
  },
  {
    id: 'support-systems',
    name: 'Support Systems',
    description: 'Comprehensive support systems for enhanced procedural control and device delivery',
    products: [
      // Additional Polaris Micro Catheter for Support Systems
      { ...polarisMicroCatheterData, id: 'polaris-micro-support' }
    ]
  }
];

// Get all products from all categories (HELIOS is already excluded from the data structure)
export const getAllProducts = (): ProductData[] => {
  return productCategories.flatMap(category => category.products);
};

// Get product by ID
export const getProductById = (id: string): ProductData | null => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === id) || null;
};

// Get products by category
export const getProductsByCategory = (categoryId: string): ProductData[] => {
  const category = productCategories.find(cat => cat.id === categoryId);
  return category ? category.products : [];
};

// Get product categories
export const getProductCategories = (): ProductCategory[] => {
  return productCategories;
};