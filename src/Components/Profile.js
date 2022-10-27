import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='flex justify-center my-16'>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-lg rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                {
                    user.photoURL ?
                        <img src={user.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                        :
                        <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                }
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user.displayName}</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">{user.email}</p>
                    </div>
                </div>
                <div className='mx-auto my-2'>
                    <button className='btn'>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;