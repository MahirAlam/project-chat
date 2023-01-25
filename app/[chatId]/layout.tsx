"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "../../firebase";
import Footing from "./Footing";
import Heading from "./Heading";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { chatId: string };
}) {
  const { chatId }: { chatId: string } = params;
  const [user] = useAuthState(Auth);
  if (!user) {
    redirect("/auth");
  }

  return (
    <>
      <div className="flex">
        <div
          className={`sidebar ${
            chatId === "chats" ? "flex" : "hidden"
          } absolute bottom-0 left-0 top-0 w-full flex-col border-r bg-gray-200 p-2 shadow-[inset_-5px_0_5px_-5px_rgba(0,0,0,0.3)] md:flex md:w-[37%] lg:w-[27%]`}
        >
          <Sidebar />
        </div>
        <div
          className={`chat-area ${
            chatId === "chats" ? "hidden" : "flex md:flex"
          } absolute right-0 top-0 bottom-0 w-full flex-col md:w-[63%] lg:w-[73%]`}
        >
          <Heading />
          {children}
          <Footing />
        </div>
      </div>
    </>
  );
}
