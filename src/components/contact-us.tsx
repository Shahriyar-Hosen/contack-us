"use client";

import { parsons } from "@/lib/data";
import { IParson } from "@/types";
import { useState } from "react";
import { ContactForm, ParsonButton } from ".";

export const ContactUs = () => {
  const [selectedParson, setSelectedParson] = useState<IParson[]>([]);

  console.log("🚀 ~ ContactUs ~ selectedParson:", selectedParson);

  const handleSelect = (parson: IParson) => {
    if (selectedParson.includes(parson)) {
      setSelectedParson((prv) => prv.filter((item) => item.id !== parson.id));
    } else {
      setSelectedParson((prv) => [...prv, parson]);
    }
  };

  return (
    <div className="w-full max-w-[506px] mx-auto p-10 space-y-10">
      <div className="space-y-2.5">
        <h2 className="font-semibold text-3xl leading-[36.31px] tracking-[-2%] text-start">
          Let’s connect Our Team!
        </h2>
        <div className="space-x-2.5">
          {parsons.map((item) => (
            <ParsonButton onClick={() => handleSelect(item)} key={item.id}>
              {item.name}
            </ParsonButton>
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
