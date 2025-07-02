import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center text-2xl font-poppins py-2">
      <div>Portfolio</div>
      <div>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Projects</li>
          <li>About me</li>
          <li>contacts</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
}
