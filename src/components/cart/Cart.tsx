'use client'
import React from 'react';
import { useCart } from './CartContext';
import { Product } from '@/db/definitions'; // Adjust the import based on your project structure

const Cart: React.FC = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item: Product) => (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;