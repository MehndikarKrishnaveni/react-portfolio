import React from 'react'
import { FaUserGraduate } from 'react-icons/fa';
import { motion } from 'framer-motion'
const Education = () => {
    return (
        <>
            <h1 className="text-4xl text-sky-500 text-center mb-10 font-semibold">Education</h1>
            <section className="relative max-w-4xl mx-auto py-10 px-4">

                {/* Vertical line in center */}
                <motion.div
                    className="absolute left-1/2 w-[2px] bg-sky-500 translate-x-[-50%]"
                    initial={{
                        top:0
                    }}
                    whileInView={{
                        bottom:0
                    }}
                    transition={{
                        duration:1
                    }}
                ></motion.div>

                {/* Timeline items */}
                <div className="space-y-12">
                    {/* Item 1 - Right side */}
                    <div className="flex justify-end items-center w-full relative transition-all duration-500 hover:scale-105">
                        <div className="w-1/2 pl-10 ">
                            <h3 className="text-2xl text-sky-500 font-semibold">Bachelor of Technology</h3>
                            <p>Information Technology</p>
                            <p>Bhoj Reddy Engineering College for Women (JNTUH), Hyderabad</p>
                            <small>2022</small><br />
                            {/* <small>CGPA: 6.7</small> */}
                        </div>
                        <div className="z-10 w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] text-white text-md">
                            <FaUserGraduate />
                        </div>
                    </div>

                    {/* Item 2 - Left side */}
                    <div className="flex justify-start items-center w-full relative transition-all duration-500 hover:scale-105">
                        <div className="w-1/2 text-right pr-10">
                            <h3 className="text-2xl text-sky-500 font-semibold">Diploma</h3>
                            <p>Information Technology</p>
                            <p>Kamala Nehru Polytechnic College for Women (JNTUH), Hyderabad</p>
                            <small>2019</small>
                        </div>
                        <div className="z-10 w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] text-white text-md">
                            <FaUserGraduate />
                        </div>
                    </div>

                    {/* Item 3 - Right side */}
                    <div className="flex justify-end items-center w-full relative transition-all duration-500 hover:scale-105">
                        <div className="w-1/2 pl-10">
                            <h3 className="text-2xl text-sky-500 font-semibold">SSC</h3>
                            <p>Sri Sai Grammar High School, Hyderabad</p>
                            <small>2016</small>
                        </div>
                        <div className="z-10 w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center absolute left-1/2 translate-x-[-50%] text-white text-md">
                            <FaUserGraduate />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Education