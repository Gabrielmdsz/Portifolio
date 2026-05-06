import { useState, useEffect } from "react";
import DarkBg from "../../../public/images/back-black.jpg";
import LightBg from "../../../public/images/back-white.png";

const HeroBackground = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Fundo base
    <div className="absolute inset-0 -z-30 w-full h-full overflow-hidden">
      
      {/* Troca da imagem */}
      <img 
        src={isDark ? DarkBg : LightBg} 
        alt="Padrão de hexágonos"
        className="absolute inset-0 w-full h-full object-cover animate-slow-pan transition-opacity duration-500 opacity-80 dark:opacity-40" />

      {/* Efeito Roxo */}
      <div 
        className="absolute top-1/4 -left-20 w-100 md:w-150 h-100 md:h-150 bg-[#9333ea] rounded-full blur-[120px] md:blur-[150px] animate-pulse-light-purple pointer-events-none z-10 opacity-20"
      ></div>

      {/* Efeito Azul  */}
      <div 
        className="absolute bottom-1/4 -right-20 w-100 md:w-150 h-100 md:h-150 bg-[#3b82f6] rounded-full blur-[120px] md:blur-[150px] animate-pulse-light-blue pointer-events-none z-10 opacity-20"
      ></div>

    </div>
  );
};

export default HeroBackground;