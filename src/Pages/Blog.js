import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl"> What is Cors ?</h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
                            </li>
                            <li>
                                The role of a CORS policy is to maintain the integrity of a website and secure it from unauthorized access. The CORS protocol was defined to relax the default security policy called the Same-Origin Policy (SOP) used by the browsers to protect their resources. The Same-Origin Policy permits the browser to load resources only from a server hosted in the same-origin as the browser. The SOP was defined in the early years of the web and turned out to be too restrictive for the new age applications where we often need to fetch different kinds of resources from multiple origins. The CORS protocol is implemented by all modern browsers to allow controlled access to resources located outside of the browser’s origin.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">Why are you using firebase ?</h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>

                                The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            </li>
                            <li>

                                What other options do you have to implement authentication?
                                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Options are Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">How does Private Route Work ?</h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>

                                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-gray-700 dark:text-white">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">What is Node JS ?</h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
                            </li>
                            <li>

                                How does node work?
                                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept Asynchronous Non-blocking I/O
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog