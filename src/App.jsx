import { Routes, Route } from 'react-router-dom'; 
import Header from "./components/Header";
import JobSearch from "./components/JobSearch";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import OportunizaPage from './pages/OportunizaPage';
import VagasPage from './pages/VagasPage';
import ContatoPage from './pages/ContatoPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Cabeçalho */}
      <Header />

      {/* Rotas */}
      <Routes>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <main className="flex-1 max-w-6xl mx-auto p-4">
              <JobSearch />
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <div className="flex-1">
                  <Home />
                </div>
                <div className="w-full md:w-72">
                  <Sidebar />
                </div>
              </div>
            </main>
          }
        />

        {/* Outras páginas */}
        <Route path="/oportuniza" element={<OportunizaPage />} />
        <Route path="/vagas" element={<VagasPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </div>
  );
}

export default App;
