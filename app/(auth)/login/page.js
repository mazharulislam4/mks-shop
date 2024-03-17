import LoginForm from "@/components/forms/loginForm";
import Link from "next/link";

function LoginPage() {
  return (
    <section className="max-w-[500px] mx-auto">
      <h1>Sign up</h1>
      <span className="block text-gray my-3">
        Don’t have an accout yet?
        <Link href={"/register"} className="text-cyan-500">
          Sign up
        </Link>
      </span>
      <LoginForm />
    </section>
  );
}

export default LoginPage