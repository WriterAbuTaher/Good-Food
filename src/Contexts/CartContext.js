import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const FoodContext = createContext()

const CartContext = ({ children }) => {

    const [label, setLabel] = useState([])
    const [image, setImage] = useState([])
    const [price, setPrice] = useState([])
    const [category, setCategory] = useState([])

    const addToCart = (label, price, image, category) => {
        setLabel(label)
        setImage(image)
        setPrice(price)
        setCategory(category)
    }

    return (
        <FoodContext.Provider value={{ label, image, price, category, addToCart }}>{children}</FoodContext.Provider>
    );
};

export default CartContext;