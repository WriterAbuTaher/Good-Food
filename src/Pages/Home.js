import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';
import Checkout from '../Components/Checkout';
import Sidebar from '../Components/Sidebar';

const Home = () => {
    const data = useLoaderData()
    return (
        <div className='container mx-auto flex justify-between'>
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