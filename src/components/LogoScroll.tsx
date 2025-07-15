import globalTradeLogo from "@/assets/logos/global-trade-logo.png";
import europeanImportLogo from "@/assets/logos/european-import-logo.png";
import asiaPacificLogo from "@/assets/logos/asia-pacific-logo.png";
import middleEastLogo from "@/assets/logos/middle-east-logo.png";
import nordicImportLogo from "@/assets/logos/nordic-import-logo.png";

const LogoScroll = () => {
  const logos = [
    { src: globalTradeLogo, alt: "Global Trade Solutions LLC" },
    { src: europeanImportLogo, alt: "European Import Partners" },
    { src: asiaPacificLogo, alt: "Asia Pacific Trading Co" },
    { src: middleEastLogo, alt: "Middle East Import Group" },
    { src: nordicImportLogo, alt: "Nordic Import Solutions" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Trusted by Leading Global Importers
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