import React from "react";
import Getrooms from "../assets/Portfolio/getrooms.png";
import Nedaj from "../assets/Portfolio/nedaj.png";
import Dubeale from "../assets/Portfolio/dubeale.png";
import Ethiodirect from "../assets/Portfolio/ethiodirect.png";
import Getfeeenterprise from "../assets/Portfolio/getfeeenterprise.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Getrooms,
    },
    {
      id: 2,
      src: Nedaj,
    },
    {
      id: 3,
      src: Dubeale,
    },
    {
      id: 4,
      src: Ethiodirect,
    },
    {
      id: 5,
      src: Getfeeenterprise,
    },
    // {
    //   id:6,
    //   src:SchoolofCloud
    // },
    // {
    //   id:1,
    //   src:Getrooms
    // }
  ];
  return (
    <div className="bg-gradient-to-b from-balck to bg-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="px-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="imge"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
