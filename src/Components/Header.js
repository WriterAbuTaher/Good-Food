import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 gap-4 text-gray-600 bg-gray-200">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/order'>Order</NavLink></li>
                            <li><NavLink to='/blog'>Blog</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/register'>Register</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost normal-case text-2xl text-gray-600 dark:text-white">Good Food</NavLink>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex items">
                        <ul className="menu menu-horizontal p-0 gap-4 text-gray-600 dark:text-white">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/order'>Order</NavLink></li>
                            <li><NavLink to='/blog'>Blog</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/register'>Register</NavLink></li>
                        </ul>

                    </div>
                    <div className="flex-none ml-4">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full">
                                    {
                                        user.photoURL ?
                                            <img src={user.photoURL} />
                                            :
                                            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" />
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-gray-600 bg-gray-200">
                                <li>
                                    <Link to={'/profile'} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;