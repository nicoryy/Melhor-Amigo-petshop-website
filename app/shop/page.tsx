"use client";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { servicos } from "@/data/servicos";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [categoria, setCategoria] = useState("all");

  const handleCategoria = (cat: string) => [setCategoria(cat)];

  return (
    <section className="mx-20">
      <Banner url="/assets/pet-shop-um-negocio-de-sucesso.jpg" title="Nossa Loja" page="pet shop"/>

      <section className="flex flex-col justify-center items-center my-10 transition">
        <p
          data-aos="fade-right"
          className="font-medium uppercase text-pp_avocado_500 text-sm mb-2"
        >
          produtos
        </p>
        <div data-aos="fade-left" className="text-center">
          <ul className="grid grid-cols-4 py-1 text-lg bg-neutral-200 rounded-lg">
            <li
              className={`px-10 cursor-pointer${
                categoria === "all"
                  ? " bg-white rounded-lg shadow-sm shadow-gray-400"
                  : ""
              }`}
              onClick={() => handleCategoria("all")}
            >
              Todos
            </li>

            <li
              className={`px-10 cursor-pointer${
                categoria === "limpeza"
                  ? " bg-white rounded-lg shadow-sm shadow-gray-400"
                  : ""
              }`}
              onClick={() => handleCategoria("limpeza")}
            >
              Limpeza
            </li>

            <li
              className={`px-10 cursor-pointer${
                categoria === "tosa"
                  ? " bg-white rounded-lg shadow-sm shadow-gray-400"
                  : ""
              }`}
              onClick={() => handleCategoria("tosa")}
            >
              Tosa
            </li>

            <li
              className={`px-10 cursor-pointer${
                categoria === "racao"
                  ? " bg-white rounded-lg shadow-sm shadow-gray-400"
                  : ""
              }`}
              onClick={() => handleCategoria("racao")}
            >
              Ração
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" className="grid grid-cols-3 gap-10 my-10">
          {servicos.map((item) => {
            if (categoria === "all") {
              return (
                <div
                  key={item.id}
                  className="text-center flex flex-col gap-3 items-center justify-center border bg-white rounded-lg pb-10"
                >
                  <div className="relative w-96 h-96">
                    <Image
                      fill
                      src={item.img}
                      alt={item.title}
                      blurDataURL={`${item.img}`}
                      placeholder="blur"
                      loading="lazy"
                      className="object-cover rounded-lg shadow-lg shadow-gray-500"
                    />
                  </div>

                  <p className="font-medium text-lg">{item.title}</p>

                  <p className="font">${item.price}</p>

                  <Button className="shadow-none  " href="/carrinho/item">
                    Adicionar ao carrinho
                  </Button>
                </div>
              );
            } else if (categoria === item.subcategoria) {
              return (
                <div
                  key={item.id}
                  className="text-center flex flex-col gap-3 items-center justify-center border bg-white rounded-lg pb-10"
                >
                  <div className="relative w-96 h-96">
                    <Image
                      fill
                      src={item.img}
                      alt={item.title}
                      blurDataURL={`${item.img}`}
                      placeholder="blur"
                      loading="lazy"
                      className="object-cover rounded-lg shadow-lg shadow-gray-500"
                    />
                  </div>

                  <p className="font-medium text-lg">{item.title}</p>

                  <p className="font">${item.price}</p>

                  <Button className="shadow-none  " href="/carrinho/item">
                    Adicionar ao carrinho
                  </Button>
                </div>
              );
            }
          })}
        </div>
      </section>
    </section>
  );
};

export default page;
