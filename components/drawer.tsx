import clsx from "clsx";
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
import { Menu } from "lucide-react";
import { routes } from "@/constants";


const AppDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          size="icon"
          className=""
        >
          <Menu width={20} height={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} >
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you{'\''}re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {routes.map(route=>
          <MobileMenu key={route.routeName} title={route.routeName} subMenu={route.children ? route.children : []} />
            )}
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AppDrawer;
