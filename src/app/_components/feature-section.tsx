"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { FaDatabase, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const content = [
  {
    id: 1,
    title: "Módulo 1: Introdução",
    data: "04 de Dezembro de 2023",
    episodes: [
      { id: 1, title: "Sobre o curso" },
      { id: 2, title: "Base de conhecimento" },
    ],
  },
  {
    id: 2,
    title: "Módulo 2: Preparando ambiente",
    data: "11 de Dezembro de 2023",
    episodes: [
      { id: 1, title: "Ferramentas necessárias" },
      { id: 2, title: "Configurando VS Code" },
    ],
  },
  {
    id: 3,
    title: "Módulo 3: Setup do Projeto",
    data: "18 de Dezembro de 2023",
    episodes: [
      { id: 1, title: 'Setup "create-next-app"' },
      { id: 2, title: "Entendendo os arquivos base do projeto" },
      { id: 3, title: "Styling (TailwindCSS)" },
      { id: 4, title: "Instalando shadcn" },
      { id: 5, title: "Configurando thema da Aplicação" },
      { id: 6, title: "Criando estruturas de pastas" },
      { id: 7, title: "Entendendo sobre Roteamento" },
      { id: 8, title: "Client Components x Server Components" },
      { id: 9, title: "Publicando projeto no GitHub" },
    ],
  },
  {
    id: 4,
    title: "Módulo 4: Autenticação",
    data: "25 de Dezembro de 2023",
    episodes: [
      { id: 1, title: "Tipos de autenticações" },
      { id: 2, title: "NextAuth ou Clerk, qual utilizar?" },
      { id: 3, title: "Configurando autenticação Clerk" },
      { id: 4, title: "Tela de Login e Registro" },
    ],
  },
  {
    id: 5,
    title: "Módulo 5: Layout",
    data: "01 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "O que são metadados" },
      { id: 2, title: "Fonts" },
      { id: 3, title: "Layout responsivo com TailwindCSS" },
      { id: 4, title: "Layout default" },
      { id: 5, title: "Criando componente Topbar" },
      { id: 6, title: "Criando componente Sidebar" },
      { id: 7, title: "Criando componente Sidebar para Mobile" },
      { id: 8, title: "O que são middlewares?" },
      { id: 9, title: "Redirecionamento de páginas" },
    ],
  },
  {
    id: 6,
    title: "Módulo 6: Configurando Banco de Dados",
    data: "08 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Configurando o PlanetScale" },
      { id: 2, title: "Configurando Prisma ORM" },
    ],
  },
  {
    id: 7,
    title: "Módulo 7: Criando Curso",
    data: "15 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Criando página de Novo Curso" },
      { id: 2, title: "O que são Server Actions?" },
      { id: 3, title: "Novo curso" },
      { id: 4, title: "Criando tabela de Cursos" },
      { id: 5, title: "Entendendo Data Fetching" },
      { id: 6, title: "Criando API de Cursos" },
      { id: 7, title: "Edição de Cursos" },
      { id: 8, title: "Edição de Episódios" },
      { id: 9, title: "Publicação de Cursos" },
      { id: 10, title: "Publicação de Episódios" },
    ],
  },
  {
    id: 8,
    title: "Módulo 8: Listagem de Cursos",
    data: "22 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Entendendo sobre Caching" },
      { id: 2, title: "Lazy Loading" },
      { id: 3, title: "Criando componente de Listagem de Curso" },
      { id: 4, title: "Filtro para Listagem de Curso" },
    ],
  },
  {
    id: 9,
    title: "Módulo 9: Integração com Stripe",
    data: "29 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Configurando Stripe" },
      { id: 2, title: "Componente de Compra de Curso" },
      { id: 3, title: "Integração com Stripe" },
    ],
  },
  {
    id: 10,
    title: "Módulo 10: Dashboard do Aluno",
    data: "05 de Fevereiro de 2024",
    episodes: [
      { id: 1, title: "Progresso do Aluno" },
      { id: 2, title: "Dashboard do Aluno" },
    ],
  },
  {
    id: 11,
    title: "Módulo 11: Deployment",
    data: "12 de Fevereiro de 2024",
    episodes: [
      { id: 1, title: "Tudo sobre a Vercel" },
      { id: 2, title: "Configurando novo projeto na Vercel" },
      { id: 3, title: "WebHooks Clerk" },
      { id: 4, title: "WebHooks Stripe" },
      { id: 5, title: "Analytics" },
    ],
  },
  {
    id: 12,
    title: "Bônus 1",
    data: "06 de Dezembro de 2023",
    episodes: [
      { id: 1, title: "Aula extra" },
      {
        id: 2,
        title:
          "Live: Quarta-feira, 6 de dezembro · 7:00 até 8:00pm Fuso horário: America/Sao_Paulo Como participar do Google Meet Link da videochamada: https://meet.google.com/som-akuz-nbo",
      },
    ],
  },
  {
    id: 13,
    title: "Bônus 2",
    data: "10 de Janeiro de 2024",
    episodes: [
      { id: 1, title: "Aula extra" },
      {
        id: 2,
        title:
          "Live: Quarta-feira, 10 de janeiro de 2024 · 7:00 até 8:00pm Fuso horário: America/Sao_Paulo Como participar do Google Meet Link da videochamada: https://meet.google.com/emy-cgvp-zav",
      },
    ],
  },
];

