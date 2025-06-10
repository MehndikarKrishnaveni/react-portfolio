import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {animate, motion} from 'framer-motion'

const Contact = () => {
    let fadeIn = {
        initial:{
            opacity:0
        },
        animate:{
            opacity:1
        },
    }
    return (
        <>
            <section className=' h-[calc(100vh-80px)] md:h-[calc(100vh-80px)]  w-full flex items-center justify-center'>
                <div className='h-[50%] flex flex-col items-center justify-evenly flex-wrap'>
                    <h1 className='text-4xl font-bold text-sky-500'>Contact Me</h1>
                    <p className='text-center text-xl'>Feel free to get in touch with me via email.
                        I'm also available on social media.</p>
                    <div className='flex items-center justify-evenly flex-wrap gap-2  w-[60%]'>
                        
                        <motion.a 
                            href="mailto:mehndikarkrishnaveni@gmail.com"
                            variants={fadeIn}
                            initial='initial'
                            whileInView='animate'
                            transition={{ delay: 0.2 }}
                        >
                            <div className="contact-icons h-[40px] w-[40px] md:h-[80px] md:w-[80px] rounded-full bg-gray-100 flex items-center justify-center text-xl md:text-3xl text-sky-500 border-1 border-sky-500">
                                <MdEmail />
                            </div>
                        </motion.a>

                        <motion.a href="https://www.linkedin.com/in/mehndikar-krishnaveni-83813924a"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            variants={fadeIn}
                            initial='initial'
                            whileInView='animate'
                            transition={{delay:0.4}}
                        >
                            <div className="contact-icons h-[40px] w-[40px] md:h-[80px] md:w-[80px] rounded-full bg-gray-100 flex items-center justify-center text-xl md:text-3xl text-sky-500 border-1 border-sky-500">
                                <FaLinkedin />
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://github.com/MehndikarKrishnaveni"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            variants={fadeIn}
                            initial='initial'
                            whileInView='animate'
                            transition={{ delay: 0.6 }}
                        >
                            <div className="contact-icons h-[40px] w-[40px] md:h-[80px] md:w-[80px] rounded-full bg-gray-100 flex items-center justify-center text-xl md:text-3xl text-sky-500 border-1 border-sky-500">
                                <FaGithub />
                            </div>
                        </motion.a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact