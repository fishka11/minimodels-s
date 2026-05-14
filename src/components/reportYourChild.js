import { ArrowBigDown } from "lucide-react";
import Link from "next/link";

export function ReportYourChild({ locale }) {
  const t = {
    pl: "Zgłoś dziecko",
    en: "Report your child",
  };
  return (
    <div
      className={`-rotate-90 absolute w-fit h-fit text-white ${locale === "pl" ? "top-64 lg:top-72 -right-20 xl:-right-16" : "top-68 lg:top-72 -right-25 xl:-right-22"}`}
    >
      <Link
        href="/report-your-child"
        className="group flex flex-row items-center"
      >
        <ArrowBigDown
          size={32}
          className="animate-bounce text-sky-500 group-hover:text-pink-600 transition-colors -rotate-90"
        />
        <span className="py-3 px-6 font-bold text-xl bg-sky-500 text-white group-hover:bg-pink-600 transition-colors cursor-pointer text-shadow-lg">
          {t[locale] || t.pl}
        </span>
      </Link>
    </div>
  );
}
