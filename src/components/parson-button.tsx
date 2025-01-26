import { FC } from "react";

type IChildren = { children: React.ReactNode };
export const ParsonButton: FC<IChildren> = ({ children }) => {
  return (
    <button className="text-sm px-5 py-1 rounded-full bg-slate-300/20 hover:bg-secondary/30  transition-all delay-100">
      {children}
    </button>
  );
};
