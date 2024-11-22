"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";


export function InputOTPForm() {
  
  const form = useForm();
return (
  <div className="w-full h-full flex justify-start mt-3">
    <Form {...form}>
      <form className="w-full flex flex-col items-center gap-2">
            <FormItem className="flex flex-col items-center">
              <FormLabel className="text-xl font-bold">Enter Otp</FormLabel>
              <FormControl>
                <InputOTP  maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot className="text-lg" index={0} />
                    <InputOTPSlot className="text-lg" index={1} />
                    <InputOTPSlot className="text-lg" index={2} />
                    <InputOTPSlot className="text-lg" index={3} />
                    <InputOTPSlot className="text-lg" index={4} />
                    <InputOTPSlot className="text-lg" index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="text-lg">
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
    
      <Button className="w-40 text-lg" type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}
