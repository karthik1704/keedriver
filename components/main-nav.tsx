import Image from "next/image";
import Link from "next/link";
import AppDrawer from "./drawer";
import MainMenu from "./menu";
import { buttonVariants } from "./ui/button";

import { getCurrentUser } from "@/services/users";
import UserPopover from "./user-popover";

export default async function MainNavBar() {
  const user = await getCurrentUser();
  return (
    <>
      <nav className="relative bg-white y-300 max-w[1440px] py-2 px-3 md:px-6 flex justify-between items-center z-30 border-b">
        <div className="flex gap-4">
          <div className="md:hidden">
            <AppDrawer user={user} />
          </div>
          <Link href="/">
            <Image src="/images/new-logo.png" alt="logo" width={100} height={70} />
          </Link>{" "}
        </div>

        <MainMenu />
        <div className="hidden md:inline-block">
          {user ? (
            <UserPopover user={user} />
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
