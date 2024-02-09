"use client"

import * as React from "react"
import { ChevronUp, ChevronDown, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type  MenuType ={
    title: string;
    subMenu?: {routeName: string; href: string; }[] ;
} 

export default function MobileMenu({title, subMenu, }:MenuType) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-60 space-y-2"
    >
      <div className="flex items-center justify-between gap-4 px-2">
        <h4 className="text-sm font-semibold">
          Test
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
           {isOpen ? <ChevronUp className="h-4 w-4" />: <ChevronDown className="h-4 w-4" />} 
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
     
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border-b px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border-b px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
