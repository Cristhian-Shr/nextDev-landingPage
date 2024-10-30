"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import imageTrafego from "../../../../public/images/imgMkt/gerencidorImg.jpg";

const TrafegoPagoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section>
      <button onClick={openModal}>Trafego pago</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-[100vw] md:w-[95vw] h-[100vh] md:h-[86vh] max-w-6xl mx-4 relative">
            <h2 className="text-2xl font-semibold mb-4">Trafego Pago:</h2>
            <div className="max-h-[85vh] overflow-y-auto text-slate-600 space-y-2">
              <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-center">
                Transforme seu investimento em resultados reais!
              </h2>
              <p className="text-slate-400">
                Com um acompanhamento diário e minucioso, garanto que cada
                resultado gerado no gerenciador esteja alinhado com os leads que
                chegam até você. Esse processo de monitoramento constante ajuda
                a otimizar campanhas de forma ágil e precisa, garantindo que
                seus objetivos de conversão sejam atingidos, desde o primeiro
                clique até o cliente final. Deixe a gestão das suas campanhas de
                tráfego pago nas mãos de quem cuida de cada detalhe para
                maximizar seu retorno!
              </p>
              <div className="px-4 py-10">
                <Image
                  src={imageTrafego}
                  quality={100}
                  alt="imageTrafego"
                  className="rounded-lg"
                />
              </div>
              <p className="text-slate-400">
                Quando se trata de tráfego pago, cada lead conta, e meu
                compromisso é garantir que cada resultado gerado no gerenciador
                esteja refletido na ponta final, o celular. Realizo um
                acompanhamento diário e rigoroso, monitorando de perto o fluxo
                de leads para assegurar que sua campanha está gerando o retorno
                ideal e que cada oportunidade é aproveitada ao máximo.
              </p>
            </div>
            <div className="flex pt-10 justify-end gap-8 px-4">
              <button
                onClick={closeModal}
                className="bg-primary py-2 px-4 text-md shadow-lg font-bold rounded z-50"
              >
                Fechar
              </button>
              <Link
                href="https://w.app/4gj0h2"
                className="bg-primary py-2 px-4 text-md shadow-lg font-bold rounded"
              >
                Contratar
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrafegoPagoModal;
