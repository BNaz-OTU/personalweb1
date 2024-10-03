"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "GitHub", path: "https://github.com/BNaz-OTU" }
];

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }

    return (
        <div className="text-white/60 pt-6">

            <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[450px]">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <div className="group">
                                    <p className="text-lg hover:text-white/100">{link.title}</p>
                                    <div className="relative">
                                        <div className="absolute w-2/6 h-1 transition-all rounded-full duration-700 group-hover:bg-orange-400 group-hover:w-full"></div>

                                        <div className="mt-1 absolute w-1/6 h-1 transition-all rounded-full duration-[1400ms]
                                group-hover:bg-orange-600 group-hover:w-full"></div>
                                    </div>
                                </div>

                            </Link>
                        </li>
                    ))}

                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-lg text-white/70 hover:text-white/100 duration-600 ease-in-out cursor-pointer">Contact Me</h1>
                            <div className="relative">
                                <div className="absolute w-2/6 h-1 transition-all rounded-full duration-700 group-hover:bg-orange-400 group-hover:w-full"></div>

                                <div className="mt-1 absolute w-1/6 h-1 transition-all rounded-full duration-[1400ms]
                                group-hover:bg-orange-600 group-hover:w-full"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border rounded
           text-white/70  border-white/70 p-2 z-50">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full z-40 bg-black/90"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-y-8">
                    {navLinks.map((link, index) => (
                        <li key={index} className="hover:text-white/100 ease-in-out duration-200">
                            <Link href={link.path} onClick={closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

            </motion.div>
        </div>
    )
}

export default Navbar