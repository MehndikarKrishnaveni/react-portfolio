import React from 'react'
import {motion} from 'framer-motion'
const Resume = () => {
    return (
        <>
            <section id="resume" className="h-[calc(100vh-90px)] flex items-center justify-center">
                <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-sky-500 font-bold mb-6">Resume</h1>
                    <p className="text-lg mb-6">You can download my CV below:</p>
                    <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-sky-500 text-white px-8 font-bold py-3 rounded hover:bg-sky-400"
                        initial={{
                            y:30,
                            opacity:0,
                        }}
                        whileInView={{
                            y:0,
                            opacity:1,
                        }}
                        transition={{
                            duration:0.6
                        }}
                        whileTap={{
                            backgroundColor:'#0084D1'
                        }}
                    >
                        Download CV
                    </motion.a>
                </div>
            </section>
        </>
    )
}

export default Resume