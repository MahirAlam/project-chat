import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
function ChatHeader() {
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900 shadow-md fixed text-sm py-3 h-16 flex left-0 md:left-[calc(30%)] lg:left-[calc(25%)] right-0 top-0 items-center justify-between px-3 flex-row">
        <div className="flex items-center">
          <Link href={"/"}>
            <button className="flex md:hidden hover:opacity-80 items-center justify-center -ml-1 focus-visible:border-blue-500 focus-visible:border-2 focus-visible:outline-none h-9 w-9 mr-2 bg-transparent rounded-full overflow-hidden">
              <IoIosArrowBack className="h-8 w-8 fill-slate-800  -ml-1 dark:fill-slate-300" />
            </button>
          </Link>
          <div className="relative h-[2.875rem] w-[2.875rem]">
            <Image
              className="inline-block flex-shrink-0 rounded-full"
              src="/user3.jpg"
              layout="fill"
              alt="user avatar"
            />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
              Sofiul Alam
            </h3>
            <p className="text-sm -mt-1 font-medium">
              <span className="w-2 h-2 inline-block ml-1 bg-green-500 rounded-full"></span>{" "}
              <span className="text-slate-600 dark:text-slate-400">
                Active Now
              </span>
            </p>
          </div>
        </div>
        <div className="space-x-2 flex flex-row">
          <button className="flex items-center justify-center focus-visible:border-blue-500 focus-visible:border-2 dark:hover:bg-gray-800 hover:bg-gray-200 focus-visible:outline-none h-[2.575rem] w-[2.575rem] -mr-1 bg-transparent rounded-full overflow-hidden">
            <BsThreeDotsVertical className="h-6 w-6 fill-slate-700 dark:fill-slate-200" />
          </button>
        </div>
      </header>
    </>
  );
}

export default ChatHeader;
