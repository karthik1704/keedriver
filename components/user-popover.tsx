"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUserRound, Settings, User } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LogoutButton from "./logout-button";
import Link from "next/link";

const UserPopover = ({ user }) => {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center justify-center gap-3 mr-5">
        <h6 className=" font-bold text-lg capitalize">
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
            href="/myaccount"
            className="w-full flex items-center gap-3 hover:bg-gray-100 p-2 "
          >
            <CircleUserRound className=" text-turquoise" />
            <span className="inline-block">Profile</span>
          </Link>
          <Link
            href="/setting"
            className="w-full flex items-center gap-3 hover:bg-gray-100 p-2"
          >
            <Settings className="text-turquoise" />
            <span className="inline-block">Settings</span>
          </Link>
          <LogoutButton />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserPopover;
