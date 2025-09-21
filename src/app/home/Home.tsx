import Header from "../../components/home/Header";
import ProfileCard from "../../components/home/ProfileCard";
import ShowCaseCards from "../../components/home/ShowCaseCards";
import IntroNote from "../../components/home/IntroNote";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import forest from "../../assets/sample/forest.jpg";
import { CiUser } from "react-icons/ci";
import { FaHtml5, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiKotlin } from "react-icons/si";

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* header */}
      <Header />

      {/* Profile card & showcase  */}
      <div className="flex flex-row h-[80vh] relative z-10">
        <ProfileCard />
        <ShowCaseCards />
      </div>
      {/* 2nd section - project showcase */}
      <div className="grid grid-cols-4 gap-3">
        <div
          onClick={() => {}}
          className="group rounded-3xl relative border-2  border-gray-300 col-span-2 bg-gray-200 overflow-hidden"
        >
          <img
            src={forest}
            alt="sample"
            className="w-full h-full object-cover"
          />
          {/* on hover pop up & transition */}
          {/* popup cofiguration 1 */}
          <div className="absolute bottom-0 bg-white w-full p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <div className="flex flex-col gap-y-3">
              <h1 className="text-2xl">Project A</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                voluptate.
              </p>
              <p>writen in: Typescript, Tailwind</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {}}
          className="group flex bg-blue-400 relative border-2 border-blue-500 rounded-3xl overflow-hidden"
        >
          <img
            src={forest}
            alt="sample"
            className="w-full h-full object-cover"
          />
          {/* on hover popup from right transition */}
          <div className="absolute right-0 bg-white h-full w-1/2 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div>
              <h1>Project B</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
              <p>writen in: Typescript, Tailwind</p>
            </div>
          </div>
        </div>
        <div className="bg-green-800">project C</div>
        <div className="bg-red-400 row-span-2">project D</div>
        <div className="bg-yellow-400">project E</div>
        <div className="bg-purple-400">project F</div>
        <div className="bg-pink-400">project G</div>
        <div className="bg-gray-400">project H</div>
        <div className="bg-indigo-400">project I</div>
        <div className="bg-teal-400">project J</div>
        <div className="bg-orange-400">project K</div>
      </div>
      {/* 3nd section */}
      <div className="relative object-cover">
        <div className="bg-gray-800 w-full rotate-2 flex flex-col p-10  text-white rounded-r-2xl rounded-t-2xl -z-10   ">
          <div className="flex flex-row">
            {/* introductory note */}
            <IntroNote />
            {/* skills */}
            <div className="w-1/2 ">
              <h1 className="text-5xl">Skills...</h1>
              <div className="capitalize flex flex-col gap-y-3 text-3xl text-black">
                <div className="bg-gray-300 p-4 rounded-2xl flex flex-row justify-between items-center">
                  <div>Programming: </div>
                  <div>LVl 10</div>
                </div>
                <div className="bg-gray-300 p-4 rounded-2xl flex flex-row justify-between items-center">
                  <div>Communication:</div>
                  <div>Lvl 5</div>
                </div>
                <div className="bg-gray-300 p-4 rounded-2xl flex flex-row justify-between items-center">
                  <div>Creativity</div>
                  <div>Lvl 8</div>
                </div>
                <div className="bg-gray-300 p-4 rounded-2xl flex flex-row justify-between items-center">
                  <div>Teamwork</div>
                  <div>Lvl 7</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            {/* programming languages */}
            <div className="grid grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center gap-y-5">
                <FaHtml5 className="size-40" />
                <p>HTML</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <RiTailwindCssFill className="size-40" />
                <p>TailwindCSS</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <SiTypescript className="size-40" />
                <p>Typescript</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <SiKotlin className="size-40" />
                <p>Kotlin</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <FaPython className="size-40" />
                <p>Python</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-20 ">
              <div className="bg-gray-700 w-40 h-40 rounded-4xl">
                <CiUser className="w-full h-full" />
              </div>
              <h1 className="text-5xl flex justify-center items-center p-5">
                <span className="text-2xl px-3">Checkout</span> About Me
              </h1>
            </div>
          </div>
        </div>
        {/* new section */}

        {/* footer */}
        <div className="flex flex-row justify-between items-center bg-purple-300 rounded-t-2xl font-poppins p-3 z-10">
          <div className="">
            <h1 className="text-3xl ">Portfolio - Jamil Harun</h1>
          </div>
          {/* links */}
          <div className="flex flex-row gap-x-5 text-2xl">
            <div className="flex flex-row gap-x-5">
              {/*  icon */}
              <FaGithub
                onClick={() =>
                  window.open("https://github.com/jamilharun", "_blank")
                }
                className="text-black"
              />
              <FaLinkedin
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jamil-harun-linzag-2b2449252/",
                    "_blank"
                  )
                }
                className="text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
