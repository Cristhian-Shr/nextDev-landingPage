"use client";

import { FaDatabase, FaReact } from "react-icons/fa6";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function TechStackSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="feature"
      className="bg-slate-50 dark:bg-slate-950 container space-y-6 py-8 md:py-12 lg:py-10 rounded-md"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-slate-700 dark:text-white">
          Tech Stack
        </h2>
        <p className="max-w-[85%] leading-normal text-slate-500 dark:text-slate-400 sm:text-lg sm:leading-7 md:py-10">
          Venha desenvolver comigo um projeto usando a melhor Stack do mercado.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-4 md:px-0">
        {techStack.map((tech, idx) => (
          <div
            key={tech.title}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative overflow-hidden rounded-lg border bg-white dark:bg-gray-800 border-slate-200 dark:border-slate-700 p-2"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                />
              )}
            </AnimatePresence>

            <Card>
              <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
                {tech.icon}
                <div className="space-y-2 flex flex-col items-center">
                  <CardTitle>{tech.title}</CardTitle>
                  <CardDescription>{tech.description}</CardDescription>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

const techStack = [
  {
    title: "Next.js",
    icon: <SiNextdotjs className="text-7xl text-slate-700 dark:text-slate-100" />,
    description:
      "Next.js é um framework para React que facilita a criação de aplicações web modernas.",
  },
  {
    title: "React.js",
    icon: <FaReact className="text-7xl text-slate-700 dark:text-slate-100" />,
    description:
      "React é uma biblioteca JavaScript para criar interfaces de usuário dinâmicas e reutilizáveis.",
  },
  {
    title: "JavaScript",
    icon: <IoLogoJavascript className="text-7xl text-slate-700 dark:text-slate-100" />,
    description:
      "JavaScript é essencial para o desenvolvimento web, permitindo a criação de páginas dinâmicas.",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-7xl text-slate-700 dark:text-slate-100" />,
    description:
      "Tailwind CSS oferece classes utilitárias para criar interfaces personalizadas e responsivas.",
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-7xl text-slate-700 dark:text-slate-100" />,
    description:
      "Bancos de dados armazenam e gerenciam informações de forma eficiente, sejam relacionais ou não.",
  },
  {
    title: "HTML e CSS",
    icon: (
      <div className="flex space-x-2">
        <IoLogoHtml5 className="text-7xl text-slate-700 dark:text-slate-100" />
        <IoLogoCss3 className="text-7xl text-slate-700 dark:text-slate-100" />
      </div>
    ),
    description:
      "HTML e CSS definem a estrutura e o estilo das páginas web para uma experiência visual atraente.",
  },
];

// Componentes reutilizáveis de Card, CardTitle e CardDescription

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg h-full w-full p-4 overflow-hidden bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 group-hover:border-slate-200 relative z-10">
      <div className="p-4">{children}</div>
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-slate-700 dark:text-slate-100 text-center font-bold tracking-wide mt-4">
      {children}
    </h3>
  );
}

function CardDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 text-slate-500 dark:text-slate-400 tracking-wide leading-relaxed text-sm text-center">
      {children}
    </p>
  );
}

export default TechStackSection;



//código antigo

// "use client";

// import { FaDatabase, FaReact } from "react-icons/fa6";
// import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
// import { IoLogoJavascript } from "react-icons/io5";
// import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// function TechStackSection() {
//   return (
//     <section
//       id="feature"
//       className="bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-10"
//     >
//       <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
//         <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
//           Tech Stack
//         </h2>
//         <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 md:py-10">
//           Venha desenvolver comigo um projeto usando a melhor Stack do mercado.
//         </p>
//       </div>

//       <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 px-4 md:px-0">
//         <div className="relative overflow-hidden rounded-lg border bg-background p-2">
//           <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
//             <SiNextdotjs className="text-6xl" />
//             <div className="space-y-2 flex flex-col items-center">
//               <h3 className="font-bold">Next.js</h3>
//               <p className="text-sm text-muted-foreground">
//                 Next.js é um framework (ferramenta) para React que facilita a
//                 criação de aplicações web modernas. Ele oferece renderização no
//                 servidor, rotas automáticas e otimização para SEO, melhorando
//                 desempenho e experiência do usuário.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="relative overflow-hidden rounded-lg border bg-background p-2">
//           <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
//             <FaReact className="text-5xl" />
//             <div className="space-y-2 flex flex-col items-center">
//               <h3 className="font-bold">React.js</h3>
//               <p className="text-sm text-muted-foreground">
//                 React é uma biblioteca JavaScript para criar interfaces de
//                 usuário com componentes reutilizáveis, facilitando o
//                 desenvolvimento de aplicações dinâmicas. É amplamente utilizada
//                 por seu modelo declarativo e eficiência em atualizar o DOM.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="relative overflow-hidden rounded-lg border bg-background p-2">
//           <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
//             <IoLogoJavascript className="text-5xl" />
//             <div className="space-y-2 flex flex-col items-center">
//               <h3 className="font-bold">JavaScript</h3>
//               <p className="text-sm text-muted-foreground">
//                 JavaScript é uma linguagem de programação essencial para o
//                 desenvolvimento web, permitindo a criação de páginas interativas
//                 e dinâmicas. É executada no navegador, possibilitando
//                 manipulação do DOM e integração com APIs.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="relative overflow-hidden rounded-lg border bg-background p-2">
//           <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
//             <SiTailwindcss className="text-5xl" />
//             <div className="space-y-2 flex flex-col items-center">
//               <h3 className="font-bold">Tailwind CSS</h3>
//               <p className="text-sm text-muted-foreground">
//                 Tailwind CSS é um framework utilitário que oferece classes
//                 pré-definidas para estilizar rapidamente elementos no HTML. Ele
//                 permite criar designs e interfaces personalizados e responsivos
//                 de forma consistente, rápida e configurável.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="relative overflow-hidden rounded-lg border bg-background p-2">
//           <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
//             <FaDatabase className="text-5xl" />
//             <div className="space-y-2 flex flex-col items-center">
//               <h3 className="font-bold">Database</h3>
//               <p className="text-sm text-muted-foreground">
//                 Os bancos de dados são sistemas organizados para armazenar,
//                 gerenciar e recuperar informações de forma eficiente. Podem ser
//                 relacionais, como MySQL e PostgreSQL, usando tabelas e SQL, ou
//                 não relacionais, como MongoDB, que armazenam dados.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="relative overflow-hidden rounded-lg border bg-background p-2">
//           <div className="flex h-[280px] flex-col justify-between items-center rounded-md p-6">
//             <div className="flex">
//               <IoLogoHtml5 className="text-5xl" />
//               <IoLogoCss3 className="text-5xl" />
//             </div>
//             <div className="space-y-2 flex flex-col items-center">
//               <h3 className="font-bold">HTML e CSS</h3>
//               <p className="text-sm text-muted-foreground">
//                 HTML e CSS são a base do design e da experiência de navegação na
//                 web. Enquanto o HTML define o quê está na página, o CSS define
//                 como esse conteúdo será exibido, garantindo que os sites sejam
//                 visualmente atraentes e acessíveis em diferentes dispositivos.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TechStackSection;