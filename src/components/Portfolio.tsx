"use client";
import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import proj1 from "../assets/projects/NewProj1.png";
import proj2 from "../assets/projects/NewProj2.png";
import proj3 from "../assets/projects/NewProj3.png";
import proj4 from "../assets/projects/NewProj4.png";
import proj5 from "../assets/projects/NewProj5.png";
import proj6 from "../assets/projects/NewProj6.png";


const projects = [
    {
        title: "YOOM",
        desc: "Developed a video communication platform that allows users to conduct meetings, record meetings, screen share, manage participants and much more.",
        devStack: "Next.JS | TypeScript | Tailwind | CSS | HTML | JavaScript",
        link: "https://bn-zoom-clone.vercel.app/",
        git: "https://github.com/BNaz-OTU/BN-ZOOM-clone",
        src: proj1
    },
    {
        title: "LiveDocs",
        desc: "Engineered an online word processor that leverages real-time collaborative features akin to those found in Google Docs, enhancing simultaneous multi-user editing and interaction.",
        devStack: "Next.JS | TypeScript | JavaScript | Tailwind CSS | HTML | LiveBlocks | Lexical Editor | ShadCN",
        link: "https://bn-live-docs.vercel.app/",
        git: "https://github.com/BNaz-OTU/BN_Live_Docs",
        src: proj2
    },
    {
        title: "Hotel Management Project",
        desc: "Collaborating with a team of five students, we developed a comprehensive system/application to manage the daily operations of a hotel.",
        devStack: "Java | Maven | Spring Boot | H2 | Spring Data JPA | ThymleLeaf | HTML | CSS",
        link: "https://drive.google.com/file/d/1lNEvZy95et4TXu6dPgeJXw4l95Sj5X8T/view",
        git: "https://github.com/BNaz-OTU/HotelManagementProject",
        src: proj3
    },
    {
        title: "Image to ASCII",
        desc: "Built a Python application that facilitates the conversion of images into ASCII art, allowing users to transform any selected image into a text-based visual representation.",
        devStack: "Python",
        link: "https://github.com/BNaz-OTU/IMG_to_ASCII",
        git: "https://github.com/BNaz-OTU/IMG_to_ASCII",
        src: proj4
    },
    {
        title: "NASA Astronomy Picture of the Day",
        desc: "Constructed a React application that integrates with the NASA API, leveraging its data to deliver a dynamic user experience.",
        devStack: "React.JS | HTML | CSS | JavaScript",
        link: "https://bn-nasa-apod-react-proj.netlify.app/",
        git: "https://github.com/BNaz-OTU/bn-nasa-react-proj",
        src: proj5
    },
    {
        title: "Basketball Data Analysis",
        desc: "Utilized Python and its various libraries such as Numpy, Scipy and Matplotlib to analyze basketball data.",
        devStack: "Python | Jupyter Notebook | Numpy | Scipy | Pandas | Matplotlib | Markdown",
        link: "https://github.com/BNaz-OTU/basketball-data-analysis",
        git: "https://github.com/BNaz-OTU/basketball-data-analysis",
        src: proj6
    },
]

const Portfolio = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-[10px] mt-40' id="portfolio">

            <h1 className='text-orange-400 text-6xl max-w-[320px] mx-auto font-semibold my-12 text-center'>Projects</h1>

            <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40'>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className='my-[150px]'
                    >
                        <div className={`my-8 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row gap-12"}`}>
                            <div className="space-y-4 max-w-[550px]">
                                <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                                <h2 className='text-4xl'>{project.title}</h2>
                                <p className='text-md text-white/70 break-words'>{project.desc}</p>
                            </div>

                            <div className='flex justify-center'>
                                <Image src={project.src} alt={project.title}
                                    className="h-auto w-auto object-cover border rounded border-gray-700" />
                            </div>
                        </div>

                        <div className={`${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                            <p className='text-md text-orange-400 font-semibold'>{project.devStack}</p>
                            <div className="w-auto h-[2px] bg-gray-400 mt-2 mb-1">
                                {/* <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git}>Git</a> */}
                            </div>
                            <a href={project.link} className="mr-6">Link</a>
                            <a href={project.git}>Git</a>
                        </div>

                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default Portfolio