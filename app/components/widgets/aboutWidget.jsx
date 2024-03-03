import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import Logo from "../logo";
import SocialLinks from "./socialLinks";

const socialData = [
  { id: 1, icon: <FaInstagram />, title: "Instagram", link: "#" },
  {
    id: 2,
    icon: <FaFacebookF />,
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61552041955111",
  },
  { id: 3, icon: <PiLinkedinLogo />, title: "Linkedin" , link:"#"},
];

function AboutWidget() {
  return (
    <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
      <Logo />
      <h2  className="max-w-full lg:text-start text-center" style={{ inlineSize: "20ch" }}>
        More than just a game. It’s a lifestyle.
      </h2>

      <div>
        <SocialLinks data={socialData} />
      </div>
    </div>
  );
}

export default AboutWidget;
