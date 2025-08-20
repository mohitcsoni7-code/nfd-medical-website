import { memo } from 'react';
import { Card } from './ui/card';
import { Award, Brain, Zap, Users, Shield, Globe } from 'lucide-react';

interface ExpertiseSectionProps {
  colors: any;
}

const expertiseItems = [
  {
    icon: Award,
    title: "18+ years of cumulative global experience",
    description: "Deep expertise across multiple markets and healthcare systems worldwide.",
    iconKey: 'cyan'
  },
  {
    icon: Brain,
    title: "Deep knowledge in neuro-intervention procedures",
    description: "Specialized understanding of complex neurological interventions and treatments.",
    iconKey: 'teal'
  },
  {
    icon: Zap,
    title: "Proven track record in medical device innovation",
    description: "Consistent delivery of breakthrough technologies that transform patient care.",
    iconKey: 'emerald'
  },
  {
    icon: Users,
    title: "Customer-first service model tailored for HCPs",
    description: "Dedicated support designed specifically for healthcare professional needs.",
    iconKey: 'blue'
  },
  {
    icon: Shield,
    title: "Built on trust, safety, and performance",
    description: "Unwavering commitment to reliability and excellence in every solution.",
    iconKey: 'indigo'
  },
  {
    icon: Globe,
    title: "Global reach with local expertise",
    description: "International presence combined with localized knowledge and support.",
    iconKey: 'orange'
  }
];

const ExpertiseSection = memo(({ colors }: ExpertiseSectionProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-4xl" style={{ color: colors.primary }}>Our Expertise</h2>
          {/* Updated grid: 2 columns on mobile, 2 columns on medium, 3 columns on large screens */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {expertiseItems.map((item, index) => (
              <Card key={index} className="p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow group" style={{ borderColor: colors.accent + '30' }}>
                {/* Responsive icon sizing */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mx-auto transition-colors" style={{ backgroundColor: colors.iconBgs[item.iconKey as keyof typeof colors.iconBgs] }}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: colors.iconColors[item.iconKey as keyof typeof colors.iconColors] }} />
                </div>
                {/* Mobile-optimized text sizing */}
                <h3 className="text-sm sm:text-base md:text-lg px-1" style={{ color: colors.primary }}>{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base px-1 leading-relaxed" style={{ color: colors.secondary }}>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ExpertiseSection.displayName = 'ExpertiseSection';

export default ExpertiseSection;