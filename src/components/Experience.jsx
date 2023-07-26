import React from "react";
import CSS from "../assets/css.jpeg";
import HTML from "../assets/html.png";
import JS from "../assets/javascript.png";
import NodeJS from "../assets/node.jpg";
import PHP from "../assets/php.png";
import NestJS from "../assets/nest.jpeg";
import ReactJS from "../assets/react.png";
import Redux from "../assets/redux.jpeg";
import Reduxtoolkit from "../assets/reduxtoolkit.jpeg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: CSS,
      title: "CSS",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: HTML,
      title: "HTML",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JS,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: NodeJS,
      title: "NodeJS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: NestJS,
      title: "NestJS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: PHP,
      title: "PHP",
      style: "shadow-white",
    },
    {
      id: 7,
      src: ReactJS,
      title: "ReactJS",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: Redux,
      title: "Redux",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: Reduxtoolkit,
      title: "ReduxToolkit",
      style: "shadow-orange-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I'v worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-20">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
