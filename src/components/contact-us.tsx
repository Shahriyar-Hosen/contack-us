"use client";

import { parsons } from "@/lib/data";
import { IParson } from "@/types";
import { useState } from "react";
import { ContactForm, ParsonButton } from ".";

export const ContactUs = () => {
  const [activeParson, setActiveParson] = useState<IParson[]>([]);

  const isActive = (parson: IParson) => activeParson.includes(parson);

  const handleSelect = (parson: IParson) => {
    if (isActive(parson)) {
      setActiveParson((prv) => prv.filter((item) => item.id !== parson.id));
    } else setActiveParson((prv) => [...prv, parson]);
  };

  return (
    <div className="w-full max-w-[506px] mx-auto p-10 space-y-10">
      <div className="space-y-2.5">
        <h2 className="font-semibold text-3xl leading-[36.31px] tracking-[-2%] text-start">
          Let’s connect Our Team!
        </h2>
        <div className="space-x-2.5">
          {parsons.map((item) => (
            <ParsonButton
              onClick={() => handleSelect(item)}
              key={item.id}
              className={
                isActive(item)
                  ? "bg-gradient-to-r from-secondary to-primary"
                  : ""
              }
            >
              {item.name}
            </ParsonButton>
          ))}
        </div>
      </div>
      <ContactForm activeParson={activeParson} />
    </div>
  );
};
