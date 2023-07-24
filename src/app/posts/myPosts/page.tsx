import Card from "@/components/card/Card";
import React from "react";

const MyPosts = () => {
  return (
    <>
      <div className=" flex flex-row  ">
        <div className=" w-[70%] flex flex-col justify-center items-center my-10 ">
          <h1 className="bg-purple-900 rounded-full p-10 w-50 h-50">
            UserAvatar
          </h1>
          <div className="flex flex-col my-7 mb-20 text-center ">
            <div>
              <h1>Username</h1>
              <p className="text-gray-600">
                Taking it slow... Everything will come into its right place.
              </p>
              <div className="flex flex-row">
                <h1 className="mr-4">followers</h1>
                <h1>following</h1>
              </div>
            </div>
          </div>

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="border-l-2 border-gray-700 w-[30%] py-4 ">
          {" "}
          {/* all the posts will be here , recommened posts only */}
          <div>
            <h1 className="text-xl bg-black w-fit mx-auto px-3 py-2 rounded-xl">
              Posts
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              dicta saepe sed excepturi ullam, iste totam odio. Aliquam, ad!
              Quam illum ullam amet aliquam nam dolorum, eligendi similique
              animi voluptas.
            </p>
          </div>
          <br className="text-gray-600" />
          {/* all the blogs will be here , and if not any blogs the section will be written as "no blogs to be seen" */}
          <div>
            <h1 className="text-xl bg-black w-fit mx-auto px-3 py-2 rounded-xl">
              Blogs
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              dicta saepe sed excepturi ullam, iste totam odio. Aliquam, ad!
              Quam illum ullam amet aliquam nam dolorum, eligendi similique
              animi voluptas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPosts;
