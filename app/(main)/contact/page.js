import ContactForm from "@/components/forms/contactForm";
import Breadcrumb from "@/components/widgets/breadcrumb";
import Link from "next/link";
import { LiaAddressBookSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";


function ContactPage() {
  return (
    <>
      <section className="container py-8">
        <Breadcrumb />
      </section>
      <main>
        <section>
          <div className="container">
            <h1 style={{ inlineSize: "38ch" }} className="text-large font-bold">
              We believe in sustainable decor. We’re passionate about life at
              home.
            </h1>
            <p className="pt-5" style={{ inlineSize: "100ch" }}>
              Our features timeless furniture, with natural fabrics, curved
              lines, plenty of mirrors and classic design, which can be
              incorporated into any decor project. The pieces enchant for their
              sobriety, to last for generations, faithful to the shapes of each
              period, with a touch of the present
            </p>
          </div>
        </section>

        {/* about us section  */}

        <section className="py-8">
          <div className="container">
            <div className="flex md:flex-row flex-col gap-12 bg-primary py-8 px-6">
              <div className="md:w-1/2 min-h-[200px] bg-slate-600 "></div>

              <div className="md:w-1/2 self-center ">
                <h3>About Us</h3>
                <p>
                  3legant is a gift & decorations store based in HCMC, Vietnam.
                  Est since 2019. Our customer service is always prepared to
                  support you 24/7
                </p>
                <Link
                  href={"/shop"}
                  className="underline capitalize font-medium inline-block mt-4"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* contact us  */}

        <section className="container pb-8">
          <h2 className="font-bold py-4 text-center ">Contact Us</h2>

          <div className="grid md:grid-cols-3 md:gap-10 gap-6">
            {/* card  */}
            <div className="flex flex-col justify-center  items-center bg-primary py-4 px-6 rounded-sm">
              <span>
                <LiaAddressBookSolid />
              </span>
              <span className="text-small text-gray">Address</span>
              <span className="text-small font-medium">
                234 Hai Trieu, Ho Chi Minh City, Viet Nam
              </span>
            </div>

            <div className="flex flex-col justify-center  items-center bg-primary py-4 px-6 rounded-sm">
              <span>
                <SlPhone />
              </span>
              <span className="text-small text-gray uppercase">Contact us</span>
              <span className="text-small font-medium">+84 234 567 890</span>
            </div>

            <div className="flex flex-col justify-center  items-center bg-primary py-4 px-6 rounded-sm">
              <span>
                <MdEmail />
              </span>
              <span className="text-small text-gray uppercase">Email</span>
              <span className="text-small font-medium">hello@3legant.com</span>
            </div>
          </div>

          <div>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
