"use client";

import React, { type JSX } from "react";
import { ChevronUp, ChevronDown, Plus, X, Sun, CircleUserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { SheetClose, SheetHeader } from "./ui/sheet";

type MenuType = {
  title: string;
  subMenu?: { routeName: string; href: string; icon: React.ReactNode }[];
  routeDirectory?: string;
  icon?: React.ReactNode;
  values: {
    routeName: string;
    href?: string;
    icon: JSX.Element;
    children?: {
      routeName: string;
      icon: React.ReactNode;
      href: string;
    }[];
  };
};

export default function MobileMenu({
  title,
  subMenu,
  values,
  routeDirectory,
  icon,
  user,
}: MenuType) {
  const [isOpen, setIsOpen] = React.useState(false);

  const { children } = values;

  return (
    <>
    {/* <SheetHeader
    {...user ? (
      <div className="flex flex-col justify-between items-center mt-4">
        <Link
          href="/myaccount"
          className="flex items-center justify-center gap-2"
        >
          <CircleUserRound className="text-rose-700" />
          <span className="inline-block">Profile</span>
        </Link>
      </div>
      ):null}
      /> */}
    <Collapsible
    open={isOpen}
    onOpenChange={setIsOpen}
    className="w-full space-y-2"
  >
    <div className="w-full flex items-center justify-between gap-4 px-2">
      <h4 className="text-sm font-semibold cursor-pointer">
        {routeDirectory ? (
          <SheetClose asChild>
            <>
              <Link
                className="flex items-center justify-center gap-2"
                href={routeDirectory}
              >
                <span>{icon}</span>
                {title}
              </Link>
              {/* {title ? (
      <div className="flex flex-col justify-between items-center mt-4">
        <Link
          href="/myaccount"
          className="flex items-center justify-center gap-2"
        >
          <CircleUserRound className="text-rose-700" />
          <span className="inline-block">Profile</span>
        </Link>
      </div>
      ):null} */}
            </>
          </SheetClose>
        ) : (
          <CollapsibleTrigger asChild>
            <Link className="flex items-center justify-center gap-2" href="">
              <span>{icon}</span>
              {title}
            </Link>
          </CollapsibleTrigger>
        )}
      </h4>
      {children ? (
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      ) : (
        ""
      )}
    </div>
  
    <CollapsibleContent className="space-y-2">
      {subMenu?.map((sub, i) => {
        return (
          <SheetClose asChild key={i}>
            <Link
              href={sub.href}
              className="rounded-md block border-b px-4 py-3 font-mono text-sm"
            >
              <ul className="flex items-center gap-3 list-none">
                <li>{sub?.icon}</li>
                <li>{sub.routeName}</li>
              </ul>
            </Link>
          </SheetClose>
        );
      })}
  
     
    </CollapsibleContent>
  </Collapsible>  
  </>
  );
}
