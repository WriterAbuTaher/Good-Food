import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';
import Sidebar from '../Components/Sidebar';

const Home = () => {
    const data = useLoaderData()
    return (
        <div className='container mx-auto sm:flex justify-between my-2'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>
                <Card data={data}></Card>
            </div>

        </div>
    );
};

export default Home;