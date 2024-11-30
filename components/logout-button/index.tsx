"use client";
import { LogOut } from "lucide-react";

import { logout } from "@/app/action";

const LogoutButton = () => {
  return (
    <button
      onClick={() => logout()}
      className="w-full flex items-center gap-3 hover:bg-gray-100 p-2"
    >
      <LogOut className="text-rose-700" />
      <span className="inline-block">Logout</span>
    </button>
  );
};

export default LogoutButton;
