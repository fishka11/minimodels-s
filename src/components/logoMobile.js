import Image from "next/image";
import placeHolder from "@/assets/images/minimodels-logo-mobile.webp";

export function LogoMobile() {
  return (
    <div
      className="lg:hidden h-14 flex justify-start items-center bg-linear-to-r from-white from-5% to-sky-500 to-95%"
      aria-hidden
    >
      <div className="w-auto">
        <Image
          src={placeHolder}
          alt="logo Agencji Minimodels"
          className="w-auto max-h-14  p-1"
        />
      </div>
    </div>
  );
}
