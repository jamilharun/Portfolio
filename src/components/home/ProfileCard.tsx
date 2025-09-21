import React from "react";
import { CiUser } from "react-icons/ci";
export default function ProfileCard() {
  return (
    <a
      href=""
      className=" p-10 absolute flex gap-x-5 bottom-36 left-36 font-poppins rounded-3xl bg-gray-100 border-2 border-gray-200"
    >
      <div className=" rounded-full h-20 w-20">
        <CiUser className="w-full h-full" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-medium">Jamil Harun Linzag</h1>
        <p className="text-2xl text-gray-500">Full stack developer </p>
      </div>
    </a>
  );
}
