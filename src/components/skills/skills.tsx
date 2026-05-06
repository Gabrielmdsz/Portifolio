import  { useRef } from 'react';
import { ChevronLeft, ChevronRight, Code, FileJson, Atom,  FileCode2, Palette, Database, Server, Zap, Network, Box, TestTube, HardDrive, Route } from 'lucide-react';
import SkillCard from './skillcard';

const mySkills = [
  {
    title: 'React.js',
    description: 'Criação de interfaces de usuário componentizadas, gerenciamento de estado e hooks customizados.',
    icon: Atom,
    brandColor: '#61DAFB' 
  },
  {
    title: 'TypeScript',
    description: 'Tipagem estática para JavaScript, garantindo código mais seguro, previsível e fácil de dar manutenção.',
    icon: FileCode2,
    brandColor: '#3178C6' 
  },
  {
    title: 'Node.js',
    description: 'Construção de aplicações server-side assíncronas e escaláveis, focando em alta performance no backend.',
    icon: Server,
    brandColor: '#339933' 
  },
  {
    title: 'PostgreSQL',
    description: 'Gerenciamento de banco de dados relacional robusto, com foco em integridade, escalabilidade e segurança.',
    icon: HardDrive, 
    brandColor: '#336791' 
  },
  {
    title: 'Docker',
    description: 'Containerização de aplicações para garantir ambientes padronizados, isolados e de fácil deploy em produção.',
    icon: Box,
    brandColor: '#2496ED' 
  },
  {
    title: 'CSS3 & Tailwind',
    description: 'Estilização avançada, animações e layouts responsivos utilizando a metodologia utility-first do Tailwind.',
    icon: Palette,
    brandColor: '#38BDF8' 
  },
  {
    title: 'Express.js',
    description: 'Criação de servidores e APIs RESTful de forma ágil, com roteamento eficiente e gerenciamento de middlewares.',
    icon: Route, 
    brandColor: '#828282' 
  },
  {
    title: 'JavaScript (ES6+)',
    description: 'Manipulação do DOM, interatividade, consumo de APIs e lógica complexa para aplicações web dinâmicas.',
    icon: FileJson,
    brandColor: '#F7DF1E' 
  },
  {
    title: 'Jest',
    description: 'Implementação de testes unitários e de integração para assegurar a confiabilidade e prevenir regressões no código.',
    icon: TestTube,
    brandColor: '#C21325' 
  },
  {
    title: 'REST API',
    description: 'Desenvolvimento de arquiteturas de comunicação eficientes, padronizadas e seguras entre sistemas cliente-servidor.',
    icon: Network,
    brandColor: '#FF6C37' 
  },
  {
    title: 'SQL',
    description: 'Modelagem de dados relacionais, elaboração de consultas complexas e otimização estrutural de bancos de dados.',
    icon: Database,
    brandColor: '#E38C00' 
  },
  {
    title: 'HTML5',
    description: 'Construção de layouts semânticos, acessíveis e otimizados para SEO e performance na web.',
    icon: Code,
    brandColor: '#E34F26' 
  },
  {
    title: 'Vite',
    description: 'Configuração e empacotamento ultrarrápido de projetos front-end para uma experiência de desenvolvimento ágil.',
    icon: Zap,
    brandColor: '#646CFF' 
  }
]
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
        
        {/* CABEÇALHO DA SEÇÃO*/}
        <div className="mb-12">
          <div className="max-w-2xl group cursor-default">
            <span className="text-(--accent-color) font-semibold tracking-wider uppercase text-sm mb-2 block font-mono">
              STACKS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-4">
              Habilidades Técnicas
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-(--accent-color) rounded-full transition-all duration-300 group-hover:w-full"></div>
            </h2>
            <p className="text-(--text-secondary) text-lg mt-4 leading-relaxed">
              O ecossistema de linguagens e ferramentas que domino para arquitetar, desenvolver e otimizar aplicações web modernas e escaláveis.
            </p>
          </div>
        </div>

        {/*  ÁREA DO CARROSSEL  */}
        <div className="relative group/carousel">
          
          {/* Seta Esquerda */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-(--ui-surface) md:bg-(--ui-surface)/70 backdrop-blur-md border border-(--ui-border) text-(--text-primary) shadow-2xl opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:border-(--accent-color) hover:text-(--accent-color)"
            aria-label="Rolar para a esquerda">
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>

          {/* Carrossel */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-6 md:px-0 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

          {/* Seta Direita */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-(--ui-surface) md:bg-(--ui-surface)/70 backdrop-blur-md border border-(--ui-border) text-(--text-primary) shadow-2xl opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:border-(--accent-color) hover:text-(--accent-color)"
            aria-label="Rolar para a direita"
          >
            <ChevronRight size={24} className="md:w-7 md:h-7" />
          </button>
          
        </div>

      </div>
    </section>
  );
};

export default Skills;