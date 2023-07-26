import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import profileImage from "../assets/images.jpeg";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm full stack developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My name is Misganaw Kassie ,I am a young aspirin software Engineer
            graduate with a fresh energy, ambition and determination to
            constantly grow so that I can fit in the professional world and
            succeed in becoming part of something that can improve your company
            as well as the lives of the society
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profileImage}
            alt="my profile"
            className="rounded-2x mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
