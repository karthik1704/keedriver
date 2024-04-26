"use client";

import * as React from "react";
import { ChevronUp, ChevronDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

type MenuType = {
  title: string;
  subMenu?: { routeName: string; href: string }[];
};

export default function MobileMenu({
  title,
  subMenu,
  values,
  routedriectry,
}: MenuType) {
  const [isOpen, setIsOpen] = React.useState(false);

  const { children } = values;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger asChild>
        <div className="w-full flex items-center justify-between gap-4 px-2">
          <h4 className="text-sm font-semibold cursor-pointer">
            {routedriectry ? <Link href={routedriectry}> {title}</Link> : title}
          </h4>
          {children ? (
            <Button variant="ghost" size="sm" className="w-9 p-0">
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle</span>
            </Button>
          ) : (
            ""
          )}
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-2">
        {subMenu?.map((sub, i) => {
          return (
            <Link
              href={sub.href}
              key={i}
              className="rounded-md block border-b px-4 py-3 font-mono text-sm"
            >
              {sub.routeName}
            </Link>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
