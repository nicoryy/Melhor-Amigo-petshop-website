import { servicos } from "@/data/servicos";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-4 text-center lg:text-left py-40 px-20 gap-10 border-t-2 border-pp_avocado">
      <section className="flex flex-col gap-5">
        <p className="text-2xl font-medium">Melhor Amigo</p>

        <p className="text-sm">
          Na Melhor Amigo, temos o compromisso de fornecer produtos e serviços
          de cuidados para animais de estimação da mais alta qualidade. Nossa
          equipe de profissionais treinados se dedica a garantir que seu amigo
          peludo receba o melhor cuidado possível. Explore hoje a nossa seleção
          de produtos e serviços para cuidados com animais de estimação e dê ao
          seu animal de estimação o cuidado que ele merece.
        </p>
        <div className="flex gap-5 justify-center lg:justify-around">
          <FaInstagram size={25} className="text-pp_avocado" />
          <FaGithub size={25} className="text-pp_avocado" />
          <FaTwitter size={25} className="text-pp_avocado" />
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <p className="font-bold text-xl">Store Info:</p>

        <nav className="flex flex-col gap-2 items-center lg:items-start">
          <Link href={"/galeria"} className="flex items-center gap-3">
            <FaArrowRight size={15} /> Galeria
          </Link>
          <Link href={"/shop"} className="flex items-center gap-3">
            <FaArrowRight size={15} /> Produtos
          </Link>
          <Link href={"/contato"} className="flex items-center gap-3">
            <FaArrowRight size={15} /> Contato
          </Link>
        </nav>
      </section>

      <section className="flex flex-col gap-5">
        <p className="font-bold text-xl">Contatos:</p>

        <ul className="flex flex-col gap-2">
          <li>Call: +1 487 888 937</li>
          <li>Quote : price@domain.com</li>
          <li>Support :support@domain.com</li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <p className="font-bold text-xl">Galeria:</p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
          {servicos.map((item) => {
            return (
              <div key={item.id} className="relative w-32 h-32">
                <Image
                  key={item.id}
                  fill
                  src={item.img}
                  alt={item.title}
                  blurDataURL={`${item.img}`}
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
