import React from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import { Oswald } from "next/font/google";
import Button from "./Button";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="overflow-hidden border-b-2 border-pp_black w-full">
      <section className="text-sm flex justify-between text-white bg-pp_black px-10 py-2 items-center">
        <ul className="flex gap-6">
          <li className="list-disc">Call: +1 487 888 937</li>
          <li className="list-disc">Quote : price@domain.com</li>
          <li className="list-disc">Support :support@domain.com</li>
        </ul>

        <div className="flex gap-5">
          <FaInstagram size={30} className="text-pp_avocado" />
          <FaGithub size={30} className="text-pp_avocado" />
          <FaTwitter size={30} className="text-pp_avocado" />
        </div>
      </section>

      <section className="flex items-center py-5 px-10 justify-between">
        <nav>
          <ul className="flex gap-5 font-medium">
            <li>Produtos</li>
            <li>Galeria</li>
            <li>Contato</li>
          </ul>
        </nav>

        <h1 className={`font-bold text-2xl ${oswald.className}`}>
          <Link href={"/"}>
            <Image
              src={"/assets/melhor.png"}
              alt="logo"
              height={80}
              width={80}
            />
          </Link>
        </h1>

        <div className="flex gap-3 items-center">
          <CgProfile size={25} />
          <CgShoppingCart size={25} />
          <Button
            href={"/"}
            className="bg-pp_avocado px-4 py-2 rounded text-pp_white"
          >
            Nossa Loja
          </Button>
        </div>
      </section>
    </header>
  );
};

export default Header;
