"use client";

import { useState } from "react";

const TechModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section>
      <button onClick={openModal}>Tecnologias utilizadas</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-[100vw] md:w-[95vw] h-[100vh] md:h-[86vh] max-w-6xl mx-4 relative">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-center">
              Tecnologias utilizadas nos projetos
            </h2>
            <div className="max-h-[68vh] overflow-y-auto text-slate-600 space-y-2">
              <p className="text-slate-400">
                Essas tecnologias são amplamente usadas no desenvolvimento web
                moderno e desempenham papéis distintos, mas complementares:
              </p>
              <div>
                <h2 className="pb-3 text-center text-xl md:text-2xl">
                  HTML e CSS
                </h2>
                <p className="text-slate-400">
                  HTML (HyperText Markup Language) é a base estrutural de todas
                  as páginas da web, definindo a organização e conteúdo de uma
                  página. CSS (Cascading Style Sheets) lida com a estilização do
                  HTML, definindo o layout, cores, fontes e responsividade.
                  Juntos, HTML e CSS são a espinha dorsal do front-end da web,
                  garantindo que os sites não apenas funcionem, mas sejam
                  visualmente atraentes e acessíveis em diversos dispositivos.
                </p>
              </div>
              <div>
                <h2 className="pb-3 text-center text-xl md:text-2xl">
                  Banco de dados
                </h2>
                <p className="text-slate-400">
                  Bancos de dados são essenciais para o armazenamento e
                  recuperação de informações em uma aplicação. Eles podem ser
                  relacionais, como MySQL e PostgreSQL, onde dados são
                  organizados em tabelas com SQL, ou não relacionais, como
                  MongoDB, que utilizam estruturas flexíveis de documentos. Os
                  bancos de dados fornecem a base de dados para aplicações
                  dinâmicas, permitindo o gerenciamento de grandes volumes de
                  dados.
                </p>
              </div>
              <div>
                <h2 className="pb-3 text-center text-xl md:text-2xl">
                  Tailwind CSS
                </h2>
                <p className="text-slate-400">
                  Tailwind é um framework CSS utilitário que oferece classes
                  pré-definidas para estilização rápida. Em vez de escrever CSS
                  personalizado, os desenvolvedores aplicam classes diretamente
                  no HTML para ajustar margens, cores, fontes e muito mais.
                  Tailwind facilita a criação de designs consistentes e
                  responsivos, e seu sistema de configuração permite
                  personalizar o estilo para cada projeto.
                </p>
              </div>
              <div>
                <h2 className="pb-3 text-center text-xl md:text-2xl">
                  JavaScript
                </h2>
                <p className="text-slate-400">
                  JavaScript é a linguagem de programação essencial para a web,
                  permitindo a criação de páginas interativas e dinâmicas. Ele
                  permite manipular o DOM, responder a eventos de usuários,
                  realizar requisições assíncronas e interagir com APIs.
                  JavaScript é executado no navegador do usuário, mas com o
                  surgimento de tecnologias como o Node.js, ele também pode ser
                  usado no servidor.
                </p>
              </div>
              <div>
                <h2 className="pb-3 text-center text-xl md:text-2xl">
                  React.js
                </h2>
                <p className="text-slate-400">
                  React é uma biblioteca JavaScript criada pelo Facebook para
                  construir interfaces de usuário. Ele introduz um modelo de
                  componentes reutilizáveis, permitindo que desenvolvedores
                  construam interfaces de forma declarativa. React atualiza
                  eficientemente o DOM (Document Object Model) para refletir
                  mudanças na interface do usuário, e sua popularidade vem da
                  flexibilidade e da ampla adoção por grandes empresas e
                  comunidades.
                </p>
              </div>
              <div>
                <h2 className="pb-3 text-center text-xl md:text-2xl">
                  {" "}
                  Next.js
                </h2>
                <p className="text-slate-400">
                  Next é um framework para React que adiciona recursos
                  avançados, como renderização no lado do servidor (SSR) e
                  geração de páginas estáticas (SSG). Ele simplifica a criação
                  de aplicações rápidas e otimizadas para SEO, com roteamento
                  automático e suporte integrado para APIs. Também facilita a
                  construção de aplicativos com performance aprimorada e
                  carregamento rápido, ideal para grandes projetos.
                </p>
              </div>
              <p className="text-slate-400">
                Essas tecnologias juntas formam uma pilha poderosa para
                desenvolver aplicações web interativas, eficientes e escaláveis.
              </p>
            </div>
            <div className="flex items-center justify-center py-2">
              <button
                onClick={closeModal}
                className="mt-4 bg-purple-800 text-slate-400 px-4 py-2 rounded hover:bg-purple-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechModal;
