import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/17.gif?token-time=1735948800&token-hash=KX4qVFg4ekWS-SzQ0DGj_4Y_vg46_GvEl2KQCtzGpvo%3D"
          className="w-full object-cover h-[350]"
          alt=""
        />
        <div className="absolute right-[47.5%] -bottom-14">
          <img
            src="https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
            className="rounded-full"
            width={100}
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-20 flex-col gap-1 right-[41%]">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">Creating Animations Since 1950</div>
        <div className="text-slate-400">
          9700 Members . 82 Posts . $15000/release
        </div>
        <div className="payments flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10 text-white">
            {}
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5">
              <li className="my-4 flex gap-2 items-center"> <img src="/avatar.gif" alt="" width={33}/>
              <span className="">Shubham Donated <span className="font-bold"> 30$</span> with a messege </span>
              

              </li>
              <li className="my-4 flex gap-2 items-center"> <img src="/avatar.gif" alt="" width={33}/>
              <span className="">Shubham Donated <span className="font-bold"> 30$</span> with a messege </span>
              

              </li>
              <li className="my-4 flex gap-2 items-center"> <img src="/avatar.gif" alt="" width={33}/>
              <span className="">Shubham Donated <span className="font-bold"> 30$</span> with a messege </span>
              

              </li>
             
             
              
            </ul>
          </div>

          <div className="makepayments bg-slate-900 w-1/2 rounded-lg text-white p-10">
          <h2 className="text-2xl my-5 font-bold">Make Payment</h2>
          <div className="flex gap-2 flex-col">
            <input type="text" name="" id="" value="" className="w-full p-3 bg-slate-800 rounded-lg" placeholder="Enter Name"/>
            <input type="text" name="" id="" value="" className="w-full p-3 bg-slate-800 rounded-lg" placeholder="Enter Messege"/>

            <input type="text" name="" id="" value="" placeholder="Enter Amount" className="p-3 w-full  rounded-lg bg-slate-800"/>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

          </div>
          {}
          <div className="flex gap-2 mt-5">

            <button type="" className="p-3 rounded-lg font-bold  bg-slate-800">Pay 100INR</button>
            <button type="" className="p-3 rounded-lg font-bold bg-slate-800">Pay 200INR</button>
            <button type="" className="p-3 rounded-lg font-bold bg-slate-800">Pay 500INR</button>
            
          </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Username;
