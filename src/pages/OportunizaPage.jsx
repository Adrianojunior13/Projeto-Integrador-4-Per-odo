import React from 'react';

const OportunizaPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Bem-vindo à Oportuniza!
      </h1>
      
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <p className="text-lg text-gray-700 mb-6">
          Na <strong>Oportuniza</strong>, nossa missão é conectar oportunidades e talentos de forma simples e eficaz. Somos uma plataforma dedicada a divulgar vagas de emprego para profissionais de diversas áreas e também a ajudar pessoas em busca de novas oportunidades a se destacarem no mercado de trabalho.
        </p>
        
        <p className="text-lg text-gray-700 mb-6">
          Acreditamos que a chave para o sucesso está na conexão entre quem oferece vagas e quem busca um novo desafio. Por isso, trabalhamos para tornar esse processo mais ágil e transparente, oferecendo aos nossos usuários uma plataforma fácil de navegar, onde tanto as empresas quanto os candidatos podem se encontrar de forma rápida e eficiente.
        </p>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">O que fazemos:</h2>
          
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-2">
              <strong>Vagas de emprego:</strong> Nós divulgamos as mais diversas oportunidades em várias áreas, para que você possa encontrar a vaga ideal para o seu perfil.
            </li>
            <li className="mb-2">
              <strong>Conectando profissionais:</strong> Além de oportunidades de emprego, também ajudamos as pessoas a se conectarem com áreas de interesse e potenciais empregadores.
            </li>
            <li className="mb-2">
              <strong>Facilidade de acesso:</strong> Nossa plataforma é projetada para ser intuitiva, para que você possa se candidatar a vagas ou procurar profissionais com apenas alguns cliques.
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 mb-6">
          Na <strong>Oportuniza</strong>, estamos comprometidos em tornar o mercado de trabalho mais acessível, facilitando a busca por empregos e a oferta de vagas, para que todos possam alcançar o seu próximo grande passo na carreira.
        </p>
        
        <p className="text-lg text-gray-700">
          <strong>Junte-se a nós!</strong> Seja você um empregador em busca de talentos ou um candidato em busca da oportunidade certa, a <strong>Oportuniza</strong> é o seu ponto de partida para um futuro mais promissor.
        </p>
      </div>
    </div>
  );
}

export default OportunizaPage;
