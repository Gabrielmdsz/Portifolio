import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-(--ui-border) bg-transparent">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Animação Sutil Status + Copyright */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--accent-color) opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-(--accent-color)"></span>
            </span>
            <span className="text-(--text-secondary) text-[10px] uppercase tracking-[0.2em] font-bold">
              Available for projects
            </span>
          </div>

          <div className="h-4 w-px bg-(--ui-border) hidden md:block"></div>
            <a href="https://www.linkedin.com/in/jgabrielmdsz/" target="_blank"><p className="text-(--text-secondary) text-xs font-medium">
            © {currentYear} Gabriel Martins
          </p></a>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-3 px-5 py-2.5 rounded-full border border-(--ui-border) text-(--text-secondary) hover:text-(--accent-color) hover:border-(--accent-color) transition-all duration-300"
          aria-label="Voltar ao topo">
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Back to top
          </span>
          <ArrowUp
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-1"/>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
