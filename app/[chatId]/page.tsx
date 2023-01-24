"use client";

// Setup Chat Comonents

function ChatSection() {
  return (
    <>
      <div className="messages mt-4 overflow-auto">
        <div className="message mb-4 ml-1 flex justify-start text-left">
          <div className="max-w-[75%] flex-1 px-2 md:max-w-[60%]">
            <div className="inline-block rounded-md bg-base-2/10 p-2 px-3 text-base-2">
              <span>
                Hey there. We would like to invite you over to our office for a
                visit. How about it?
              </span>
            </div>
            <div className="flex w-full justify-between px-2">
              {/* <small className="text-gray-500">Seen</small>
              <small className="text-gray-500">15 April</small> */}
            </div>
          </div>
        </div>

        <div className="message mb-4 mr-1 flex justify-end text-right">
          <div className="max-w-[75%] flex-1 px-2 md:max-w-[60%]">
            <div className="inline-block rounded-md bg-purple-500 p-2 px-3 text-white">
              <span>
                Hey there. We would like to invite you over to our office for a
                visit. How about it?
              </span>
            </div>
            <div className="flex w-full justify-between px-2">
              {/* <small className="text-gray-500">Seen</small>
              <small className="text-gray-500">15 April</small> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatSection;
