import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import PrivacyPolicyModal from "./privacyPolicyModal";

function Footer() {
  return (
    <footer className="text-white py-12 w-full px-10 md:px-20 lg:px-40">
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between px-10">
          {/* Section - sobre */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-xl font-bold text-primary text-center md:text-start">
              Next Dev @cristhianschroer
            </h2>
            <p className="mt-2 max-w-xs text-gray-400">
              Quer saber um pouco mais sobre mim? Veja minhas redes sociais!
            </p>
            <div className="flex mt-4 space-x-4">
              <ul className="flex gap-5 mx-auto md:mx-0">
                <li>
                  <Link
                    href="https://www.facebook.com/csschroer"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaFacebook size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/cristhian.shr/"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaInstagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaWhatsapp size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Cristhian-Shr"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-white"
                  >
                    <FaGithub size={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - Links */}
          <div className=" lg:gap-2">
            <div className="flex flex-col text-center md:text-start">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Serviços
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Trafego pago
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Criação de sites
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Criação de Landing Page
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Criação E-Commerce
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - Legal */}
          <div className="mt-8 lg:mt-0 text-center md:text-start">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#intro" className="text-gray-400 hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  Tecnologias
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="www.alalklds"
                  className="text-gray-400 hover:text-white"
                >
                <PrivacyPolicyModal />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © 2024 Next Dev @cristhianschroer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
