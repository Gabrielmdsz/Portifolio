import  { useRef } from 'react';
import { ChevronLeft, ChevronRight, Code, FileJson, Atom, Zap, Palette, FileCode2 } from 'lucide-react';
import SkillCard from './skillcard'; // Ajuste o caminho de importação se necessário

// Array de Skills - Adicione novos objetos aqui futuramente e o carrossel crescerá automaticamente!
const mySkills = [
  {
    title: 'HTML5',
    description: 'Construção de layouts semânticos, acessíveis e otimizados para SEO e performance na web.',
    icon: Code,
    brandColor: '#E34F26' // Laranja HTML
  },
  {
    title: 'CSS3 & Tailwind',
    description: 'Estilização avançada, animações e layouts responsivos utilizando a metodologia utility-first do Tailwind.',
    icon: Palette,
    brandColor: '#38BDF8' // Azul Tailwind
  },
  {
    title: 'JavaScript (ES6+)',
    description: 'Manipulação do DOM, interatividade, consumo de APIs e lógica complexa para aplicações web dinâmicas.',
    icon: FileJson,
    brandColor: '#F7DF1E' // Amarelo JS
  },
  {
    title: 'React.js',
    description: 'Criação de interfaces de usuário componentizadas, gerenciamento de estado e hooks customizados.',
    icon: Atom,
    brandColor: '#61DAFB' // Ciano React
  },
  {
    title: 'TypeScript',
    description: 'Tipagem estática para JavaScript, garantindo código mais seguro, previsível e fácil de dar manutenção.',
    icon: FileCode2,
    brandColor: '#3178C6' // Azul TypeScript
  },
  {
    title: 'Vite',
    description: 'Configuração e empacotamento ultrarrápido de projetos front-end para uma experiência de desenvolvimento ágil.',
    icon: Zap,
    brandColor: '#646CFF' // Roxo Vite
  }
];

const Skills = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340; 
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="skills" className="w-full py-24 bg-(--bg-primary) text-(--text-primary) transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-12 relative">
        
        {/* === CABEÇALHO DA SEÇÃO COM ANIMAÇÃO === */}
        <div className="mb-12">
          {/* Adicionada a classe 'group' e 'cursor-default' para a animação do título */}
          <div className="max-w-2xl group cursor-default">
            <span className="text-(--accent-color) font-semibold tracking-wider uppercase text-sm mb-2 block font-mono">
              ./habilidades
            </span>
            <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-4">
              Habilidades Técnicas
              {/* A linha que cresce no hover igual ao About */}
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-(--accent-color) rounded-full transition-all duration-300 group-hover:w-full"></div>
            </h2>
            <p className="text-(--text-secondary) text-lg mt-4 leading-relaxed">
              O ecossistema de linguagens e ferramentas que domino para arquitetar, desenvolver e otimizar aplicações web modernas e escaláveis.
            </p>
          </div>
        </div>

        {/* === ÁREA DO CARROSSEL COM SETAS FLUTUANTES === */}
        {/* Criamos um group específico (group/carousel) para controlar quando as setas aparecem */}
        <div className="relative group/carousel">
          
          {/* Seta Esquerda Flutuante */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-(--ui-surface)/70 backdrop-blur-md border border-(--ui-border) text-(--text-primary) shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:border-(--accent-color) hover:text-(--accent-color)"
            aria-label="Rolar para a esquerda"
          >
            <ChevronLeft size={28} />
          </button>

          {/* O Carrossel */}
          <div 
            ref={carouselRef}
            // Adicionado um padding vertical (py-4) para dar espaço para a sombra do hover dos cards não cortar
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 -mx-8 px-8 md:mx-0 md:px-0 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {mySkills.map((skill, index) => (
              <SkillCard 
                key={index}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
                brandColor={skill.brandColor}
              />
            ))}
          </div>

          {/* Seta Direita Flutuante */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-(--ui-surface)/70 backdrop-blur-md border border-(--ui-border) text-(--text-primary) shadow-2xl opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:border-(--accent-color) hover:text-(--accent-color)"
            aria-label="Rolar para a direita"
          >
            <ChevronRight size={28} />
          </button>
          
        </div>

      </div>
    </section>
  );
};

export default Skills;