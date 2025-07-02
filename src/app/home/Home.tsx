import React from "react";
import Header from "../../components/home/Header";
import ProfileCard from "../../components/home/ProfileCard";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* header */}
      <Header />

      {/* Profile card & showcase  */}
      <div className="flex flex-row h-[80vh] relative z-10">
        <ProfileCard />
        <div className="w-full h-full relative font-poppins -z-30">
          {/* here i will showcase the things i like */}
          <div className="absolute bottom-20 right-40 rotate-[350deg] w-80 p-5 bg-gray-200 border-2 border-gray-300 rounded-3xl">
            <h1 className="text-4xl">Coding</h1>
            <p className="text-2xl text-gray-800">
              making websites & UI for web and Mobile
            </p>
          </div>
          <div className="absolute top-20 right-80 rotate-12 w-80 p-5 bg-gray-200 border-2 border-gray-300 rounded-3xl">
            <h1 className="text-4xl">Digital Arts</h1>
            <p className="text-2xl text-gray-800">
              i used to like drawing before
            </p>
          </div>
          <div className="absolute top-36 left-36 rotate-[336deg] w-80 p-5 bg-gray-200 border-2 border-gray-300 rounded-3xl">
            <h1 className="text-4xl">GamersXD</h1>
            <p className="text-2xl text-gray-800">
              I like playing League eventho i hate it
            </p>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <div className="relative object-cover">
        <div className="bg-gray-800 w-full rotate-2 text-white rounded-r-2xl rounded-t-2xl ">
          {/* introductory note */}
          <div className="bg-yellow-100 w-[500px] text-black p-5 mx-36 mt-10 -rotate-6">
            <h2 className="text-3xl">About me</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              fugiat aliquid quia inventore. Tempore impedit nesciunt odio id
              iusto quo aut neque possimus. Laboriosam itaque perspiciatis ea,
              sunt mollitia dolor. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Asperiores reiciendis eaque eos fugit laudantium
              quae numquam amet velit qui sequi dignissimos sunt nesciunt
              corporis obcaecati accusamus, temporibus in voluptas quo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
