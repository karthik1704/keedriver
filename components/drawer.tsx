"use client";
import MobileMenu from "./mobile-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import {
  Menu,
  LogOut,
} from "lucide-react";
import Link from "next/link"; 

import {routes} from '@/constants/routes';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/app/action";


const AppDrawer = ({ user }: { user: any }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size="icon" className="">
          <Menu width={20} height={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="flex flex-col items-center justify-center">
          <SheetTitle>
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </SheetTitle>
          <SheetDescription>
            {user ? (
              user?.first_name || user?.last_name
            ) : (
              <div>
                <span className="inline-block mr-2">
                  Already have an account?
                </span>
                <Link href="/login" className="text-rose-700 font-bold">
                  Login
                </Link>
              </div>
            )}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {routes.map((route) => (
            <MobileMenu
              key={route.routeName}
              values={route}
              icon={route?.icon}
              routeDirectory={route.href}
              title={route.routeName}
              subMenu={route.children ? route.children : []}
            />
          ))}
        </div>
        {user ? (
          <Button className="w-full" onClick={() => logout()}>
            <LogOut />
            <span className="mr-2">Logout</span>
          </Button>
        ) : (
          ""
        )}
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AppDrawer;
