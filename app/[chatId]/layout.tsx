"use client";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "../../firebase";
import Footing from "./Footing";
import Heading from "./Heading";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user] = useAuthState(Auth);
  if (!user) {
    redirect("/auth");
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="chat-area absolute right-0 top-0 bottom-0 flex w-full flex-col md:w-[63%] lg:w-[73%]">
          <Heading />
          {children}
          <Footing />
        </div>
      </div>
    </>
  );
}
