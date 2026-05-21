import { lora } from "@/lib/fonts";

export const CategoryHeader = ({ bgImage, title }) => {
  return (
    <div
      className="py-6 md:py-10 w-full h-80 xl:h-130 grid grid-cols-1 place-content-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="container max-w-7xl mx-auto flex flex-row  gap-5 justify-center items-center">
        <hr className="text-white w-1/8" />
        <h1
          className={`${lora.className} text-[40px] lg:text-6xl font-light text-center py-3 text-white`}
        >
          {title}
        </h1>
        <hr className="text-white w-1/8" />
      </div>
    </div>
  );
};
