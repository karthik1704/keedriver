"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, CircleUserRound, Settings, LogOut } from "lucide-react";
import AppDrawer from "./drawer";
import MainMenu from "./menu";
import { Button, buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Logout } from "@/app/action";

export default function MainNavBar({ user }) {
  return (
    <>
      <nav className="relative max-w[1440px] py-6 px-3 md:px-6 flex justify-between items-center z-30 border-b">
        <div className="flex gap-4">
          <div className="md:hidden">
            <AppDrawer user={user} />
          </div>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={90} height={100} />
          </Link>{" "}
        </div>

        <MainMenu />
        <div className="hidden md:inline-block">
          {user ? (
            <Popover>
              <PopoverTrigger className="flex items-center justify-center gap-3 mr-5">
                <h6 className="text-lg capitalize">
                  {user ? user.username : user.phone}
                </h6>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-52">
                <div className="flex flex-col gap-4 items-center justify-start">
                  <Link
                    href="/create-account"
                    className="w-full flex items-center gap-3 hover:bg-gray-100 p-2 "
                  >
                    <CircleUserRound className=" text-red-500" />
                    <span className="inline-block">Profile</span>
                  </Link>
                  <Link
                    href="/setting"
                    className="w-full flex items-center gap-3 hover:bg-gray-100 p-2"
                  >
                    <Settings className="text-red-500" />
                    <span className="inline-block">Settings</span>
                  </Link>
                  <Link
                    href={""}
                    className="w-full flex items-center gap-3 hover:bg-gray-100 p-2"
                  >
                    <LogOut className="text-red-500" />
                    <span onClick={() => Logout()} className="inline-block">
                      Logout
                    </span>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Link href="/login" className={`${buttonVariants()} px-8 `}>
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
