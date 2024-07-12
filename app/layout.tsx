import type { Metadata } from "next";
import { Montserrat, Oswald, Petrona } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Scollop from "@/components/Scollop";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});
const petrona = Petrona({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-petrona",
});

export const metadata: Metadata = {
  title: "Melhor Amigo - PetShop",
  description: "Bem-vindo ao Petshop 'Melhor Amigo'!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`selection:bg-pp_avocado_500 selection:text-pp_white bg-pp_white ${mont.className} ${mont.variable} ${oswald.variable} ${petrona.variable} `}
      >
        <Scollop />
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
