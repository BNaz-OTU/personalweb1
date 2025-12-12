"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/icons/book.png";
import pc from "../assets/icons/pc.png";
import otu from "../assets/icons/otu.png";
import data from "../assets/icons/data.png";
import ai from "../assets/icons/ai_icon.png";
import ml from "../assets/icons/ml.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-300">Me</span>
      </h1>

      <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
        {/* FIRST BOX */}
        <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={otu} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <p className="text-sm text-white/70 mb-1">School</p>
              <h2 className="text-4xl font-bold text-white/80">
                Ontario Tech University
              </h2>
            </div>
          </div>
        </div>

        {/* SECOND BOX */}
        <div className="w-full md:col-span-4 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <p className="text-sm text-white/70 mb-1">Program</p>
              <h2 className="text-3xl font-bold text-white/80 ">
                Computer Science
              </h2>
              <h2 className="text-sm font-bold mt-2 text-white/80 ">
                Data Science Specialization
              </h2>
              <h2 className="text-sm font-bold text-white/80 ">
                Mathematics Minor
              </h2>
            </div>
          </div>
        </div>

        {/* THIRD BOX */}
        {/* <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
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
        {/* <div className="w-full md:col-span-8 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={book} alt="finance" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <p className="text-sm text-white/70 mb-1">Courses</p>
              <h2 className="text-3xl font-bold text-white/80 ">
                Data Structures & Algorithms, Software Systems Development,
                Database Systems, Machine Learning, Statistics and Probability
              </h2>
            </div>
          </div>
        </div> */}

        <div className="w-full md:col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={book} alt="finance" className="w-auto h-[100px]" />
            <div className="flex flex-col mt-4">
              {/* <p className="text-sm text-white/70 mb-1">Courses</p> */}
              <h2 className="text-2xl font-bold text-white/80 text-center">
                Data Structures
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={ml} alt="finance" className="w-auto h-[100px]" />
            <div className="flex flex-col mt-4">
              {/* <p className="text-sm text-white/70 mb-1">Courses</p> */}
              <h2 className="text-2xl font-bold text-white/80 text-center">
                Machine Learning
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={ai} alt="finance" className="w-auto h-[100px]" />
            <div className="flex flex-col mt-4">
              {/* <p className="text-sm text-white/70 mb-1">Courses</p> */}
              <h2 className="text-2xl font-bold text-white/80 text-center">
                Artificial Intelligence
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-2 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6">
            <Image src={data} alt="finance" className="w-auto h-[100px]" />
            <div className="flex flex-col mt-4">
              {/* <p className="text-sm text-white/70 mb-1">Courses</p> */}
              <h2 className="text-2xl font-bold text-white/80 text-center">
                Data Analytics
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
