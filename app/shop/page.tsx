import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { servicos } from "@/data/servicos";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="mx-20">
      <Banner url="/assets/pet-shop-um-negocio-de-sucesso.jpg">
        <p className="text-xl font-semibold uppercase">pet shop</p>

        <p className="text-4xl font-bold">Nossa Loja</p>
      </Banner>

      <section className="my-20 grid grid-cols-3 gap-y-10 relative">
        <Image
          width={600}
          height={600}
          src={"/assets/melhor.png"}
          alt={"sub"}
          blurDataURL={"/assets/melhor.png"}
          placeholder="blur"
          loading="lazy"
          className="object-cover absolute -z-10 m-auto left-0 right-0 top-0 bottom-0 opacity-40"
        />
        {servicos.map((item) => {
          return (
            <div
              key={item.id}
              className="text-center flex flex-col gap-2 items-center justify-center"
            >
              <div className="relative w-96 h-96 ">
                <Image
                  fill
                  src={item.img}
                  alt={item.title}
                  blurDataURL={`${item.img}`}
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover rounded-lg shadow-lg shadow-pp_black"
                />
              </div>

              <p className="font-medium text-lg">{item.title}</p>

              <p className="font">${item.price}</p>

              <Button className="shadow-md" href="/carrinho/item">
                Adicionar ao carrinho
              </Button>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default page;
