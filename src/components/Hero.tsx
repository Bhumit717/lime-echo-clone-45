
import { ArrowRight, TrendingUp, Globe, Shield, CheckCircle, Zap, Brain, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-ai-primary/20 to-ai-secondary/20 rounded-full -top-48 -left-48"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-ai-accent/30 to-ai-primary/30 rounded-full top-1/4 right-0"></div>
        <div className="absolute w-32 h-32 bg-ai-secondary/40 rounded-full bottom-1/4 left-1/4"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/80 border border-ai-primary/30 rounded-full">
              <CheckCircle className="h-4 w-4 text-ai-primary mr-2" />
              <span className="text-sm font-medium text-ai-primary">Trusted by 500+ Global Companies</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white">
                <span className="block">
                  Global Trade
                </span>
                <span className="block text-transparent bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent bg-clip-text">
                  Excellence
                </span>
                <span className="block">
                  Simplified
                </span>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl">
              Your premier partner for seamless international trade solutions. We connect Indian manufacturers with global markets through expert import-export services, logistics, and compliance support.
            </p>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: "15+ Years Export Excellence" },
                { text: "50+ Countries Served" },
                { text: "ISO 9001:2015 Certified" },
                { text: "24/7 Global Support" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-full"></div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-to-r from-ai-primary to-ai-secondary hover:from-ai-secondary hover:to-ai-accent text-white group shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  View Our Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            {/* Stats - no rotation */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "500+", label: "Global Clients" },
                { number: "15+", label: "Years Experience" },
                { number: "50+", label: "Countries Reached" },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-ai-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                icon: Globe, 
                title: "Global Reach", 
                desc: "Connect with markets across 50+ countries with our extensive network", 
                color: "from-ai-primary to-ai-secondary",
                bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
              },
              { 
                icon: Brain, 
                title: "AI-Powered Insights", 
                desc: "Scale your business internationally with data-driven market insights", 
                color: "from-ai-secondary to-ai-accent",
                bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
              },
              { 
                icon: Shield, 
                title: "Secure Trading", 
                desc: "100% compliant transactions with full documentation and insurance", 
                color: "from-ai-accent to-ai-primary",
                bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
              },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className={`${item.bgColor} p-8 rounded-2xl border border-ai-primary/20 hover:border-ai-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-ai-primary/20`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ai-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Static scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-ai-primary rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-to-b from-ai-primary to-ai-secondary rounded-full mt-2"></div>
          </div>
          <span className="text-ai-primary text-xs font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
