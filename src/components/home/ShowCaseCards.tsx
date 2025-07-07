import React from "react";

export default function ShowCaseCards() {
  return (
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
        <p className="text-2xl text-gray-800">i used to like drawing before</p>
      </div>
      <div className="absolute top-36 left-36 rotate-[336deg] w-80 p-5 bg-gray-200 border-2 border-gray-300 rounded-3xl">
        <h1 className="text-4xl">GamersXD</h1>
        <p className="text-2xl text-gray-800">
          I like playing League eventho i hate it
        </p>
      </div>
    </div>
  );
}
