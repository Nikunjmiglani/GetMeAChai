import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Main container */}
      <div className="text-white flex justify-center items-center flex-col h-screen px-4">
        {/* Heading Section */}
        <div className="text-3xl md:text-5xl font-bold flex items-center gap-2 text-center">
          Buy Me a Coffee
          <span className="flex items-center">
            <img src="/tea.gif" width={64} md={88} alt="" />
          </span>
        </div>
        <p className="mt-4 text-center text-sm md:text-base">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!
        </p>

        {/* Buttons Section */}
        <div className="py-4 flex gap-2 flex-wrap justify-center">
          <Link href="/knowmore">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2 text-center mb-2"
            >
              Know More
            </button>
          </Link>
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2 text-center mb-2"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <div className="h-1 opacity-10 bg-white"></div>

      {/* Fans Section */}
      <div className="text-white mx-auto container py-16 px-4">
        <h1 className="text-white font-bold text-center mb-8 text-lg md:text-2xl">
          Your fans can buy you a Coffee
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="space-y-3 flex flex-col items-center justify-center">
            <img
              src="/man.gif"
              alt=""
              width={64}
              md={88}
              className="bg-slate-400 p-3 rounded-full text-black"
            />
            <p className="text-center text-sm md:text-base">Fund Yourself</p>
          </div>
          <div className="space-y-3 flex flex-col items-center justify-center">
            <img
              src="/coin.gif"
              alt=""
              width={64}
              md={88}
              className="bg-slate-400 p-3 rounded-full text-black"
            />
            <p className="text-center text-sm md:text-base">Fund Yourself</p>
          </div>
          <div className="space-y-3 flex flex-col items-center justify-center">
            <img
              src="/group.gif"
              alt=""
              width={64}
              md={88}
              className="bg-slate-400 p-3 rounded-full text-black"
            />
            <p className="text-center text-sm md:text-base">Fans want to help</p>
          </div>
        </div>
      </div>

      <div className="h-1 opacity-10 bg-white"></div>

      {/* Learn More Section */}
      <div className="text-white mx-auto container py-16 px-4">
        <h1 className="text-white font-bold text-center mb-8 text-lg md:text-2xl">
          Learn More About This Project
        </h1>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/QtaorVNAwbI?si=Vxb8v1PUVb_gw33u"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

