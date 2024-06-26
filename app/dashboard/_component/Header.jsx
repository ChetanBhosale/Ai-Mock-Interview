"use client";

import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <div className="flex py-3 px-6  items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.png"} width={50} height={30} />
      <ul className=" hidden md:flex gap-6  ">
        <li
          className={`hover:text-primary hover:underline transition-all duration-100 cursor-pointer ${
            path === "/dashboard" && "text-primary font-semibold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:underline transition-all duration-100 cursor-pointer ${
            path === "/questions" && "text-primary font-semibold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:underline transition-all duration-100 cursor-pointer ${
            path === "/upgrade" && "text-primary font-semibold"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:underline transition-all duration-100 cursor-pointer ${
            path === "/how-it-works" && "text-primary font-semibold"
          }`}
        >
          How it works?
        </li>
      </ul>

      <UserButton />
    </div>
  );
};

export default Header;
