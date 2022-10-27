import ChatBody from "../../components/chat/ChatBody";
import ChatFooter from "../../components/chat/ChatFooter";
import ChatHeader from "../../components/chat/ChatHeader";
import SideBar from "../../components/SideBar";
export default function Home() {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="w-full border-r dark:border-slate-800 border-slate-200 bg-slate-100 dark:bg-slate-900 z-50 md:w-[calc(30%)] lg:w-[calc(25%)] md:block hidden shadow-lg">
        <SideBar />
      </div>
      <div className="w-full z-20 md:w-[calc(70%)] lg:w-[calc(75%)] p-2 dark:bg-slate-800">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  );
}
