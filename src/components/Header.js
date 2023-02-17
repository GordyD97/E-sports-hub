import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={logo} className="fill-current h-8 w-8 mr-2" alt="Logo" />
                <span className="font-semibold text-xl tracking-tight">E-Sports Hub</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to="/teams" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Teams
                    </Link>
                    <Link to="/players" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                        Players
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;