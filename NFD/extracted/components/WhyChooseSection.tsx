import { memo } from 'react';
import { CheckCircle } from 'lucide-react';

interface WhyChooseSectionProps {
  colors: any;
}

const reasons = [
  {
    title: "Engineered with medical precision",
    description: "Every product is designed with meticulous attention to medical standards and precision requirements."
  },
  {
    title: "Backed by clinical insights", 
    description: "Our solutions are developed in collaboration with leading healthcare professionals and clinical experts."
  },
  {
    title: "Seamless integration into hospital workflows",
    description: "Designed to work harmoniously with existing hospital systems and procedures."
  },
  {
    title: "Empowering Neurovascular Care Globally",
    description: "Trusted in 50+ countries for innovative, high-performance neurovascular solutions."
  },
  {
    title: "Continuous R&D for evolving clinical needs",
    description: "Ongoing research and development to stay ahead of emerging clinical requirements."
  },
  {
    title: "24/7 global support",
    description: "Round-the-clock technical support and assistance whenever you need it."
  }
];

const WhyChooseSection = memo(({ colors }: WhyChooseSectionProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.lightBg }}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-4xl" style={{ color: colors.primary }}>Why Choose NFD</h2>
          {/* Updated grid: 2 columns on mobile, 2 columns on medium, 3 columns on large screens */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {reasons.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2 sm:space-y-3 p-3 sm:p-4 md:p-6">
                {/* Responsive icon sizing */}
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0" style={{ color: colors.success }} />
                {/* Mobile-optimized text sizing */}
                <h3 className="text-sm sm:text-base md:text-lg px-1" style={{ color: colors.primary }}>{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base px-1 leading-relaxed" style={{ color: colors.secondary }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChooseSection.displayName = 'WhyChooseSection';

export default WhyChooseSection;