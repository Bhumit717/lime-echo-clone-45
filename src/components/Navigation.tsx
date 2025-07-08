
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Globe, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl' : 'bg-white'}`}>
      {/* Ultra Pro Contact Bar with Advanced Animations */}
      <div className="bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 text-slate-700 py-3 px-4 border-b border-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <div className="container mx-auto flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3 hover:text-blue-600 transition-all duration-300 cursor-pointer group">
              <div className="relative">
                <Phone size={16} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 animate-pulse"></div>
              </div>
              <span className="font-semibold group-hover:font-bold transition-all duration-300">+91 (798) 41 33 417</span>
            </div>
            <div className="flex items-center space-x-3 hover:text-blue-600 transition-all duration-300 cursor-pointer group">
              <div className="relative">
                <Mail size={16} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-20 animate-pulse"></div>
              </div>
              <span className="font-semibold group-hover:font-bold transition-all duration-300">info@patelimpex.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-3 text-blue-600 group cursor-pointer">
              <Globe size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-bold animate-text-shimmer bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent bg-size-200 bg-pos-0">Global Trade Solutions Since 2010</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sparkles size={14} className="text-yellow-500 animate-pulse" />
              <span className="text-slate-600 font-bold">ISO 9001:2015 Certified Export House</span>
              <Sparkles size={14} className="text-yellow-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Ultra Pro Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500 animate-text-shimmer bg-size-200 bg-pos-0">
                  Patel<span className="text-slate-700">Impex</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur-lg opacity-0 group-hover:opacity-25 transition-all duration-500"></div>
              </div>
            </Link>

            {/* Ultra Advanced Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-4 py-3 text-sm font-bold transition-all duration-500 group ${
                      location.pathname === item.href 
                        ? 'text-blue-600 scale-110' 
                        : 'text-slate-700 hover:text-blue-600 hover:scale-105'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Ultra Pro Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                    
                    {/* Ultra Advanced Active/Hover Indicator */}
                    <span className={`absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 transform transition-all duration-500 ${
                      location.pathname === item.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    } rounded-full`}></span>
                    
                    {/* Floating Particles on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute top-0 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ultra Pro Get Quote Button */}
            <div className="hidden md:block">
              <Link to="/inquiry" onClick={handleQuoteClick}>
                <Button className={`bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white font-black px-8 py-3 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-4xl relative overflow-hidden group ${isLoading ? 'animate-pulse' : ''}`}>
                  <span className="relative z-10 flex items-center">
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                        Get Quote
                        <Sparkles className="ml-2 h-5 w-5 group-hover:-rotate-12 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  
                  {/* Ultra Advanced Button Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </Link>
            </div>

            {/* Ultra Pro Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-blue-50 group"
              >
                <div className="relative">
                  {isOpen ? (
                    <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu size={28} className="group-hover:scale-110 transition-transform duration-300" />
                  )}
                  <div className="absolute -inset-1 bg-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Ultra Pro Mobile Menu with Advanced Animations */}
        <div className={`md:hidden transition-all duration-500 transform origin-top ${isOpen ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95 overflow-hidden'}`}>
          <div className="bg-white border-t border-blue-100 px-4 pt-4 pb-6 space-y-2 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-50"></div>
            
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-4 text-base font-bold rounded-2xl transition-all duration-300 relative group ${
                  location.pathname === item.href
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-teal-50 scale-105'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:scale-105'
                } animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            ))}
            
            <div className="px-4 py-4 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/inquiry" onClick={() => {setIsOpen(false); handleQuoteClick();}}>
                <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white font-black py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center">
                    <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Get Quote Now
                    <Sparkles className="ml-2 h-5 w-5 group-hover:-rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
