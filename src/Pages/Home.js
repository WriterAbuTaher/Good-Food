import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';

const Home = () => {
    const data = useLoaderData()
    return (
        <>
            <Card data={data}></Card>
        </>
    );
};

export default Home;