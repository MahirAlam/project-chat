"use client";

// Setup Chat Comonents

function ChatSection() {
  return (
    <>
      <div className="messages mt-4 flex-1 overflow-auto">
        <div className="message mb-4 flex">
          <div className="flex-2">
            <div className="relative mt-7 h-6 w-6">
              <img
                className="ml-2 rounded-full"
                src="../profile-image.png"
                alt="chat-user"
              />
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="inline-block rounded-full bg-gray-300 p-2 px-6 text-gray-700">
              <span>
                Hey there. We would like to invite you over to our office for a
                visit. How about it?
              </span>
            </div>
            <div className="pl-4">
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
        <div className="message me mb-4 flex text-right">
          <div className="flex-1 px-2">
            <div className="inline-block rounded-full bg-blue-600 p-2 px-6 text-white">
              <span>I accept. Thank you very much.</span>
            </div>
            <div className="pr-4">
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
        <div className="message mb-4 flex">
          <div className="flex-2">
            <div className="relative mt-7 h-6 w-6">
              <img
                className="ml-[6px] rounded-full"
                src="../profile-image.png"
                alt="chat-user"
              />
            </div>
          </div>
          <div className="flex-1 pr-2">
            <div className="inline-block rounded-md bg-base-2/10 p-2 px-5 text-base-2">
              <span>
                Hey there. We would like to invite you over to our office for a
                visit. How about it?
              </span>
            </div>
            <div className="pl-4">
              <small className="text-gray-500">15 April</small>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 pt-4 pb-10">
        <div className="write flex rounded-lg bg-white shadow">
          <div className="flex-3 flex content-center items-center p-4 pr-0 text-center">
            <span className="block text-center text-gray-400 hover:text-gray-800">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1">
            <textarea
              name="message"
              className="block w-full bg-transparent py-4 px-4 outline-none"
              rows={1}
              placeholder="Type a message..."
              autoFocus
            ></textarea>
          </div>
          <div className="flex-2 flex w-32 content-center items-center p-2">
            <div className="flex-1 text-center">
              <span className="text-gray-400 hover:text-gray-800">
                <span className="inline-block align-text-bottom">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </span>
              </span>
            </div>
            <div className="flex-1">
              <button className="inline-block h-10 w-10 rounded-full bg-blue-400">
                <span className="inline-block align-text-bottom">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatSection;
