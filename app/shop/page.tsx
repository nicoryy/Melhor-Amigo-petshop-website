import Banner from "@/components/Banner";
import React from "react";

const page = () => {
  return (
    <section>
      <Banner url="/assets/pet-shop-um-negocio-de-sucesso.jpg">
        <p className="text-xl font-semibold uppercase">pet shop</p>

        <p className="text-4xl font-bold">Nossa Loja</p>
      </Banner>
    </section>
  );
};

export default page;
