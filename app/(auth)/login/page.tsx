
import type { Metadata } from "next";
import SigninForm from "./signin-form";

export const metadata: Metadata = {
  title: "Login | Keedriver",
  description: "Login Page",
};
function LoginPage() {
  return (
    <>
      <div className="flex h-full items-center bg-rose-800 justify-center p-5">
        <div className="max-w-lg w-full p-6 sm:p-10 md:p-14 bg-stone-800 shadow-lg rounded-lg">
          <h1 className="text-white text-3xl font-bold text-center mb-6">
            Welcome to KeeDriver
          </h1>
          <p className="text-white text-center text-xl marker:mb-4">Hey there!</p>
          <p className="text-transparent">.</p>
          <SigninForm />
         
        </div>
      </div>
    </>
  );
}

export default LoginPage;
