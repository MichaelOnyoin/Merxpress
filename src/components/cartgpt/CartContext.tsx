// context/CartContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { CartItem } from "./cart";
import { useEffect } from "react";

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string } // id of the item
  | { type: "CLEAR_CART" };

const initialCartState: CartState = {
  items: [],
  total: 0,
};

//const savedCart = JSON.parse(localStorage.getItem("cart") || "{}") || initialCartState;

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let updatedItems;

      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, action.payload];
      }

      const newTotal = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return { items: updatedItems, total: newTotal };
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const newTotal = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return { items: updatedItems, total: newTotal };
    }

    case "CLEAR_CART":
      return initialCartState;

    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    //const [state, dispatch] = useReducer(cartReducer, savedCart);
     const [state, dispatch] = useReducer(cartReducer, initialCartState);
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(state));
    }, [state]);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
