"use client";

import React, { useState } from "react";
import Image from "next/image";
import image from "/public/pic1.jpg";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log(`${name} "name" ${email} "email" ${password} "password"`);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log(res.json());
      console.log(res.body);
      console.log(res.status);

      res.status === 201 &&
        router.push("/login?success=Account has been created");
    } catch (error) {
      setErr(true);
    }
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
              className="object-cover opacity-30 rounded-lg shadow-sm shadow-gray-600 "
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
            <h1 className="text-gray-500 text-3xl font-bold">REGISTER</h1>
            <input
              type="name"
              placeholder="username"
              className="border-2 p-4 my-4 text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 p-4 my-4 text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 p-4 my-4 text-black"
            />
            <button className="hover:bg-purple-950 p-4 my-2">Register</button>
          </form>
          {err && "Something went wrong"}
          <div className="flex flex-col my-2 ">
            <h1 className="text-center mt-2">or</h1>
            <button
              onClick={() => signIn("google")}
              className=" text-purple-400 hover:cursor-pointer hover:text-purple-300"
            >
              SignUp with Google
            </button>
            <h1 className="text-center mt-2">or</h1>
            <h1 className="">Already have an account?</h1>
            <Link href="/login">
              <h2 className="text-purple-400 hover:cursor-pointer hover:text-purple-300">
                Login here
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
