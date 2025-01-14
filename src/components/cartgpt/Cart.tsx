import React from "react";
import { useCart } from "./CartContext";

export const CartPage = () => {
  const { state, dispatch } = useCart();

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {state.items.map(item => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>${item.price} x {item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${state.total.toFixed(2)}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
