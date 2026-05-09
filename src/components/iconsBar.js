import Image from "next/image";
import placeHolderFacebook from "@/assets/images/btn-fb.png";
import placeHolderInstagram from "@/assets/images/btn-t.png";
import placeHolderYoutube from "@/assets/images/btn-yt.png";
import placeHolderFAQ from "@/assets/images/btn-faq.png";
import { LanguageSwitcher } from "@/components/languageSwitcher";
import Link from "next/link";

export function IconsBar({ locale }) {
  return (
    <div className="absolute top-18 lg:top-24 left-0 right-0 mx-auto container max-w-8xl">
      <div className="w-full flex gap-1 lg:gap-3 lg:px-2 xl:px-3 justify-center lg:justify-end">
        <a
          href="https://www.facebook.com/minimodels.babymodelsagency"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          title="Minimodels - Facebook"
        >
          <Image
            src={placeHolderFacebook}
            alt="Minimodels - Facebook"
            className="opacity-75 group-hover:opacity-100 transition-all"
          />
        </a>
        <a
          href="https://www.instagram.com/minimodels.baby.models.agency"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          title="Minimodels - Instagram"
        >
          <Image
            src={placeHolderInstagram}
            alt="Minimodels - Instagram"
            className="opacity-75 group-hover:opacity-100 transition-all"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCyWXlsuax3gnq3ooxdJxnKA"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          title="Minimodels - Yotube"
        >
          <Image
            src={placeHolderYoutube}
            alt="Minimodels - Yotube"
            className="opacity-75 group-hover:opacity-100 transition-all"
          />
        </a>
        <Link
          href=""
          className="group"
          title={locale === "pl" ? "Minimodels - Pomoc" : "Minimodels - FAQ"}
        >
          <Image
            src={placeHolderFAQ}
            alt={locale === "pl" ? "Minimodels - Pomoc" : "Minimodels - FAQ"}
            className="opacity-75 group-hover:opacity-100 transition-all"
          />
        </Link>
        <LanguageSwitcher locale={locale} />
      </div>
    </div>
  );
}
