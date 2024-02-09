import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import AppDrawer from "./drawer";
import MainMenu from "./menu";
import { Button, buttonVariants } from "./ui/button";


export default function MainNavBar() {

  return (
    <>
      <nav className="relative max-w[1440px] py-6 px-3 md:px-6 flex justify-between items-center z-30 border-b">
        <div className="flex gap-4">
          <AppDrawer />
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={90} height={100} />
          </Link>{" "}
        </div>
   

        <MainMenu />

        <div className="hidden md:inline-block">
        <Link href="/login" className={`${buttonVariants()} px-8 `}>
    Login
  </Link>
        </div>
      </nav>
      
    </>
  );
}


