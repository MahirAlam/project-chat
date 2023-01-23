import React from "react";

function Heading() {
  return (
    <div className="flex-3 flex flex-row items-center justify-between p-3 shadow-[0_5px_5px_-5px_rgba(0,0,0,0.1)]">
      <div className="flex flex-row items-center space-x-3">
        <img
          className="h-12 w-12 rounded-full"
          src="../profile-image.png"
          alt="chat-user"
        />
        <h2 className="font-serif text-xl">Mercedes Yemelyan</h2>
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default Heading;
