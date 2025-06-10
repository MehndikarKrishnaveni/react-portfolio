import React from 'react'
import {motion } from 'framer-motion'
const Home = () => {
    return (
        <>
            <section className='md:h-[calc(100vh-80px)] mt-[100px] md:mt-2 w-full flex items-center justify-center'>
                <div className="h-[70%] md:h-[90%] w-[70%] flex items-center justify-evenly flex-wrap">
                    <motion.div 
                        className="h-[fit-content] w-[fit-content] rounded-full shadow-2xl"
                        initial={{x:-100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:0.8,ease:'easeOut'}}
                    >
                        <img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png" className='h-[200px] w-full rounded-full lg:h-[400px]' alt="" />
                    </motion.div>

                    <motion.div 
                        className="md:h-[50%] lg:w-[50%] flex flex-col justify-center mx-auto"
                        initial={{y:50,opacity:0}}
                        whileInView={{y:0,opacity:1}}
                        transition={{duration:1,ease:'easeOut',delay:0.3}}
                    >
                        <p className='font-bold'>HELLO,</p>
                        <h1 className='text-5xl md:text-7xl'>I'm <div className='text-sky-500 inline'>Mehndikar <br />Krishnaveni</div></h1>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Home