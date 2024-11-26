"use client";
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
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { sign } from "crypto";
import { signIn } from "../login/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "sonner";

const FormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const initialState = {}; // Define initialState
  const [state, actionFn] = useFormState(signIn, initialState);

  const searchParams = useSearchParams();
  const q = searchParams.get('q');



  useEffect(() => {
    if (state?.message)
      toast.error(state?.message, {
        duration: 10000,
        closeButton: true,
      });
  }, [state?.message, state]);


  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const decodePhone = Buffer.from(q as string, 'base64').toString('ascii');
    const new_data = {...data, phone: decodePhone};

    actionFn(new_data);

  }

  return (
    <div className="w-full h-full flex justify-center items-center mt-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-center items-center gap-2"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-40 text-lg" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
