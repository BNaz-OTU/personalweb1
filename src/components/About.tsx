"use client";
import React from 'react';
import Image from "next/image";
import book from "../assets/icons/book.png";
import pc from "../assets/icons/pc.png"
import card from "../assets/icons/card.png";
import finance from "../assets/icons/finance.png"


const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto' id='about'>

            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-orange-300'>Me</span></h1>

            <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>

                {/* FIRST BOX */}
                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={book} alt="book" className="w-auto h-[130px]" />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>
                                Education
                            </h2>
                            <p className='text-md text-white/70 mt-2'>
                                I am currently pursuing a degree in Computer Science with a specialization in Data Science at Ontario Tech University. My coursework includes Artificial Intelligence, Scientific Data Analysis, Web Development, and Algorithms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SECOND BOX */}
                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={pc} alt="pc" className="w-auto h-[130px]" />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Problem Solving</h2>
                            <p className='text-lg text-white/70 mt-2'>I tackle problems using a logical and systematic mindset</p>
                        </div>
                    </div>
                </div>

                {/* THIRD BOX */}
                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={card} alt="card" className="w-auto h-[110px]" />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Experience</h2>
                            <p className='text-md text-white/70 mt-2'>I have completed numerous projects in academic settings, collaborative group environments, and personal initiatives.</p>
                        </div>
                    </div>
                </div>

                {/* FOURTH BOX */}
                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                    <div className='flex flex-row p-6'>
                        <Image src={finance} alt="finance" className="w-auto h-[130px]" />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
                            <p className='text-md text-white/70 mt-2'>
                                I developed multiple web applications with expertise in front-end and back-end development. My strong analytical skills allow me to interpret data using mathematical models, and I possess solid knowledge of data structures.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About