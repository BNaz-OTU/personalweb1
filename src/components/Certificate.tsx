import React from "react";
import Image from "next/image";
import harvard from "../assets/icons/harvard.png";

const Certificate = () => {
  return (
    // <h1 className="text-orange-400 text-6xl max-w-[320px] mx-auto font-semibold my-12 text-center">
    //   Certificates
    // </h1>

    <div className="max-w-[1200px] mx-auto mt-60" id="about">
      <h1 className="text-orange-400 text-6xl max-w-[320px] mx-auto font-semibold my-12 mb-20 text-center">
        Certificates
      </h1>

      {/* <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-300">Me</span>
      </h1> */}

      <div className="px-6 grid grid-cols-1 gap-8 place-items-center">
        {/* FIRST BOX */}
        <a href="https://certificates.cs50.io/20ebbcce-1723-4e74-846c-242e16a228d2.pdf?size=letter">
          <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row justify-between px-6 py-8 content-center">
              <Image
                src={harvard}
                alt="book"
                className="w-auto h-[130px] mr-6"
              />

              <div className="flex flex-col px-6 w-full">
                <div className="pb-2">
                  <h2 className="text-4xl font-bold text-white/80">
                    CS50P Introduction to Programming with Python
                  </h2>
                </div>

                <div className="pb-2 max-sm:hidden">
                  <h2 className="text-lg font-bold italic text-white/80">
                    Harvard University
                  </h2>
                </div>

                <div className="w-[90%] max-md:hidden">
                  <h2 className="text-xs font-bold text-white/80">
                    Developed a strong foundation in Python and a comprehensive
                    understanding of key coding concepts. My proficiency
                    includes implementing handling exceptions, and writing unit
                    tests, leveraging third-party libraries, validating and
                    extracting data using regular expressions, modeling
                    real-world entities through object-oriented programming and
                    performing file operations.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* <div className="flex flex-col mt-4"> */}
        {/* <h2 className="text-2xl font-bold text-white/80">
                CS50P Programming with Python
              </h2> */}
        {/* <p className="text-md text-white/70 mt-2">
                I am currently pursuing a degree in Computer Science with a
                specialization in Data Science at Ontario Tech University. My
                coursework includes Artificial Intelligence, Scientific Data
                Analysis, Web Development, and Algorithms.
              </p> */}
        {/* </div> */}

        {/* SECOND BOX */}
        {/* <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-800 via-purple-700 to-orange-400 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Problem Solving
              </h2>
              <p className="text-lg text-white/70 mt-2">
                I tackle problems using a logical and systematic mindset
              </p>
            </div>
          </div>
        </div> */}

        {/* THIRD BOX */}
        {/* <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={card} alt="card" className="w-auto h-[110px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">Experience</h2>
              <p className="text-md text-white/70 mt-2">
                I have completed numerous projects in academic settings,
                collaborative group environments, and personal initiatives.
              </p>
            </div>
          </div>
        </div> */}

        {/* FOURTH BOX */}
        {/* <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={finance} alt="finance" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-bold text-white/80">
                Technical Skills
              </h2>
              <p className="text-md text-white/70 mt-2">
                I developed multiple web applications with expertise in
                front-end and back-end development. My strong analytical skills
                allow me to interpret data using mathematical models, and I
                possess solid knowledge of data structures.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Certificate;
