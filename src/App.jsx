import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando o Router, Routes e Route
import Header from "./components/Header";
import JobSearch from "./components/JobSearch";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import OportunizaPage from './pages/OportunizaPage'; // Adicionei a importação da página "OportunizaPage"
import VagasPage from './pages/VagasPage'; // Crie este componente para Vagas
import ContatoPage from './pages/ContatoPage'; // Crie este componente para Contato

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Cabeçalho */}
        <Header />

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

      {/* Definindo as rotas */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/oportuniza" element={<OportunizaPage />} /> {/* Página A OPORTUNIZA */}
        <Route path="/vagas" element={<VagasPage />} /> {/* Página VAGAS DE EMPREGO */}
        <Route path="/contato" element={<ContatoPage />} /> {/* Página CONTATO */}
      </Routes>
    </Router>
  );
}

export default App;
