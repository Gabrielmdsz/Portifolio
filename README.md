# Portfólio Pessoal - Gabriel Martins

Um portfólio moderno desenvolvido em **React + TypeScript + Vite** com layout responsivo, animações sutis e navegação interna por seções. O projeto apresenta informações pessoais, habilidades técnicas, projetos em destaque e formulário de contato.

## 🌟 Visão Geral

Este portfólio é uma aplicação Single Page App (SPA) que exibe:
- `Home` com apresentação pessoal e mockup de código.
- `Sobre` com informações pessoais, foto e link para currículo.
- `Skills` com um carrossel de habilidades técnicas.
- `Projetos` com filtros e cards de projetos.
- `Contato` com formulário, contador de caracteres e links para redes sociais.
- `Footer` com botão para voltar ao topo e direitos autorais.

## 🛠️ Como o projeto funciona

O código é organizado em componentes React dentro de `src/components`:
- `Header` controla o menu, responsividade e tema claro/escuro.
- `Home` exibe a introdução e redes sociais.
- `About` apresenta o autor e dados pessoais.
- `Skills` mostra as tecnologias dominadas em um carrossel horizontal.
- `Projects` renderiza projetos filtráveis com dados definidos em `Projects.tsx`.
- `Contact` traz formulário de contato e links diretos para e-mail, GitHub, LinkedIn e WhatsApp.
- `Footer` contém copyright e botão de rolagem para o topo.

A estilização é feita com **Tailwind CSS** e a estrutura do projeto é gerenciada pelo **Vite**.

## 📁 Estrutura principal do projeto

- `src/App.tsx` - layout principal e montagem das seções.
- `src/main.tsx` - ponto de entrada do React.
- `src/styles/globals.css` - estilos globais.
- `src/components/` - componentes de interface para cada seção.
- `src/types/types.ts` - tipos TypeScript usados no projeto.
- `public/images/` - imagens e logos utilizadas no portfólio.

## 🚀 Tecnologias usadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- ESLint
- GitHub Pages (`gh-pages`) para deploy

## ▶️ Como executar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra o endereço mostrado no terminal para ver o portfólio.

## ✅ Scripts disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento.
- `npm run build` - gera a versão de produção.
- `npm run preview` - pré-visualiza o build localmente.
- `npm run lint` - verifica código com ESLint.
- `npm run deploy` - publica o site em GitHub Pages (após `npm run build`).

## 📌 Deploy

Este projeto já contém configuração para deploy com **gh-pages**:
- `predeploy`: gera o build.
- `deploy`: publica o conteúdo da pasta `dist`.

## 📬 Contato e autor

Desenvolvido por **Gabriel Martins**.
- GitHub: https://github.com/Gabrielmdsz
- LinkedIn: https://www.linkedin.com/in/jgabrielmdsz/
- Instagram: https://www.instagram.com/gmartinssz/
- E-mail: martinsjoaogs@gmail.com

## © Direitos Autorais

Todos os direitos reservados a Gabriel Martins. Projeto criado para apresentação pessoal e divulgação de habilidades profissionais.

