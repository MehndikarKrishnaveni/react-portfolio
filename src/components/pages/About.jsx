import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    const aboutInfo = [
        { label: 'Name', value: 'Mehndikar Krishnaveni' },
        { label: 'Education', value: 'Bachelor of Technology' },
        { label: 'Language', value: 'English, Hindi, Telugu' },
        { label: 'Interest', value: 'Playing games, Listening to music' },
    ];

    const skills = [
        { name: 'HTML5', level: '95%', color: 'bg-sky-600' },
        { name: 'CSS3', level: '95%', color: 'bg-green-500' },
        { name: 'JAVASCRIPT', level: '85%', color: 'bg-orange-500' },
        { name: 'REACT JS', level: '85%', color: 'bg-pink-800' },
        { name: 'Tailwind CSS', level: '80%', color: 'bg-cyan-500' },
        { name: 'JAVA', level: '80%', color: 'bg-yellow-600' },
        { name: 'SQL', level: '90%', color: 'bg-blue-500' },
    ];
    return (
        <>
            <section id="about" className="md:h-[calc(90vh-80px)] mt-7 flex flex-col md:flex-row justify-center items-start gap-10 px-6 py-10 max-w-7xl mx-auto">

                {/* About Info Section */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl text-sky-500 font-bold mb-6">About Me</h1>
                    <p className="mb-6 ">
                        Welcome to my portfolio! I am a passionate web developer with a love for coding.
                    </p>

                    <table className="w-full text-left  border-spacing-2">
                        <tbody>
                            {aboutInfo.map((item, index) => (
                                <tr key={index}>
                                    <td className="font-semibold py-2 w-1/3 text-sky-500">{item.label}</td>
                                    <td>{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Skills Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl text-sky-500 font-bold mb-6">Skills</h2>
                    {skills.map((skill, index) => {
                        const { level, color,name } = skill
                        return (
                            <div key={index} className="mb-4">
                                <p>{name} <span className="float-right">{level}</span></p>
                                <div className="w-full bg-gray-200 rounded-full h-3 mt-1">
                                    <motion.div
                                        className={`${color} h-3 rounded-full`}
                                        style={{ width: level }}
                                        initial={{
                                            width:0
                                        }}
                                        whileInView={{
                                            width:`${level}`
                                        }}
                                        transition={{
                                            duration:1,
                                            delay:index*0.2
                                        }}
                                    ></motion.div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </section>
        </>
    )
}

export default About