import { Send, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { SocialContactType } from "../../types/types";
import { useState } from "react";

const socialLinks: SocialContactType[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jgabrielmdsz/",
    icon: Linkedin,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Gabrielmdsz",
    icon: Github,
  },
  {
    id: "email",
    name: "E-mail",
    url: "mailto:martinsjoaogs@gmail.com",
    icon: Mail,
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    url: "https://wa.me/5581983156670?text=Ol%C3%A1%20Gabriel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20bater%20um%20papo.",
    icon: MessageCircle,
  },
];

const Contact = () => {
  const [message, setMessage] = useState("");
  const maxLength = 2000;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <section
      id="contato"
      className="relative w-full py-24 text-(--text-primary) transition-colors duration-300 overflow-hidden z-0">
      {/*  BACKGROUND */}
      <div className="absolute inset-0 -z-30 bg-(--bg-primary)"></div>
      <div className="absolute top-0 left-0 -z-10 w-125 h-125 bg-(--accent-color) rounded-full mix-blend-multiply opacity-[0.05] blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 -z-10 w-150 h-150 bg-(--accent-color) rounded-full mix-blend-multiply opacity-[0.05] blur-[150px]"></div>

      <div className="max-w-360 mx-auto px-8 md:px-12 relative z-10">
        {/*  TÍTULO DA SEÇÃO  */}
        <div className="mb-16 lg:mb-20 inline-block group cursor-default">
          <span className="text-(--accent-color) font-semibold tracking-wider uppercase text-sm mb-2 block font-mono">
            Vamos nessa
          </span>
          <h2 className="text-4xl md:text-5xl font-bold relative inline-block mb-4 pr-4">
            Inicie uma Conversa
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-(--accent-color) rounded-full transition-all duration-300 group-hover:w-full"></div>
          </h2>
        </div>

        {/*  LAYOUT DE COLUNAS */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-32">
          {/* COLUNA ESQUERDA */}
          <div className="w-full lg:w-5/12 xl:w-1/2 flex flex-col justify-between">
            <div className="mb-12 lg:mb-0">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Pronto para dar vida <br className="hidden xl:block" />
                <span className="text-(--accent-color)">
                  ao seu próximo projeto?
                </span>
              </h3>
              <p className="text-(--text-secondary) text-lg sm:text-xl max-w-lg mb-8 leading-relaxed">
                Estou sempre aberto a desafios que demandem interfaces de alta
                performance e arquitetura limpa. Se o seu time busca um
                desenvolvedor dedicado e com forte foco em acessibilidade e
                design, mande um{" "}
                <a
                  href="mailto:seu-email@exemplo.com"
                  className="text-(--text-primary) border-b-2 border-(--accent-color) font-medium hover:text-(--accent-color) transition-colors px-1">
                  olá
                </a>
                . Adoraria conversar sobre como podemos unir forças para
                construir experiências digitais incríveis.
              </p>
            </div>

            {/* Caixa de Redes Sociais */}
            <div className="bg-(--code-bg) border border-(--ui-border) rounded-2xl p-6 sm:p-8 max-w-md shadow-xl group/socials transition-colors hover:border-(--accent-color)/40">
              <h4 className="text-sm font-mono text-(--text-secondary) uppercase tracking-wider mb-6">
                Minhas Redes
              </h4>

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
                      className="p-3.5 rounded-xl bg-(--bg-primary) border border-(--ui-border) text-(--text-secondary) transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-(--accent-color)/20 hover:text-(--accent-color) hover:border-(--accent-color)">
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="w-full lg:w-7/12 xl:w-1/2">
            <form className="bg-(--ui-surface) border border-(--ui-border) rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col gap-6 relative overflow-hidden transition-colors hover:border-(--ui-border)/80">
              <div className="absolute top-0 right-0 w-64 h-64 bg-(--accent-color) opacity-10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

              <div className="mb-2">
                <p className="text-(--text-primary) font-medium text-lg mb-2">
                  Caixa de Entrada
                </p>
                <p className="text-(--text-secondary) text-sm">
                  Fique à vontade para propor uma ideia, detalhar uma vaga ou
                  apenas dar um olá. Vamos transformar esse contato em uma
                  excelente parceria.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-(--text-primary) ml-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu nome ou da sua empresa"
                  className="w-full bg-(--bg-primary) border border-(--ui-border) rounded-xl px-5 py-3.5 text-(--text-primary) placeholder:text-(--text-secondary)/60 focus:outline-none focus:ring-2 focus:ring-(--accent-color)/50 focus:border-(--accent-color) transition-all duration-300"
                  required/>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-(--text-primary) ml-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu.melhor@email.com"
                  className="w-full bg-(--bg-primary) border border-(--ui-border) rounded-xl px-5 py-3.5 text-(--text-primary) placeholder:text-(--text-secondary)/60 focus:outline-none focus:ring-2 focus:ring-(--accent-color)/50 focus:border-(--accent-color) transition-all duration-300"
                  required/>
              </div>

              <div className="flex flex-col gap-2 relative">
                <div className="flex items-center justify-between ml-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-(--text-primary)">
                    Mensagem
                  </label>

                  {/* contador */}
                  <span
                    className={`text-xs font-mono transition-colors ${
                      message.length >= maxLength
                        ? "text-red-500"
                        : "text-(--text-secondary)"
                    }`}>
                    {message.length}/{maxLength}
                  </span>
                </div>

                <textarea
                  id="message"
                  value={message}
                  onChange={handleChange}
                  maxLength={maxLength}
                  placeholder="Conte-me um pouco sobre o seu desafio ou oportunidade..."
                  rows={5}
                  className="w-full bg-(--bg-primary) border border-(--ui-border) rounded-xl px-5 py-3.5 text-(--text-primary) placeholder:text-(--text-secondary)/60 focus:outline-none focus:ring-2 focus:ring-(--accent-color)/50 focus:border-(--accent-color) transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-(--accent-color) hover:bg-(--accent-hover) text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-(--accent-color)/20">
                Iniciar Conversa
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
