"use client";

import Banner from "@/components/Banner";
import { images } from "@/data/images";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section>
      <Banner
        url="/assets/melhor.jpg"
        title="Coleção de fotos"
        page="galeria"
      />

      <section className="flex flex-col justify-center items-center my-10 gap-5 ">
        <p
          data-aos="fade-right"
          className="font-medium uppercase text-pp_avocado_500 text-sm mb-2"
        >
          produtos
        </p>

        <div data-aos="fade-up" className="grid gap-5">
          {images.map((item) => {
            return (
              <div
                key={item.id}
                className={`relative min-h-60 min-w-60 col-span-${item.spany} row-span-${item.spanx}`}
              >
                <Image
                  data-aos="fade"
                  fill
                  src={item.url}
                  alt={item.alt}
                  blurDataURL={`${item.url}`}
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover rounded-lg shadow-lg shadow-gray-500"
                />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default page;
