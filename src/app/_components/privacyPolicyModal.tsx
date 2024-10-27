// components/PrivacyPolicyModal.tsx
"use client";

import { useState } from "react";

const PrivacyPolicyModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Botão para abrir o modal */}
      <button
        onClick={openModal}
      >
        Política de Privacidade
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-4 relative">
            <h2 className="text-2xl font-semibold mb-4">Política de Privacidade</h2>
            <div className="max-h-96 overflow-y-auto text-gray-700 space-y-2">
              <p>
                Esta é a política de privacidade para nossos serviços de desenvolvimento
                de sites e landing pages. Coletamos dados apenas com o seu consentimento e
                os utilizamos para fornecer serviços personalizados e aprimorar a experiência
                do usuário.
              </p>
              <p>
                Garantimos que as informações são protegidas e usadas conforme previsto em
                nossa política e legislação aplicável.
              </p>
              <p>
                Para mais informações sobre como tratamos seus dados ou para exercer seus
                direitos de privacidade, entre em contato conosco através de nosso e-mail.
              </p>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicyModal;
