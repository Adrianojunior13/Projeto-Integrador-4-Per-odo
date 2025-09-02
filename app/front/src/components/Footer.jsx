import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const redesSociais = [
    { href: "https://www.facebook.com", icon: <FaFacebookF size={20} /> },
    { href: "https://www.instagram.com", icon: <FaInstagram size={20} /> },
    { href: "https://wa.me/5511999999999", icon: <FaWhatsapp size={20} /> }
  ];

  return (
    <footer className="w-full">
      <div className="bg-white text-gray-800 py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 w-full max-w-6xl mx-auto">
          
          {/* Coluna 1 - Informações */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-lg font-bold">Oportuniza</h3>
            <p>Av. Rosália Isaura Araújo, 275</p>
            <p>Centro Administrativo</p>
            <p>Vila das Palmeiras/MG</p>
            <p>38.000-157</p>
            <p>ouvidoria@oportuniza.com</p>
            <p>• (68) 99257-0977</p>
            <p>• (68) 3669-0977</p>
            <p>12h às 18h - Segunda a Sexta</p>
          </div>

          {/* Coluna 2 - Redes Sociais */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-lg font-bold">Redes Sociais</h3>
            <div className="flex gap-6">
              {redesSociais.map((rede, index) => (
                <a
                  key={index}
                  href={rede.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition transform hover:scale-125"
                >
                  {rede.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 3 - Direitos Autorais */}
          <div className="flex items-center justify-center md:justify-end text-center md:text-right">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Oportuniza. <br />
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
