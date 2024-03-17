import { Button, Checkbox, Input } from "@nextui-org/react";
import Link from 'next/link';

function LoginForm() {
  return (
    <form>
      <div className="flex flex-col w-full   mx-auto gap-8">
        <Input label="Email" variant="underlined" isRequired type="email" />
        <Input label="Phone" variant="underlined" isRequired type="tel" />
        <Input
          label="Password"
          variant="underlined"
          isRequired
          type="password"
        />
      </div>

      <div className="mt-3 flex justify-between items-center">
        <Checkbox
          defaultChecked
          size="sm"
          isRequired
          classNames={{
            icon: "text-black",
          }}
        >
          <span className="text-gray text-small">Remember me</span>
        </Checkbox>

        <Link href={"/forget-password"} className="text-gray text-small">
          Forget password ?
        </Link>
      </div>

      <Button type="submit"  className="w-full mt-8 bg-black text-white rounded-[5px]" >Login</Button>
    </form>
  );
}

export default LoginForm