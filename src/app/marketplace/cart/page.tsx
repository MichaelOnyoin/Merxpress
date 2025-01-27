'use client'
import React from 'react';
import { CartProvider } from '@/components/cart/CartContext';
//import { Items } from '@/components/Items';
import CartPage from '@/components/cart/Cart';
import { Header } from '@/components/Header';
import { MerxLayout } from '@/components/merxDash';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <MerxLayout>
        {/* <Items /> */}
        <CartPage />
        </MerxLayout>
      </div>
    </CartProvider>
  );
};

export default App;