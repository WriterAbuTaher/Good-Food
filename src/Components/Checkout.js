import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FoodContext } from '../Contexts/CartContext';

const Checkout = () => {

    const { label, price, image, category } = useContext(FoodContext)

    console.log(price)

    const showToast = () => {
        Swal.fire(
            'Thanks!',
            'Enjoy Your Delecious Food!',
            'success'
        )
    }

    return (
        <>
            {
                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="text-xl font-semibold">Your Cart</h2>
                    <ul className="flex flex-col divide-y divide-gray-700">
                        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                            <div className="flex w-full space-x-2 sm:space-x-4">
                                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={image} alt="Food Image" />
                                <div className="flex flex-col justify-between w-full pb-4">
                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{label}</h3>
                                            <p className="dark:text-gray-400">{category}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-semibold">{price}€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="space-y-1 text-right">
                        <p>Total Amount:
                            <span className="font-semibold"> {price}€</span>
                        </p>
                        <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <Link to={'/home'} type="button" className="btn btn-outline px-6 py-2 border rounded-md dark:border-violet-400">Back
                            <span className="sr-only sm:not-sr-only">to shop</span>
                        </Link>
                        <Link onClick={() => showToast()} type="button" className="btn btn-outline px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                            <span className="sr-only sm:not-sr-only">Place Order</span>
                        </Link>
                    </div>
                </div>
            }
        </>
    );
};

export default Checkout;