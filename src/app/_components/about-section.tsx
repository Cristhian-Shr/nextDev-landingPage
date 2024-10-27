import Image from "next/image";
import Link from "next/link";
import dev from "../../../public/images/cristhian.jpeg";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function AboutSection() {
  return (
    <section
      className="container flex md:max-w-[64rem] flex-col md:py-8 lg:py-12"
      id="about"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              width={800}
              height={800}
              quality={95}
              alt="developer"
              src={dev}
              priority={true}
              className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-500 object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start px-4 md:px-0">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl hover:text-primary">
            @cristhianshr
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            Sou um profissional dedicado que estuda programação há mais de dois
            anos, sempre buscando aprimorar meus conhecimentos. Com mais de seis
            anos de experiência em tráfego pago, tenho desenvolvido uma
            abordagem integrada, criando sites e otimizando o tráfego para
            melhorar a qualidade dos leads. Atualmente, estou focado no
            desenvolvimento front-end, continuamente aperfeiçoando minhas
            habilidades para oferecer soluções eficazes e inovadoras.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-6">
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
      </div>
    </section>
  );
}

export default AboutSection;
