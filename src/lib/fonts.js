import { Open_Sans, Lora, Shadows_Into_Light_Two } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-open-sans",
  display: "swap",
});

export const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lora",
  display: "swap",
});

export const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-shadows-into-light-two",
  display: "swap",
});
