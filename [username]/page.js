import React from "react";

const Username = ({ params }) => {
  return (
    <>
      {/* Cover Section */}
      <div className="cover w-full relative">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/17.gif?token-time=1735948800&token-hash=KX4qVFg4ekWS-SzQ0DGj_4Y_vg46_GvEl2KQCtzGpvo%3D"
          className="w-full object-cover h-72 md:h-[350px]"
          alt=""
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-14">
          <img
            src="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
            className="rounded-full"
            width={100}
            alt=""
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="info flex justify-center items-center my-20 flex-col gap-3 px-4">
        <div className="font-bold text-lg md:text-xl">@{params.username}</div>
        <div className="text-slate-400 text-center text-sm md:text-base">
          Creating Animations Since 1950
        </div>
        <div className="text-slate-400 text-center text-sm md:text-base">
          9700 Members . 82 Posts . $15000/release
        </div>

        {/* Payments Section */}
        <div className="payments flex flex-wrap gap-5 w-full md:w-3/4 mt-11">
          {/* Supporters Section */}
          <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg p-6 md:p-10 text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-5">Supporters</h2>
            <ul className="space-y-4">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <li
                    key={i}
                    className="flex gap-2 items-center text-sm md:text-base"
                  >
                    <img src="/avatar.gif" alt="" width={33} />
                    <span>
                      Shubham Donated <span className="font-bold">$30</span>{" "}
                      with a message
                    </span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Make Payments Section */}
          <div className="makepayments w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold mb-5">Make Payment</h2>
            <div className="flex gap-3 flex-col">
              <input
                type="text"
                className="w-full p-3 bg-slate-800 rounded-lg text-sm md:text-base"
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="w-full p-3 bg-slate-800 rounded-lg text-sm md:text-base"
                placeholder="Enter Message"
              />
              <input
                type="text"
                className="w-full p-3 bg-slate-800 rounded-lg text-sm md:text-base"
                placeholder="Enter Amount"
              />
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Pay
              </button>
            </div>
            <div className="flex gap-3 mt-5 flex-wrap">
              <button
                type="button"
                className="p-3 rounded-lg font-bold bg-slate-800 text-sm md:text-base"
              >
                Pay 100 INR
              </button>
              <button
                type="button"
                className="p-3 rounded-lg font-bold bg-slate-800 text-sm md:text-base"
              >
                Pay 200 INR
              </button>
              <button
                type="button"
                className="p-3 rounded-lg font-bold bg-slate-800 text-sm md:text-base"
              >
                Pay 500 INR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
