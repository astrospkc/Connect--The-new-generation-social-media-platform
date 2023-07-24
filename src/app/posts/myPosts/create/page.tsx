import Image from "next/image";
import React from "react";
import pic2 from "/public/pic2.jpg";
import Link from "next/link";

const CreatePost = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mt-2  h-[100vh] overflow-hidden ">
        <Link href="/posts/myPosts/create/createPosts">
          <div className="mx-16  relative hover:cursor-pointer hover:bg-purple-500 rounded-3xl ">
            {" "}
            <Image
              src="/pic1.jpg"
              alt="post card"
              width={300}
              height={500}
              className="opacity-20 hover:opacity-60 rounded-3xl"
            />
            <div className="absolute top-[50%] left-[30%]">
              <h1 className="text-4xl font-bold">Create Posts</h1>
            </div>
          </div>
        </Link>
        {/* <Link href="/posts/myPosts"> */}
        <div className="mx-16 relative hover:cursor-pointer hover:bg-purple-500 rounded-3xl">
          {" "}
          <Image
            src="/pic4.jpg "
            alt="blog card"
            width={300}
            height={500}
            className="opacity-20 hover:opacity-60 rounded-3xl "
          />
          <div className="absolute top-[50%] left-[30%]">
            <h1 className="text-4xl font-bold ">Create Blogs</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
