import { memo } from 'react';
import { Heart } from 'lucide-react';

interface MissionSectionProps {
  colors: any;
}

const MissionSection = memo(({ colors }: MissionSectionProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F0FFFE' }}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)` }}>
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl" style={{ color: colors.primary }}>Our Mission</h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: colors.secondary }}>
            To provide innovative solutions and quality service to healthcare professionals, 
            and to become the preferred partner for stroke treatment technologies across the globe. 
            We are committed to advancing patient care through cutting-edge technology and unwavering support.
          </p>
        </div>
      </div>
    </section>
  );
});

MissionSection.displayName = 'MissionSection';

export default MissionSection;