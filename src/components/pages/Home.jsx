import React from 'react'

const Home = () => {
    return (
        <>
            <section className='h-full w-full flex items-center justify-center'>
                <div className="h-[90%] w-[80%] flex items-center justify-evenly">
                    <div className="h-[fit-content] w-[fit-content] rounded-full shadow-2xl">
                        <img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png" className='h-[400px] w-full rounded-full' alt="" />
                    </div>
                    <div className="h-[50%] w-[50%] flex flex-col justify-center">
                        <p className='font-bold'>HELLO,</p>
                        <h1 className='text-7xl '>I'm <div className='text-sky-500 inline'>Mehndikar <br />Krishnaveni</div></h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home