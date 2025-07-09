import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Wheat, Wrench, Shirt, Coffee, Gem, Cpu, ArrowRight, TrendingUp, Globe, Star, Eye, Download, MessageCircle, Phone, Mail, MapPin, Calendar, Award, CheckCircle, Users, Target, Zap, Sparkles, Heart, ThumbsUp, Clock, Shield, Calculator, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Products = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCatalog = () => {
    try {
      // Create a simple PDF-like content
      const pdfContent = `
%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/ProcSet [/PDF /Text]
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 80
>>
stream
BT
/F1 12 Tf
50 750 Td
(Patel Exports - Product Catalog) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000125 00000 n 
0000000348 00000 n 
0000000477 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
554
%%EOF`;

      // Create blob and download
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Patel-Exports-Catalog.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      // Show success message
      console.log('Catalog downloaded successfully!');
      alert('Product catalog downloaded successfully!');
    } catch (error) {
      console.error('Error downloading catalog:', error);
      alert('Error downloading catalog. Please try again.');
    }
  };

  const handleViewCertificates = () => {
    // Open certificates in new window
    const certificateWindow = window.open('', '_blank');
    certificateWindow?.document.write(`
      <html>
        <head><title>Patel Exports - Certifications</title></head>
        <body style="font-family: Arial, sans-serif; padding: 20px; background: #111;">
          <h1 style="color: #8b5cf6;">Our Certifications</h1>
          <div style="color: #ccc;">
            <h2>ISO 9001:2015 Quality Management</h2>
            <p>Certificate ID: ISO-9001-2024-PE-001</p>
            <p>Valid Until: December 2025</p>
            <hr>
            <h2>HACCP Food Safety Certification</h2>
            <p>Certificate ID: HACCP-2024-PE-002</p>
            <p>Valid Until: November 2025</p>
            <hr>
            <h2>Export House Certificate</h2>
            <p>Certificate ID: EH-2024-PE-003</p>
            <p>Valid Until: March 2026</p>
          </div>
        </body>
      </html>
    `);
  };

  const categories = [
    {
      icon: Wheat,
      name: "Agricultural Products & Food",
      description: "Premium quality agricultural exports including spices, tea, rice, and processed foods meeting international standards.",
      items: ["Basmati & Non-Basmati Rice", "Premium Spices & Herbs", "Tea & Coffee Beans", "Pulses & Lentils", "Fresh & Dried Fruits", "Processed Food Products"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "30+", volume: "$50M+", clients: "200+" },
      gradient: "from-ai-primary to-ai-secondary",
      hoverGradient: "from-ai-secondary to-ai-accent",
      badge: "Organic Certified"
    },
    {
      icon: Shirt,
      name: "Textiles & Garments",
      description: "High-quality textiles and readymade garments from cotton fabrics to silk products, serving global fashion markets.",
      items: ["Cotton & Silk Fabrics", "Readymade Garments", "Home Textiles & Furnishings", "Technical Textiles", "Yarn & Fibers", "Fashion Accessories"],
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "25+", volume: "$75M+", clients: "300+" },
      gradient: "from-ai-secondary to-ai-accent",
      hoverGradient: "from-ai-accent to-ai-primary",
      badge: "Premium Quality"
    },
    {
      icon: Wrench,
      name: "Engineering & Industrial",
      description: "Precision-engineered products including machinery, auto components, and industrial equipment for global manufacturing.",
      items: ["Industrial Machinery", "Auto Components & Parts", "Engineering Tools", "Steel & Metal Products", "Electronics Components", "Technical Equipment"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "20+", volume: "$100M+", clients: "150+" },
      gradient: "from-ai-accent to-ai-cyber",
      hoverGradient: "from-ai-cyber to-ai-neon",
      badge: "ISO Certified"
    },
    {
      icon: Gem,
      name: "Gems, Jewelry & Handicrafts",
      description: "Exquisite gems, jewelry, and traditional handicrafts showcasing India's rich cultural heritage and craftsmanship.",
      items: ["Precious & Semi-precious Stones", "Gold & Silver Jewelry", "Fashion Jewelry", "Traditional Handicrafts", "Wooden Artifacts", "Decorative Items"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "35+", volume: "$200M+", clients: "400+" },
      gradient: "from-ai-cyber to-ai-neon",
      hoverGradient: "from-ai-neon to-ai-primary",
      badge: "Handcrafted"
    },
    {
      icon: Coffee,
      name: "Beverages & Processed Foods",
      description: "Premium beverages and processed food products including specialty coffees, teas, and gourmet food items.",
      items: ["Specialty Coffee & Tea", "Fruit Juices & Concentrates", "Snacks & Confectionery", "Dairy Products", "Frozen Foods", "Health Supplements"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "28+", volume: "$40M+", clients: "250+" },
      gradient: "from-ai-neon to-ai-primary",
      hoverGradient: "from-ai-primary to-ai-secondary",
      badge: "Fresh & Pure"
    },
    {
      icon: Cpu,
      name: "Technology Products",
      items: ["Electronics", "Software", "IT Services", "Telecom", "Components", "Gadgets"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "15+", volume: "$60M+", clients: "180+" },
      gradient: "from-ai-primary to-ai-accent",
      hoverGradient: "from-ai-accent to-ai-secondary",
      badge: "Latest Tech"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015 Quality Management", icon: Award, color: "text-ai-primary" },
    { name: "HACCP Food Safety Certification", icon: Shield, color: "text-ai-secondary" }, 
    { name: "FSSAI License for Food Products", icon: CheckCircle, color: "text-ai-accent" },
    { name: "BIS Standards Compliance", icon: Target, color: "text-ai-cyber" },
    { name: "Export House Certificate", icon: Globe, color: "text-ai-neon" },
    { name: "Organic Certification (NPOP/NOP/EU)", icon: Heart, color: "text-ai-primary" }
  ];

  const marketInsights = [
    { region: "North America", growth: "+15%", opportunity: "High demand for organic products", flag: "🇺🇸", value: "$2.5B" },
    { region: "Europe", growth: "+12%", opportunity: "Sustainable textile market expansion", flag: "🇪🇺", value: "$1.8B" },
    { region: "Middle East", growth: "+20%", opportunity: "Food & beverage sector growth", flag: "🇦🇪", value: "$1.2B" },
    { region: "Southeast Asia", growth: "+18%", opportunity: "Industrial equipment demand", flag: "🇸🇬", value: "$900M" }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      company: "Global Trade Inc.",
      country: "🇺🇸 USA",
      rating: 5,
      text: "Patel Exports has been our trusted partner for over 5 years. Their quality and reliability are unmatched.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Maria Schmidt",
      company: "European Distributors",
      country: "🇩🇪 Germany",
      rating: 5,
      text: "Excellent service and premium quality products. They understand our market needs perfectly.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b407?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Ahmed Al-Rashid",
      company: "Middle East Trading",
      country: "🇦🇪 UAE",
      rating: 5,
      text: "Professional team with deep expertise in international trade. Highly recommended!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    }
  ];

  const processSteps = [
    { step: 1, title: "Inquiry", desc: "Submit your product requirements", icon: MessageCircle },
    { step: 2, title: "Quote", desc: "Receive detailed pricing & terms", icon: Calculator },
    { step: 3, title: "Order", desc: "Confirm order with advance payment", icon: CheckCircle },
    { step: 4, title: "Production", desc: "Quality manufacturing & testing", icon: Wrench },
    { step: 5, title: "Shipping", desc: "Secure packaging & dispatch", icon: Truck },
    { step: 6, title: "Delivery", desc: "Safe delivery to your location", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <Navigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20 relative">
            <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-ai-primary/30 rounded-full mb-8">
              <Sparkles className="h-5 w-5 text-ai-primary mr-2" />
              <span className="text-sm font-bold text-ai-primary uppercase tracking-wider">Premium Export Products</span>
              <Sparkles className="h-5 w-5 text-ai-secondary ml-2" />
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 relative">
              <span className="text-transparent bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent bg-clip-text">
                Our Products
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive range of premium export products, carefully sourced and quality-tested to meet international standards across diverse global markets.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
              {[
                { number: "500+", label: "Product Categories", icon: Target, gradient: "from-ai-primary to-ai-secondary" },
                { number: "50+", label: "Export Destinations", icon: Globe, gradient: "from-ai-secondary to-ai-accent" },
                { number: "$500M+", label: "Annual Trade Volume", icon: TrendingUp, gradient: "from-ai-accent to-ai-cyber" },
                { number: "99.5%", label: "Quality Assurance", icon: Shield, gradient: "from-ai-cyber to-ai-neon" }
              ].map((stat, index) => (
                <div key={index} className="group cursor-pointer transform transition-all duration-500 hover:scale-110">
                  <div className="relative bg-gray-800/50 border border-ai-primary/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-ai-primary transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300 font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Categories */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer relative">
                <div className="relative bg-gray-800/50 border border-ai-primary/20 rounded-3xl shadow-2xl overflow-hidden hover:shadow-4xl transition-all duration-700 hover:-translate-y-4">
                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className={`px-4 py-2 bg-gradient-to-r ${category.gradient} rounded-full text-white font-bold text-sm shadow-lg`}>
                      {category.badge}
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-8 right-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-6 right-6 text-white text-right z-10">
                      <div className="text-3xl font-black">{category.stats.countries}</div>
                      <div className="text-sm opacity-90 font-medium">Countries</div>
                      <div className="text-lg font-bold mt-1">{category.stats.volume}</div>
                      <div className="text-xs opacity-75">Annual Volume</div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-10 relative z-20">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl font-black text-white">
                        {category.name}
                      </h3>
                      <div className={`px-3 py-1 bg-gradient-to-r ${category.gradient} rounded-full text-white text-xs font-bold`}>
                        {category.stats.clients} Clients
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {category.description}
                    </p>
                    
                    {/* Items Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <div className={`w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full mr-4 flex-shrink-0 shadow-lg`}></div>
                          <span className="font-semibold text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Link to="/inquiry" className="flex-1">
                        <Button className={`w-full bg-gradient-to-r ${category.gradient} text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group/btn`}>
                          <span className="flex items-center justify-center">
                            Get Quote
                            <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                          </span>
                        </Button>
                      </Link>
                      
                      <Button 
                        variant="outline" 
                        className="px-8 py-4 border-2 border-ai-primary/50 text-ai-primary hover:bg-ai-primary/10 hover:border-ai-primary rounded-2xl font-bold transform hover:scale-105 transition-all duration-300"
                        onClick={() => alert(`Viewing details for ${category.name}`)}
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Assurance Section */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24 relative">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-ai-primary/30 rounded-full mb-6">
                  <Award className="h-5 w-5 text-ai-primary mr-2" />
                  <span className="text-sm font-bold text-ai-primary uppercase tracking-wide">World-Class Standards</span>
                </div>
                
                <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                  Quality Assurance &
                  <span className="block text-transparent bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text">
                    Certifications
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Every product undergoes rigorous quality testing and meets international standards. Our certifications ensure compliance with global trade requirements and customer satisfaction.
                </p>
              </div>
              
              {/* Certifications Grid */}
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="group flex items-center space-x-6 p-6 bg-gray-800/50 border border-ai-primary/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                    <div className="w-16 h-16 bg-gray-700/50 rounded-2xl flex items-center justify-center shadow-lg">
                      <cert.icon className={`h-8 w-8 ${cert.color}`} />
                    </div>
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg group-hover:text-ai-primary transition-colors duration-300">{cert.name}</span>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-gray-400 text-sm ml-2 font-medium">Verified</span>
                      </div>
                    </div>
                    <CheckCircle className="h-6 w-6 text-ai-secondary" />
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  onClick={handleViewCertificates}
                  className="flex-1 bg-gradient-to-r from-ai-primary to-ai-secondary hover:from-ai-secondary hover:to-ai-accent text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  View All Certifications
                </Button>
                <Button 
                  onClick={handleDownloadCatalog}
                  variant="outline" 
                  className="px-8 py-4 border-2 border-ai-primary/50 text-ai-primary hover:bg-ai-primary/10 rounded-2xl font-bold transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="relative">
              <div className="relative group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                  alt="Quality testing laboratory"
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700"
                />
                
                {/* Quality Badge */}
                <div className="absolute -bottom-8 -left-8 bg-gray-800/90 border border-ai-primary/30 p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-black text-ai-primary mb-2">99.5%</div>
                  <div className="text-sm text-gray-300 font-bold">Quality Assurance Rate</div>
                  <div className="text-xs text-gray-400 mt-1">Certified International Standards</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center relative">
            <div className="bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent rounded-3xl p-16 text-white relative overflow-hidden shadow-4xl">
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <Zap className="h-12 w-12 text-yellow-300 mr-4" />
                  <h2 className="text-5xl font-black">Ready to Export Your Products?</h2>
                  <Zap className="h-12 w-12 text-yellow-300 ml-4" />
                </div>
                
                <p className="text-2xl mb-12 opacity-90 leading-relaxed">
                  Connect with our product specialists to explore export opportunities for your business. Get expert guidance on market entry strategies and compliance requirements.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link to="/inquiry">
                    <Button size="lg" className="bg-white text-ai-primary hover:bg-gray-100 px-12 py-6 rounded-full font-black text-lg transform hover:scale-110 transition-all duration-300 shadow-2xl group">
                      <Calendar className="mr-3 h-6 w-6" />
                      Schedule Consultation
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={handleDownloadCatalog}
                    className="border-4 border-white text-white hover:bg-white hover:text-ai-primary px-12 py-6 rounded-full font-black text-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download Catalog
                  </Button>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
                  <div className="flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer">
                    <Phone className="h-6 w-6 mr-3" />
                    <span className="font-semibold">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer">
                    <Mail className="h-6 w-6 mr-3" />
                    <span className="font-semibold">info@patelexports.com</span>
                  </div>
                  <div className="flex items-center justify-center text-white/90 hover:text-white transition-colors cursor-pointer">
                    <MapPin className="h-6 w-6 mr-3" />
                    <span className="font-semibold">Rajkot, Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
