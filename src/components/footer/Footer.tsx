import { ArrowUp } from 'lucide-react';
// Caso precise importar algum tipo no futuro, lembre-se de usar: import type { ... } from '../../types/types';

const Footer = () => {
  // Função suave para voltar ao topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    // A tag semântica <footer> é excelente para SEO e acessibilidade
    // O bg-gradient escurece levemente o fundo, dando a sensação de "fim de página"
    <footer className="relative w-full border-t border-(--ui-border) bg-gradient-to-b from-(--bg-primary) to-black/40 overflow-hidden z-0 pt-16 pb-8">
      
      {/* Container Principal estendido para acompanhar o design anterior */}
      <div className="max-w-[90rem] mx-auto px-8 md:px-12 relative z-10 flex flex-col gap-12 sm:gap-16">
        
        {/* === PARTE SUPERIOR: Logo, Descrição e Links === */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
          
          {/* Esquerda: Logo e Bio Concisa */}
          <div className="flex flex-col gap-4 max-w-sm">
            {/* Logo (mesmo estilo do Header) */}
            <a 
              href="#home" 
              className="text-2xl font-bold tracking-tighter text-(--text-primary) hover:opacity-80 transition-opacity"
              aria-label="Voltar para o início"
            >
              Gabriel<span className="text-(--accent-color)">.dev</span>
            </a>
            
            <p className="text-(--text-secondary) text-sm leading-relaxed">
              Construindo interfaces digitais modernas, acessíveis e de alta performance. Focado em transformar ideias em excelentes experiências para o usuário.
            </p>
          </div>

          {/* Direita: Navegação Rápida */}
          <nav className="flex flex-wrap gap-6 sm:gap-8">
            {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
              <a 
                key={item} 
                // Transforma o nome no ID da âncora (ex: "Sobre" vira "#sobre")
                href={`#${item.toLowerCase()}`} 
                className="text-(--text-secondary) hover:text-(--accent-color) text-sm font-medium transition-colors duration-300 relative group"
              >
                {item}
                {/* Efeito sênior: sublinhado animado no hover dos links do footer */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-(--accent-color) transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
        </div>

        {/* === PARTE INFERIOR: Direitos Autorais e Back to Top === */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 pt-8 border-t border-(--ui-border)/50">
          
          {/* Copyright */}
          <p className="text-(--text-secondary) text-xs font-medium text-center sm:text-left">
            © 2026 Gabriel. Todos os direitos reservados.
          </p>

          {/* Botão de UX: Voltar ao Topo */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-(--ui-surface) border border-(--ui-border) text-(--text-secondary) text-xs font-semibold uppercase tracking-wider hover:text-(--accent-color) hover:border-(--accent-color) transition-all duration-300 shadow-sm"
            aria-label="Voltar ao topo da página"
          >
            Voltar ao topo
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;