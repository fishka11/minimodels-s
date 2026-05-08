import Image from "next/image";
import placeHolder from "@/assets/images/logo-minimodels.webp";

export function Logo() {
  return (
    <Image
      src={placeHolder}
      alt="logo Agencji Minimodels"
      className="max-h-11/12 w-auto max-w-full"
    />
  );
}
