import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    console.log(data);
    const { image, label, healthLabels, ingredientLines
    } = data
    return (
        <div className='my-12'>
            <div className='flex justify-center'>
                <div>
                    <div className="w-96 h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${image})` }}></div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{label}</h3>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl px-6 py-8 mx-auto space-y-12 text-gray-700">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">Ingredient Lines
                        </h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            {
                                ingredientLines.map(list => {
                                    return (
                                        <li>{list}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>


            <div className="max-w-2xl px-6 mx-auto space-y-12 text-gray-700">
                <article className="space-y-8">
                    <div className="space-y-6 border-b-2 border-dashed py-4">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">Health Labels</h1>
                    </div>
                </article>
                <div>

                    <div className="space-y-2">
                        <ul className="ml-4 space-y-1 list-disc">
                            {
                                healthLabels.map(list => {
                                    return (
                                        <li>{list}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;