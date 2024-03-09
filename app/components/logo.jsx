import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src={"/my brand logo.svg"}
        alt="logo"
        width={120}
        height={80}
        style={{ aspectRatio: "9/4"  , height:"auto"}}
        priority
      />
    </Link>
  );
}

export default Logo;
