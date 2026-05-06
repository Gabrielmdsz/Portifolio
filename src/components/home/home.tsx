import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import HeroBackground from './homeBackGround'; 

const Home = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 z-0 overflow-hidden">
      
      <HeroBackground />
      
      <main className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-360 mx-auto px-8 md:px-20 z-10">
        
        {/* Coluna de Textos ( Esquerda ) */}
        <div className="flex-1 w-full flex flex-col items-start justify-center space-y-6 z-10 text-(--text-primary)">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Olá<span className="text-(--accent-color)">.</span>
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-(--accent-color)"></div>
            <h2 className="text-2xl md:text-4xl font-semibold">
              Eu sou Gabriel
            </h2>
          </div>

          <p className="text-lg md:text-xl text-(--text-secondary) max-w-lg leading-relaxed">
            Transformo ideias em soluções interativas de alta conversão.
            Construo experiências digitais fluidas e escaláveis, priorizando
            aplicações rápidas, acessíveis e com foco absoluto no usuário.
          </p>

          <button className="mt-4 px-8 py-3 bg-(--accent-color) hover:bg-(--accent-hover) text-white font-medium rounded-md flex items-center gap-2 transition-all transform group   hover:-translate-y-1 shadow-lg shadow-(--accent-color)/30">
            Ver Projetos
            <ArrowDown className="transition-transform duration-300 group-hover:translate-y-1.5" size={18} />
          </button>
        </div>

        {/*  Mockup do Editor de Código ( Direita )  */}
        <div className="hidden md:flex flex-1 w-full h-full items-center justify-end relative">
          
          <div className="w-112.5 bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-xs text-gray-400 font-mono">
                Developer.jsx
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed text-gray-300">
              <p>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-blue-400">gabriel</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-sky-300">role:</span>{" "}
                <span className="text-yellow-300">'Full Stack Developer'</span>,
              </p>
              <p className="pl-4">
                <span className="text-sky-300">stack:</span> [
                <span className="text-yellow-300">'React'</span>,{" "}
                <span className="text-yellow-300">'TypeScript'</span>,
                <span className="text-yellow-300">'SQL'</span>],
              </p>
              <p className="pl-4">
                <span className="text-sky-300">hobbies:</span> [
                <span className="text-yellow-300">'Jiu-Jitsu'</span>,{" "}
                <span className="text-yellow-300">'Animes'</span>],
              </p>
              <p className="pl-4">
                <span className="text-sky-300">buildAwesomeWebsites:</span>{" "}
                <span className="text-blue-400">()</span>{" "}
                <span className="text-pink-400">=&gt;</span> {"{"}
              </p>
              <p className="pl-8 text-gray-500">// Magic happens here</p>
              <p className="pl-8">
                <span className="text-pink-400">return</span>{" "}
                <span className="text-yellow-300">'Incredible UI/UX'</span>;
              </p>
              <p className="pl-4">{"}"}</p>
              <p>{"};"}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Botões de Redes ( Parte de Baixo ) */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none">
        <ArrowDown className="animate-bounce text-(--accent-color)" size={24} />
      </div>
      <div className="absolute bottom-8 left-8 md:left-auto md:right-12 flex flex-row gap-6 md:gap-5 z-20 text-(--text-secondary)">
        <a
          href="https://github.com/Gabrielmdsz"
          className="hover:text-(--accent-color) hover:-translate-y-1 transition-all duration-300 block"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/jgabrielmdsz/"
          className="hover:text-(--accent-color) hover:-translate-y-1 transition-all duration-300 block"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://www.instagram.com/gmartinssz/"
          className="hover:text-(--accent-color) hover:-translate-y-1 transition-all duration-300 block"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram size={22} />
        </a>
      </div>
    </section>
  );
};

export default Home;