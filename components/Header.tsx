"use client";

import { useState } from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import { Oswald } from "next/font/google";
import Button from "./Button";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { CgMenu, CgClose } from "react-icons/cg";

const oswald = Oswald({ subsets: ["latin"] });

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const currentPath = usePathname();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      data-aos="fade-down"
      className="relative border-b-2 border-pp_black w-full overflow-x-hidden"
    >
      <section className="hidden text-sm lg:flex justify-between text-white bg-pp_black px-10 py-2 items-center">
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

      <section className="flex items-center py-5 px-10 justify-center lg:justify-between">
        <nav>
          <ul
            className={`z-10 bg-pp_avocado_500 lg:bg-transparent gap-10 text-xl lg:text-base text-white lg:text-black flex flex-col lg:flex-row justify-center items-center fixed m-auto top-0 right-0 left-0 bottom-0 lg:static lg:flex lg:gap-5 font-medium transition duration-1000 ease-in-out
            ${
              showMenu
                ? "translate-y-0"
                : "lg:inline-block translate-y-[calc(100%+5rem)] lg:translate-y-0"
            }`}
          >
            <CgClose
              size={50}
              className="lg:hidden absolute bottom-10 rounded-full p-2 text-pp_avocado_500 bg-white cursor-pointer"
              onClick={() => {
                toggleMenu();
              }}
            />

            <li>
              <Link
                href={"/shop"}
                onClick={() => {
                  toggleMenu();
                }}
                className={`transition duration-1000 ${
                  currentPath === "/shop"
                    ? "border-b-2 border-pp_avocado border-opacity-100"
                    : "border-opacity-10"
                }`}
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                href={"/galeria"}
                onClick={() => {
                  toggleMenu();
                }}
                className={`transition duration-1000 ${
                  currentPath === "/galeria"
                    ? "border-b-2 border-pp_avocado border-opacity-100"
                    : "border-opacity-10"
                }`}
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                href={"/contato"}
                onClick={() => {
                  toggleMenu();
                }}
                className={`transition duration-1000 ${
                  currentPath === "/contato"
                    ? "border-b-2 border-pp_avocado border-opacity-100"
                    : "border-opacity-10"
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <Link href={"/"}>
          <Image src={"/assets/melhor.png"} alt="logo" height={80} width={80} />
        </Link>

        <CgMenu
          size={30}
          className="lg:hidden absolute right-10 cursor-pointer"
          onClick={() => {
            toggleMenu();
          }}
        />

        <div className="flex absolute lg:static left-10 gap-3 items-center">
          <CgProfile size={25} />
          <CgShoppingCart size={25} />
          <Button
            href={"/shop"}
            className="bg-pp_avocado hidden lg:block px-4 py-2 rounded text-pp_white"
          >
            Nossa Loja
          </Button>
        </div>
      </section>
    </header>
  );
};

export default Header;
