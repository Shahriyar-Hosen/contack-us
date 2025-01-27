import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC } from "react";

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;
export const ParsonButton: FC<IButton> = (props) => {
  const { children, className, ...others } = props || {};
  return (
    <button
      {...others}
      className={cn(
        "text-sm px-5 py-1 rounded-full bg-slate-300/20 hover:bg-secondary/30 transition-all delay-100 active:bg-gradient-to-r from-secondary to-primary",
        className
      )}
    >
      {children}
    </button>
  );
};

export const Button: FC<IButton> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full rounded-[5px] bg-gradient-to-r from-secondary to-primary py-3 text-lg font-semibold leading-[21.78px] tracking-[-1%] flex gap-2.5 justify-center items-center"
    >
      {children}
    </button>
  );
};
