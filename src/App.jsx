import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando o Router, Routes e Route
import Header from "./components/Header";
import JobSearch from "./components/JobSearch";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import OportunizaPage from './pages/OportunizaPage'; // Página "OportunizaPage"
import VagasPage from './pages/VagasPage'; // Página "VagasPage"
import ContatoPage from './pages/ContatoPage'; // Página "ContatoPage"

function App() {
  return (
    <Router> {/* O Router deve envolver toda a aplicação, incluindo as rotas */}
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Cabeçalho */}
        <Header />

        {/* Definindo as rotas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página inicial */}
          <Route path="/oportuniza" element={<OportunizaPage />} /> {/* Página A OPORTUNIZA */}
          <Route path="/vagas" element={<VagasPage />} /> {/* Página VAGAS DE EMPREGO */}
          <Route path="/contato" element={<ContatoPage />} /> {/* Página CONTATO */}
        </Routes>

        {/* Conteúdo principal */}
        <main className="flex-1 max-w-6xl mx-auto p-4">
          {/* Busca de empregos */}
          <JobSearch />

          {/* Conteúdo principal + barra lateral */}
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="flex-1">
              <Home />
            </div>
            <div className="w-full md:w-72">
              <Sidebar />
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
