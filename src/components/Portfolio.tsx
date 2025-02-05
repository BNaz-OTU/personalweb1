"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import proj1 from "../assets/projects/NewProj1.png";
import proj2 from "../assets/projects/NewProj2.png";
import proj3 from "../assets/projects/NewProj3.png";
import proj4 from "../assets/projects/NewProj4.png";
import proj5 from "../assets/projects/NewProj5.png";
import proj6 from "../assets/projects/NewProj6_1.png";
import proj7 from "../assets/projects/NewProj7.png";
import proj8 from "../assets/projects/NewProj8.png";
import proj9 from "../assets/projects/NewProj9.png";
import proj10 from "../assets/projects/onboarding3.png";
import proj11 from "../assets/projects/cards.png";

const projects = [
  {
    title: "YOOM",
    desc: "Constructed a video communication platform that adheres to responsive design principles and includes features like meetings, scheduling, recording, screen sharing, and participant management using Next.JS, TypeScript, and GetStream, ensuring an optimal user experience.",
    devStack: "Next.JS | TypeScript | Tailwind | CSS | HTML | JavaScript",
    link: "https://bn-zoom-clone.vercel.app/",
    git: "https://github.com/BNaz-OTU/BN-ZOOM-clone",
    src: proj1,
  },
  {
    title: "LiveDocs",
    desc: "Engineered a real-time collaborative online word processor using Next.JS, TypeScript, and LiveBlocks, enabling multi-user editing, presence tracking, and a notification system for document sharing, comments, and activity updates.",
    devStack:
      "Next.JS | TypeScript | JavaScript | Tailwind CSS | HTML | LiveBlocks | Lexical Editor | ShadCN",
    link: "https://bn-live-docs.vercel.app/",
    git: "https://github.com/BNaz-OTU/BN_Live_Docs",
    src: proj2,
  },
  {
    title: "Hotel Management Project",
    desc: "Collaborated on a hotel management system using Java, Spring Boot, Spring Data JPA, and H2. Implemented room management, bookings, and customer services, applying Clean Architecture and MVC for a modular, maintainable codebase. Debugged and resolved issues to support continuous development.",
    devStack:
      "Java | Maven | Spring Boot | H2 | Spring Data JPA | ThymleLeaf | HTML | CSS",
    link: "https://drive.google.com/file/d/1lNEvZy95et4TXu6dPgeJXw4l95Sj5X8T/view",
    git: "https://github.com/BNaz-OTU/HotelManagementProject",
    src: proj3,
  },
  {
    title: "Image to ASCII",
    desc: "Developed a Python application that enables the conversion of images into ASCII art, leveraging image processing techniques to transform selected images into text-based visual representations for enhanced user interaction and display.",
    devStack: "Python",
    link: "https://github.com/BNaz-OTU/IMG_to_ASCII",
    git: "https://github.com/BNaz-OTU/IMG_to_ASCII",
    src: proj4,
  },
  {
    title: "NASA Astronomy Picture of the Day",
    desc: "Developed a React application that integrates with the NASA API to dynamically display the Astronomy Picture of the Day. The app fetches and updates daily, presenting the latest astronomical imagery along with a detailed description to enhance user engagement and information delivery.",
    devStack: "React.JS | HTML | CSS | JavaScript",
    link: "https://bn-nasa-apod-react-proj.netlify.app/",
    git: "https://github.com/BNaz-OTU/bn-nasa-react-proj",
    src: proj5,
  },
  {
    title: "Basketball Data Analysis",
    desc: "Cleaned and processed data by handling missing values, normalizing variables, and addressing outliers. Used NumPy and Pandas for advanced calculations and analysis, identifying key patterns and trends. Integrated visualizations with Matplotlib and Seaborn, including box and scatter plots, to enhance data interpretation.",
    devStack:
      "Python | Jupyter Notebook | Numpy | Scipy | Pandas | Matplotlib | Markdown",
    link: "https://github.com/BNaz-OTU/basketball-data-analysis",
    git: "https://github.com/BNaz-OTU/basketball-data-analysis",
    src: proj6,
  },
  {
    title: "Retail Data K-Clustering Analysis",
    desc: "Cleaned and processed data by handling missing values, normalizing variables, and addressing outliers. Utilized Scikit-learn and Pandas for advanced analysis, including K-Means clustering, to identify customer shopping patterns. Created visualizations with Matplotlib and Seaborn (box plots, violin plots, scatter plots) to highlight key metrics and improve data comprehension.",
    devStack:
      "Python | Scikit-learn | Pandas | Matplotlib | Seaborn | Jupyter Notebook | Markdown",
    link: "https://github.com/BNaz-OTU/Retail_Data_Clustering",
    git: "https://github.com/BNaz-OTU/Retail_Data_Clustering",
    src: proj8,
  },
  {
    title: "Fizzi E-Commerce Website",
    desc: "Developed a responsive 3D landing page for an eCommerce site using TypeScript, Next.js, and Tailwind CSS for a modern, optimized UI. Integrated Three.js for interactive 3D models and GSAP for dynamic animations.",
    devStack:
      "React | Next.JS | TypeScript | Three.JS | GSAP | Prismic | Tailwind CSS",
    link: "https://fizzi-bn.vercel.app/",
    git: "https://github.com/BNaz-OTU/fizzi-bn",
    src: proj7,
  },
  {
    title: "Computer Vision Tennis Analysis",
    desc: "Used Ultralytics for object detection in images and videos to track dynamic elements like tennis players and the ball. Developed and trained a CNN with PyTorch to extract key points from court imagery, creating a detailed court map with OpenCV and analyzing player and ball velocities.",
    devStack:
      "Python | PyTorch | Jupyter Notebooks | OpenCV | Ultralytics | Pandas | Matplotlib | NumPy",
    link: "https://github.com/BNaz-OTU/Tennis-Analysis",
    git: "https://github.com/BNaz-OTU/Tennis-Analysis",
    src: proj9,
  },
  {
    title: "AI Snake Game",
    desc: "Built the Snake game with Pygame, using Deep Q-Learning for autonomous gameplay. Developed the neural network in PyTorch and visualized the model's learning progression with Matplotlib.",
    devStack: "Python | PyTorch | NumPy | Pygame | Matplotlib",
    link: "https://github.com/BNaz-OTU/ML_snake_game",
    git: "https://github.com/BNaz-OTU/ML_snake_game",
    src: proj7,
  },
  {
    title: "Uber Clone",
    desc: "Built a full-stack Uber-like app with React Native, TypeScript, and Stripe for payments, and TailwindCSS for a responsive UI. Implemented a secure serverless PostgreSQL database and integrated Google API for real-time route optimization, location tracking, and cost estimation.",
    devStack:
      "TypeScript | React Native | Expo | Stripe | PostgreSQL | Tailwind CSS | Clerk | Google Cloud | zustand | Google Maps",
    link: "https://github.com/BNaz-OTU/bn_uber_clone",
    git: "https://github.com/BNaz-OTU/bn_uber_clone",
    src: proj10,
  },
  {
    title: "Aora",
    desc: "Developed a video-sharing platform using React Native, JavaScript, and Appwrite, allowing users to upload and share videos in a collaborative environment. Implemented secure email authentication and direct video uploads from the user's photo library, storing videos for easy retrieval. Designed a dynamic home screen with Nativewind and React Native, featuring an optimized video search for a seamless, user-friendly experience.",
    devStack:
      "React Native | Expo | Nativewind | Tailwind CSS | Animatable | Appwrite",
    link: "https://github.com/BNaz-OTU/BN_ReactNative_proj_Aora",
    git: "https://github.com/BNaz-OTU/BN_ReactNative_proj_Aora",
    src: proj11,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-[10px] mt-40"
      id="portfolio"
    >
      <h1 className="text-orange-400 text-6xl max-w-[320px] mx-auto font-semibold my-12 text-center">
        Projects
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="my-[150px]"
          >
            <div
              className={`my-8 flex flex-col ${
                index % 2 === 1
                  ? "md:flex-row-reverse gap-12"
                  : "md:flex-row gap-12"
              }`}
            >
              <div className="space-y-4 max-w-[550px]">
                <h2 className="text-7xl my-4 text-white/70">{`${
                  index + 1 >= 10 ? `${index + 1}` : `0${index + 1}`
                }`}</h2>

                {/* <h2 className="text-7xl my-4 text-white/70">{`0${
                  index + 1
                }`}</h2> */}
                <h2 className="text-4xl">{project.title}</h2>
                <p className="text-md text-white/70 break-words">
                  {project.desc}
                </p>
              </div>

              <div className="flex justify-center">
                <Image
                  src={project.src}
                  alt={project.title}
                  //   className="h-auto w-auto object-cover border rounded border-gray-700"
                  className="h-auto w-auto object-contain rounded "
                />
              </div>
            </div>

            <div
              className={`${
                index % 2 === 1 ? "md:text-right" : "md:text-left"
              }`}
            >
              <p className="text-md text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-auto h-[2px] bg-gray-400 mt-2 mb-1">
                {/* <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git}>Git</a> */}
              </div>
              <a href={project.link} className="mr-6">
                Link
              </a>
              <a href={project.git}>Git</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
