import RegisterForm from "@/components/forms/registerForm";
import Link from "next/link";
import site from "public/site";
export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${site.name} > register`,
  };
}

function Page() {
  return (
    <section className="max-w-[500px] mx-auto">
      <h1>Sign up</h1>
      <span className="block text-gray my-3">
        Already have an account? <Link href={"/login"} className="text-cyan-500">Sign in</Link>
      </span>
      <RegisterForm />
    </section>
  );
}

export default Page;
