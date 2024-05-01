import { signIn } from "./action";

const SigninForm = () => {
  return (
    <form action={signIn} className="mb-4 flex flex-col gap-4">
      {/* <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-700">Enter Mobile Number</label> */}

      <input
        type="tel"
        id="mobile"
        name="mobile"
        autoComplete="mobile tel"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-red-500"
        placeholder="Enter Phone Number"
        required
      />
      <button
        className="w-full bg-red-500 text-white text-center capitalize font-bold py-2 px-4 rounded-lg"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default SigninForm;
