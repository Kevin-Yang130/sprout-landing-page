import Link from "next/link";
import Image from "next/image";
import React from "react";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/sprout.svg" alt="logo" width={200} height={100} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[16px] hover:font-bold transition-all"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
