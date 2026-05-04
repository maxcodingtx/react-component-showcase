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
    <div className="z-bg flex min-h-screen items-center justify-center px-4 py-12">
      <div className="z-card w-full max-w-md rounded-2xl px-8 py-10">
        <div className="mb-8 text-center">
          <span className="z-badge mb-4 inline-block">New Account</span>
          <h1 className="z-heading mt-3 text-4xl font-black">
            Create Your
            <br />
            Account
          </h1>
          <div className="z-divider mx-auto mt-4" />
        </div>

        <form onSubmit={handleSubmit((data) => submitRegister(data, reset))}>
          <div className="grid grid-cols-2">
            <div>
              <Input
                {...register("firstName")}
                label="First Name"
                id="firstName"
                type="text"
                className="w-full"
              />
              {errors.firstName && (
                <p className="z-error">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Input
                {...register("lastName")}
                label="Last Name"
                id="lastName"
                type="text"
                className="w-full"
              />
              {errors.lastName && (
                <p className="z-error">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <Input
            {...register("email")}
            label="Email Address"
            id="email"
            type="text"
            className="w-full"
          />
          {errors.email && <p className="z-error">{errors.email.message}</p>}

          <Input
            {...register("phone")}
            label="Phone Number"
            id="phone"
            type="text"
            className="w-full"
          />
          {errors.phone && <p className="z-error">{errors.phone.message}</p>}

          <Input
            {...register("password")}
            label="Password"
            id="password"
            type="password"
            className="w-full"
          />
          {errors.password && (
            <p className="z-error">{errors.password.message}</p>
          )}

          <Input
            {...register("confirmPassword")}
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            className="w-full"
          />
          {errors.confirmPassword && (
            <p className="z-error">{errors.confirmPassword.message}</p>
          )}

          <button disabled={isSubmitting} type="submit" className="z-btn mt-8">
            {isSubmitting ? "Creating Account..." : "Create Account →"}
          </button>
        </form>
      </div>
    </div>
  );
}
