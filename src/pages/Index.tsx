
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OpeningAnimation from "@/components/OpeningAnimation";
import WhatsAppChat from "@/components/WhatsAppChat";
import LogoScroll from "@/components/LogoScroll";
import { useLocationTracking } from "@/hooks/useLocationTracking";

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  
  // Track user location and send to API
  useLocationTracking();

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  if (showAnimation) {
    return <OpeningAnimation onComplete={handleAnimationComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LogoScroll />
      <Products />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
