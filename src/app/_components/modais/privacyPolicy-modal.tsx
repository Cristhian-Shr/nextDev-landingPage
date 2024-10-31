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
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-[100vw] md:w-[95vw] h-[100vh] md:h-[90vh] max-w-6xl mx-4 relative">
            <h2 className="text-2xl font-semibold mb-4">
              Política de Privacidade
            </h2>
            <div className=" overflow-y-auto text-slate-600 space-y-2">
              Política de Privacidade Esta é a política de privacidade para
              nossos serviços de desenvolvimento de sites, landing pages e
              outras soluções digitais. Temos um compromisso sério com a
              proteção da sua privacidade e a transparência no uso das
              informações que coletamos. Leia atentamente para entender como
              tratamos seus dados e os direitos que você possui. 1. Coleta de
              Dados Coletamos dados pessoais apenas quando necessário e com o
              seu consentimento, para oferecer serviços de qualidade e uma
              experiência personalizada. Os dados coletados incluem: Dados
              Pessoais: Nome, e-mail, número de telefone e, em alguns casos,
              endereço, para identificá-lo como cliente e personalizar nosso
              atendimento. Dados de Navegação e Uso: Informações sobre o
              dispositivo e navegador, endereço IP e páginas acessadas em nosso
              site, que utilizamos para aprimorar nossos serviços e a
              experiência do usuário. Preferências e Feedback: Caso forneça
              feedback ou preferências, utilizaremos essas informações para
              melhorar a personalização e a qualidade dos serviços oferecidos.
              2. Uso dos Dados Usamos as informações coletadas para as seguintes
              finalidades: Personalização dos Serviços: Para criar soluções e
              desenvolver sites e landing pages sob medida, adaptando-se às
              necessidades e expectativas de cada cliente. Comunicação e
              Atendimento: Entrar em contato para esclarecer dúvidas, enviar
              atualizações sobre o projeto, e oferecer suporte durante o
              processo de desenvolvimento. Melhoria e Análise: Avaliar o
              desempenho do site, corrigir falhas e melhorar a experiência dos
              visitantes, utilizando dados de navegação e de uso. Marketing e
              Promoções: Enviar conteúdos relevantes, atualizações e ofertas,
              caso você tenha consentido previamente em receber essas
              comunicações. 3. Compartilhamento de Dados Apenas compartilhamos
              dados com terceiros nos seguintes casos: Prestadores de Serviços:
              Empresas parceiras que nos auxiliam em processos como hospedagem,
              armazenamento de dados e marketing, respeitando o sigilo e a
              confidencialidade dos dados. Conformidade Legal: Em casos onde a
              legislação exige o compartilhamento de dados, ou se for necessário
              para proteger nossos direitos e segurança, ou os direitos e
              segurança de terceiros. 4. Segurança dos Dados Implementamos
              medidas de segurança rigorosas para proteger suas informações
              contra acesso não autorizado, uso indevido, divulgação ou
              destruição. Isso inclui: Criptografia e Controle de Acesso:
              Medidas técnicas para proteger o acesso e a transmissão de dados.
              Monitoramento e Atualização: Revisamos regularmente nossas
              práticas e atualizamos nossos processos de segurança para proteger
              suas informações. 5. Seus Direitos de Privacidade Você possui os
              seguintes direitos sobre os seus dados pessoais: Acesso e
              Correção: Solicitar informações sobre os dados pessoais que
              mantemos e corrigir qualquer informação incorreta. Exclusão de
              Dados: Pedir a exclusão dos seus dados pessoais de nossa base,
              respeitando o período mínimo de retenção exigido por lei.
              Revogação de Consentimento: Retirar seu consentimento para coleta
              e uso de dados, o que pode limitar alguns dos serviços oferecidos.
              Portabilidade de Dados: Solicitar uma cópia dos seus dados em um
              formato estruturado e de uso comum, quando aplicável. Para exercer
              seus direitos ou tirar dúvidas sobre nossa política de
              privacidade, entre em contato pelo nosso e-mail, e responderemos o
              mais breve possível. 6. Alterações na Política de Privacidade
              Reservamo-nos o direito de atualizar esta política de privacidade
              conforme necessário, sempre com o compromisso de manter a
              transparência. Recomendamos que consulte esta página
              periodicamente para estar ciente de possíveis mudanças. Em caso de
              alterações significativas, informaremos você diretamente. Entre em
              contato Caso tenha dúvidas sobre esta política ou sobre como
              tratamos seus dados pessoais, entre em contato conosco por meio do
              e-mail de atendimento. Esta política foi desenvolvida para
              proteger a sua privacidade e garantir uma relação de confiança,
              segurança e transparência.
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={closeModal}
                className="mt-4 bg-primary text-slate-400 px-4 py-2 rounded hover:bg-purple-700"
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
