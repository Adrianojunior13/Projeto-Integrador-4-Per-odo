import { useState } from "react";

function JobItem({ job }) {
  return (
    <div className="p-4 sm:p-6 border rounded shadow-sm hover:shadow-md transition duration-300 bg-gray-50 flex flex-col items-start">
      <h3 className="text-lg sm:text-xl font-semibold">{job.titulo}</h3>
      <p className="text-sm sm:text-base text-gray-700">{job.empresa}</p>
      <p className="text-sm sm:text-base text-gray-500">{job.local}</p>
      <div className="w-full flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm sm:text-base transition">
          Candidatar-se
        </button>
      </div>
    </div>
  );
}

function JobList({ jobs }) {
  return (
    <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
    </div>
  );
}

export default function VagasPage() {
  const [vagas] = useState([
    {
      titulo: "Professor de Matemática",
      empresa: "Prefeitura de Vila das Palmeiras",
      local: "Vila das Palmeiras - MG",
    },
    {
      titulo: "Agente de Saúde",
      empresa: "Prefeitura de Vila das Palmeiras",
      local: "Vila das Palmeiras - MG",
    },
    {
      titulo: "Auxiliar Administrativo",
      empresa: "Prefeitura de Vila das Palmeiras",
      local: "Vila das Palmeiras - MG",
    },
    {
      titulo: "Técnico de Informática",
      empresa: "Prefeitura de Vila das Palmeiras",
      local: "Vila das Palmeiras - MG",
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-4 py-8">
      <main className="flex-1 w-full max-w-screen-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Vagas de Emprego
        </h2>
        <JobList jobs={vagas} />
      </main>
    </div>
  );
}

