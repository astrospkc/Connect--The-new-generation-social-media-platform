import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  useEffect(() => {}, []);

  const session = useSession();
  return (
    <>
      <div className="h-screen flex justify-center items-center border-r-2 border-gray-600">
        <ul className="flex flex-col ">
          <li className="p-3 bg-purple-950 my-4 rounded-xl  hover:cursor-pointer hover:bg-purple-500">
            <Link href="/">Home</Link>
          </li>
          {/* explore section is to get all users posts */}
          <li className="p-3 bg-purple-950 my-4 rounded-xl hover:cursor-pointer hover:bg-purple-500">
            Explore
          </li>
          {/* Create section will come up when only the user posts is clicked in the homepage, this will check the url */}
          <li className="p-3 bg-purple-950 my-4 rounded-xl hover:cursor-pointer hover:bg-purple-500">
            <Link href="/posts/myPosts/create">Create</Link>
          </li>
          <li className="p-3 bg-purple-950 my-4 rounded-xl hover:cursor-pointer hover:bg-purple-500">
            Settings
          </li>
          <li className="p-3 bg-purple-950 my-4 rounded-xl hover:cursor-pointer hover:bg-purple-500">
            Account
          </li>
          {session.status === "authenticated" && (
            <button
              onClick={() => signOut()}
              className="p-3 bg-purple-950 my-4 rounded-xl hover:cursor-pointer hover:bg-purple-500"
            >
              SignOut
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
