import React from "react";
import pic10 from "/public/pic10.jpg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div
        className="h-[100vh] mt-4 "
        // style={{
        //   background: `linear-gradient(rgba(255,255,255,1)) , url(pic10.jpg)`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   // opacity: "0.4",
        // }}
      >
        <div
          className="flex justify-center items-center flex-row "
          style={{ opacity: "10" }}
        >
          <h1 className="text-2xl font-semibold ">Connect Through -</h1>
          <h1 className="text-purple-950 font-bold text-9xl mb-3 rounded-2xl">
            Connect
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-2">
          {/* <Link href="/posts/myPosts"> */}
          <div className="mx-16  relative hover:cursor-pointer hover:bg-purple-500 rounded-3xl text-gray-500 hover:text-white">
            {" "}
            <Image
              src="/pic7.jpg"
              alt="user card"
              width={300}
              height={500}
              className="opacity-20 hover:opacity-60 rounded-3xl"
            />
            <div className="absolute top-[50%] left-[30%]">
              <h1 className="text-4xl font-bold ">Others Posts</h1>
            </div>
          </div>
          {/* </Link> */}
          {/* <Link href="/posts/myPosts"> */}
          <Link href="/posts/myPosts">
            <div className="mx-16 relative hover:cursor-pointer hover:bg-purple-500 rounded-3xl text-gray-500 hover:text-white">
              {" "}
              <Image
                src="/pic5.jpg "
                alt="user card"
                width={300}
                height={500}
                className="opacity-20 hover:opacity-60 rounded-3xl"
              />
              <div className="absolute top-[50%] left-[30%]">
                <h1 className="text-4xl font-bold ">My Posts</h1>
              </div>
            </div>
          </Link>

          {/* </Link> */}
          {/* if not login , login page will show otherwise only two card will be there */}
          <Link href="/login">
            <div className="mx-16 relative hover:cursor-pointer hover:bg-purple-500 rounded-3xl text-gray-500 hover:text-white">
              {" "}
              <Image
                src="/pic9.jpg "
                alt="user card"
                width={300}
                height={500}
                className="opacity-20 hover:opacity-60 rounded-3xl"
              />
              <div className="absolute top-[50%] left-[30%]">
                <h1 className="text-4xl font-bold">Login or Register here</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
