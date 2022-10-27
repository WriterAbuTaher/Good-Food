import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Details from '../Components/Details';
import Profile from '../Components/Profile';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Order from '../Pages/Order';
import Register from '../Pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app")
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app")
            },
            {
                path: "/chicken",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/chicken")
            },
            {
                path: "/burger",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/burger")
            },
            {
                path: "/juice",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/juice")
            },
            {
                path: "/cream",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/cream")
            },
            {
                path: "/veggie",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/veggie")
            },
            {
                path: "/fish",
                element: <Home></Home>,
                loader: () => fetch("https://good-food-server.vercel.app/fish")
            },
            {
                path: "/food/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://good-food-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/order",
                element: <Order></Order>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
            {
                path: "*",
                element: <Error></Error>,
            },
        ]
    }
]);

export default router;