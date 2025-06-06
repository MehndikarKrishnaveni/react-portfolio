import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContextProvider';
const AppLayout = () => {
    const {theme}=useContext(ThemeContext)
    return (
        <>
            <Navbar />
            <main className={`${theme} h-[calc(100vh-80px)] mt-[80px] w-full p-2`}>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout