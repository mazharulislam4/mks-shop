import Link from "next/link";

function ImportantLinks({ data = [],  color }) {
  return (
    <ul className={`flex flex-col justify-center items-center lg:items-start lg:justify-normal  gap-4 `}>
      {data?.map((value, index) => (
        <li key={value.id} style={{ color: color ? color : "#fff" }}>
          <Link href={value.link}>{value.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ImportantLinks;
