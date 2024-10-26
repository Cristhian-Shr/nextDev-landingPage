import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white py-12 w-full px-10 md:px-20 lg:px-40">
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Section - Company */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-xl font-bold text-gray-600">
              Next Dev @cristhianschroer
            </h2>
            <p className="mt-2 max-w-xs text-gray-400">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex mt-4 space-x-4">
              <li>
                <Link
                  href=""
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white"
                >
                  <FaFacebook size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white"
                >
                  <FaInstagram size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white"
                >
                  <FaTwitter size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white"
                >
                  <FaGithub size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-white"
                >
                  <FaYoutube size={20} />
                </Link>
              </li>
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
            © 2024 Next Dev @cristhianschroer, Inc. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
