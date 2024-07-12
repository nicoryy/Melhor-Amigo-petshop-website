import Image from "next/image";
interface BannerType {
  url: string;
  page: string;
  title: string;
}

const Banner = ({ url, page, title }: BannerType) => {
  return (
    <div
      data-aos="fade-down"
      className="h-64 relative bg-neutral-800 bg-opacity-70 flex flex-col justify-center items-center gap-10 text-white -mx-20"
    >
      <Image
        src={`${url}`}
        className="object-cover overflow-hidden -z-10"
        alt="shop"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        blurDataURL={`${url}`}
        placeholder="blur"
        loading="lazy"
      />

      <p className="text-xl font-semibold uppercase">{page}</p>

      <p className="text-4xl font-bold">{title}</p>
    </div>
  );
};

export default Banner;
