import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const loginRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const vagas = [
    { id: 1, titulo: "Professor de Matemática" },
    { id: 2, titulo: "Auxiliar Administrativo" },
    { id: 3, titulo: "Engenheiro Civil" },
    { id: 4, titulo: "Técnico de Informática" },
    { id: 5, titulo: "Psicólogo Escolar" },
    { id: 6, titulo: "Coordenador Pedagógico" },
    { id: 7, titulo: "Assistente Social" },
    { id: 8, titulo: "Motorista Categoria D" },
    { id: 9, titulo: "Agente de Saúde" },
    { id: 10, titulo: "Recepcionista" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      setSearchResults([]);
      return;
    }
    const results = vagas.filter((vaga) =>
      vaga.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <header className="bg-blue-700 text-white shadow relative z-50">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-2 text-sm bg-blue-500 h-[50px]">
        <div className="flex items-center gap-2 sm:gap-4">
          📞 (68) 3661-5533
        </div>

        <div className="flex gap-3 justify-end items-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition transform hover:scale-125">
            <FaFacebookF size={22} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition transform hover:scale-125">
            <FaInstagram size={22} />
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-black transition transform hover:scale-125">
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-3 flex-wrap gap-y-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo Oportuniza" className="w-28 sm:w-36 md:w-44 h-auto" />
        </Link>

        {/* Barra de pesquisa */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-full sm:w-2/3">
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white text-black rounded overflow-hidden w-full shadow-md"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar..."
                className="px-3 py-2 text-sm focus:outline-none text-black w-full"
              />
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 text-sm flex items-center justify-center"
              >
                <FaSearch size={14} />
              </button>
            </form>

            {searchResults.length > 0 && (
              <div className="mt-2 w-full max-h-[50vh] sm:max-h-[70vh] bg-white text-black shadow-2xl rounded-lg overflow-auto border border-gray-300 p-4">
                <h2 className="text-xl font-bold mb-4 text-center">Vagas Encontradas</h2>
                {searchResults.map((vaga) => (
                  <div
                    key={vaga.id}
                    className="p-3 border-b hover:bg-gray-100 cursor-pointer text-base"
                  >
                    {vaga.titulo}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Menu e login */}
        <div className="flex items-center gap-4">
          {/* Hamburger mobile */}
          <button
            className="md:hidden text-white hover:text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Menu desktop */}
          <nav className={`flex-col md:flex md:flex-row md:gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-blue-700 md:bg-transparent transition-all duration-300 ${menuOpen ? "flex p-4" : "hidden md:flex"}`}>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-6 items-center w-full md:w-auto">
              <li><Link to="/oportuniza" className="px-2 py-1 hover:text-black transition transform hover:scale-105">A OPORTUNIZA</Link></li>
              <li><Link to="/vagas" className="px-2 py-1 hover:text-black transition transform hover:scale-105">VAGAS DE EMPREGO</Link></li>
              <li><Link to="/contato" className="px-2 py-1 hover:text-black transition transform hover:scale-105">CONTATO</Link></li>
            </ul>
            <div className="relative mt-2 md:mt-0 ml-0 md:ml-4" ref={loginRef}>
              <button onClick={() => setShowLogin((prev) => !prev)} className="hover:text-black transition transform hover:scale-125">
                <FaUser size={18} />
              </button>

              {showLogin && (
                <div className="absolute top-full right-0 mt-2 w-60 bg-white text-black shadow-lg rounded-lg p-4 z-50">
                  <h2 className="text-lg font-bold mb-2">Entrar</h2>
                  <input type="text" placeholder="Usuário" className="w-full border p-2 rounded mb-2" />
                  <input type="password" placeholder="Senha" className="w-full border p-2 rounded mb-3" />
                  <button className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Login</button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

