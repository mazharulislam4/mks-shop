import { Checkbox, Input } from "@nextui-org/react";

function RegisterForm() {
  return (
    <form>
      <div className="flex flex-col w-full   mx-auto gap-8">
        <Input label="First Name" variant="underlined" isRequired type="text" />
        <Input label="Last Name" variant="underlined" isRequired type="text" />
        <Input label="Email" variant="underlined" isRequired type="email" />
        <Input label="Phone" variant="underlined" isRequired type="tel" />
        <Input
          label="Password"
          variant="underlined"
          isRequired
          type="password"
        />
        <Input
          label="Confirm Password"
          variant="underlined"
          isRequired
          type="password"
        />
      </div>

      <div className="mt-3">
        <Checkbox defaultChecked size="md" isRequired  classNames={{
          icon:"text-black"
        }} >I agree with Privacy Policy and Terms of Use</Checkbox>
      </div>
    </form>
  );
}

export default RegisterForm;
