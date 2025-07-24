import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import GooglePassionSection from '@/components/GooglePassionSection';
import GSAVisionSection from '@/components/GSAVisionSection';
import WhyGSASection from '@/components/WhyGSASection';
import ConnectSection from '@/components/ConnectSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <JourneySection />
      <GooglePassionSection />
      <GSAVisionSection />
      <WhyGSASection />
      <ConnectSection />
    </div>
  );
};

export default Index;