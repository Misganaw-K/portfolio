import React from "react";
import Profile from "../assets/images.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Misganaw Kassie ,I am a young aspirin software Engineer
          graduate with a fresh energy, ambition and determination to constantly
          grow so that I can fit in the professional world and succeed in
          becoming part of something that can improve your company as well as
          the lives of the society
        </p>
        <br />
        <p className="text-xl">
          My name is Misganaw Kassie ,I am a young aspirin software Engineer
          graduate with a fresh energy, ambition and determination to constantly
          grow so that I can fit in the professional world and succeed in
          becoming part of something that can improve your company as well as
          the lives of the society
        </p>
        <br />
        <div className="bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
          <div class="flex items-center">
    <img className="w-10 h-10 rounded-full" src={Profile} alt="iamge"/>
    <p className="ml-2 text-gray-700 font-semibold font-sans tracking-wide">Misganaw</p>
       </div>
            <img
              className="w-1/2 h-1/2 absolute top-0 left-0 object-cover"
              src={Profile}
              alt="description"
            />
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 flex flex-col h-full sm:p-7">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                About Me
              </h3>
              <p className="mt-1 text-gray-800 dark:text-gray-400">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor
                at sem. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Nulla porttitor accumsan tincidunt. Mauris
                blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
                suscipit tortor eget felis porttitor volutpat. Vestibulum ac
                diam sit amet quam vehicula elementum sed sit amet dui.
                porttitor at sem. Nulla porttitor accumsan tincidunt. Quisque
                velit nisi, pretium ut lacinia in, elementum id enim. Nulla
                porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
                tincidunt nibh pulvinar a.
              </p>
              <div className="mt-5 sm:mt-auto">
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Last updated 5 mins ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
