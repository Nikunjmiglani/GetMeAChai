"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center space-x-2 w-full md:w-auto"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search username"
        className="border rounded px-4 py-2 text-black w-full md:w-auto"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
};

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex flex-wrap justify-between items-center bg-blue-950 text-white h-auto px-4 py-2 md:h-16">
      {/* Logo Section */}
      <div className="logo font-bold text-lg flex items-center">
        <Link href="/">GetMeAChai</Link>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
        <SearchBar />
      </div>

      {/* Menu Buttons */}
      <div className="flex items-center gap-3 mt-2 md:mt-0">
        {session && (
          <>
            <Link href={"/dashboard"}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-2.5 text-center"
              >
                Dashboard
              </button>
            </Link>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-2.5 text-center"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          </>
        )}
        {!session && (
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-2.5 text-center"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

