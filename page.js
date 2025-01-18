import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-white flex justify-center items-center flex-col h-screen">
        <div className="text-5xl font-bold flex items-center gap-2">
          Buy Me a Coffee <span className="flex items-center"><img src="/tea.gif" width={88} alt="" /></span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!
        </p>

        <div>
          <div className="py-4 flex gap-2">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Now
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="h-1 opacity-10 bg-white"></div>

      <div className="text-white mx-auto container py-24">
        <h1 className="text-white font-bold text-center mb-14 text-2xl">Your fans can buy you a Coffee</h1>
        <div className="flex gap-5 justify-around">
          <div className="items space-y-3 flex flex-col items-center justify-center">
            <img src="/man.gif" alt="" width={88} className="bg-slate-400 p-3 rounded-full text-black" />
            <p>Fund Yourself</p>
          </div>
          <div className="items space-y-3 flex flex-col items-center justify-center">
            <img src="/coin.gif" alt="" width={88} className="bg-slate-400 p-3 rounded-full text-black" />
            <p>Fund Yourself</p>
          </div>
          <div className="items space-y-3 flex flex-col items-center justify-center">
            <img src="/group.gif" alt="" width={88} className="bg-slate-400 p-3 rounded-full text-black" />
            <p>Fans want to help</p>
          </div>
        </div>
      </div>

      <div className="h-1 opacity-10 bg-white"></div>

      <div className="text-white mx-auto container py-20">
        <h1 className="text-white font-bold text-center mb-14 text-2xl">Learn More About This Project</h1>
        <div className="flex gap-5 justify-around">
          <div className="items space-y-3 flex flex-col items-center justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=Vxb8v1PUVb_gw33u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

