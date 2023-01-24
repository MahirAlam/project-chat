"use client";
import { TbSend } from "react-icons/tb";
import { BiWinkSmile } from "react-icons/bi";
import { useRef, useState, useEffect } from "react";

function Footing() {
  const textRef = useRef<any>();
  const [value, setValue] = useState<string>();
  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight =
        textRef.current.scrollHeight < 250 ? textRef.current.scrollHeight : 250;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="write flex rounded-lg bg-gray-200 px-2 shadow-[0_-5px_5px_-5px_rgba(0,0,0,0.3)]">
        <div className="flex-3 flex content-center items-center p-2 pr-0 text-center">
          <button className="block text-center text-gray-400 hover:text-gray-800">
            <BiWinkSmile className="h-8 w-8" />
          </button>
        </div>
        <div className="flex-1 p-2">
          <textarea
            name="message"
            ref={textRef}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className="block w-full rounded-md border-none bg-transparent py-2 px-4 outline-none"
            rows={1}
            placeholder="Type A Message..."
          ></textarea>
        </div>
        <div className="flex-2 flex content-center items-center px-2">
          <div className="flex-1">
            <button className="inline-block h-10 w-10 rounded-full bg-purple-500 hover:bg-purple-700">
              <span className="inline-block align-text-bottom">
                <TbSend className="h-6 w-6 text-gray-200" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footing;
