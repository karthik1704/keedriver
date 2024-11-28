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
import { resendOTP, signIn } from "./actions";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

type InitialState = {
  message?: string | undefined;
};

const initialState: InitialState = {}; // Define initialState

export function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  });

  const [state, actionFn] = useFormState(signIn, initialState);

  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  // const [timer, setTimer] = useState<number>(110);

  // useEffect(() => {
  //   if (timer > 0) {
  //     const interval = setInterval(() => {
  //       setTimer((prevTimer) => prevTimer - 1);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [timer]);

  useEffect(() => {
    if (state?.message)
      toast.error(state?.message, {
        duration: 10000,
        closeButton: true,
      });
  }, [state?.message, state]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const decodePhone = Buffer.from(q as string, "base64").toString("ascii");
    const new_data = { ...data, phone: decodePhone };

    actionFn(new_data);
  }

  async function resendOTPHandler() {
    const decodePhone = Buffer.from(q as string, "base64").toString("ascii");
    const formData = new FormData();
    formData.append("phone", decodePhone);
    const res = await resendOTP(formData);

    console.log(res);

    if (res.message) {
      toast.info(res.message, {
        duration: 10000,
        closeButton: true,
      });
    }
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
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
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

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col items-center text-center text-sm text-muted-foreground">
            <p>Didn&apos;t receive the OTP?</p>
            <button
              type="button"
              onClick={resendOTPHandler}
              className="text-blue-500 hover:text-blue-700"
            >
              Resend OTP
            </button>
          </div>
          <Button className="w-40 text-lg" type="submit">
            {form.formState.isLoading || form.formState.isSubmitting
              ? "Loading..."
              : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
