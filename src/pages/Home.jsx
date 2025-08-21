import { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

// Componente para cada vaga
function JobItem({ job }) {
  return (
    <div className="p-6 border rounded shadow-sm hover:shadow-md transition duration-300 bg-gray-50 flex flex-col items-start">
      <h3 className="text-lg font-semibold">{job.titulo}</h3>
      <p className="text-sm text-gray-700">{job.empresa}</p>
      <p className="text-sm text-gray-500">{job.local}</p>
      <div className="w-full flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition">
          Candidatar-se
        </button>
      </div>
    </div>
  );
}

// Componente JobList
function JobList({ jobs }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
    </div>
  );
}

// Componente Footer
function Footer() {
  const redesSociais = [
    { href: "https://www.facebook.com", icon: <FaFacebookF size={20} /> },
    { href: "https://www.instagram.com", icon: <FaInstagram size={20} /> },
    { href: "https://wa.me/5511999999999", icon: <FaWhatsapp size={20} /> }
  ];

  return (
    <footer>
      {/* Seção Principal */}
      <div className="bg-white text-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Informações da Prefeitura */}
          <div className="flex-1 flex flex-col gap-2 text-center">
            <h3 className="text-lg font-bold">Oportuniza</h3>
            <p>Av. Rosália Isaura Araújo, 275</p>
            <p>Centro Administrativo</p>
            <p>Vila das Palmeiras/MG</p>
            <p>38.000-157</p>
            <p>ouvidoria@oportuniza.com</p>
            <p>(68) 3669-0503 • (68) 99257-0977</p>
            <p>12h às 18h - Segunda a Sexta</p>
          </div>
        </div>
      </div>

      {/* Seção de Redes Sociais */}
      <div className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-center gap-6">
          {redesSociais.map((rede, index) => (
            <a
              key={index}
              href={rede.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition transform hover:scale-125"
            >
              {rede.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Seção Inferior */}
      <div className="bg-blue-400 text-white text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-center items-center">
          <p>&copy; {new Date().getFullYear()} Oportuniza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// Componente Home
function Home() {
  const [vagas] = useState([
    { titulo: "Professor de Matemática", empresa: "Prefeitura de Vila das Palmeiras", local: "Vila das Palmeiras - MG" },
    { titulo: "Agente de Saúde", empresa: "Prefeitura de Vila das Palmeiras", local: "Vila das Palmeiras - MG" },
    { titulo: "Auxiliar Administrativo", empresa: "Prefeitura de Vila das Palmeiras", local: "Vila das Palmeiras - MG" },
    { titulo: "Técnico de Informática", empresa: "Prefeitura de Vila das Palmeiras", local: "Vila das Palmeiras - MG" }
  ]);

  return (
    <div className="space-y-12 p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Vagas de Emprego */}
      <section
        id="vagas"
        className="p-8 bg-white rounded shadow w-full max-w-screen-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Vagas de Emprego</h2>
        <JobList jobs={vagas} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;

