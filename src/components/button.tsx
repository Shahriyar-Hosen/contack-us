import { ButtonHTMLAttributes, FC } from "react";

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;
export const ParsonButton: FC<IButton> = ({ children }) => {
  return (
    <button className="text-sm px-5 py-1 rounded-full bg-slate-300/20 hover:bg-secondary/30  transition-all delay-100 active:bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
};

export const Button: FC<IButton> = ({ children }) => {
  return (
    <button className="w-full rounded-[5px] bg-gradient-to-r from-secondary to-primary py-3 text-lg font-semibold leading-[21.78px] tracking-[-1%] flex gap-2.5 justify-center items-center">
      {children}
    </button>
  );
};
