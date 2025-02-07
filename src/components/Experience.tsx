import React from "react";
import Image from "next/image";
import acf from "../assets/icons/acf.png";
import hp from "../assets/icons/hp.png";

const Experience = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-60" id="about">
      <h1 className="text-orange-400 text-6xl max-w-[500px] mx-auto font-semibold my-12 mb-20 text-center">
        Work Experience
      </h1>

      <div className="px-6 grid grid-cols-1 gap-14 place-items-center">
        {/* FIRST BOX */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row justify-between px-4 py-8 content-center">
            <Image
              src={acf}
              alt="ACF"
              className="w-auto h-[180px] mr-6 rounded-full"
            />

            <div className="flex flex-col pl-6 pr-0 w-full">
              <div className="pb-1.5 max-md:pb-7 max-sm:pb-4">
                <h2 className="text-4xl font-bold text-white/80">
                  ACF Associates Inc.
                </h2>
              </div>

              <div className="pb-1.5 max-md:pb-7 max-sm:pb-4">
                <h2 className="text-sm font-bold italic text-white/80">
                  Co-op
                </h2>
              </div>

              <div className="pb-1.5">
                <h2 className="text-sm font-bold italic text-white/80">
                  January 2025 - Present
                </h2>
              </div>

              <div className="w-full max-md:hidden">
                <h2 className="text-xs text-white/80">
                  Collaborated with cross-functional project teams in the
                  development, deployment, and continuous support of a
                  performance management software solution.
                  <br />
                  <br />
                  Engineered and optimized complex PostgreSQL queries to
                  analyze, cleanse, and update legacy data, ensuring seamless
                  integration with the evolving performance management platform.
                  <br />
                  <br />
                  Proactively monitored production data quality, identifying
                  discrepancies and applying advanced troubleshooting
                  methodologies to enhance data accuracy, integrity, and overall
                  system reliability.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Second BOX */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row justify-between px-4 py-8 content-center">
            <Image
              src={hp}
              alt="ACF"
              className="w-auto h-[180px] mr-6 rounded-full"
            />

            <div className="flex flex-col pl-6 pr-0 w-full">
              <div className="pb-1.5 max-md:pb-10">
                <h2 className="text-4xl font-bold text-white/80">
                  Healthy Planet
                </h2>
              </div>

              <div className="pb-1.5 max-md:pb-10">
                <h2 className="text-sm font-bold italic text-white/80">
                  Supervisor / Sales Associate
                </h2>
              </div>

              <div className="pb-1.5">
                <h2 className="text-sm font-bold italic text-white/80">
                  May 2020 - October 2024
                </h2>
              </div>

              <div className="w-full max-md:hidden">
                <h2 className="text-xs text-white/80">
                  Led my team by promoting collaboration, training new
                  employees, assigning tasks for efficient store maintenance,
                  resolving issues, and setting high customer service standards
                  through example.
                  <br />
                  <br />
                  Diagnosed and resolved both software and hardware issues,
                  minimizing system downtime and enhancing performance to ensure
                  a seamless customer experience and uninterrupted staff
                  workflows, thereby driving improvements in operational
                  efficiency.
                  <br />
                  <br />
                  Enhanced operational efficiency by streamlining product
                  expiration tracking, reducing expired items by 45%, and
                  optimizing shelving methods, saving 60% more time during
                  stocking.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
