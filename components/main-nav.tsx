"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, LogIn } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import AppDrawer from "./drawer";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function MainNavBar() {
  const pathname = usePathname();
  const routes = [
    { routeName: "Home", href: "/" },
    { routeName: "Services", children: [{ routeName: "Test", href: "/" }] },
    {
      routeName: "For Business",
      children: [{ routeName: "Test2", href: "/" }],
    },
    { routeName: "About Us", children: [{ routeName: "Test3", href: "/" }] },
  ];

  return (
    <>
      <nav className="relative max-w[1440px] py-6 px-3 md:px-6 flex justify-between items-center z-30 border-b">
        <div className="flex gap-4">
          <Menu width={20} height={20} className="inline-block md:hidden" />
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={90}
              height={100}
            />
          </Link>{" "}
        </div>
        {/* <ul className="hidden md:flex gap-9 h-full ">
        {routes.map((route) => (
          <li key={route.href} className="cursor-pointer font-bold text-base hover:text-primary transition-all">
            <Link href={route.href}>{route.pathname}</Link>
          </li>
        ))}
      </ul> */}

        <NavigationMenu>
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.routeName}>
                {!!route.children && (
                  <>
                    <NavigationMenuTrigger>
                      {route.routeName}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {route.routeName}
                      </NavigationMenuLink>
                    </Link>
                  </>
                )}
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:inline-block">
          <Link href="/login" className={`${buttonVariants()} px-8 `}>
            Login
          </Link>
        </div>
      </nav>
      <AppDrawer isOpen={true} onClose={() => false} />
    </>
  );
}

const ListItem = React.forwardRef<
React.ElementRef<typeof Link>,
React.ComponentPropsWithoutRef<typeof Link>
>(
  ({ className, title, children, ...props }, ref) => {
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
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
