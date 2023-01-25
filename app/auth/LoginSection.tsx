"use client";
import { useRef } from "react";
import { BsExclamationLg } from "react-icons/bs";
import { Auth } from "../../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";

function LoginSection() {
  const termAcceptRef = useRef<HTMLInputElement>(null);
  const [signInWithGoogle] = useSignInWithGoogle(Auth);

  return (
    <>
      <div className="text-center">
        <h1 className="block font-serif text-2xl font-bold text-base-2">
          Sign Up
        </h1>
        <p className="font-mono text-sm text-base-1/70">and Start Chatting</p>
      </div>
      {/* Form */}
      <form>
        <div className="mt-6 grid gap-y-4">
          {/* Form Group */}
          <div>
            <div className="relative">
              <input
                type="email"
                id="email"
                disabled
                name="email"
                placeholder=" Email address"
                className="block w-full cursor-not-allowed rounded-md border border-base-2/10 bg-base-1/5 py-3 px-4 text-sm text-base-2 shadow-inner outline-none focus:border-blue-500 focus:ring-blue-500"
                required
                aria-describedby="email-error"
              />
              <div className="absolute inset-y-0 right-0 hidden items-center pr-3">
                <div className="hs-tooltip inline-block [--trigger:focus]">
                  <a className="hs-tooltip-toggle block text-center" href="#">
                    <BsExclamationLg className="h-5 w-5 text-red-500" />
                    <div
                      className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md border bg-gray-50 py-1 px-2 font-sans text-sm font-medium text-red-500 opacity-0 shadow-md transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                      role="tooltip"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Form Group */}

          {/* Form Group */}
          <div>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                disabled
                name="password"
                className="block w-full cursor-not-allowed rounded-md border border-base-2/10 bg-base-1/5 py-3 px-4 text-sm text-base-2 shadow-inner outline-none focus:border-blue-500 focus:ring-blue-500"
                required
                aria-describedby="password-error"
              />
              <div className="absolute inset-y-0 right-0 hidden items-center pr-3">
                <div className="hs-tooltip inline-block [--trigger:focus]">
                  <a className="hs-tooltip-toggle block text-center" href="#">
                    <BsExclamationLg className="h-5 w-5 text-red-500" />
                    <div
                      className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md border bg-gray-50 py-1 px-2 font-sans text-sm font-medium text-red-500 opacity-0 shadow-md transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                      role="tooltip"
                    >
                      8+ characters required
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Form Group */}

          {/* Form Group */}
          {/* <div>
            <div className="relative">
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                disabled
                placeholder="Confirm Password"
                className="block w-full cursor-not-allowed rounded-md border border-base-2/10 bg-base-1/5 py-3 px-4 text-sm text-base-2 shadow-inner outline-none focus:border-blue-500 focus:ring-blue-500"
                required
                aria-describedby="confirm-password-error"
              />
              <div className="absolute inset-y-0 right-0 hidden items-center pr-3">
                <div className="hs-tooltip inline-block [--trigger:focus]">
                  <a className="hs-tooltip-toggle block text-center" href="#">
                    <BsExclamationLg className="h-5 w-5 text-red-500" />
                    <div
                      className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md border bg-gray-50 py-1 px-2 font-sans text-sm font-medium text-red-500 opacity-0 shadow-md transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                      role="tooltip"
                    >
                      Password Does Not Match
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* End Form Group */}

          {/* Checkbox */}
          <div className="flex items-center">
            <div className="flex">
              <input
                id="remember-me"
                ref={termAcceptRef}
                name="remember-me"
                type="checkbox"
                className="mt-0.5 shrink-0 rounded border-base-2/10 outline-none"
              />
            </div>
            <div className="ml-2 font-sans">
              <label htmlFor="remember-me" className="text-sm text-base-2/80">
                I accept the
                <a
                  className="ml-1 rounded-sm font-medium text-purple-600 decoration-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          {/* End Checkbox */}

          <button
            type="submit"
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-transparent bg-purple-500/50 py-3 px-4 text-sm font-semibold text-white outline-none transition-all  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Sign up
          </button>
        </div>
      </form>
      {/* End Form */}
      <div className="mt-4 flex items-center py-3 text-xs uppercase text-base-1/70 before:mr-6 before:flex-[1_1_0%] before:border-t before:border-base-2/40 after:ml-6 after:flex-[1_1_0%] after:border-t after:border-base-2/40">
        Or
      </div>
      <div className="mb-4">
        <button
          type="button"
          onClick={() => {
            if (termAcceptRef?.current?.value === "on") signInWithGoogle();
          }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-base-2/10 py-3 px-4 align-middle text-sm font-medium text-base-2 shadow-sm transition-all hover:bg-base-2/10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          <FcGoogle className="h-auto w-4" />
          Sign up with Google
        </button>
      </div>
      <p className="mt-2 text-center text-sm text-base-1/70">
        Already have an account?
        <a
          className="ml-1 rounded-sm font-medium text-purple-600 decoration-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          href="#"
        >
          Sign in here
        </a>
      </p>
    </>
  );
}

export default LoginSection;
