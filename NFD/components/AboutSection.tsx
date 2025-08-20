import { memo } from 'react';
import { Shield, Award, Globe, Users, CheckCircle, Trophy } from 'lucide-react';

interface AboutSectionProps {
  colors: any;
}

const AboutSection = memo(({ colors }: AboutSectionProps) => {
  const stats = [
    {
      icon: Shield,
      title: "ISO 13485",
      subtitle: "Certified",
      description: "Quality Management System"
    },
    {
      icon: CheckCircle,
      title: "CDSCO",
      subtitle: "Approved",
      description: "Regulatory Compliance"
    },
    {
      icon: Trophy,
      title: "1st",
      subtitle: "Neurovascular Manufacturer in India",
      description: "Industry Pioneer"
    },
    {
      icon: Award,
      title: "18+",
      subtitle: "Years of Experience",
      description: "Proven Track Record"
    },
    {
      icon: Globe,
      title: "5000+",
      subtitle: "Procedures Supported Globally",
      description: "Worldwide Impact"
    },
    {
      icon: Users,
      title: "30+",
      subtitle: "On-site Technical Experts",
      description: "Dedicated Support Team"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl" style={{ color: colors.primary }}>
              About Neuro Flow Dynamics (NFD)
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg lg:text-xl leading-relaxed" style={{ color: colors.secondary }}>
                At Neuro Flow Dynamics, we are dedicated to advancing the field of neuro-intervention. 
                With a global legacy of over 18 years in medical device management, we are driven by 
                innovation, precision, and a deep commitment to improving stroke outcomes.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed" style={{ color: colors.secondary }}>
                Our team works alongside healthcare professionals to develop and deliver cutting-edge 
                technologies tailored for complex neuro-intervention procedures. We believe in empowering 
                medical professionals with the tools they need to save lives and improve patient outcomes.
              </p>
            </div>
          </div>
          
          {/* Statistics Grid - 2 Columns on All Screen Sizes */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div 
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      style={{ 
                        backgroundColor: colors.accent + '15',
                        border: `2px solid ${colors.accent}20`
                      }}
                    >
                      <IconComponent 
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                        style={{ color: colors.accent }} 
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <div className="space-y-1 sm:space-y-2">
                      <div 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
                        style={{ color: colors.primary }}
                      >
                        {stat.title}
                      </div>
                      <div 
                        className="text-sm sm:text-base md:text-lg lg:text-xl font-medium px-2"
                        style={{ color: colors.secondary }}
                      >
                        {stat.subtitle}
                      </div>
                    </div>
                    <div 
                      className="text-xs sm:text-sm md:text-base opacity-80 max-w-xs mx-auto px-2"
                      style={{ color: colors.secondary }}
                    >
                      {stat.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;