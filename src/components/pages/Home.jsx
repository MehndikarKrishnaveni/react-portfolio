import React from 'react'

const Home = () => {
    return (
        <>
            <section className='md:h-[calc(100vh-80px)] mt-[100px] md:mt-2 w-full flex items-center justify-center'>
                <div className="h-[70%] md:h-[90%] w-[80%] flex items-center justify-evenly flex-wrap">
                    <div className="h-[fit-content] w-[fit-content] rounded-full shadow-2xl">
                        <img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png" className='h-[200px] w-full rounded-full lg:h-[400px]' alt="" />
                    </div>
                    <div className="md:h-[50%] lg:w-[50%] flex flex-col justify-center mx-auto">
                        <p className='font-bold'>HELLO,</p>
                        <h1 className='text-5xl md:text-7xl'>I'm <div className='text-sky-500 inline'>Mehndikar <br />Krishnaveni</div></h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home