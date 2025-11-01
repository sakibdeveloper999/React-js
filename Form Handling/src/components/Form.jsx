// File: RHFExample.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ 1️⃣ Define Yup Schema

const schema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function RHFExample() {
  // ✅ 2️⃣ Setup useForm with Yup resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema), // Connect Yup validation
    mode: "onTouched", // Validate after input is touched
  });

  // ✅ 3️⃣ Submit handler
  const onSubmit = async (data) => {
    console.log("✅ Form Data:", data);

    // Show loading delay for demo
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Form submitted successfully!");
    reset(); // Reset the form
  };

  // ✅ 4️⃣ JSX Part
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto mt-10 p-6 border rounded-2xl shadow-md space-y-4 bg-gray-50"
    >
      <h2 className="text-xl font-semibold text-center mb-4">
        🔐 React Hook Form Example
      </h2>

      {/* Email Field */}
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="example@gmail.com"
          autoFocus
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.email
              ? "border-red-500 focus:ring-red-300"
              : "focus:ring-blue-300"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label className="block font-medium mb-1">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="********"
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.password
              ? "border-red-500 focus:ring-red-300"
              : "focus:ring-blue-300"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg font-semibold transition-all"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default RHFExample;
// File: src/components/Form.jsx