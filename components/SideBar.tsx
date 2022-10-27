import { signOut } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { TiTimes } from "react-icons/ti";
import { auth, db } from "../firebase";
import SingleSideBarView from "./sidebar/SingleSideBarView";

function SideBar() {
  const [user] = useAuthState(auth);
  const [showSearch, setShowSearch] = useState(false);
  const [recEmail, setRecEmail] = useState("");
  const [allMessage, setAllMessage] = useState<{
    message: string;
    about: boolean;
  }>();

  const chatsRef = collection(db, "chats");
  const Q = query(chatsRef, where("users", "array-contains", user.email));
  const [chatsSnapshot] = useCollectionData(Q);

  useEffect(() => {
    const handleRecEmailChange = async () => {
      if (recEmail === user.email) {
        setAllMessage({ message: "It's your email!", about: false });
        return;
      }

      if (recEmail.split("@")[1] !== "gmail.com") {
        setAllMessage({ message: "Invalid Email!", about: false });
        return;
      }

      const userExists = chatsSnapshot
        ?.map((chat) => chat.users.includes(recEmail))
        .includes(true);

      if (userExists) {
        setAllMessage({ message: "Already in your chat list!", about: false });
        return;
      }

      const Q = query(collection(db, "users"), where("email", "==", recEmail));
      const AllRelatedUsers = await getDocs(Q);
      if (AllRelatedUsers?.docs.length !== 1) {
        setAllMessage({ message: "User Doesn't Exist!", about: false });
        return;
      }

      addDoc(collection(db, "chats"), {
        users: [recEmail, user.email],
      });
      setAllMessage({ message: "User Added Successfully", about: true });
      setRecEmail("");
    };
    if (recEmail) {
      handleRecEmailChange();
    }
  }, [recEmail, chatsSnapshot, user]);
  return (
    <>
      <header className="shadow-lg right-0 z-50 text-sm h-16 fixed left-0 md:right-[70%] lg:right-[75%] p-2 flex items-center justify-between flex-row">
        <div className="">
          <span className="inline-flex items-center self-start font-sans text-xl font-semibold gap-x-2 dark:text-white/95">
            <Image
              className="transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
              width={"44px"}
              height={"44px"}
              src="/logo.svg"
              alt="Logo"
            />
            Project Chat
          </span>
        </div>
        <div className="flex flex-row space-x-2">
          <div>
            <button
              type="button"
              onClick={() => setShowSearch(true)}
              className={`${
                showSearch ? "hidden" : "flex"
              } p-2 rounded-full focus-visible:border-blue-500 focus-visible:border-2 dark:hover:bg-gray-800 hover:bg-gray-200 focus-visible:outline-none items-center z-20`}
            >
              <BiSearchAlt className="w-6 h-6 text-slate-800 dark:text-slate-400 active:fill-slate-500" />
            </button>
            <div className={`${showSearch ? "block" : "hidden"}`}>
              <label htmlFor="icon" className="sr-only">
                Search
              </label>
              <div className="absolute left-2 top-2 right-2">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-[10px]">
                  <BiSearch className="w-5 h-5 text-slate-700 dark:text-slate-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="py-3 px-4 pl-11 bg-gray-200 block w-[88%] border-gray-300 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400"
                  placeholder="user@gmail.com"
                />
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="absolute right-0 sm:right-3 md:-right-1 lg:right-0 top-2 dark:border-slate-400 border-slate-700 focus-visible:border-blue-600 focus-visible:outline-none focus:border-slate-600 hover:border-slate-500 border-[2.5px] p-1 rounded-full items-center z-20"
                >
                  <MdOutlineClose className="text-slate-700 dark:text-slate-400 h-[18px] active:fill-slate-400 w-[18px]" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <button
              className={`${
                showSearch ? "hidden" : "flex"
              } focus-visible:border-blue-500 justify-center items-center inline-block focus-visible:border-2 dark:hover:bg-gray-800 hover:bg-gray-200 focus-visible:outline-none h-[2.375rem] w-[2.375rem] bg-transparent rounded-full overflow-hidden`}
              data-hs-overlay="#add-user-modal"
            >
              <AiOutlinePlusCircle className="w-[26px] h-[26px] text-slate-700 dark:text-slate-400" />
            </button>
            <div
              id="add-user-modal"
              className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      Modal title
                    </h3>
                    <button
                      type="button"
                      className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                      data-hs-overlay="#add-user-modal"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-3.5 h-3.5"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setRecEmail(e.target[0].value);
                    }}
                  >
                    <div className="p-4 overflow-y-auto">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        required
                        placeholder="user@gmail.com"
                      />
                      <p className="mt-1 text-center text-gray-800 dark:text-gray-400">
                        you have to enter the users email whom you want to chat
                        with
                      </p>
                    </div>
                    <div
                      className={`${
                        allMessage?.message && !allMessage?.about
                          ? "block"
                          : "hidden"
                      } flex items-center mx-3 mb-2 bg-red-50 border border-red-200 text-sm text-red-600 rounded-md p-4`}
                      role="alert"
                    >
                      <TiTimes className="h-6 w-6 mr-2 rounded-full text-white bg-red-600" />
                      <span className="font-bold">
                        {allMessage?.message.toLocaleUpperCase()}
                      </span>
                    </div>
                    <div
                      className={`${
                        allMessage?.about ? "block" : "hidden"
                      } flex items-center mx-3 mb-2 bg-green-50 border border-green-200 text-sm text-green-600 rounded-md p-4`}
                      role="alert"
                    >
                      <BsCheckLg className="h-6 w-6 mr-2 p-1 rounded-full text-white bg-green-600" />
                      <span className="font-bold">
                        {allMessage?.message.toLocaleUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                      <button
                        type="button"
                        className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        data-hs-overlay="#add-user-modal"
                      >
                        Close
                      </button>
                      <button
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        type="submit"
                      >
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => signOut(auth)}
            className={`${
              showSearch ? "hidden" : "flex"
            } focus-visible:border-blue-500 relative hover:opacity-75 inline-block focus-visible:border-2 dark:hover:bg-gray-800 hover:bg-gray-200 focus-visible:outline-none h-[2.375rem] w-[2.375rem] bg-transparent rounded-full overflow-hidden`}
          >
            <Image
              src={user.photoURL}
              layout="fill"
              className="text-slate-700 dark:text-slate-400"
              alt="user avatar"
            />
            <svg
              className="w-full h-full text-slate-700 dark:text-slate-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.62854" y="0.359985" width="15" height="15" rx="7.5" />
              <path
                className="dark:fill-slate-400 fill-slate-700"
                d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
              />
              <path
                className="dark:fill-slate-400 fill-slate-700"
                d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className="flex flex-col before:mt-16 bg-transparent before:content-[' '] h-full overflow-auto w-full p-3 space-y-2 z-10 left-0">
        {chatsSnapshot?.map((chat) => {
          const chatUser = chat.users.filter(
            (User: string) => User !== user.email
          );
          return (
            <SingleSideBarView key={chatUser[0]} userEmail={chatUser[0]} />
          );
        })}
      </div>
    </>
  );
}

export default SideBar;
