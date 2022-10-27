import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">What is React Router ?</h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                React Router is routing library for react. It is fully featured client and server-side routing.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">How React Context API Works ?</h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                React Context API is a way for a React app to use global variables that can be passed around. This is the alternative to "prop drilling".
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">What is React useRef Hook ?</h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                The useRef Hook allows you to persist values between renders.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog