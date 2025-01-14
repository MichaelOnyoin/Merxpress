'use client'
import React from 'react';
import { useCart } from './CartContext';

const Cart: React.FC = () => {
  const { cartItems, cartTotal, removeFromCart, updateCartItemQuantity } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              <div>
                <h3>{item.product.title}</h3>
                <p>Price: ${item.product.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(parseInt(item.product.id))}>Remove</button>
                <button onClick={() => updateCartItemQuantity(parseInt(item.product.id), item.quantity + 1)}>+</button>
                <button onClick={() => updateCartItemQuantity(parseInt(item.product.id), item.quantity - 1)}>-</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${cartTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;