import { redirect } from "next/navigation";
import React from "react";

function Home() {
  redirect("/auth");
  return <div>Home</div>;
}

export default Home;
