import { collection, query, where } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

const SingleSideBarView = ({
  id,
  userEmail,
}: {
  id: string;
  userEmail: string;
}) => {
  const Q = query(collection(db, "users"), where("email", "==", userEmail));
  const [user] = useCollection(Q);

  return (
    <Link href={`/chat/${user?.docs[0].id}/${id}`}>
      <button
        type="button"
        className="items-center flex-shrink-0 block w-full p-2 space-x-2 font-medium text-left rounded-lg group md:bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent dark:hover:bg-gray-800/40 hover:bg-gray-300/40"
      >
        <div className="flex items-center">
          <Image
            className="inline-block flex-shrink-0 rounded-full"
            src={user?.docs[0].data().photoURL}
            height={"46px"}
            width={"46px"}
            alt="user avatar"
          />
          <div className="ml-3">
            <h3 className="font-semibold text-slate-800 dark:text-slate-300">
              {user?.docs[0].data().name}
            </h3>
            <p className="-mt-1 text-sm font-medium text-gray-600 dark:text-slate-400">
              You: how are you bro? &#183;
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                {" "}
                4M AGO
              </span>
            </p>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default SingleSideBarView;
