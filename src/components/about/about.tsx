import { Download } from 'lucide-react';
import selfImage from "../../../public/images/foto.png"
const About = () => {
    return (
        <section id="sobre" className="relative w-full py-24 overflow-hidden text-(--text-primary) transition-colors duration-300">

            {/* BACKGROUND  */}
            <div className="absolute inset-0 -z-30 bg-(--bg-primary)"></div>

            {/* Efeitos de Background */}
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"></div>

            <div className="absolute top-0 right-1/4 -z-10 w-100 h-100 bg-(--accent-color) rounded-full mix-blend-multiply opacity-15 blur-[120px]"></div>
            <div className="absolute bottom-10 left-1/4 -z-10 w-75 h-75 bg-(--accent-color) rounded-full mix-blend-multiply opacity-15 blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-8 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Imagem em Moldura */}
                <div className="w-full lg:w-5/12 flex justify-center lg:justify-start relative">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-(--accent-color) opacity-15 blur-3xl rounded-full -z-20"></div>

                    {/* Alinhamneto de moldura */}
                    <div className="relative group">

                        {/* Efeitos da Moldura */}
                        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-75 h-100 sm:w-95 sm:h-125 border-2 border-(--accent-color) rounded-[10rem] opacity-60 -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>

                        {/*  IMAGEM  */}
                        <div className="w-75 h-100 sm:w-95 sm:h-125 bg-(--ui-surface) border border-(--ui-border) rounded-[10rem] overflow-hidden shadow-2xl relative flex items-center justify-center z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-translate-x-1">
                            <img src={selfImage} alt="Gabriel Martins" className="w-full h-full object-cover" /> 
                        </div>

                    </div>
                </div>

                {/*  TEXTOS E INFORMAÇÕES  */}
                <div className="w-full lg:w-7/12 flex flex-col items-start">

                    <div className="mb-6 group cursor-default">
                        <span className="text-(--accent-color) font-semibold tracking-wider uppercase text-sm mb-2 block">
                            Descubra
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
                            Sobre Mim
                            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-(--accent-color) rounded-full transition-all duration-300 group-hover:w-full"></div>
                        </h2>
                    </div>

                    <p className="text-(--text-secondary) text-lg leading-relaxed mb-8 max-w-2xl">
                        Olá! Sou o Gabriel Martins, um Desenvolvedor Front-end dedicado a criar produtos digitais que geram impacto real. Minha base em Análise e Desenvolvimento de Sistemas me ensinou a unir a solidez da engenharia de software com a prática diária do código limpo.  Movido pela tecnologia e sempre embalado por uma boa playlist, meu objetivo é transformar layouts complexos em interfaces fluidas, garantindo aplicações incrivelmente rápidas, acessíveis e centradas nas pessoas.
                    </p>

                    <div className="w-full border border-(--ui-border) bg-(--bg-primary) rounded-xl p-6 mb-8 shadow-sm">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm sm:text-base">
                            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-(--text-secondary) min-w-25">Nome:</span>
                                <span className="font-medium text-(--text-primary)">Gabriel Martins</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-(--text-secondary) min-w-25">Idade:</span>
                                <span className="font-medium text-(--text-primary)">22 Anos</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-(--text-secondary) min-w-25">Telefone:</span>
                                <span className="font-medium text-(--text-primary)">+55 (81) 98315-6670</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-(--text-secondary) min-w-25">Localidade:</span>
                                <span className="font-medium text-(--text-primary)">Recife, PE</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-(--text-secondary) min-w-25">Experiência:</span>
                                <span className="font-medium text-(--text-primary)">Júnior</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <span className="text-(--text-secondary) min-w-25">Freelance:</span>
                                <span className="font-medium text-(--accent-color)">Disponível</span>
                            </li>
                        </ul>
                    </div>

                    <a  href="https://docs.google.com/document/d/1cLiiYFdObl26ACUoE3k3wNTyrqytvaF_zRrT1KR24KY/edit?usp=sharing"
                        target='_blank'
                        download
                        className="px-8 py-3 bg-(--accent-color) hover:bg-(--accent-hover) text-white font-medium rounded-md flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-(--accent-color)/20">
                        Baixar CV
                        <Download size={18} />
                    </a>

                </div>
            </div>
        </section >
    );
};

export default About;