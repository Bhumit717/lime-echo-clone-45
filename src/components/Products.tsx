import { Wheat, Wrench, Shirt, Coffee, Gem, Cpu, Pill, Tractor, Package, Leaf, Recycle } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: Wheat,
      name: "Agricultural Products",
      items: ["Rice", "Wheat", "Spices", "Tea", "Coffee", "Pulses"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Pill,
      name: "Pharma & Pesticides", 
      items: ["Pharmaceuticals", "Medical Supplies", "Pesticides", "Fertilizers", "Veterinary Products", "Health Supplements"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Tractor,
      name: "Agriculture Equipment & Vehicles",
      items: ["Tractors", "Harvesters", "Farm Equipment", "Irrigation Systems", "Agricultural Vehicles", "Farming Tools"],
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Wrench,
      name: "Industrial Equipment",
      items: ["Machinery", "Tools", "Electronics", "Auto Parts", "Steel", "Hardware"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Package,
      name: "Plastic Products",
      items: ["Plastic Containers", "Packaging Materials", "Industrial Plastics", "Household Items", "Medical Plastics", "Automotive Parts"],
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Shirt,
      name: "Textiles & Garments",
      items: ["Cotton", "Silk", "Readymade Garments", "Home Textiles", "Fabrics", "Yarn"],
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Coffee,
      name: "Food & Beverages",
      items: ["Processed Foods", "Beverages", "Snacks", "Condiments", "Frozen Foods", "Dairy"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Leaf,
      name: "Biodegradable Products",
      items: ["Biodegradable Packaging", "Compostable Materials", "Natural Fibers", "Organic Containers", "Plant-based Products", "Sustainable Materials"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Recycle,
      name: "Eco-Friendly Products",
      items: ["Renewable Energy Products", "Solar Equipment", "Green Technology", "Recycled Materials", "Sustainable Solutions", "Environmental Products"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Gem,
      name: "Gems & Jewelry",
      items: ["Diamonds", "Precious Stones", "Gold Jewelry", "Silver Items", "Pearls", "Handicrafts"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Cpu,
      name: "Technology Products",
      items: ["Electronics", "Software", "IT Services", "Telecom", "Components", "Gadgets"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-ai-primary mb-2 uppercase tracking-wide">
            Our Products
          </h2>
          <h3 className="text-4xl font-bold text-white mb-4">
            Quality Products Worldwide
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We deal in a wide range of premium products across various industries, 
            ensuring quality and reliability in every shipment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 border border-ai-primary/20 hover:border-ai-primary/40">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <category.icon className="h-6 w-6 mr-2 text-ai-primary" />
                    <h4 className="text-xl font-semibold">{category.name}</h4>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-b-lg shadow-lg -mt-4 relative z-10 border-x border-b border-ai-primary/20 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-ai-primary to-ai-secondary rounded-full mr-2"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
