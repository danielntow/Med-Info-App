import { mymed } from 'assets/mysvgs';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchDrug from './SearchDrug';
import { useDispatch, useSelector } from 'react-redux';
import { getDrug } from '../slice/medinfoSlice';
import { jwtDecode } from 'jwt-decode';
import { logoutJWT } from 'features/redux-users/myUserSlice';
import Cookies from 'js-cookie';
function Navbar({ searchTerm, setSearchTerm, handleChange }) {
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch()
    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };


    const isAuthenticated = Cookies.get("isAuthenticated")



    return (
        <nav className="bg-gradient-to-b from-[#87CEEB] to-[#2E86C1] py-2 px-4 grid grid-rows-5">
            {/* First Row */}
            <div className="flex items-center justify-between sm:justify-between row-span-2">
                <div className="flex items-center w-full sm:w-auto sm:flex justify-start md:w-2/4 gap-3">
                    {/* Hamburger icon for mobile */}
                    {/* <button className="block sm:hidden" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button> */}
                    {/* Med Info logo */}
                    <NavLink to="/">{mymed}</NavLink>
                    <NavLink to="/" className="text-5xl font-bold text-transparent bg-gradient-to-r from-red-500 to-yellow-500 to-green-500 to-blue-500 to-purple-500 bg-clip-text">MedInfo</NavLink>

                </div>
                <div className="hidden sm:flex items-center font-bold">
                    {/* Search bar */}
                    <SearchDrug searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleChange={handleChange} />
                    {/* Register and Login links */}
                    {!isAuthenticated ? (
                        <>
                            <NavLink to="/register" className="text-white text-sm hover:underline mr-4">Register</NavLink>
                            <NavLink to="/psignin" className="text-white text-sm hover:underline">Login</NavLink>
                        </>
                    ) : (
                        <NavLink to="/signout" className="text-white text-lg hover:underline mr-4"

                        >Logout</NavLink>
                    )}



                </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center justify-center font-extrabold row-span-2">
                <span className="text-gray-100 text-sm max-sm:hidden">Today: {new Date().toLocaleDateString()}</span>
                <span className='sm:hidden w-full'> <SearchDrug searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleChange={handleChange} />  </span>
            </div>

            {/* Third Row */}
            <ul className={`flex flex-row sm:flex-row sm:justify-center max-sm:justify-start space-x-8 row-span-1 font-extrabold max-sm:text-sm text-xl ${isOpen ? 'md:flex' : 'hidden'}  ${isOpen ? 'md:flex' : 'max-sm:hidden'} `}>
                <li className="md:mr-4">
                    <NavLink to="/health-news" className="text-white  hover:text-gray-200" style={({ isActive }) => ({ color: isActive ? "#87CEEB" : "white" })}>HEALTH NEWS </NavLink>
                </li>
                <li className="md:mr-4">
                    <NavLink to="/about-medinfo" className="text-white  hover:text-gray-200 " style={({ isActive }) => ({ color: isActive ? "#87CEEB" : "white" })}>ABOUT MED INFO</NavLink>
                </li>
                <li className="md:mr-4">
                    <NavLink to="/BMI-Calculator" className="text-white  hover:text-gray-200" style={({ isActive }) => ({ color: isActive ? "#87CEEB" : "white" })}>BMI CALCULATOR</NavLink>
                </li>
            </ul>

        </nav>
    );
}

export default Navbar;
