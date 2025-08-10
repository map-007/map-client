"use client";

import { AUTH_ROUTES, HOME_URL } from "@/config/routes";
import { ArrowBigLeftDash, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="p-4 border-b flex justify-between items-center">
      <Link href={HOME_URL} className="font-bold uppercase">
        Logo
      </Link>
      {pathname === AUTH_ROUTES.LOGIN || pathname === AUTH_ROUTES.SIGNUP ? (
        <Link
          href={HOME_URL}
          className="border p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowBigLeftDash />
        </Link>
      ) : (
        <Link
          href={AUTH_ROUTES.LOGIN}
          className="border p-2 rounded-full hover:bg-gray-100"
        >
          <UserPlus />
        </Link>
      )}
    </header>
  );
};
export default Header;
