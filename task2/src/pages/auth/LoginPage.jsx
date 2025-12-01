import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/shared/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <LogIn className="mx-auto h-10 w-auto text-black" />

        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-black">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />

        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?{" "}
          <Link
            className="font-semibold text-amber-700 hover:text-amber-400"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
