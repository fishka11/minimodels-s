// src/components/header.js
import Menu from "@/components/menu";
import { IconsBar } from "@/components/iconsBar";

export async function Header({ locale }) {
  return (
    <header className="fixed top-0 z-50 h-14 lg:h-20 w-screen bg-sky-500 shadow-lg flex flex-col items-center justify-center">
      <Menu locale={locale} />
      <IconsBar locale={locale} />
    </header>
  );
}