function FeatureSection() {
  return (
    <section
      id="feature"
      className="bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-10"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Tech Stack
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Venha desenvolver comigo um projeto usando a melhor Stack do mercado.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-4 md:px-0">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
            <SiNextdotjs className="text-6xl" />
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="font-bold">Next.js</h3>
              <p className="text-sm text-muted-foreground">
                Next.js é um framework(ferramenta) para React que facilita a
                criação de aplicações web modernas. Ele oferece renderização no
                servidor, rotas automáticas e otimização para SEO, melhorando
                desempenho e experiência do usuário.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
            <FaReact className="text-5xl" />
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="font-bold">React.js</h3>
              <p className="text-sm text-muted-foreground">
                React é uma biblioteca JavaScript para criar interfaces de
                usuário com componentes reutilizáveis, facilitando o
                desenvolvimento de aplicações dinâmicas. É amplamente utilizada
                por seu modelo declarativo e eficiência em atualizar o DOM.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
            <IoLogoJavascript className="text-5xl" />
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="font-bold">JavaScript</h3>
              <p className="text-sm text-muted-foreground">
                JavaScript é uma linguagem de programação essencial para o
                desenvolvimento web, permitindo a criação de páginas interativas
                e dinâmicas. É executada no navegador, possibilitando
                manipulação do DOM e integração com APIs.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
            <SiTailwindcss className="text-5xl" />
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="font-bold">Tailwind CSS</h3>
              <p className="text-sm text-muted-foreground">
                Tailwind CSS é um framework utilitário que oferece classes
                pré-definidas para estilizar rapidamente elementos no HTML. Ele
                permite criar designs e interfaces personalizados e responsivos
                de forma consistente, rápida e configurável.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
            <FaDatabase className="text-5xl" />
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="font-bold">Database</h3>
              <p className="text-sm text-muted-foreground">
                Os bancos de dados são sistemas organizados para armazenar,
                gerenciar e recuperar informações de forma eficiente. Pode ser
                relacionais, como MySQL e PostgreSQL, usando tabelas e SQL, ou
                não relacionais, como MongoDB, que armazenam dados.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
              <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
            </svg>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="font-bold">falta aqui</h3>
              <p className="text-sm text-muted-foreground">
                Controle de Assinaturas pagas usando Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* trabalhar aqui nessa sessão */}
      {/* <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4">
          Iremos desenvolver uma plataforma LMS (Learning Management System),
          utilizando Next.js 14 e as melhores tecnologias do mercado. Veja o
          conteúdo abaixo...
        </p>
        <Accordion type="single" collapsible className="w-full">
          {content.map((item) => (
            <AccordionItem value={`item-${item.id}`} key={item.id}>
              <AccordionTrigger>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-medium leading-none">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {`Disponível em ${item.data}`}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-left">
                {item.episodes.map((episode) => (
                  <>
                    <div key={episode.id} className="text-sm">
                      {`Ep-${episode.id}: ${episode.title}`}
                    </div>
                    <DropdownMenuSeparator className="my-2" />
                  </>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div> */}
    </section>
  );
}

export default FeatureSection;
