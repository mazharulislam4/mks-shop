import Image from "next/image";
import Link from "next/link";
import paymentMethod1 from "../../assets/Payment Methods-1.png";
import paymentMethod2 from "../../assets/Payment Methods-2.png";
import paymentMethod3 from "../../assets/Payment Methods-3.png";
import paymentMethod4 from "../../assets/Payment Methods-4.png";
import paymentMethod5 from "../../assets/Payment Methods-5.png";
import paymentMethod from "../../assets/Payment Methods.png";
import AboutWidget from "../widgets/aboutWidget";
import ImportantLinks from "../widgets/importantLinks";







function Footer() {
  return (
    <div className="container py-6">
      {/* page links  */}

      <div className="flex lg:flex-row flex-col gap-12 lg:gap-1 justify-between  items-center lg:items-start">
        <div className="text-white lg:w-4/12">
          <AboutWidget />
        </div>

        <div className="lg:w-4/12">
          <h2 className="text-white text-large mb-4 lg:text-start text-center">
            Page
          </h2>
          <ImportantLinks
            data={[
              { id: 1, title: "About", link: "/about" },
              { id: 2, title: "Shop", link: "/shop" },
              { id: 3, title: "Contact Us", link: "/contact" },
            ]}
          />
        </div>

        <div className="lg:w-4/12">
          <h2 className="text-white text-large mb-4 lg:text-start text-center">
            Info
          </h2>
          <ImportantLinks
            data={[
              { id: 1, title: "Shipping Policy", link: "/shipping-policy" },
              { id: 2, title: "Return & Refund", link: "/refund-policy" },
              { id: 4, title: "Support", link: "/support" },
              { id: 3, title: "FAQs", link: "/faq" },
            ]}
          />
        </div>
      </div>

      <div className="separator"></div>

      <div className="flex lg:flex-row flex-col lg:gap-2 gap-6 items-center pt-8 w-full  justify-between ">
        <h5 className="text-light mr-5 lg:order-1 order-3">
          Copyright © 2023 3legant. All rights reserved
        </h5>
        <ul className="flex lg:flex-row flex-col items-center gap-3 lg:border-l border-primary text-gray order-2 ">
          <li className="pl-4">
            <Link href={"/privacy"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"/terms-condition"}>Terms & Conditions</Link>
          </li>
        </ul>

        {/* payment methods  */}

        <ul className="flex items-center gap-2 lg:order-3 order-2">
          <li>
            <Image src={paymentMethod} alt="visa" />
          </li>
          <li>
            <Image src={paymentMethod1} alt="american express" />
          </li>
          <li>
            <Image src={paymentMethod2} alt="master card" />
          </li>
          <li>
            <Image src={paymentMethod3} alt="stripe" />
          </li>
          <li>
            <Image src={paymentMethod4} alt="paypal" />
          </li>
          <li>
            <Image src={paymentMethod5} alt="apple pay" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
