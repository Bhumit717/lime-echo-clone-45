import tataLogo from "@/assets/logos/tata-logo.png";
import relianceLogo from "@/assets/logos/reliance-logo.png";
import mahindraLogo from "@/assets/logos/mahindra-logo.png";
import airtelLogo from "@/assets/logos/airtel-logo.png";
import wiproLogo from "@/assets/logos/wipro-logo.png";

const LogoScroll = () => {
  const logos = [
    { src: tataLogo, alt: "Tata Group" },
    { src: relianceLogo, alt: "Reliance Industries" },
    { src: mahindraLogo, alt: "Mahindra Group" },
    { src: airtelLogo, alt: "Bharti Airtel" },
    { src: wiproLogo, alt: "Wipro" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Trusted by Leading Companies
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-infinite">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;