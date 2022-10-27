import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Sidebar = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="h-full p-3 space-y-2 w-full sm:w-60 dark:bg-gray-900 dark:text-gray-100">
                {
                    user &&
                    <div className="flex items-center p-2 space-x-4">
                        {
                            user.photoURL ?
                                <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                                :
                                <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                        }
                        <div>
                            <h2 className="text-lg font-semibold">{user.displayName}</h2>
                            <span className="flex items-center space-x-1">
                                <Link to={'/profile'} className="text-xs hover:underline dark:text-gray-400">View profile</Link>
                            </span>
                        </div>
                    </div>
                }
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
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                    <rect width="32" height="64" x="256" y="232"></rect>
                                </svg>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;