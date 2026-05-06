import { Github, ExternalLink } from "lucide-react";
import type { ProjectType } from "../../types/types";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="flex flex-col w-full bg-(--ui-surface) border border-(--ui-border) rounded-2xl group shadow-2xl overflow-hidden transition-colors duration-300 hover:border-(--accent-color)/50">
      
      {/* ÁREA DA IMAGEM / MOCKUPS */}
      <div className="relative w-full min-h-75 sm:min-h-100 lg:min-h-112.5 bg-(--bg-primary) flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden border-b border-(--ui-border)">
        
        {/* background efeito */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--accent-color)_0%,transparent_70%)] blur-2xl z-0"></div>

        {/* DISPOSIÇÃO DAS IMAGENS / MOCKUPS */}
        <div className="relative w-[90%] lg:w-[85%] max-w-200 group-hover:-translate-y-2 transition-transform duration-500 z-10 flex items-center justify-center">
          
          {/* Mockup Desktop */}
          <div className="w-full relative z-10 drop-shadow-2xl">
            <img 
              src={project.desktopImage} 
              alt={`Mockup do projeto ${project.title}`}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Mockup Mobile */}
          <div className="absolute w-[32%] sm:w-[30%] lg:w-[26%] bottom-[-5%] sm:bottom-[-8%] right-[-5%] lg:right-[-8%] z-20 drop-shadow-2xl transition-transform duration-500 hover:-translate-y-2">
            <img 
              src={project.mobileImage} 
              alt={`Mockup mobile do projeto ${project.title}`}
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

        {/* HOVER DO TÍTULO DO PROJETO */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 bg-linear-to-t from-black/90 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30 pointer-events-none">
          <span className="text-white font-bold text-xl sm:text-2xl tracking-wide block truncate">
            {project.title}
          </span>
        </div>
      </div>

      {/* ÁREA DE DETALHES E BOTÕES */}
      <div className="w-full p-6 sm:p-8 lg:p-10 flex flex-col bg-(--code-bg) transition-colors duration-300 z-0">
        <div className="mb-6 lg:mb-8">
          <span className="inline-block px-3 py-1 text-xs font-mono text-(--accent-color) bg-(--accent-color)/10 rounded-full mb-3 sm:mb-4 transition-colors duration-300">
            {project.category.toUpperCase()}
          </span>
          <p className="text-(--text-secondary) text-sm lg:text-base leading-relaxed line-clamp-4 transition-colors duration-300">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-30 py-3 px-4 flex items-center justify-center gap-2 rounded-lg border border-(--ui-border) bg-(--code-bg) text-(--text-primary) hover:border-(--accent-color) hover:text-(--accent-color) transition-all duration-300 text-sm font-medium shadow-sm"
          >
            <Github size={18} className="transition-colors duration-300" />
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
