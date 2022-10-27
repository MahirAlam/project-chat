import Router, { useRouter } from "next/router";
import ChatBody from "../../../components/chat/ChatBody";
import ChatFooter from "../../../components/chat/ChatFooter";
import ChatHeader from "../../../components/chat/ChatHeader";
import SideBar from "../../../components/SideBar";
export default function Chat() {
  const router = useRouter();
  const { id, userId } = router.query;
  if (typeof id !== "string") Router.push("/");
  if (typeof userId !== "string") Router.push("/");

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-row w-full h-screen">
      <div className="w-full border-r dark:border-slate-800 border-slate-200 bg-slate-100 dark:bg-slate-900 z-50 md:w-[calc(30%)] lg:w-[calc(25%)] md:block hidden shadow-lg">
        <SideBar />
      </div>
      <div className="w-full z-20 md:w-[calc(70%)] lg:w-[calc(75%)] p-2 dark:bg-slate-800">
        <ChatHeader userId={userId as string} />
        <ChatBody chatId={id as string} />
        <ChatFooter chatId={id as string} />
      </div>
    </div>
  );
}
