import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;
type ITextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const inputClass =
  "w-full rounded-[5px] bg-[#FFFFFF0D] border border-[#FFFFFF33] py-3 px-3.5 text-[15px] tracking-[-1%] leading-[18.5px] text-[#FFFFFF99] focus:outline-none focus:border-secondary";

export const Input: FC<IInputProps> = (props) => {
  const { type, placeholder, ...others } = props;
  return (
    <input
      {...others}
      type={type || "text"}
      className={inputClass}
      placeholder={placeholder}
    />
  );
};

export const Textarea: FC<ITextareaProps> = (props) => {
  const { placeholder, ...others } = props;
  return (
    <textarea
      {...others}
      placeholder={placeholder}
      className={`${inputClass} h-[109px]`}
    />
  );
};
