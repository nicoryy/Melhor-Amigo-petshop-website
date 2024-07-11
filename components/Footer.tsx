import { servicos } from "@/data/servicos";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 py-40 px-20 gap-10 border-t-2 border-pp_avocado">
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
        <div className="flex gap-5">
          <FaInstagram size={25} className="text-pp_avocado" />
          <FaGithub size={25} className="text-pp_avocado" />
          <FaTwitter size={25} className="text-pp_avocado" />
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <p className="font-bold text-xl">Store Info:</p>

        <nav className="flex flex-col gap-2">
          <Link href={"/galeria"}>Galeria</Link>
          <Link href={"/shop"}>Produtos</Link>
          <Link href={"/contato"}>Contato</Link>
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

        <div className="grid grid-cols-3 gap-3">
          {servicos.map((item) => {
            return (
              <div className="relative w-32 h-32">
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
