import React from 'react'

const Resume = () => {
    return (
        <>
            <section id="resume" className="h-[calc(100vh-90px)] flex items-center justify-center">
                <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-sky-500 font-bold mb-6">Resume</h1>
                    <p className="text-lg mb-6">You can download my CV below:</p>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-sky-500 text-white px-8 font-bold py-3 rounded hover:bg-sky-400 transition duration-300"
                    >
                        Download CV
                    </a>
                </div>
            </section>
        </>
    )
}

export default Resume