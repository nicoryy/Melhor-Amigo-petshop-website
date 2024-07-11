import Image from "next/image";
import React, { ReactNode } from "react";

interface BannerType {
  url: string;
  children: ReactNode;
}

const Banner = ({ url, children }: BannerType) => {
  return (
    <div className="w-full h-64 relative bg-neutral-800 bg-opacity-70 flex flex-col justify-center items-center gap-10 text-white">
      <Image
        src={`${url}`}
        className="m-auto w-full h-full object-cover overflow-hidden -z-10"
        alt="shop"
        layout="fill"
        objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        blurDataURL={`${url}`}
        placeholder="blur"
        loading="lazy"
      />

      {children}
    </div>
  );
};

export default Banner;
