"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

const content = [
  {
    id: 1,
    pergunta: "Quais tipos de sites vocês desenvolvem?",
    respostas: [
      {
        id: 1,
        resposta:
          "Desenvolvemos websites institucionais,landing pages personalizadas e plataformas de e-commerce. Cada projeto é ajustado de acordo com as necessidades do cliente, utilizando frameworks modernos como Next.js e bibliotecas CSS como TailwindCSS para garantir velocidade e design responsivo.",
      },
    ],
  },
  {
    id: 2,
    pergunta: "Como funciona o processo de desenvolvimento de um site?",
    respostas: [
      {
        id: 1,
        resposta:
          "O processo começa com uma reunião de briefing para entender as necessidades e preferências do cliente. Em seguida, passamos para o planejamento do layout, design visual, desenvolvimento front-end e back-end. Após a aprovação, fazemos testes completos e finalizamos com a publicação e entrega do site.",
      },
    ],
  },
  {
    id: 3,
    pergunta:
      "Qual a diferença entre um site, uma landing page e um e-commerce?",
    respostas: [
      {
        id: 1,
        resposta:
          "Um site oferece informações e navegação em várias páginas, uma landing page é focada em conversão com conteúdo direcionado em uma única página, enquanto um e-commerce é projetado para gerenciar e vender produtos, com funcionalidades de carrinho de compras e pagamentos.",
      },
    ],
  },
  {
    id: 4,
    pergunta: "Quanto tempo leva para desenvolver um site ou landing page?",
    respostas: [
      {
        id: 1,
        resposta:
          "O tempo depende da complexidade do projeto: uma landing page pode ser concluída em uma ou duas semanas, enquanto sites institucionais e e-commerces podem levar de quatro a oito semanas, considerando desenvolvimento, testes e ajustes.",
      },
    ],
  },
  {
    id: 5,
    pergunta: "Posso acompanhar o progresso do desenvolvimento?",
    respostas: [
      {
        id: 1,
        resposta:
          "Sim, fornecemos atualizações regulares através de ferramentas de gestão de projetos e checkpoints com o cliente. Além disso, em projetos complexos, podemos disponibilizar um ambiente de teste (staging) para visualização em tempo real.",
      },
    ],
  },
  {
    id: 6,
    pergunta: "Quais funcionalidades posso incluir no meu site ou e-commerce?",
    respostas: [
      {
        id: 1,
        resposta:
          "Oferecemos uma variedade de funcionalidades, como integração de formulários, chat ao vivo, sistemas de reservas, área de membros, e, para e-commerces, carrinho de compras, pagamento seguro e gerenciamento de produtos. As funcionalidades são personalizadas conforme a necessidade.",
      },
    ],
  },
  {
    id: 7,
    pergunta: "O site será responsivo e otimizado para dispositivos móveis?",
    respostas: [
      {
        id: 1,
        resposta:
          'Sim. Garantimos que o design e desenvolvimento sigam uma abordagem "mobile-first" para oferecer uma experiência fluida em smartphones, tablets e desktops.',
      },
    ],
  },
  {
    id: 8,
    pergunta: "Vocês oferecem suporte após a conclusão do projeto?",
    respostas: [
      {
        id: 1,
        resposta:
          "Sim, oferecemos pacotes de suporte contínuo para atualizações, correções de bugs e melhorias no site. Isso garante que o site se mantenha atualizado e seguro.",
      },
    ],
  },
  {
    id: 9,
    pergunta:
      "O que acontece se eu precisar fazer uma atualização ou modificação?",
    respostas: [
      {
        id: 1,
        resposta:
          "Oferecemos pacotes de suporte que incluem ajustes e atualizações. Para clientes sem pacotes, realizamos alterações com base em uma avaliação do escopo, ajustando conforme a necessidade, e o serviço é cobrado por hora de trabalho. ",
      },
    ],
  },
  {
    id: 10,
    pergunta: "Vocês oferecem planos ou pacotes de serviços?",
    respostas: [
      {
        id: 1,
        resposta:
          "Sim, oferecemos pacotes de desenvolvimento com suporte contínuo, manutenção e otimizações periódicas, que podem ser ajustados conforme o tipo e a escala do projeto.",
      },
    ],
  },
];

function FaqSection() {
  return (
    <section className="py-5 md:py-10 px-8">
      <div className="mx-auto text-center md:w-[58rem]">
        <div className="flex flex-col items-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            FAQ
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 py-10">
            Perguntas frequentes
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {content.map((item) => (
            <AccordionItem value={`item-${item.id}`} key={item.id}>
              <AccordionTrigger>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-medium leading-none">
                    {item.pergunta}
                  </h4>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-left">
                {item.respostas.map((episode) => (
                  <>
                    <div key={episode.id} className="text-sm">
                      {`Ep-${episode.id}: ${episode.resposta}`}
                    </div>
                    <DropdownMenuSeparator className="my-2" />
                  </>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
