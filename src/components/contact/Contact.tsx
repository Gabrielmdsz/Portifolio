import { Send, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import type { SocialContactType } from '../../types/types'; // Importação tipada conforme solicitado

// Dados das Redes Sociais (Fácil de adicionar ou remover no futuro)
const socialLinks: SocialContactType[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/seu-perfil',
    icon: Linkedin,
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/seu-usuario',
    icon: Github,
  },
  {
    id: 'email',
    name: 'E-mail',
    url: 'mailto:seu-email@exemplo.com',
    icon: Mail,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    // Link direto para o WhatsApp com mensagem pré-programada (Substitua pelos seus zeros)
    url: 'https://wa.me/5581900000000?text=Ol%C3%A1%20Gabriel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20bater%20um%20papo.',
    icon: MessageCircle,
  },
];

const Contact = () => {
  return (
    <section id="contato" className="relative w-full py-24 text-(--text-primary) transition-colors duration-300 overflow-hidden z-0">
      
      {/* === BACKGROUND BASE === */}
      <div className="absolute inset-0 -z-30 bg-(--bg-primary)"></div>
      {/* Brilhos sutis nos cantos para dar profundidade */}
      <div className="absolute top-0 left-0 -z-10 w-125 h-125 bg-(--accent-color) rounded-full mix-blend-multiply opacity-[0.05] blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 -z-10 w-150 h-150 bg-(--accent-color) rounded-full mix-blend-multiply opacity-[0.05] blur-[150px]"></div>

      {/* Container Principal estendido para telas grandes */}
      <div className="max-w-360 mx-auto px-8 md:px-12 relative z-10">
        
        {/* === TÍTULO DA SEÇÃO === */}
        <div className="mb-16 lg:mb-20 inline-block group cursor-default">
          <span className="text-(--accent-color) font-semibold tracking-wider uppercase text-sm mb-2 block font-mono">
            ./contato
          </span>
          <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-4 pr-4">
            Vamos Conversar
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-(--accent-color) rounded-full transition-all duration-300 group-hover:w-full"></div>
          </h2>
        </div>

        {/* === LAYOUT DE COLUNAS === */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-32">
          
          {/* COLUNA ESQUERDA: Textos de CTA e Redes Sociais */}
          <div className="w-full lg:w-5/12 xl:w-1/2 flex flex-col justify-between">
            
            <div className="mb-12 lg:mb-0">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Pronto para transformar <br className="hidden xl:block" />
                <span className="text-(--accent-color)">ideias em realidade?</span>
              </h3>
              <p className="text-(--text-secondary) text-lg sm:text-xl max-w-lg mb-8 leading-relaxed">
                Comece dizendo um <a href="mailto:seu-email@exemplo.com" className="text-(--text-primary) border-b-2 border-(--accent-color) font-medium hover:text-(--accent-color) transition-colors px-1">oi</a>. Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para evoluirmos juntos.
              </p>
            </div>

            {/* Caixa de Redes Sociais (Inspirada no seu mockup) */}
            <div className="bg-(--code-header) dark:bg-[#11141a] border border-(--ui-border) rounded-2xl p-6 sm:p-8 max-w-md shadow-xl group/socials transition-colors hover:border-(--accent-color)/40">
              <h4 className="text-sm font-mono text-(--text-secondary) uppercase tracking-wider mb-6">Minhas Redes</h4>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      // Efeitos de vidro (glass) e preenchimento de cor ao passar o mouse
                      className="p-3.5 rounded-xl bg-(--bg-primary) border border-(--ui-border) text-(--text-secondary) transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-(--accent-color)/20 hover:text-(--accent-color) hover:border-(--accent-color)"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
            
          </div>

          {/* COLUNA DIREITA: Formulário */}
          <div className="w-full lg:w-7/12 xl:w-1/2">
            
            <form className="bg-(--ui-surface) border border-(--ui-border) rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col gap-6 relative overflow-hidden transition-colors hover:border-(--ui-border)/80">
              
              {/* Brilho interno do formulário */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-(--accent-color) opacity-10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

              <div className="mb-2">
                <p className="text-(--text-primary) font-medium text-lg mb-2">Envie uma mensagem direta</p>
                <p className="text-(--text-secondary) text-sm">Preencha os dados abaixo e retornarei o mais breve possível!</p>
              </div>

              {/* Campo Nome */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-(--text-primary) ml-1">
                  Nome
                </label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Seu nome completo" 
                  className="w-full bg-(--bg-primary) border border-(--ui-border) rounded-xl px-5 py-3.5 text-(--text-primary) placeholder:text-(--text-secondary)/60 focus:outline-none focus:ring-2 focus:ring-(--accent-color)/50 focus:border-(--accent-color) transition-all duration-300"
                  required
                />
              </div>

              {/* Campo E-mail */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-(--text-primary) ml-1">
                  E-mail
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="seu.email@exemplo.com" 
                  className="w-full bg-(--bg-primary) border border-(--ui-border) rounded-xl px-5 py-3.5 text-(--text-primary) placeholder:text-(--text-secondary)/60 focus:outline-none focus:ring-2 focus:ring-(--accent-color)/50 focus:border-(--accent-color) transition-all duration-300"
                  required
                />
              </div>

              {/* Campo Mensagem */}
              <div className="flex flex-col gap-2 relative">
                <div className="flex items-center justify-between ml-1">
                  <label htmlFor="message" className="text-sm font-semibold text-(--text-primary)">
                    Mensagem
                  </label>
                  {/* Detalhe Sênior: Contador visual estático (que no futuro você pode tornar dinâmico com um state de tamanho de texto) */}
                  <span className="text-xs text-(--text-secondary) font-mono">0/2000</span>
                </div>
                <textarea 
                  id="message"
                  placeholder="Escreva sua mensagem aqui..." 
                  rows={5}
                  className="w-full bg-(--bg-primary) border border-(--ui-border) rounded-xl px-5 py-3.5 text-(--text-primary) placeholder:text-(--text-secondary)/60 focus:outline-none focus:ring-2 focus:ring-(--accent-color)/50 focus:border-(--accent-color) transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              {/* Botão de Enviar */}
              <button 
                type="submit" 
                className="mt-4 w-full bg-(--accent-color) hover:bg-(--accent-hover) text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-(--accent-color)/20"
              >
                Enviar Mensagem
                <Send size={18} className="transform -translate-y-0.5 translate-x-0.5" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;