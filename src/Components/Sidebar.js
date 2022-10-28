import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Sidebar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <>
            <div className="h-full p-3 space-y-2 w-full sm:w-60 dark:bg-gray-900 dark:text-gray-100">

                <div className="flex items-center p-2 space-x-4">
                    {
                        user?.photoURL ?
                            <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                            :
                            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    }
                    {
                        user ?
                            <div>
                                <h2 className="text-lg font-semibold">{user.displayName}</h2>
                                <span className="flex items-center space-x-1">
                                    <Link to={'/profile'} className="text-sm hover:underline dark:text-gray-400">View profile</Link>
                                </span>
                            </div>
                            :
                            <Link to={'/login'} className="hover:underline dark:text-gray-400">LogIn</Link>
                    }
                </div>

                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm flex sm:flex-none flex-wrap">
                        <li>
                            <Link to={'/chicken'} className="flex items-center p-2 space-x-3 rounded-md">
                                <span className='btn btn-outline w-40'><img className='w-8 mr-4' src="https://cdn-icons-png.flaticon.com/512/1046/1046751.png" alt="" /> Chicken</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/fish'} className="flex items-center p-2 space-x-3 rounded-md">
                                <span className='btn btn-outline w-40'><img className='w-8 mr-4' src="https://cdn-icons-png.flaticon.com/128/2367/2367477.png" alt="" /> Fish</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/juice'} className="flex items-center p-2 space-x-3 rounded-md">
                                <span className='btn btn-outline w-40'><img className='w-8 mr-4' src="https://cdn-icons-png.flaticon.com/128/1687/1687077.png" alt="" /> Juice</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/burger'} className="flex items-center p-2 space-x-3 rounded-md">
                                <span className='btn btn-outline w-40'><img className='w-8 mr-4' src="https://cdn-icons-png.flaticon.com/128/877/877951.png" alt="" /> Burger</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/cream'} className="flex items-center p-2 space-x-3 rounded-md">
                                <span className='btn btn-outline w-40'><img className='w-8 mr-4' src="https://cdn-icons-png.flaticon.com/128/938/938063.png" alt="" /> Cream</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/veggie'} className="flex items-center p-2 space-x-3 rounded-md">
                                <span className='btn btn-outline w-40'><img className='w-8 mr-4' src="https://cdn-icons-png.flaticon.com/128/7449/7449852.png" alt="" /> Veggie</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            {
                                user ?
                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>
                                        <button onClick={handleLogOut}>Logout</button>
                                    </button>
                                    :
                                    <Link to={'/login'} className="flex items-center p-2 space-x-3 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                        <span>LogIn</span>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;