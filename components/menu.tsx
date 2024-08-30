"use client";
import React from "react";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { routes } from "@/constants/routes";

export default function MainMenu() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.routeName}>
            {!!route.children && (
              <>
                <NavigationMenuTrigger className="text-black font-semibold text-lg bg-inherit5">
                  {route.routeName}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> */}
                  <ul className="p-2 gap-3 md:w-[200px] lg:w-[300px]">
                    {route?.children?.map((child) => (
                      <ListItem
                        href={child.href}
                        title={child.routeName}
                        key={child.routeName}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}

            {!!!route.children && (
              <>
                <Link href={route.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {route.routeName}
                  </NavigationMenuLink>
                </Link>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className=" font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
