import { ChevronDown } from "lucide-react";

export function ArrowDown({ anchor }) {
  return (
    <div className="flex justify-center">
      <a
        href={`#${anchor}`}
        className="group flex justify-center items-center gap-3"
      >
        <hr className="w-10 text-slate-400"></hr>
        <div className="w-12 h-12 text-white bg-sky-500 group-hover:bg-pink-500 rounded-full transition-colors duration-200 ease-in flex items-center justify-center">
          <ChevronDown size={40} />
        </div>
        <hr className="w-10 text-slate-400"></hr>
      </a>
    </div>
  );
}
