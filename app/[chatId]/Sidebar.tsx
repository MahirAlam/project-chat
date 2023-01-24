import React from "react";

function Sidebar() {
  return (
    <div className="sidebar absolute left-0 top-0 bottom-0 hidden w-full flex-col border-r bg-gray-200 p-2 shadow-[inset_-5px_0_5px_-5px_rgba(0,0,0,0.3)] md:flex md:w-[37%] lg:w-[27%]">
      <div className="search px-2 pb-6">
        <input
          type="text"
          placeholder="Search"
          className="block w-full rounded-md border-base-2/20 bg-gray-50 py-3 px-4 text-sm text-base-2 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="h-full overflow-auto px-3">
        <button className="entry mb-4 flex w-full transform cursor-pointer rounded bg-gray-100 p-3 shadow-md transition-transform duration-300 hover:scale-105">
          <div className="flex flex-row">
            <div className="relative h-12 w-12">
              <img
                className="mx-auto h-12 w-12 rounded-full"
                src="../profile-image.png"
                alt="chat-user"
              />
              <span className="absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-green-400"></span>
              {/* to INactive "bg-gray-400" */}
            </div>
            <div className="px-2">
              <div className="truncate">
                <span className="font-serif text-base-2">Ryann Remo</span>
              </div>
              <div>
                <span className="mr-1 font-sans text-sm text-base-2">You:</span>
                <small className="text-gray-600">Yea, Sure!</small>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-end justify-center text-right">
            <div>
              <small className="font-serif text-gray-500">1H Ago</small>
            </div>
            <div>
              {/* <small className="inline-block h-6 w-6 rounded-full bg-red-500 text-center text-xs leading-6 text-white">
                23
              </small> */}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
