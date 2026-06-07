import { LEFT_SIDE_MENU, RIGHT_SIDE_MENU } from "@/lib/menuItems";
import Link from "next/link";

export default function BottomMenu({ locale }) {
  const menuItems = [...LEFT_SIDE_MENU, ...RIGHT_SIDE_MENU];
  return (
    <nav className="my-8" aria-label="Menu dolne">
      <div className="container mx-auto max-w-7xl flex flex-wrap justify-center gap-x-10">
        {menuItems.map((item) =>
          item.targetBlank ? (
            <a
              key={item.id}
              href={item.slug}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm font-bold uppercase hover:text-sky-500 py-3 transition-colors duration-200 ease-in"
            >
              {item.displayName[locale]}
            </a>
          ) : (
            <Link
              key={item.id}
              href={item.slug}
              className="text-black text-sm font-bold uppercase hover:text-sky-500 py-3 transition-colors duration-200 ease-in"
            >
              {item.displayName[locale]}
            </Link>
          ),
        )}
      </div>
    </nav>
  );
}
