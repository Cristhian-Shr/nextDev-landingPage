import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white py-12 w-full px-10 md:px-20 lg:px-40">
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Section - Company */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-xl font-bold text-primary">
              Next Dev @cristhianschroer
            </h2>
            <p className="mt-2 max-w-xs text-gray-400">
              Quer saber um pouco mais sobre mim? Veja minhas redes sociais!
            </p>
            <div className="flex mt-4 space-x-4">
              <ul className="flex gap-5">
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
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-16">
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Solutions
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Commerce
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Insights
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Submit ticket{" "}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Section - Legal */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © 2024 Next Dev @cristhianschroer. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
