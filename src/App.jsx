import Header from "./components/Header";
import JobSearch from "./components/JobSearch";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";


function App() {
  return (
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
  );
}

export default App;
