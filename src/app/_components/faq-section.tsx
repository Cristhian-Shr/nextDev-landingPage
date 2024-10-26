import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqSection() {
  return (
    <section
      id="faq"
      className="flex w-full items-center justify-center 
      flex-col bg-slate-50 dark:bg-transparent space-y-6 py-8 md:py-12 lg:py-10"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          FAQ
        </h2>
      </div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-5">
            <AccordionTrigger>pergunta 1?</AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, illum cumque numquam eaque tenetur porro sunt?
                Obcaecati, non tempore molestiae dolorem, labore iure
                repudiandae ullam excepturi neque temporibus fuga quia.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque exercitationem aliquid, voluptates dolorem
                consequatur quos quisquam quod libero pariatur? Doloribus, enim
                est suscipit hic qui voluptates sed fuga at ducimus.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>pergunta 2?</AccordionTrigger>
            <AccordionContent className="text-left">
              <p>
                Para quem possui conhecimentos básicos de HTML, CSS e
                JavaScript.
              </p>
              <p>Para quem quer aprender desenvolver uma aplicação do zero.</p>
              <p>
                Para quem quer estar atualizado com os conhecimentos que as
                grandes empresas procuram.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>pergunta 3?</AccordionTrigger>
            <AccordionContent className="text-left">
              Você terá 1 ano após a data da compra.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>pergunta 4?</AccordionTrigger>
            <AccordionContent className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              asperiores dicta aperiam architecto aspernatur iure pariatur,
              ullam laudantium delectus sunt sequi animi ipsa ut atque
              cupiditate incidunt tempore non quis?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>pergunta 5?</AccordionTrigger>
            <AccordionContent className="text-left">
              loresm sd.fnslkfnsldkfnsld
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>pergunta 6?</AccordionTrigger>
            <AccordionContent className="text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias perspiciatis, mollitia veniam deserunt at maiores eos,
              assumenda facere magnam, provident animi officia ab ad aut
              possimus iure accusamus error adipisci!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>pergunta 7?</AccordionTrigger>
            <AccordionContent className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              aspernatur error? Ducimus ex repellat molestiae dolorum
              consectetur consequuntur blanditiis quo! Illum corporis,
              repudiandae sequi distinctio pariatur architecto amet ab
              doloribus?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
