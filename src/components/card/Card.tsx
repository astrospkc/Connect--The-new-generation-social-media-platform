import Image from "next/image";
import React from "react";
import pic from "/public/pic3.jpg";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const Card = () => {
  return (
    <>
      <div className="flex flex-col my-3 border-b-2">
        <div className="flex flex-row my-2">
          <h1 className="rounded-full bg-purple-900 p-2 mr-2 ">
            <BsFillPersonFill />
          </h1>
          <h1 className="text-purple-500">name</h1>
        </div>
        <div>
          <Image src={pic} alt="Card Image" width={400} height={400} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row my-2">
            <h1 className="rounded-full p-2 hover:text-purple-700 hover:cursor-pointer ">
              <BsEmojiHeartEyesFill />
            </h1>
            <h1 className="rounded-full p-2 hover:text-purple-700 hover:cursor-pointer ">
              <BsChat />
            </h1>
          </div>
          <div className="flex flex-col">
            {/* likes, viewcommentt, addcommets */}
            <h1>likes</h1>
            {/* this comment will have a scroll down box which will consisit limited comments and  add comment */}
            <h1 className="text-gray-600">view comments</h1>
            <h1 className="text-gray-600">addcomments</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
