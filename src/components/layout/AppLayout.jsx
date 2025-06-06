import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContextProvider';
const AppLayout = () => {
    const {theme}=useContext(ThemeContext)
    return (
        <>
            <Navbar />
            <main className={`${theme} min-h-screen w-full max-w-8xl mx-auto p-2 sm:p-4 md:p-6 lg:p-8
`}>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout