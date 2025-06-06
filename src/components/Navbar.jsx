import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider'
import { NavLink } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    let { theme, toggleTheme } = useContext(ThemeContext);
    const [ menuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'EDUCATION', path: '/education' },
        { name: 'RESUME', path: '/resume' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav className={`${theme} h-[80px] w-full flex items-center justify-evenly fixed top-0 z-20`}>
            <div className=" w-full mx-auto flex items-center justify-between h-20 px-4">
                <h1 className='min-w-[200px] text-2xl md:text-3xl font-bold text-sky-500'>MEHNDIKAR KRISHNAVENI</h1>
                
                {/* desktop view */}
                <ul className='hidden md:flex items-center gap-6 text-sky-500 font-bold'>
                    {navItems.map(({ name, path }) => (
                        <li key={name}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `py-1 px-2 cursor-pointer transition-all duration-200 ${isActive
                                        ? ' text-sky-600 border-b-2 border-sky-600'
                                        : 'border-b-2 border-transparent hover:border-sky-300 hover:text-sky-700 dark:hover:text-sky-300'
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className='theme-btn h-[30px] w-[30px] bg-gray-300 dark:bg-gray-500 rounded-full flex items-center justify-center'
                >
                    {theme === 'dark' ? <MdWbSunny /> : <FaMoon className='text-white' />}
                </button>

                {/* for mobile */}
                <button
                    onClick={toggleMenu}
                    aria-label='Toggle Menu'
                    className='md:hidden ml-4 text-sky-500 text-2xl focus:outline-none'>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            
            {/* mobile menu */}
            {menuOpen && (                                          
                <ul className="h-fit md:hidden  p-4 mt-[180px] space-y-1 font-bold text-sky-500  bg-white menu-bg">
                    {navItems.map(({ name, path }) => (
                        
                        <li key={name}>
                            <NavLink
                                to={path}
                                onClick={() => setMenuOpen(false)}              
                                className={({ isActive }) =>
                                    `block py-1 px-3  rounded transition-colors duration-200 ${isActive ? 'bg-sky-100 dark:bg-sky-700 text-sky-700 dark:text-sky-300' : 'hover:bg-sky-50 dark:hover:bg-gray-800'
                                    }`
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;