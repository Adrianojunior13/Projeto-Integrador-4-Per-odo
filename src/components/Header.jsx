import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaUser } from "react-icons/fa";

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="bg-blue-400 text-white p-4 shadow relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-3 md:mb-0 text-center">
          Prefeitura de Vila das Palmeiras
        </h1>

        {/* Menu */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <a
                href="#sobre"
                className="relative px-2 py-1 hover:text-black transition duration-300 transform hover:scale-105"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#vagas"
                className="relative px-2 py-1 hover:text-black transition duration-300 transform hover:scale-105"
              >
                Vagas de Emprego
              </a>
            </li>
          </ul>

          {/* Ícones redes sociais */}
          <div className="flex gap-3 ml-6">
            <a href="https://www.facebook.com" target="_blank" className="hover:text-black transition transform hover:scale-125">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" className="hover:text-black transition transform hover:scale-125">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" className="hover:text-black transition transform hover:scale-125">
              <FaWhatsapp size={20} />
            </a>
          </div>

          {/* Ícone login */}
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="ml-4 hover:text-black transition transform hover:scale-125 relative"
          >
            <FaUser size={22} />
          </button>
        </nav>
      </div>

      {/* Menu/Login */}
      {showLogin && (
        <div className="absolute top-full right-4 mt-2 w-60 bg-white text-black shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">Entrar</h2>
          <input
            type="text"
            placeholder="Usuário"
            className="w-full border p-2 rounded mb-2"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full border p-2 rounded mb-3"
          />
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
            Login
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
