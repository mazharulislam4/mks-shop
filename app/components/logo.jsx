import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src={"/my brand logo.svg"}
        alt="logo"
        width={180}
        height={80}
        style={{ aspectRatio: "9/4"  , height:"auto"}}
        priority
      />
    </Link>
  );
}

export default Logo;
