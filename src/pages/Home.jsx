import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  // Array com as imagens do background
  const imagens = ["public/oportuniza.png", "public/oportuniza1.png"];
  const [index, setIndex] = useState(0);

  // Troca automática a cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 10000);
    return () => clearInterval(intervalo);
  }, [imagens.length]);

  return (
    <div className="relative w-full">
      {/* Imagem de fundo dinâmica */}
      <img
        src={imagens[index]}
        alt="Oportuniza"
        className="w-full h-[60vh] sm:h-[80vh] md:h-[70vh] lg:h-[90vh] xl:h-[100vh] object-cover object-top transition-opacity duration-1000"
      />

      {/* Gradiente opcional */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Conteúdo sobreposto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Encontre a vaga ideal para o seu perfil
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Conectamos talentos às melhores oportunidades de trabalho
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          {/* Botão que leva para /vagas */}
          <Link to="/vagas">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
              Ver Vagas
            </button>
          </Link>

          {/* Botão "Quem somos" */}
          <Link to="/oportuniza">
            <button className="bg-white text-gray-800 hover:bg-gray-100 font-semibold py-2 px-6 rounded">
              Quem somos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
