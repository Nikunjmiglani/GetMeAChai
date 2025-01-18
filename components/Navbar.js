"use client";
import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (username.trim()) {
      router.push(`/${username}`); // Navigate to the username page
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search username"
        className="border rounded px-4 py-2 text-black"
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
  const { data: session } = useSession()
  
  return (
    <nav className="flex justify-between items-center bg-blue-950 text-white h-16 px-4 ">
      <div className="logo font-bold text-lg flex items-center"><Link href="/">
        GetMeAChai
        </Link></div>
        <SearchBar />
        
      <div >
        {session &&         <Link href={"/dashboard"}>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-2.5 text-center" 
        >
          Dashboard
        </button></Link> }
        {session &&
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-2.5 text-center mx-3" onClick={()=>{signOut()}} 
        >
          Logout
        </button> }

        {!session &&
        <Link href={"/login"}>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-2.5 text-center" 
        >
          Login
        </button></Link>}
      </div>
    </nav>
  );
};

export default Navbar;

