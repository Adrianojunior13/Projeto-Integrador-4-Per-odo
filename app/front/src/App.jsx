import { Routes, Route } from 'react-router-dom'; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OportunizaPage from './pages/OportunizaPage';
import VagasPage from './pages/VagasPage';
import ContatoPage from './pages/ContatoPage';
import JobSearch from "./components/JobSearch";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Cabeçalho fixo */}
      <Header />

      {/* Conteúdo das rotas */}
      <main className="flex-grow">
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Home />} />

          {/* Página Vagas */}
          <Route
            path="/vagas"
            element={
              <div className="max-w-6xl mx-auto p-4">
                <JobSearch />
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                  <div className="flex-1">
                    <VagasPage />
                  </div>
                  <div className="w-full md:w-72">
                    <Sidebar />
                  </div>
                </div>
              </div>
            }
          />

          {/* Outras páginas */}
          <Route path="/oportuniza" element={<OportunizaPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </main>

      {/* Rodapé fixo em todas as páginas */}
      <Footer />
    </div>
  );
}

export default App;

