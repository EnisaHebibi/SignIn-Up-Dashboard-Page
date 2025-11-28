import React from "react";
import { BadgePlus } from "lucide-react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/shared/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <BadgePlus className="mx-auto h-10 w-auto text-black" />

        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-black">
          Welcome to our Register Page!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />

        <p className="mt-10 text-center text-sm text-gray-400">
          Having an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
