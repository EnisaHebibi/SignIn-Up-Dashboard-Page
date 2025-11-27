import React from "react";
import { Router } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
        <Router class="mx-auto h-10 w-auto text-black"></Router>

        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
          Welcome to our Register Page!
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" class="space-y-6">
          <div>
            <label for="name" class="block text-sm/6 font-medium text-gray-400">
              Name
            </label>
            <div class="mt-2">
              <input
                id="name"
                type="name"
                name="name"
                required
                autocomplete="name"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              for="surname"
              class="block text-sm/6 font-medium text-gray-400"
            >
              Surname
            </label>
            <div class="mt-2">
              <input
                id="surname"
                type="surname"
                name="surname"
                required
                autocomplete="surname"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-gray-400"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                required
                autocomplete="email"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm/6 font-medium text-gray-400"
              >
                Password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                required
                autocomplete="current-password"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm/6 font-medium text-gray-400"
              >
                Write again your Password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                required
                autocomplete="current-password"
                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Register
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm/6 text-gray-400">
          Having an account?
          <a
            href="#"
            class="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            <Link to="/login">Log In</Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
