"use client";

import { useState } from "react";

const PrivacyPolicyModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section>
      <button onClick={openModal}>Política de Privacidade</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-[100vw] md:w-[95vw] h-[100vh] md:h-[86vh] max-w-6xl mx-4 relative">
            <h2 className="text-2xl font-semibold mb-4">
              Política de Privacidade
            </h2>
            <div className="max-h-96 overflow-y-auto text-slate-600 space-y-2">
              <p>
                Esta é a política de privacidade para nossos serviços de
                desenvolvimento de sites e landing pages. Coletamos dados apenas
                com o seu consentimento e os utilizamos para fornecer serviços
                personalizados e aprimorar a experiência do usuário.
              </p>
              <p>
                Garantimos que as informações são protegidas e usadas conforme
                previsto em nossa política e legislação aplicável.
              </p>
              <p>
                Para mais informações sobre como tratamos seus dados ou para
                exercer seus direitos de privacidade, entre em contato conosco
                através de nosso e-mail.
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

export default PrivacyPolicyModal;
