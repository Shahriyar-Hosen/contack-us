import { Button } from "./button";
import { Input, Textarea } from "./input";

export const ContactForm = () => {
  return (
    <form className="space-y-3.5">
      <div className="flex justify-between items-center gap-3.5">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </div>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Phone Number" />
      <Textarea placeholder="Message!" />

      <Button>
        Send{" "}
        <span className="rotate-45 block text-2xl leading-none tracking-normal">
          🚀
        </span>
      </Button>
    </form>
  );
};
