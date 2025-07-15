import Input from "../../common/Input";

export default function Form() {
  return (
    <div className="h-auto w-screen bg-gradient-to-r from-blue-200 to-cyan-200 py-5">
      <form className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-extrabold">
          Create an Account
        </h1>

        <Input
          label="First Name"
          id="firstName"
          type="text"
          className="w-full"
        />
        <Input label="Last Name" id="lastName" type="text" className="w-full" />
        <Input label="Email" id="email" type="email" className="w-full" />
        <Input label="Phone" id="phone" type="text" className="w-full" />
        <Input
          label="Password"
          id="password"
          type="password"
          className="w-full"
        />
        <Input
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          className="w-full"
        />
        <button
          onClick={() => {}}
          className="mx-auto mt-8 block rounded-lg bg-blue-300 px-8 py-3 font-bold text-white hover:bg-blue-400"
        >
          Register
        </button>
      </form>
    </div>
  );
}
