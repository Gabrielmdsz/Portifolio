import  { useState } from 'react';
import ProjectCard from './ProjectCard';
import type { ProjectType, FilterType } from '../../types/types';

const filters: FilterType[] = [
  { id: 'highlights', label: 'Destaques' },
  { id: 'landing', label: 'Landing Pages' },
  { id: 'backend', label: 'Back-end / APIs' },
  { id: 'apps', label: 'Aplicações Web' },
];

const projectsData: ProjectType[] = [
  {
    id: '1',
    title: 'Catálogo Studio Ghibli',
    description: 'Interface interativa desenvolvida para consumir e exibir dados sobre os filmes do Studio Ghibli. Foco em UI/UX, animações fluidas e design responsivo.',
    category: 'landing',
    isHighlight: true,
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'Muay Thai Academy',
    description: 'Landing page de alta conversão para uma academia de artes marciais. Inclui seção de rotinas de treino, planos e formulário de contato otimizado.',
    category: 'landing',
    isHighlight: true,
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Task Manager (To-Do)',
    description: 'Aplicação robusta de lista de tarefas usando React e TypeScript. Implementação de CRUD completo, gerenciamento de estado complexo e persistência de dados.',
    category: 'apps',
    isHighlight: false,
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'Fake Store E-commerce',
    description: 'Integração completa com a Fake Store API. Exibição de catálogo de produtos, carrinho de compras dinâmico e simulação de checkout.',
    category: 'backend',
    isHighlight: true,
    githubUrl: '#',
    liveUrl: '#'
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('highlights');

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'highlights') return project.isHighlight;
    return project.category === activeFilter;
  });

  return (
    <section id="projetos" className="relative w-full py-24 text-(--text-primary) transition-colors duration-300 overflow-hidden z-0">
      
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-(--bg-primary)"></div>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/4 -z-10 w-100 h-100 bg-(--accent-color) rounded-full mix-blend-multiply opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-10 right-1/4 -z-10 w-75 h-75 bg-(--accent-color) rounded-full mix-blend-multiply opacity-10 blur-[100px]"></div>

      <div className="max-w-360 mx-auto px-8 md:px-12 relative z-10">
        
        {/* === CORREÇÃO DO HOVER DO TÍTULO AQUI === */}
        <div className="mb-12">
          {/* O inline-block garante que a área de hover seja exatamente o tamanho do texto */}
          <div className="inline-block group cursor-default">
            <span className="text-(--accent-color) font-semibold tracking-wider uppercase text-sm mb-2 block font-mono">
              ./portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-4 pr-4">
              Projetos
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-(--accent-color) rounded-full transition-all duration-300 group-hover:w-full"></div>
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          <div className="w-full lg:w-1/4 xl:w-1/5 flex flex-col">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`snap-start whitespace-nowrap px-4 py-2.5 text-sm rounded-lg text-left font-medium transition-all duration-300 ${
                    activeFilter === filter.id 
                      ? 'bg-(--accent-color) text-white shadow-md shadow-(--accent-color)/20 translate-x-0 lg:translate-x-2' 
                      : 'text-(--text-secondary) hover:bg-(--ui-surface) hover:text-(--text-primary)'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-3/4 xl:w-4/5">
            <div 
              key={activeFilter} 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-[fadeIn_0.4s_ease-out]"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 p-12 text-center border-2 border-dashed border-(--ui-border) rounded-2xl">
                  <p className="text-(--text-secondary) text-lg">Novos projetos sendo construídos em breve...</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;