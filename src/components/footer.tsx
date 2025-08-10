"use client";

import { FOOTER_LINKS } from "@/config/routes";
import { BookOpenText, HomeIcon, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[430px] bg-white border-t border-gray-200 p-2 rounded-b-xl shadow-lg">
      <nav>
        <ul className="flex justify-between items-center px-6">
          <li className="rounded-md hover:bg-gray-100 cursor-pointer">
            <Link
              href={FOOTER_LINKS.HOME}
              className={`flex flex-col items-center justify-center gap-2 py-2 px-4
                ${pathname === FOOTER_LINKS.HOME ? "text-blue-500" : ""}`}
            >
              <HomeIcon />
              <span className="text-xs">Home</span>
            </Link>
          </li>
          <li className="rounded-md hover:bg-gray-100 cursor-pointer">
            <Link
              href={FOOTER_LINKS.MERCHANT}
              className={`flex flex-col items-center justify-center gap-2 py-2 px-4
                ${pathname === FOOTER_LINKS.MERCHANT ? "text-blue-500" : ""}`}
            >
              <Users />
              <span className="text-xs">Merchant</span>
            </Link>
          </li>
          <li className="rounded-md hover:bg-gray-100 cursor-pointer">
            <Link
              href={FOOTER_LINKS.LEARN}
              className={`flex flex-col items-center justify-center gap-2 py-2 px-4
                ${pathname === FOOTER_LINKS.LEARN ? "text-blue-500" : ""}`}
            >
              <BookOpenText />
              <span className="text-xs">Learn</span>
            </Link>
          </li>
          <li className="rounded-md hover:bg-gray-100 cursor-pointer">
            <Link
              href={FOOTER_LINKS.SETTING}
              className={`flex flex-col items-center justify-center gap-2 py-2 px-4
                ${pathname === FOOTER_LINKS.SETTING ? "text-blue-500" : ""}`}
            >
              <Settings />
              <span className="text-xs">Setting</span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
