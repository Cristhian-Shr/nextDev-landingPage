"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

export function IntroSection() {
  return (
    <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32 relative">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/3 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem]
           w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 
           [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 
           lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className=" mx-auto flex max-w-[64rem] flex-col items-center text-center gap-4 px-4 md:px-0">
        <span className="rounded-2xl bg-muted px-1 mx-8 py-1.5 text-sm font-medium flex items-center ">
          Faça o seu projeto com a melhor tech do momento
          <ModeToggle />
        </span>
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl pt-4">
          The <br />
          <span className="text-primary">Next Dev</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 md:pt-10">
          A combinação de React, Next.js e TailwindCSS é ideal para criar
          interfaces interativas de forma eficiente. React permite a
          componentização e interatividade, facilitando o desenvolvimento e
          manutenção de UIs dinâmicas. Next.js oferece renderização no servidor,
          melhorando o desempenho e SEO, além de suportar rotas dinâmicas e
          funcionalidades integradas como APIs. TailwindCSS proporciona
          estilização rápida e consistente com suas classes utilitárias,
          permitindo personalização e responsividade. Juntas, essas tecnologias
          aumentam a produtividade, otimizam o desempenho e garantem a
          escalabilidade das aplicações web.
        </p>
        <div className="space-x-4 pt-10">
          <Link
            href="https://w.app/4gj0h2"
            className="bg-primary py-2 px-4 text-md shadow-lg font-bold rounded"
          >
            Chamar no whats
          </Link>
          <Link
            href="#features"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Saber mais
          </Link>
        </div>
      </div>
    </section>
  );
}
