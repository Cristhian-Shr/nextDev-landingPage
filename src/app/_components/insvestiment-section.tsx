import { CheckIcon } from "@radix-ui/react-icons";

const tiers = [
  {
    name: "Landing-Page",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "R$1.200",
    description: "Uma página na web focada em venda.",
    features: ["12 meses de domínio.", "1 email personalizado.", "2 alterações no projeto"],
  },
  {
    name: "Site",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "R$2.600",
    description: "Página na web com direito a até 5 abas, projeto sujeito a alteração de preço.",
    features: ["12 meses de domínio.", "6 meses de hospedagem.", "3 emails personalizados.", "5 alterações no projeto"],
  },
  {
    name: "E-commerce",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "R$4.200",
    description: "Projeto realizado via prataformas web, projeto sujeito a alteração de preço.",
    features: ["12 meses de domínio.", "6 meses de hospedagem.", "3 emails personalizados.", "integração com banco", "8 alterações no projeto"],
  },
];

function InvestmentSection() {
  return (
    <section id="investment" className="container flex md:max-w-[64rem] flex-col md:py-12">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Investimento</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 md:py-10">
          Faça o melhor investimento para ter mais clientes aptos a comprar o seu produto.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 gap-x-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-3 px-4 md:px-0">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-8 ring-2 ring-indigo-300 dark:ring-indigo-500 sm:p-10"
          >
            <h3 id={tier.id} className="text-indigo-600 dark:text-indigo-400 text-base font-semibold leading-7">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-gray-900 dark:text-white text-5xl font-semibold tracking-tight">
                {tier.priceMonthly}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-base">,00</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-base leading-7">
              {tier.description}
            </p>
            <ul role="list" className="text-gray-600 dark:text-gray-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10">
              {tier.features.map((feature) => (
                <li key={feature} className="flex">
                  <CheckIcon aria-hidden="true" className="text-indigo-600 dark:text-indigo-400 h-6 w-5 flex-none" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-200 dark:ring-indigo-400 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
            >
              Contrate agora
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InvestmentSection;
