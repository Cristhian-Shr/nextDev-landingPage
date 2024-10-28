"use client";

import { useState } from "react";

const TrafegoPagoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section>
      <button onClick={openModal}>Trafego pago</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-black rounded-lg shadow-lg p-6 max-w-lg mx-4 relative">
            <h2 className="text-2xl font-semibold mb-4">Trafego Pago</h2>
            <div className="max-h-96 overflow-y-auto text-slate-600 space-y-2">
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
            </div>
            <div className="flex items-center justify-center py-2">
              <button
                onClick={closeModal}
                className="mt-4 bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700"
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

export default TrafegoPagoModal;
