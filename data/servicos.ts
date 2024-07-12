import banho from "../public/assets/produtos/banho.jpg";
import banho1 from "../public/assets/produtos/banho1.jpg";
import brinquedo from "../public/assets/produtos/brinquedo.jpg";
import produtos from "../public/assets/produtos/produtos.jpg";
import tosa from "../public/assets/produtos/tosa.jpg";
import racao from "../public/assets/produtos/racao.jpg";

export const servicos = [
  {
    id: 1,
    title: "Ração Premium",
    desc: "No Petshop 'Melhor Amigo', oferecemos uma seleção de rações premium para cães e gatos. Essas rações são formuladas com ingredientes de alta qualidade, garantindo uma nutrição balanceada e adequada para o seu pet. Temos opções para diferentes idades, raças e necessidades específicas, proporcionando uma dieta saudável e saborosa para o seu melhor amigo.",
    img: racao,
    price: 59.99,
    promo: 49.99,
    categoria:'prod',
    subcategoria:'racao'
  },
  {
    id: 2,
    title: "Serviço de Tosa Especializada",
    desc: "Proporcionamos serviços profissionais de tosa para cães de todas as raças. Nossos tosadores experientes e qualificados utilizam técnicas avançadas para garantir que seu pet tenha um visual impecável. Além de cortes de pelos personalizados, também realizamos higienização e cuidados especiais, como limpeza de ouvidos e corte de unhas, deixando seu cãozinho limpo e bem cuidado.",
    img: tosa,
    price: 79.99,
    promo: 69.99,
    categoria:'serv',
    subcategoria:'tosa'
  },
  {
    id: 3,
    title: "Serviço de Banho Relaxante",
    desc: "No Petshop 'Melhor Amigo', oferecemos banhos relaxantes para cães e gatos. Utilizamos produtos de qualidade, seguros e adequados para cada tipo de pelagem, garantindo uma limpeza profunda e refrescante. Nossos profissionais carinhosos proporcionam um ambiente tranquilo e seguro para que seu pet desfrute de um banho agradável, deixando-o com uma pelagem macia, brilhante e cheirosa.",
    img: banho1,
    price: 49.99,
    promo: 39.99,
    categoria:'serv',
    subcategoria:'limpeza'
  },
  {
    id: 4,
    title: "Brinquedos Interativos",
    desc: "Valorizamos o enriquecimento e a diversão dos animais, por isso oferecemos uma variedade de brinquedos interativos. Esses brinquedos estimulam a mente e o corpo do seu pet, promovendo o exercício físico e mental. Desde brinquedos de mastigação duráveis até jogos interativos, temos opções para cães e gatos de todos os tamanhos e idades, garantindo horas de entretenimento e diversão saudável.",
    img: brinquedo,
    price: 29.99,
    promo: 24.99,
    categoria:'prod',
    subcategoria:'limpeza'
  },
  {
    id: 5,
    title: "Produtos de Higiene e Cuidados",
    desc: "Na nossa seleção de produtos, você encontrará uma gama de itens de higiene e cuidados para o seu pet. Isso inclui shampoos e condicionadores específicos para diferentes tipos de pelagem, escovas e pentes para manter os pelos desembaraçados e saudáveis, produtos de limpeza auricular e ocular, além de acessórios essenciais como coleiras, guias e comedouros. Tudo o que você precisa para manter seu animalzinho limpo, confortável e bem cuidado.",
    img: produtos,
    price: 39.99,
    promo: 34.99,
    categoria:'prod',
    subcategoria:'limpeza'
  },
];
