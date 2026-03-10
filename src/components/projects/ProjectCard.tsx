import { Github, ExternalLink } from 'lucide-react';
import type { ProjectType } from '../../types/types';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    // 1. CARD PRINCIPAL: flex-col para garantir Imagem em cima, Texto em baixo
    <div className="flex flex-col w-full bg-(--ui-surface) border border-(--ui-border) rounded-2xl group shadow-2xl overflow-hidden transition-colors duration-300 hover:border-(--accent-color)/50">
      
      {/* === ÁREA DA IMAGEM / MOCKUPS (SUPERIOR) === */}
      {/* overflow-hidden AQUI é o que esconde o título antes do hover e impede vazamentos */}
      <div className="relative w-full min-h-75 sm:min-h-100 lg:min-h-112.5 bg-(--bg-primary) flex items-center justify-center p-8 sm:p-12 lg:p-16 overflow-hidden border-b border-(--ui-border)">
        
        {/* Fundo decorativo sutil */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--accent-color)_0%,transparent_70%)] blur-2xl z-0"></div>

        {/* === WRAPPER DOS MOCKUPS (PROPORÇÃO PURA) === */}
        {/* Usando 85% do espaço livre para ficarem grandes. O translate-x centraliza a composição. */}
        <div className="relative w-[85%] lg:w-[80%] max-w-200 -translate-x-[5%] group-hover:-translate-y-2 transition-transform duration-500 z-10 aspect-video flex items-center justify-center">
          
          {/* Mockup Desktop (Estética Limpa) */}
          <div className="w-full h-full bg-[#1e1e1e] rounded-xl shadow-2xl border-4 lg:border-[6px] border-gray-800 flex flex-col overflow-hidden">
            <div className="h-4 sm:h-5 lg:h-6 w-full bg-gray-900 border-b border-gray-800 flex items-center px-3 lg:px-4 gap-1.5 rounded-t-lg shadow-inner">
            </div>
            <div className="flex-1 bg-(--bg-primary) p-4 sm:p-6 flex flex-col gap-3 sm:gap-5 shadow-inner">
               <div className="w-full h-8 sm:h-12 bg-(--ui-surface) rounded animate-pulse"></div>
               <div className="w-3/4 h-3 sm:h-5 bg-(--ui-surface) rounded animate-pulse"></div>
               <div className="w-1/2 h-3 sm:h-5 bg-(--ui-surface) rounded animate-pulse"></div>
            </div>
          </div>

          {/* 2. Mockup Mobile (ANCORADO PARA NÃO ESTOURAR) */}
          {/* -bottom e -right em porcentagem garantem que ele flutue proporcionalmente sem vazar */}
          <div className="absolute w-[30%] aspect-9/19 -bottom-[12%] -right-[12%] bg-(--bg-primary) rounded-3xl lg:rounded-4xl shadow-2xl border-4 lg:border-[6px] border-gray-900 flex flex-col items-center pt-5 lg:pt-8 px-2 lg:px-3 z-20">
             <div className="absolute top-0 w-1/3 h-3 lg:h-4 bg-gray-900 rounded-b-xl shadow-md"></div>
             <div className="w-full h-1/2 bg-(--ui-surface) rounded-md sm:rounded-lg animate-pulse mb-2 lg:mb-3"></div>
             <div className="w-full h-1/4 bg-(--ui-surface) rounded-md sm:rounded-lg animate-pulse"></div>
          </div>
          
        </div>

        {/* 3. HOVER DO TÍTULO (ESCONDIDO E ANIMADO) */}
        {/* translate-y-full esconde ele para baixo. group-hover:translate-y-0 faz ele subir na área da imagem. */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 bg-linear-to-t from-black/90 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30">
          <span className="text-white font-bold text-xl sm:text-2xl tracking-wide block truncate">
            {project.title}
          </span>
        </div>
      </div>

      {/* === ÁREA DE DETALHES E BOTÕES (INFERIOR) === */}
      <div className="w-full p-6 sm:p-8 lg:p-10 flex flex-col bg-(--code-header) dark:bg-[#11141a] z-0">
        
        <div className="mb-6 lg:mb-8">
          <span className="inline-block px-3 py-1 text-xs font-mono text-(--accent-color) bg-(--accent-color)/10 rounded-full mb-3 sm:mb-4">
            {project.category.toUpperCase()}
          </span>
          <p className="text-(--text-secondary) text-sm lg:text-base leading-relaxed line-clamp-4">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-30 py-3 px-4 flex items-center justify-center gap-2 rounded-lg border border-(--ui-border) text-(--text-primary) hover:bg-(--ui-surface) hover:border-(--accent-color) transition-colors text-sm font-medium"
          >
            <Github size={18} />
            Código
          </a>
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-30 py-3 px-4 flex items-center justify-center gap-2 rounded-lg bg-(--accent-color) hover:bg-(--accent-hover) text-white transition-colors text-sm font-medium shadow-lg shadow-(--accent-color)/20"
          >
            <ExternalLink size={18} />
            Projeto
          </a>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;