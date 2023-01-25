import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaQuestion } from "react-icons/fa";
import { Auth } from "../../firebase";

function Sidebar() {
  const [user] = useAuthState(Auth);
  return (
    <>
      <div className="mb-4 flex flex-row items-center justify-between p-2">
        <h1 className="font-sans text-2xl">Chats</h1>

        <div
          className="hs-dropdown relative z-50 inline-flex [--auto-close:inside]"
          title="your profile"
        >
          <button
            id="hs-dropdown-auto-close-inside"
            type="button"
            className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-full border bg-white py-1 pl-1 pr-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
          >
            <img
              className="h-auto w-8 rounded-full"
              src={
                user?.photoURL
                  ? (user?.photoURL as string)
                  : "../profile-image.png"
              }
              alt="chat-user"
            />

            <span className="max-w-[7.5rem] truncate font-medium text-gray-600">
              {user?.displayName}
            </span>
            <svg
              className="h-2.5 w-2.5 text-gray-600 hs-dropdown-open:rotate-180"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <div
            className="hs-dropdown-menu duration mt-2 hidden min-w-[18rem] rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100"
            aria-labelledby="hs-dropdown-custom-trigger"
          >
            <div className="-m-2 rounded-t-lg bg-gray-100 py-3 px-5">
              <p className="text-sm text-gray-500">Signed in as</p>
              <p className="text-sm font-medium text-gray-800">{user?.email}</p>
            </div>
            <div className="mt-2 divide-y divide-gray-200 py-2 first:pt-0 last:pb-0">
              <div className="py-2 first:pt-0 last:pb-0">
                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400">
                  Settings
                </span>
                {/* <a
                  className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="#"
                >
                  <svg
                    className="flex-none"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                  </svg>
                  Newsletter
                </a>
                <a
                  className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="#"
                >
                  <svg
                    className="flex-none"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  Purchases
                </a>
                <a
                  className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="#"
                >
                  <svg
                    className="flex-none"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                    />
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                  </svg>
                  Downloads
                </a>
                <a
                  className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                  href="#"
                >
                  <svg
                    className="flex-none"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                  Team Account
                </a> */}
                <a
                  className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 outline-none hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500"
                  href="#"
                >
                  <FaQuestion className="flex-none" />
                  Coming Soon....
                </a>
              </div>
              <div className="py-2 first:pt-0 last:pb-0">
                {/* <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400">
                  Contacts
                </span> */}
                <a
                  className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 outline-none hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500"
                  href="#"
                >
                  <svg
                    className="flex-none"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search px-2 pb-4">
        <input
          type="text"
          placeholder="Search"
          className="block w-full rounded-md border-base-2/20 bg-gray-50 py-3 px-4 text-sm text-base-2 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="h-full overflow-auto py-2 px-3">
        <Link
          href="./d"
          className="entry mb-4 flex w-full transform cursor-pointer rounded bg-gray-100 p-3 shadow-md outline-none transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <div className="flex flex-row">
            <div className="relative h-12 w-12">
              <img
                className="mx-auto h-12 w-12 rounded-full"
                src="../profile-image.png"
                alt="chat-user"
              />
              <span className="absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-green-400"></span>
              {/* to INactive "bg-gray-400" */}
            </div>
            <div className="px-2">
              <div className="truncate">
                <span className="font-serif text-base-2">Ryann Remo</span>
              </div>
              <div>
                <span className="mr-1 font-sans text-sm text-base-2">You:</span>
                <small className="text-gray-600">Yea, Sure!</small>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-end justify-center text-right">
            <div>
              <small className="font-serif text-gray-500">1H Ago</small>
            </div>
            <div>
              {/* <small className="inline-block h-6 w-6 rounded-full bg-red-500 text-center text-xs leading-6 text-white">
                23
              </small> */}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
