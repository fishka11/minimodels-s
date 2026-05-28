"use client";
import React, { useState, useEffect } from "react";
import MenuItem from "@/components/menuItem";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogoDesktop } from "@/components/logoDesktop";
import { LogoMobile } from "@/components/logoMobile";
import { LEFT_SIDE_MENU, RIGHT_SIDE_MENU } from "@/lib/menuItems";

export default function Menu({ locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Blokada scrollu body gdy menu otwarte na mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Zamykanie menu po kliknięciu Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  // Zamykanie menu przy zmianie rozmiaru okna na desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // const startPage = {
  //   id: "startPage",
  //   slug: `/`,
  //   displayName: "Start",
  //   inMenu: true,
  // };

  // const categoryPages = modelCategories.map((cat) => ({
  //   id: cat._id,
  //   slug: cat.slug,
  //   displayName: cat.displayName?.[locale] ?? cat.slug,
  //   inMenu: cat.inMenu,
  // }));

  // const leftSideItems = [startPage, ...categoryPages].filter(
  //   (page) => page.inMenu,
  // );
  const leftSideItems = LEFT_SIDE_MENU;

  // const rightSideItems = [...staticPages].filter((page) => page.inMenu);
  const rightSideItems = RIGHT_SIDE_MENU;

  return (
    <nav className="w-screen z-50" aria-label="Menu główne">
      <div className="lg:container grid grid-cols-2 lg:max-w-7xl lg:mx-auto lg:flex lg:w-full">
        <Link href={`/${locale}`}>
          <LogoMobile />
        </Link>
        <div className="lg:w-full lg:flex lg:justify-between">
          <div className="mx-auto flex flex-col lg:block lg:w-full px-4 lg:px-0">
            {/* Przycisk Hamburger */}
            <div className="flex w-full items-start justify-end lg:hidden">
              <button
                type="button"
                className={
                  "text-white bg-transparent w-fit p-1 text-sm lg:hidden flex justify-end z-50 relative cursor-pointer"
                }
                aria-controls="main-menu"
                aria-expanded={isOpen}
                onClick={toggle}
              >
                <span className="sr-only">
                  {isOpen ? "Zamknij" : "Otwórz"} menu główne
                </span>

                {/* Animowana ikona hamburgera */}
                <div className="w-12 h-12 flex items-center justify-center group">
                  <div className="relative h-6 w-8">
                    <span
                      className={`${
                        isOpen
                          ? "rotate-45 top-2.5 left-0 w-full"
                          : "w-8 top-0 left-0"
                      } absolute block w-8 h-1 bg-current rounded-sm transition-all ease-in duration-200`}
                    ></span>
                    <span
                      className={`${
                        isOpen ? "w-0" : "w-8 group-hover:w-5"
                      } absolute top-2.5 left-0 block h-1 bg-current rounded-sm transition-all ease-in duration-200`}
                    ></span>
                    <span
                      className={`${
                        isOpen
                          ? "-rotate-45 top-2.5 left-0 w-full"
                          : "w-8 top-5 left-0"
                      } absolute block h-1 bg-current rounded-sm transition-all ease-in duration-200`}
                    ></span>
                  </div>
                </div>
              </button>
            </div>
            {/* Elementy menu */}
            <div
              className={`${
                isOpen
                  ? "absolute top-0 right-0 "
                  : "absolute top-0 -right-full"
              } h-dvh lg:h-fit w-2/3 lg:w-auto lg:static bg-linear-to-r from-gray-950 to-gray-800 lg:from-transparent lg:to-transparent lg:bg-transparent shadow-2xl lg:shadow-none text-white transition-all duration-200 ease-in-out`}
              id="main-menu"
            >
              <div className="flex flex-col lg:flex-row xl:grid xl:grid-cols-3 xl:w-full py-20 lg:py-0 uppercase font-bold">
                <ul className="flex list-none flex-col lg:flex-row w-full items-start justify-end lg:justify-start lg:items-center lg:gap-0">
                  {leftSideItems?.map((item) => {
                    const slug =
                      item?.slug != "/"
                        ? `/${locale}/${item.slug}`
                        : `/${locale}`;
                    const isActive = pathname === slug;
                    return (
                      <MenuItem
                        key={item?.id}
                        slug={slug}
                        // display={item?.displayName}
                        display={item?.displayName[locale]}
                        toggle={closeMenu}
                        isActive={isActive}
                      />
                    );
                  })}
                </ul>
                <Link href={`/${locale}`}>
                  <LogoDesktop />
                </Link>
                <ul className="flex list-none flex-col lg:flex-row w-full items-start justify-end lg:items-center lg:gap-0">
                  {rightSideItems?.map((item) => {
                    const slug = item?.slug
                      ? `/${locale}/${item.slug}`
                      : `/${locale}`;
                    const isActive = pathname === slug;
                    return (
                      <MenuItem
                        key={item?.id}
                        slug={slug}
                        display={item?.displayName[locale]}
                        toggle={closeMenu}
                        isActive={isActive}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
