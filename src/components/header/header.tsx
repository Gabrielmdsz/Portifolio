import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import LogoDark from "../../../public/images/logo-roxo-escuro.png";
import LogoLight from "../../../public/images/logo-azul.png";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-8 py-2 z-50 bg-(--bg-primary)/80 backdrop-blur-md border-b border-(--ui-border)/30 transition-all duration-300">
      {/* === 1. LOGO (Intocada) === */}
      <a
        href="#home"
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar na logo
      >
        <img
          src={isDarkMode ? LogoDark : LogoLight}
          alt="Logo Gabriel Martins"
          className="h-16 sm:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-md ml-[50%]"
        />
      </a>

      {/* === 2. NAV DESKTOP (Intocada, some no mobile com hidden) === */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a
          href="#home"
          className="hover:text-(--accent-color) transition-colors"
        >
          Home
        </a>
        <a
          href="#sobre"
          className="hover:text-(--accent-color) transition-colors"
        >
          Sobre
        </a>
        <a
          href="#skills"
          className="hover:text-(--accent-color) transition-colors"
        >
          Skills
        </a>
        <a
          href="#projetos"
          className="hover:text-(--accent-color) transition-colors"
        >
          Projetos
        </a>
        <a
          href="#contato"
          className="hover:text-(--accent-color) transition-colors"
        >
          Contato
        </a>
      </nav>

      {/* === 3. AÇÕES DA DIREITA (Tema + Menu Hambúrguer) === */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-(--ui-surface) hover:bg-(--ui-border) transition-colors group"
          aria-label="Alternar Tema"
        >
          {isDarkMode ? (
            <Sun
              size={20}
              className="text-yellow-400 group-hover:rotate-90 transition-transform duration-500"
            />
          ) : (
            <Moon
              size={20}
              className="text-gray-700 group-hover:-rotate-90 transition-transform duration-500"
            />
          )}
        </button>

        {/* Botão Hambúrguer (Aparece SÓ no mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-(--text-primary) hover:bg-(--ui-surface) transition-colors"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* === 4. MENU MOBILE DROPDOWN (Aparece SÓ no mobile e flutua) === */}
      <div
        className={`absolute top-full left-0 w-full bg-(--bg-primary) border-b border-(--ui-border)/30 shadow-2xl md:hidden transition-all duration-300 overflow-hidden flex flex-col ${
          isMenuOpen ? "max-h-80 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-base font-medium">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="text-(--text-primary) hover:text-(--accent-color) transition-colors"
          >
            Home
          </a>
          <a
            href="#sobre"
            onClick={() => setIsMenuOpen(false)}
            className="text-(--text-primary) hover:text-(--accent-color) transition-colors"
          >
            Sobre
          </a>
          <a
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
            className="text-(--text-primary) hover:text-(--accent-color) transition-colors"
          >
            Skills
          </a>
          <a
            href="#projetos"
            onClick={() => setIsMenuOpen(false)}
            className="text-(--text-primary) hover:text-(--accent-color) transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contato"
            onClick={() => setIsMenuOpen(false)}
            className="text-(--text-primary) hover:text-(--accent-color) transition-colors"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
