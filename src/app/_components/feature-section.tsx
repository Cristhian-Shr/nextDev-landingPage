"use client";

import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { FaDatabase, FaReact } from "react-icons/fa6";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

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
            <div className="flex">
              <IoLogoHtml5 className="text-5xl" />
              <IoLogoCss3 className="text-5xl" />
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <h3 className="font-bold">HTML e CSS</h3>
              <p className="text-sm text-muted-foreground">
                HTML e CSS são a base do design e da experiência de navegação na
                web. Enquanto o HTML define "o quê" está na página, o CSS define
                "como" esse conteúdo será exibido, garantindo que os sites sejam
                visualmente atraentes e acessíveis em diferentes dispositivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
