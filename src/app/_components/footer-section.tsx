import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import PrivacyPolicyModal from "./privacyPolicy-modal";
import { Button } from "@/components/ui/button";
import TechModal from "./techs-modal";

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
            <p className="mt-2 max-w-xs text-slate-400">
              Quer saber um pouco mais sobre mim? Veja minhas redes sociais!
            </p>
            <div className="flex mt-4 space-x-4">
              <ul className="flex gap-5 mx-auto md:mx-0">
                <li>
                  <Link
                    href="https://www.facebook.com/csschroer"
                    aria-label="Facebook"
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <FaFacebook size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/cristhian.shr/"
                    aria-label="Intagram"
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <FaInstagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://w.app/4gj0h2"
                    aria-label="Whatsapp"
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <FaWhatsapp size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Cristhian-Shr"
                    aria-label="Github"
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <FaGithub size={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - serviços */}
          <div className=" lg:gap-2">
            <div className="flex flex-col text-center md:text-start">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                Serviços
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-slate-600"
                  >
                    Trafego pago
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-slate-600"
                  >
                    Criação de sites
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-slate-600"
                  >
                    Criação de Landing Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-slate-600"
                  >
                    Criação E-Commerce
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - empresa */}
          <div className="mt-8 lg:mt-0 text-center md:text-start">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#intro"
                  className="text-slate-400 hover:text-slate-600"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-slate-400 hover:text-slate-600"
                >
                  FAQ
                </Link>
              </li>
              <li className="text-slate-400 hover:text-slate-600">
                <TechModal />
              </li>
              <li className="text-slate-400 hover:text-slate-600">
                <PrivacyPolicyModal />
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
