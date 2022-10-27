import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FormEvent, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import { auth, db } from "../../firebase";

function ChatFooter({ chatId }: { chatId: string }) {
  const inputRef = useRef(null);
  const [user] = useAuthState(auth);
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (e.target[0].value !== "") {
      await addDoc(collection(db, `chats/${chatId}/messages`), {
        sender: user.displayName,
        message: e.target[0].value,
        timestamp: serverTimestamp(),
      });
      e.target[0].value = "";
    }
  };
  return (
    <div className="fixed bottom-0 left-0 lg:left-[calc(25%)] md:left-[calc(30%)] right-0">
      <div className="flex flex-row bg-neutral-300 items-center bg-base space-x-2 dark:bg-slate-900 px-4 py-2">
        <button
          type="button"
          className="inline-flex p-2 rounded-full hover:bg-gray-400/40 dark:hover:bg-gray-800 transition-opacity flex-shrink-0 justify-center items-center border border-transparent font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-none text-sm dark:text-slate-400 text-slate-700"
        >
          <IoImageOutline className="h-6 w-6" />
        </button>
        <form
          onSubmit={sendMessage}
          className="flex flex-row items-center w-full space-x-2 justify-center"
        >
          <input
            type="text"
            autoCapitalize="off"
            autoComplete="off"
            ref={inputRef}
            className="py-1 px-3 w-full rounded-md text-lg focus:ring-0 focus:outline-none h-9 bg-transparent border-none text-gray-900 dark:text-gray-200"
            placeholder="Message..."
          />
          <button
            type="submit"
            className="inline-flex p-2 rounded-md hover:opacity-60 transition-opacity flex-shrink-0 justify-center items-center border border-transparent font-semibold bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-none text-sm dark:text-slate-300 text-slate-800"
          >
            <FaRegPaperPlane className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatFooter;
