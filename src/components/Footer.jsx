import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
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
