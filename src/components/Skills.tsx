import React from 'react';
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaPython, FaJava, FaGit, FaLinux, FaWindows, FaApple } from 'react-icons/fa';
import { SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import Cplusplus from "../assets/skills/cPlus.png";
import matlab from "../assets/skills/matlab.png";
import nextJ from "../assets/skills/next_js.png";
import jQuery from "../assets/skills/jquery.png";
import maven from "../assets/skills/maven.png";
import mySQL from "../assets/skills/mysql.png";
import postg from "../assets/skills/postgresql.png";
import springb from "../assets/skills/spring-boot.png";


// const Cplus = <img src="../assets/cPlus.png" alt="C++ Icon"></img>

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3Alt size={140} />, label: "CSS" },
    { icon: <FaReact size={140} />, label: "React" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <FaPython size={140} />, label: "Python" },
    { icon: <Image src={Cplusplus} className="w-auto h-[100px] md:h-[140px]" />, label: "C++" },
    { icon: <Image src={matlab} className="w-auto h-[100px] md:h-[140px]" />, label: "MATLAB" },
    { icon: <Image src={nextJ} className="w-auto h-[100px] md:h-[140px]" />, label: "Next.JS" },
    { icon: <Image src={jQuery} className="w-auto h-[100px] md:h-[140px]" />, label: "jQuery" },
    { icon: <Image src={maven} className="w-auto h-[100px] md:h-[140px]" />, label: "Maven" },
    { icon: <Image src={mySQL} className="w-auto h-[100px] md:h-[140px]" />, label: "MySQL" },
    { icon: <Image src={postg} className="w-auto h-[100px] md:h-[140px]" />, label: "PostgreSQL" },
    { icon: <Image src={springb} className="w-auto h-[100px] md:h-[140px]" />, label: "Spirng Boot" },
    { icon: <BiLogoTypescript size={140} />, label: "TypeScript" },
    { icon: <FaJava size={140} />, label: "Java" },
    { icon: <FaGit size={140} />, label: "Git" },
    { icon: <FaLinux size={140} />, label: "Linux" },
    { icon: <FaWindows size={140} />, label: "Windows" },
    { icon: <FaApple size={140} />, label: "MacOs" },
    { icon: <VscVscode size={140} />, label: "Visual Studio Code" },
]

const Skills = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] pb-32 pt-8'>
            <div className='text-white w-[400px] md:min-w-[950px] mx-auto text-center'>
                <h2 className='text-6xl font-bold mb-12'>What I Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div
                            key={index}
                            className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl mb-1'>
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>
                        </div>
                    ))}

                </div>

            </div>


        </div>

    )
}

export default Skills