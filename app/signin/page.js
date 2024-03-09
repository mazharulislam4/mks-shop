import site from "public/site";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `${site.name} > sing in`,
  };
}

function SignIn() {

  return <div>Signup</div>;
}

export default SignIn;
