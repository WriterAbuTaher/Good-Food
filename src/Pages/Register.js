import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { googleSignIn, githubSignIn, registerEmailAndPassword, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    // google authentication
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    // handle email validation
    const handleEmail = (e) => {
        const test = /^\S+@\S+\.\S+$/.test(e.target.value)
        if (!test) {
            setError("Please Give A Valid Email")
            return;
        }
        setEmail(e.target.value);
        setError("")
    }

    // handle password validation
    const handlePassword = (e) => {
        const test = /^\s*$/.test(e.target.value)
        const test3 = /(?=.{8,})/.test(e.target.value)

        if (test) {
            setError("Please Give A Valid Password")
            return;
        }
        if (!test3) {
            setError("Password Minimum 8 Characters")
            return;
        }

        setPassword(e.target.value);
        setError("")
    }

    // handle user register
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;

        registerEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                updateName(name)
            })
            .catch(error => {
                console.error(error);
                setError(error.message.slice(16))
            })
        form.reset()
    }

    // update user name
    const updateName = (name) => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const showToast = () => {
        {
            !error &&
                Swal.fire(
                    'Thanks!',
                    'Enjoy Your Delecious Food!',
                    'success'
                )
        }
    }

    return (
        <div className='flex justify-center my-12'>
            <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                    Login To Your Account
                </div>
                <div className="flex gap-4 item-center">
                    <button onClick={handleGithubSignIn} type="button" className="py-2 px-4 flex justify-center items-center  bg-gray-500 hover:bg-gray-600 focus:ring-gray-400 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <img className='w-6 mr-4' src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="" />
                        Github
                    </button>
                    <button onClick={handleGoogleSignIn} type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                            </path>
                        </svg>
                        Google
                    </button>
                </div>
                <div className="mt-8">
                    <p className='text-gray-600 dark:text-gray-200 mb-2'>{error}</p>
                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col mb-2">
                            <div className="relative flex">
                                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>

                                <input name='name' type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="User Name" required />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                        </path>
                                    </svg>
                                </span>
                                <input onBlur={handleEmail} name='email' type="email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" required />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <div className="flex relative ">
                                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                        </path>
                                    </svg>
                                </span>
                                <input onBlur={handlePassword} name='password' type="password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" required />
                            </div>
                        </div>
                        <div className="flex items-center justify-between my-4">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                                <label htmlFor="remember-me" className="block ml-2 text-sm text-neutral-600 dark:text-gray-200"> accept terms & conditions </label>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <button onClick={() => showToast()} type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>

                    <Link to={'/login'} className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;