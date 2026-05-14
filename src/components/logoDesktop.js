import Image from "next/image";
import placeHolder from "@/assets/images/minimodels-logo.webp";

export function LogoDesktop() {
  return (
    <div className="max-lg:hidden h-20 lg:w-52 xl:w-98 mx-auto" aria-hidden>
      <div className="mx-auto py-2 px-6 xl:px-20 xl:rounded-full bg-linear-to-r from-sky-500 from-5% via-white via-50% to-sky-500 to-95%">
        <Image
          src={placeHolder}
          alt="logo Agencji Minimodels"
          className="lg:hfull"
        />
      </div>
    </div>
  );
}
