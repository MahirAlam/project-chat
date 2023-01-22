import { FcGoogle } from "react-icons/fc";
import { BsExclamationLg } from "react-icons/bs";

function Login() {
  return (
    <>
      <main className="mx-auto w-full max-w-md p-6">
        <div className="mt-7 rounded-xl border border-base-1/20 bg-gray-50 shadow-md">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block font-serif text-2xl font-bold text-base-2">
                Sign Up
              </h1>
              <p className="font-mono text-sm text-base-1/70">
                and Start Chatting
              </p>
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
                      name="email"
                      placeholder=" Email address"
                      className="block w-full rounded-md border border-base-2/10 bg-base-1/5 py-3 px-4 text-sm text-base-2 shadow-inner outline-none focus:border-blue-500 focus:ring-blue-500"
                      required
                      aria-describedby="email-error"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3">
                      <BsExclamationLg className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                  <p
                    className="mt-2 hidden text-xs text-red-600"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                {/* End Form Group */}

                {/* Form Group */}
                <div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      name="password"
                      className="block w-full rounded-md border border-base-2/10 bg-base-1/5 py-3 px-4 text-sm text-base-2 shadow-inner outline-none focus:border-blue-500 focus:ring-blue-500"
                      required
                      aria-describedby="password-error"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3">
                      <BsExclamationLg className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                  <p
                    className="mt-2 hidden text-xs text-red-600"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* End Form Group */}

                {/* Form Group */}
                <div>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      placeholder="Confirm Password"
                      className="block w-full rounded-md border border-base-2/10 bg-base-1/5 py-3 px-4 text-sm text-base-2 shadow-inner outline-none focus:border-blue-500 focus:ring-blue-500"
                      required
                      aria-describedby="confirm-password-error"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="mt-2 hidden text-xs text-red-600"
                    id="confirm-password-error"
                  >
                    Password does not match the password
                  </p>
                </div>
                {/* End Form Group */}

                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="mt-0.5 shrink-0 rounded border-base-2/10 outline-none"
                    />
                  </div>
                  <div className="ml-2 font-sans">
                    <label
                      htmlFor="remember-me"
                      className="text-sm text-base-2/80"
                    >
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
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-purple-500 py-3 px-4 text-sm font-semibold text-white outline-none transition-all hover:bg-purple-700  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-base-2/10 bg-base-2/10 py-3 px-4 align-middle text-sm font-medium text-base-2 shadow-sm transition-all hover:bg-base-2/20 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <FcGoogle className="h-auto w-4" />
                Sign up with Google
              </button>
            </div>
            <p className="mt-2 text-center text-sm text-base-1/70 dark:text-gray-400">
              Already have an account?
              <a
                className="ml-1 rounded-sm font-medium text-purple-600 decoration-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                href="#"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
