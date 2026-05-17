"use client";
import Link from "next/link";

export default function MenuItem({ slug, display, toggle, isActive }) {
  return (
    <li className="w-full lg:w-fit">
      {/* <Link
        href={slug}
        onClick={toggle}
        aria-current={isActive ? "page" : undefined}
        className={`"hover:bg-gray-950 lg:hover:bg-transparent whitespace-nowrap px-8 lg:px-3 py-4 transition-all duration-500 before:content-[""] before:absolute before:block before:w-6 before:h-6 before:right-0 before:bottom-0 before:border-b before:border-r before:border-b-gray-950 before:border-r-gray-950 before:hover:w-full before:hover:h-full before:bg-amber-500" ${isActive ? "relative block bg-gray-950 lg:bg-transparent text-right" : "relative block text-white text-right"} `}
      >
        {display}
      </Link> */}
      <Link
        href={slug}
        onClick={toggle}
        aria-current={isActive ? "page" : undefined}
        className={`${isActive ? "lg:text-black block bg-gray-950 lg:bg-transparent text-right text-sm" : "text-white block text-right text-sm hover:bg-gray-950"} " lg:hover:bg-transparent lg:hover:text-black whitespace-nowrap px-8 lg:px-2 xl:px-3 py-4 transition-colors duration-300 ease"`}
      >
        {display}
      </Link>
    </li>
  );
}
