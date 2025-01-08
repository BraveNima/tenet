"use client";

import Image from "next/image";
import logo from "../../public/attachment 1.png";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className=" dark:bg-gray-900  border border-[#E4E4E7]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} alt="logo" />
          <span className="self-center text-sm font-bold">Tenet Up</span>
        </Link>
        {pathname !== "/" && (
          <Button
            onClick={() => router.replace("/")}
            className=" text-white font-bold py-2 px-4 rounded hover:bg-blue-400 transition duration-300"
          >
            Go Back
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
