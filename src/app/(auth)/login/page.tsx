"use client";

import React from "react";
import Image from "next/image";
import image from "/public/loginimage.jpg";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };
  return (
    <>
      <div className="flex flex-row justify-center items-center h-[100vh]">
        <div className=" ">
          <div className="relative">
            <Image
              src={image}
              alt="login image"
              height={400}
              width={400}
              className="object-cover opacity-60 rounded-lg shadow-sm shadow-gray-600 "
            />
            <div className="absolute top-[40%] left-[20%] ">
              <h1 className="text-xl font-semibold">
                CONNECT WITH WORLD THROUGH{" "}
                <h1 className="text-purple-400 font-bold text-6xl">CONNECT</h1>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex flex-col justify-center items-center  p-10">
          <form action="" className="flex flex-col" onSubmit={handleSubmit}>
            <h1 className="text-gray-500 text-3xl font-bold">LOGIN</h1>
            <input
              type="email"
              placeholder="Email"
              className="border-2 p-4 my-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 p-4"
            />
            <button className="p-4 my-4 hover:bg-purple-950 bg-purple-400">
              Login
            </button>
          </form>
          <div className="flex flex-col my-2 ">
            <h1 className="text-center mt-2">or</h1>
            <button
              onClick={() => signIn("google")}
              className=" text-purple-400 hover:cursor-pointer hover:text-purple-300"
            >
              Login with Google
            </button>
            <h1 className="text-center mt-2">or</h1>
            <h1 className="">Don't have an account?</h1>
            <Link href="/register">
              <h2 className="text-purple-400 hover:cursor-pointer hover:text-purple-300">
                Register here
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
