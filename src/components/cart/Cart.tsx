'use client'
//why is my item.image returning an empty string??
import React from "react";
import { useCart } from "./CartContext";
import Image from "next/image";
import { toast } from "sonner";

export const CartPage = () => {
  const { state, dispatch } = useCart();
  

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    toast.error('Item removed from cart',{position:'top-right', duration:2000,style:{backgroundColor:'white',color:'red',border:'2px solid white',borderRadius:'10px', boxShadow:'0 0 10px red'}});
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.error('Cart cleared',{position:'top-right', duration:2000,style:{backgroundColor:'white',color:'red',border:'2px solid white',borderRadius:'10px', boxShadow:'0 0 5px red'}});
  };

  return (
    <div className="p-4 min-h-screen relative">
      <h1 className="text-2xl text-slate-700 items-center justify-center">Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-row flex-wrap justify-between ">
          {state.items.map(item => (
            <div key={item.id} className="bg-white p-4 my-4 rounded-lg shadow-md justify-between items-center text-slate-700 w-1/4 mx-2">
              {/* <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" /> */}
              <Image src={`/${item.image || 'images/drum.png'}` } alt={item.title} height={250} width={200} className="object-contain" />
              
              <p className="text-md  mb-2 text-slate-900">{item.title}</p>
              <p className="text-xl font-bold">${item.price} x {item.quantity}</p>
              <p className="text-sm">ImagePath: {item.image}</p>
              {/* why is my item.image returning an empty string ??*/}
              <button onClick={() => removeItem(item.id)} className="rounded-lg bg-red-500 text-white p-2">Remove</button>
            </div>
          ))}
          <div className="flex flex-col relative">
          <h3 className=" text-2xl text-slate-700">Total: ${state.total.toFixed(2)}</h3>
          <button onClick={clearCart} className="bg-red-600 text-white p-2 rounded-lg">Clear Cart</button>
          <button className="bg-blue-500 text-white p-2 rounded-lg mt-2">
            CheckOut
          </button>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default CartPage;
