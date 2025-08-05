import Input from "../../common/Input";
import { useForm } from "react-hook-form";
import { formSchema, type FormData } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitRegister } from "./submitRegister";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="h-auto w-screen bg-gradient-to-r from-blue-200 to-cyan-200 py-5">
      <form
        onSubmit={handleSubmit((data) => submitRegister(data, reset))}
        className="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-md"
      >
        <h1 className="mb-4 text-center text-2xl font-extrabold">
          Create an Account
        </h1>

        <Input
          {...register("firstName")}
          label="First Name"
          id="firstName"
          type="text"
          className="w-full"
        />
        {errors.firstName && (
          <p className="text-center text-sm text-red-400">
            {errors.firstName.message}
          </p>
        )}
        <Input
          {...register("lastName")}
          label="Last Name"
          id="lastName"
          type="text"
          className="w-full"
        />
        {errors.lastName && (
          <p className="text-center text-sm text-red-400">
            {errors.lastName.message}
          </p>
        )}
        <Input
          {...register("email")}
          label="Email"
          id="email"
          type="text"
          className="w-full"
        />
        {errors.email && (
          <p className="text-center text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
        <Input
          {...register("phone")}
          label="Phone"
          id="phone"
          type="text"
          className="w-full"
        />
        {errors.phone && (
          <p className="text-center text-sm text-red-400">
            {errors.phone.message}
          </p>
        )}
        <Input
          {...register("password")}
          label="Password"
          id="password"
          type="password"
          className="w-full"
        />
        {errors.password && (
          <p className="text-center text-sm text-red-400">
            {errors.password.message}
          </p>
        )}
        <Input
          {...register("confirmPassword")}
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          className="w-full"
        />
        {errors.confirmPassword && (
          <p className="text-center text-sm text-red-400">
            {errors.confirmPassword.message}
          </p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="mx-auto mt-8 block rounded-lg bg-blue-300 px-8 py-3 font-bold text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}
