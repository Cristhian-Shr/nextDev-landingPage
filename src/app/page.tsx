import { ModeToggle } from "./_components/mode-toggle";

export default function Home() {
  return (
    <main className="">
      <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <span>
            Faça o seu projeto com a melhor tech do momento
            <ModeToggle />
          </span>
        </div>
        <h1 className="text-primary">the next dev</h1>
      </section>
    </main>
  );
}
