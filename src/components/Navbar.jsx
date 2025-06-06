import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider'
import { NavLink } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

const Navbar = () => {
    let { theme, toggleTheme } = useContext(ThemeContext);

    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'EDUCATION', path: '/education' },
        { name: 'RESUME', path: '/resume' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav className={`${theme} h-[80px] w-full flex items-center justify-evenly fixed top-0 z-20`}>
            <h1 className='text-3xl font-bold text-sky-500'>MEHNDIKAR KRISHNAVENI</h1>
            <ul className='flex items-center gap-3 text-sky-500 font-bold'>
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
        </nav>
    );
};

export default Navbar;