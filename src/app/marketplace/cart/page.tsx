'use client'
import React from 'react';
import { CartProvider } from '@/components/CartContext';
//import { Items } from '@/components/Items';
import Cart from '@/components/Cart';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="app">
        {/* <Items /> */}
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;