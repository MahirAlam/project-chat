import { IoIosArrowBack } from "react-icons/io";

function Heading() {
  return (
    <div className="flex flex-row items-center justify-between bg-gray-200 p-3 shadow-[0_5px_5px_-5px_rgba(0,0,0,0.3)]">
      <div className="flex flex-row items-center space-x-2">
        <button className="block h-8 w-8 text-center text-gray-400 hover:text-gray-800 md:hidden">
          <IoIosArrowBack className="h-8 w-8" />
        </button>
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
