import { Button, Input, Textarea } from "@nextui-org/react";

function ContactForm() {
  return (
    <from className="w-full">
      <div className="mb-4 flex flex-col gap-4">
        <Input
          type="text"
          label="FULL NAME"
          placeholder="Your Name"
          labelPlacement="outside"
        />
        <Input
          type="email"
          label="Email"
          placeholder="Your Email"
          labelPlacement="outside"
        />
        <Textarea
          label="Description"
          labelPlacement="outside"
          placeholder="Your message"
          defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
          className="max-w-full"
        />
      </div>

      <Button type="button" className="bg-black text-white" radius="sm">
        Send Message
      </Button>
    </from>
  );
}

export default ContactForm;
