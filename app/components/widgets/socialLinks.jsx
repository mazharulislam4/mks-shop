import Link from "next/link";

function SocialLinks({ data = [] }) {
  return (
    <ul className="flex gap-6 items-center mt-6">
      {data.map((value) => (
        <li key={value.id}>
          <Link href={value.link} className="text-large ">
            {value.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
