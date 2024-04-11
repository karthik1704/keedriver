"use client";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const DriverForm = () => {
  return (
    <Form>
    <form className="space-y-4">
      <div className="flex items-center">
        <label className="mr-2">First Name:</label>
        <Input type="text" id="first-name" className="w-48" />
      </div>
      <div className="flex items-center">
        <FormLabel className="mr-2">Last Name:</FormLabel>
        <Input type="text" id="last-name" className="w-48" />
      </div>
      <div className="flex items-center">
        <label className="mr-2">E-mail:</label>
        <Input type="email" id="email" className="w-48" />
      </div>
      <div className="flex items-center">
        <label className="mr-2">Phone-number:</label>
        <Input className="w-48" />
        <FormDescription>
          only enter 10 digits phone number, should not contain &apos;+91&apos;
          and spaces
        </FormDescription>
        <FormMessage />
      </div>
    </form>
    </Form>
  );
};

export default DriverForm;
