import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Logo from "../../../public/images/logo-roxo-escuro.png";

const Header = () => {
  // Iniciando com dark mode ativado
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Efeito para injetar a classe 'dark' no HTML/Body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return(
    <header className="top-0 w-full flex items-center justify-between px-8 py-6 z-20 fixed">
        <a
          href="#home"
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img
            src={Logo}
            alt="Logo Gabriel Martins"
            className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md ml-[50%]"
          />
        </a>
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
          <a href="#projetos" className="hover:text-(--accent-color) transition-colors"> Projetos   </a>
          <a href="#contato"
            className="hover:text-(--accent-color) transition-colors"> Contato </a>
        </nav>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-(--ui-surface) hover:bg-(--ui-border) transition-colors"
          aria-label="Alternar Tema"
        >
          {isDarkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-700" />
          )}
        </button>
      </header>
  )
}

export default Header