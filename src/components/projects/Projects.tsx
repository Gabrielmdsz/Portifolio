import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { ProjectType, FilterType } from "../../types/types";
import Dvdesk from "../../../public/images/dv-desktop.png"
import Dvmobile from "../../../public/images/dv-mobile.png"

const filters: FilterType[] = [
  { id: "highlights", label: "Destaques" },
  { id: "landing", label: "Landing Pages" },
  { id: "backend", label: "Back-end / APIs" },
  { id: "apps", label: "Aplicações Web" },
];

const projectsData: ProjectType[] = [
  {
    id: "1",
    title: "Muay Thai Academy",
    description:
      "Landing page focada na alta conversão de alunos para uma academia de Muay Thai. Inclui seção de rotinas de treino, planos e contato otimizado.",
    category: "landing",
    isHighlight: true,
    githubUrl: "https://github.com/Gabrielmdsz/dragao-page",
    liveUrl: "https://dragaovermelhoft.vercel.app/",
    desktopImage: Dvdesk, 
    mobileImage: Dvmobile
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("highlights");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "highlights") return project.isHighlight;
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
        <div className="mb-12">
          <div className="inline-block group cursor-default">
            <span className="text-(--accent-color) font-semibold tracking-wider uppercase text-sm mb-2 block font-mono">
              portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-4 pr-4">
              Projetos
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-(--accent-color) rounded-full transition-all duration-300 group-hover:w-full"></div>
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          <div className="w-full lg:w-1/4 xl:w-1/5 flex flex-col">
            {/* Resposive Mobile Filter */}
            <div className="grid grid-cols-2 gap-2 pb-4 lg:flex lg:flex-col lg:pb-0 lg:overflow-visible">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3 py-2.5 text-sm rounded-lg text-center lg:text-left whitespace-nowrap overflow-hidden text-ellipsis lg:overflow-visible font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-(--accent-color) text-white shadow-md shadow-(--accent-color)/20 translate-x-0 lg:translate-x-2"
                      : "text-(--text-secondary) hover:bg-(--ui-surface) hover:text-(--text-primary)"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-3/4 xl:w-4/5">
            <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-[fadeIn_0.4s_ease-out]">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 p-12 text-center border-2 border-dashed border-(--ui-border) rounded-2xl">
                  <p className="text-(--text-secondary) text-lg">
                    Novos projetos sendo construídos em breve...
                  </p>
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
