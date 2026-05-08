import { lora } from "@/lib/fonts";

export function Title(props) {
  return (
    <h1
      className={`${lora.className} text-4xl md:text-5xl font-regular text-center py-3 text-slate-700`}
    >
      {props.children}
    </h1>
  );
}
