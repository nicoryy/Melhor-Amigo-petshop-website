import Button from "@/components/Button";
import { servicos } from "@/data/servicos";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-20">
      {/* First Section */}
      <section className="grid grid-cols-2 place-items-center min-h-screen -mx-20">
        <div className="w-full h-full flex flex-col justify-center items-start gap-5 p-40">
          <p className="text-5xl font-bold">
            Melhor Amigo - O melhor para o seu Pet!
          </p>

          <p className="text-lg">
            Bem-vindo ao Petshop "Melhor Amigo"! No Petshop "Melhor Amigo", nós
            entendemos que seu animal de estimação é mais do que apenas um
            bichinho, é um membro especial da sua família. Com isso em mente,
            estamos comprometidos em fornecer cuidados excepcionais e serviços
            de alta qualidade para garantir que seu melhor amigo tenha uma vida
            feliz e saudável.
          </p>

          <Button href={"/shop"}>Compre agora</Button>
        </div>

        <div className="w-full h-full relative">
          <Image
            className="object-cover rounded-lg shadow-lg shadow-neutral-400"
            quality={100}
            src={"/assets/definir-publico-alvo-veterinario-capa-blogpost.jpg"}
            alt="homepageimage"
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL="/assets/definir-publico-alvo-veterinario-capa-blogpost.jpg"
          />
        </div>
      </section>

      {/* Second Section */}
      <section className="py-40 flex items-center justify-center flex-col gap-10 relative -mx-20 my-10">
        <p className="absolute text-8xl text-gray-500 font-bold top-10 left-0 -z-10 opacity-50 font-petrona">
          Nutrição saudável
        </p>
        <p className="absolute text-8xl text-gray-500 font-bold bottom-10 right-0 -z-10 opacity-50 font-petrona">
          Excelência em cuidados
        </p>

        <p className="text-4xl font-bold text-center w-[55rem]">
          Explore nossa ampla gama de produtos e serviços para animais de
          estimação e dê ao seu animal o cuidado que ele merece.
        </p>

        <Button href={"/shop"}>Visite nossa loja !</Button>
      </section>

      {/* Third Section */}
      <section className="py-20 flex items-center justify-center flex-col gap-10 text-center">
        <span>
          <p className="text-pp_avocado font-semibold">Descubra a excelência</p>

          <p className="text-4xl font-bold break-words ">
            Descubra nossos produtos premium para Pets
          </p>
        </span>

        <p className="text-lg px-40">
          Dê uma olhada em nossa seleção de produtos premium para animais de
          estimação, projetados para manter seu amigo peludo feliz e saudável.
          Desde rações premium até materiais de higiene e brinquedos, temos tudo
          o que você precisa para dar ao seu animal o melhor cuidado possível.
        </p>

        {/* product section */}
        <section className="grid gap-5 grid-cols-4 my-10">
          {servicos.map((item) => {
            return (
              <div className="flex flex-col gap-3 text-center" key={item.id}>
                <div className="w-80 h-80 relative">
                  <Image
                    className="object-cover rounded-lg shadow-lg shadow-neutral-400"
                    key={item.id}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`${item.img}`}
                    fill
                  />
                </div>

                <p className="font-semibold text-lg">{item.title}</p>

                <span className="font-petrona flex gap-2 items-center justify-center text-lg">
                  <p className=" line-through">${item.price}</p>
                  <p>${item.promo}</p>
                </span>
              </div>
            );
          })}
        </section>
      </section>

      {/* Fourth section */}
      <section>
        {servicos.map((item) => {
          if (item.categoria === "prod") return null;
          else {
            return (
              <div
                key={item.id}
                className="my-10 grid justify-between grid-cols-2 gap-20"
                dir={item.id % 2 === 0 ? "" : "rtl"}
              >
                <div
                  className={`${
                    item.id % 2 === 0 ? "text-left pr-60" : "text-right pl-60"
                  } flex flex-col gap-5 justify-center items-start`}
                >
                  <p className="text-pp_avocado_500 text-2xl font-bold">
                    0{item.id}
                  </p>

                  <p className="font-semibold text-4xl">{item.title}</p>

                  <p className="line-clamp-6">{item.desc}</p>

                  <Button href="/shop/item">Adicionar ao Carrinho</Button>
                </div>

                <div className="relative w-[50rem] h-[35rem]">
                  <Image
                    className="object-cover rounded-xl"
                    key={item.id}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`${item.img}`}
                    fill
                  />
                </div>
              </div>
            );
          }
        })}
      </section>

      {/* Fifth Section */}
      <section className="bg-neutral-950 bg-opacity-70 -mx-20 relative px-52 text-white py-20 flex flex-col gap-5 items-start mt-10">
        <Image
          className="object-cover -z-10"
          src={"/assets/melhor.jpg"}
          alt="cta"
          loading="lazy"
          placeholder="blur"
          blurDataURL={"/assets/melhor.jpg"}
          fill
        />

        <p className="text-4xl font-medium">Brinquedos e acessórios para animais de estimação</p>
        <p className="text-lg">
          Nossa seleção de brinquedos e acessórios para animais de estimação foi
          projetada para mantê-lo entretido e feliz. De brinquedos interativos a
          camas aconchegantes e acessórios elegantes, temos tudo que você
          precisa para manter seu amigo peludo feliz e confortável.
        </p>
        <Button href="/shop">Ver Produtos</Button>
      </section>
    </section>
  );
}
