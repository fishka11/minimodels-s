// src/components/header.js
import { sanityFetch } from "@/sanity/lib/live";
import { MENU_MODEL_CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Menu from "@/components/menu";
import { IconsBar } from "@/components/iconsBar";

export async function Header({ locale }) {
  const { data: modelCategories } = await sanityFetch({
    query: MENU_MODEL_CATEGORIES_QUERY,
    tags: ["modelCategory"],
  });

  return (
    <header className="fixed top-0 z-50 h-14 lg:h-20 w-screen bg-sky-500 shadow-lg flex flex-col items-center justify-center">
      <Menu locale={locale} modelCategories={modelCategories} />
      <IconsBar locale={locale} />
    </header>
  );
}
//       <Link
//         className="text-pink-700 lg:text-xl font-bold tracking-tight"
//         href={`/${locale}`}
//       >
//         Minimodels
//       </Link>
//       <ul className="flex items-center gap-4 font-semibold text-slate-700">
//         {/* Linki do kategorii modeli */}
//         {categories?.map((category) => (
//           <li key={category._id}>
//             <Link
//               className="hover:text-pink-500 transition-colors"
//               href={`/${locale}/${category.slug}`}
//             >
//               {category.displayName?.[locale] ?? category.slug}
//             </Link>
//           </li>
//         ))}

//         {/* Posty */}
//         <li>
//           <Link
//             className="hover:text-pink-500 transition-colors"
//             href={`/${locale}/posts`}
//           >
//             {tr.posts}
//           </Link>
//         </li>

//         {/* Studio */}
//         <li>
//           <Link
//             className="hover:text-pink-500 transition-colors"
//             href="/studio"
//           >
//             {tr.studio}
//           </Link>
//         </li>
//       </ul>
//     </header>
//   );
// }
