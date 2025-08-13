import { useState } from "react";
import JobList from "../components/JobList";

function Home() {
  const [vagas] = useState([
    { titulo: "Professor de Matemática", empresa: "Prefeitura de Araxá", local: "Araxá - MG" },
    { titulo: "Agente de Saúde", empresa: "Prefeitura de Araxá", local: "Araxá - MG" },
    { titulo: "Auxiliar Administrativo", empresa: "Prefeitura de Araxá", local: "Araxá - MG" }
  ]);

  return (
    <div className="space-y-12">
      {/* Sobre */}
      <section id="sobre" className="p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-2">Sobre</h2>
        <p className="text-gray-700">
          Este é o site oficial da Prefeitura de Araxá, aqui você encontra informações sobre vagas de emprego e serviços da cidade.
        </p>
      </section>

      {/* Vagas de Emprego */}
      <section id="vagas" className="p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Vagas de Emprego</h2>
        <JobList jobs={vagas} />
      </section>

    </div>
  );
}

export default Home;
