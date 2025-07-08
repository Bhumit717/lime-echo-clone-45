
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      const messageText = `Newsletter Subscription: ${email}`;
      const apiUrl = `https://api.callmebot.com/text.php?source=web&user=@bhumitnasit&text=${encodeURIComponent(messageText)}`;
      
      await fetch(apiUrl, { method: 'GET', mode: 'no-cors' });
      setEmail('');
      alert('Newsletter subscription successful!');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "/blog" }
    ],
    Services: [
      { name: "Export Services", href: "/services" },
      { name: "Import Services", href: "/services" },
      { name: "Logistics Solutions", href: "/services" },
      { name: "Documentation Support", href: "/services" }
    ],
    Products: [
      { name: "Agricultural Products", href: "/products" },
      { name: "Textiles & Garments", href: "/products" },
      { name: "Engineering Goods", href: "/products" },
      { name: "Gems & Jewelry", href: "/products" }
    ],
    Support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Get Quote", href: "/inquiry" },
      { name: "Track Shipment", href: "#" },
      { name: "Help Center", href: "#" }
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Export House Certificate", 
    "FSSAI Licensed",
    "Government Recognized"
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link to="/" className="text-3xl font-bold text-white mb-4 block hover:text-blue-400 transition-colors">
                Patel<span className="text-teal-400">Impex</span>
              </Link>
              <p className="text-slate-300 leading-relaxed text-lg">
                Your premier partner for international trade solutions. Connecting Indian excellence with global markets through expert export-import services since 2010.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>Rajkot, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
                <Phone className="h-5 w-5 text-teal-400" />
                <span>+91 (798) 41 33 417</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
                <Phone className="h-5 w-5 text-teal-400" />
                <span>+91 (997) 48 73 171</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-teal-400" />
                <span>info@patelimpex.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Globe className="h-5 w-5 text-teal-400" />
                <span>Serving 50+ Countries Worldwide</span>
              </div>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-bold mb-6 text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Our Certifications</h3>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <span key={index} className="bg-slate-700 text-slate-300 text-sm px-4 py-2 rounded-full hover:bg-slate-600 transition-colors">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold mb-2 text-white">Newsletter</h3>
              <p className="text-slate-300 mb-4">Get trade insights & opportunities</p>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 flex-1 md:w-64 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-medium disabled:opacity-50"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400">
              © 2024 Patel Impex Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Cookie Policy</a>
              <a href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Contact</a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-slate-500 text-sm">
              Designed for global trade excellence • Made in India 🇮🇳 • Serving the world 🌍
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
