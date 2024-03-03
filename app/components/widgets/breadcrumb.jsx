"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiaAngleRightSolid } from "react-icons/lia";

function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((item) => item !== "");
  const lastPath = paths[paths.length - 1];

  console.log(lastPath);

  return (
    <ul className="flex items-center gap-3 breadcrumb">
      <li>
        <Link href={"/"} className="flex  items-center gap-1 ">
          <span>Home</span>
          <span className="text-small ">
            <LiaAngleRightSolid />
          </span>
        </Link>
      </li>
      {paths.map((path, index) => (
        <li key={index}>
          <Link
            href={`${lastPath === path ? pathname : "/" + path}`}
            className={`flex  items-center gap-1 ${
              lastPath === path && "active"
            }`}
          >
            <span>{decodeURIComponent(path)}</span>
            {path !== lastPath && (
              <span className="text-small ">
                <LiaAngleRightSolid />
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumb;
