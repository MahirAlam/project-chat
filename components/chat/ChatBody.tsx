import { collection, orderBy, query } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";

function ChatBody({ chatId }: { chatId: string }) {
  const [user] = useAuthState(auth);

  const Q = query(
    collection(db, `chats/${chatId}/messages`),
    orderBy("timestamp")
  );
  const [values, loading, error, messagesSnapshot] = useCollectionData(Q);

  return (
    <div className="flex pb-16 flex-col before:mt-16 before:content-[' '] h-full overflow-auto w-full p-3 space-y-2 bg-transparent z-10 left-0">
      {messagesSnapshot?.docs.length >= 1 ? (
        messagesSnapshot?.docs.map((message) =>
          message.data().sender == user.displayName ? (
            <div className="flex flex-col bg-violet-600 text-slate-200 rounded-lg px-3 py-2 self-end h-auto max-w-[60%]">
              <p>{message.data().message}</p>
            </div>
          ) : (
            <div className="flex flex-col bg-gray-600 text-slate-200 rounded-lg px-3 py-2 max-w-[70%] w-max h-auto">
              <p>{message.data().message}</p>
            </div>
          )
        )
      ) : (
        <div className="flex flex-col relative bg-transparent justify-center items-center text-slate-700 dark:text-slate-200 rounded self-end p-3 w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="ac1eb871-932a-433c-8a7b-566e1262461f"
            width="863.91732"
            height="364.20537"
            viewBox="0 0 863.91732 364.20537"
            className="h-1/2 w-[80%] md:w-1/2"
          >
            <polygon
              points="311.959 119.745 0 119.745 0 222.156 11.817 222.156 11.817 248.941 38.601 222.156 311.959 222.156 311.959 119.745"
              className="fill-slate-200"
            ></polygon>
            <rect
              x="8.66553"
              y="129.71814"
              width="294.62811"
              height="81.92868"
              className="fill-slate-50"
            ></rect>
            <rect
              x="34.72148"
              y="154.42552"
              width="141.85589"
              height="4.30497"
              className="fill-slate-200"
            ></rect>
            <rect
              x="34.72148"
              y="169.31777"
              width="247.24292"
              height="4.30497"
              className="fill-slate-200"
            ></rect>
            <rect
              x="34.72148"
              y="184.21003"
              width="247.00081"
              height="4.30497"
              className="fill-slate-200"
            ></rect>
            <circle
              cx="666.92952"
              cy="180.07338"
              r="123.29665"
              className="fill-stone-700"
            ></circle>
            <path
              d="M757.348,457.86815a32.62688,32.62688,0,0,1,50.081,0,36.26372,36.26372,0,1,0-51.27085-1.18987Q756.73918,457.28694,757.348,457.86815Z"
              transform="translate(-168.04134 -267.89732)"
              className="fill-slate-200"
            ></path>
            <path
              d="M855.26,457.86815a32.627,32.627,0,0,1,50.08092,0,36.26371,36.26371,0,1,0-51.2708-1.18987Q854.65117,457.28694,855.26,457.86815Z"
              transform="translate(-168.04134 -267.89732)"
              className="fill-slate-200"
            ></path>
            <circle
              cx="601.97649"
              cy="151.39215"
              r="12.47434"
              fill="#3f3d56"
            ></circle>
            <circle
              cx="699.88499"
              cy="151.39215"
              r="12.47434"
              fill="#3f3d56"
            ></circle>
            <polygon
              points="661.49 181.886 650.611 229.029 668.742 210.898 661.49 181.886"
              className="fill-slate-200"
            ></polygon>
            <path
              d="M836.784,315.60813c-3.3831,0-6.36764,2.628-8.36294,6.66445-1.75872-6.06969-5.45374-10.29078-9.7689-10.29078a6.56326,6.56326,0,0,0-.87094.1463c-1.65871-6.4805-5.51368-11.02542-10.00816-11.02542-6.00841,0-10.8791,8.118-10.8791,18.13187s4.87073,18.13187,10.8791,18.13187a6.56119,6.56119,0,0,0,.87093-.14629c1.65871,6.4805,5.51369,11.02541,10.00817,11.02541,3.3831,0,6.36764-2.62795,8.36294-6.66444,1.75876,6.06971,5.45374,10.29077,9.7689,10.29077,6.00841,0,10.8791-8.118,10.8791-18.13187S842.79244,315.60813,836.784,315.60813Z"
              transform="translate(-168.04134 -267.89732)"
              className="fill-stone-700"
            ></path>
            <path
              d="M718.72328,451.807l-67.92039-11.01653c-3.42269-.55515-6.90789-1.11141-10.34147-.6282s-6.87069,2.1737-8.62107,5.16688a8.651,8.651,0,0,0,9.14985,12.853c-3.70741-.12023-7.60411-.19978-10.894,1.51369s-5.61946,5.87559-4.01553,9.22024a8.27667,8.27667,0,0,0,1.91922,2.4289,17.60582,17.60582,0,0,0,18.52289,3.14128c-2.50047,3.58582-7.46212,4.11838-11.7541,4.94866s-9.25362,3.258-9.41312,7.62664c-.17922,4.90869,5.66264,7.51763,10.47189,8.51687A137.41687,137.41687,0,0,0,712.648,489.3171a30.98,30.98,0,0,0,7.737-3.95049,17.43266,17.43266,0,0,0-7.05356-30.96345"
              transform="translate(-168.04134 -267.89732)"
              className="fill-stone-700"
            ></path>
            <path
              d="M1011.89005,507.47917a137.41884,137.41884,0,0,0-51.17256-57.63676,30.97519,30.97519,0,0,0-7.80737-3.80966,17.43272,17.43272,0,0,0-20.50879,24.24615l-5.31525-2.74921Q943.09323,497.98314,959.1,528.43656c1.61312,3.06929,3.26318,6.18918,5.71292,8.64309s5.86648,4.18514,9.31075,3.78525a8.6006,8.6006,0,0,0,6.77916-12.2999,16.64264,16.64264,0,0,0,5.752,5.05979c3.34648,1.59972,8.07321.9603,9.7823-2.33177a8.27455,8.27455,0,0,0,.78809-2.99368,17.60592,17.60592,0,0,0-8.62117-16.69248c4.36853-.1565,7.77622,3.48909,11.01912,6.42052,3.24327,2.93143,8.1652,5.43808,11.75289,2.94008C1015.40712,518.16062,1013.98161,511.92354,1011.89005,507.47917Z"
              transform="translate(-168.04134 -267.89732)"
              className="fill-stone-700"
            ></path>
            <polygon
              points="55.757 0 506 0 506 147.807 488.945 147.807 488.945 186.463 450.289 147.807 55.757 147.807 55.757 0"
              className="fill-slate-200"
            ></polygon>
            <rect
              x="68.26381"
              y="14.39335"
              width="425.22943"
              height="118.24561"
              className="fill-slate-50"
            ></rect>
          </svg>
          <p className="z-20 top-[43.5%] font-semibold md:top-[37%] md:text-2xl text-[13px] font-serif left-[20%] md:left-[30%] absolute text-slate-600">
            Start Chatting Now
          </p>
        </div>
      )}
    </div>
  );
}

export default ChatBody;
