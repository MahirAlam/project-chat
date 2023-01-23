"use client";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { Auth } from "../../firebase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user] = useAuthState(Auth);
  if (user) {
    redirect("/chats");
  }

  return (
    <main className="mx-auto w-full max-w-md p-6">
      <div className="mt-7 rounded-xl border border-base-1/20 bg-gray-50 shadow-md">
        <div className="p-4 sm:p-7">{children}</div>
      </div>
    </main>
  );
}
