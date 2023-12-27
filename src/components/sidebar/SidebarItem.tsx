"use client";
import { SidebarNavProps } from "@/lib/definitions";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarItem = ({ name, href }: SidebarNavProps) => {
  const pathname = usePathname();

  return (
    <li className={`menu-item ${pathname.includes(href) && "active"}`}>
      <Link key={name} href={href}>
        {name}
        <span className="angle-arrow">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 3L11 8L6 13" stroke="white" />
          </svg>
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
