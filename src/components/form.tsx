"use client";

import { sendMessage } from "@/server/mail";
import { IContact, IParson } from "@/types";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "./button";
import { Input, Textarea } from "./input";

const defaultValue = { name: "", email: "", phone: "", message: "" };

type TProps = { activeParson: IParson[] };
export const ContactForm: FC<TProps> = ({ activeParson }) => {
  const [data, setData] = useState<IContact>(defaultValue);
  console.log("🚀 ~ data:", data);

  type InputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target || {};
    setData((prv) => ({
      ...prv,
      [name]: value,
      name:
        name === "fistName" || name === "lastName"
          ? `${name === "fistName" ? value : data.fistName} ${
              name === "lastName" ? value : data.lastName || ""
            }`.trim()
          : prv.name,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsons = activeParson.map((parson) => parson.email);

    if (data.phone) {
      const reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
      if (!reg.test(data.phone))
        toast.error("Please enter a valid phone number!");
    }

    if (data.name && data.email && data.phone && data.message) {
      toast.promise(sendMessage(parsons, data), {
        loading: "Loading...",
        success: "Message sent successfully! 🚀",
        error: "Failed to send message! 😢",
      });
      setData(defaultValue);
    } else toast.error("Please fill all the fields!");
  };

  return (
    <form className="space-y-3.5" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center gap-3.5">
        <Input
          placeholder="First Name"
          name="fistName"
          onChange={handleChange}
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
        />
      </div>
      <Input
        placeholder="Email"
        name="email"
        type="email"
        onChange={handleChange}
      />
      <Input placeholder="Phone Number" name="phone" onChange={handleChange} />
      <Textarea placeholder="Message!" name="message" onChange={handleChange} />

      <Button type="submit">
        Send{" "}
        <span className="rotate-45 block text-2xl leading-none tracking-normal">
          🚀
        </span>
      </Button>
    </form>
  );
};
