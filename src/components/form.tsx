"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./button";
import { Input, Textarea } from "./input";

interface ContactForm {
  fistName?: string;
  lastName?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
const defaultValue = { name: "", email: "", phone: "", message: "" };
export const ContactForm = () => {
  const [data, setData] = useState<ContactForm>(defaultValue);

  type InputEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target || {};
    setData((prv) => ({
      ...prv,
      [name]: value,
      name:
        name === "fistName" || name === "lastName"
          ? `${name === "fistName" ? value.trim() : data.fistName} ${
              name === "lastName" ? value.trim() : data.lastName
            }`
          : prv.name,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("🚀 ~ ContactForm ~ data:", data);
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
