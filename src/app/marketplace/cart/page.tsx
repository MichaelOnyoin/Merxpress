'use client'
import React from 'react';
import { CartProvider } from '@/components/cart/CartContext';
import CartPage from '@/components/cart/Cart';
import { Header } from '@/components/Header';
import { MerxLayout } from '@/components/merxDash';
import { Mid } from '@/components/MidSection';
import { Footer } from '@/components/Footer';

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
      <Mid/>
      <Footer/>

    </CartProvider>
  );
};

export default App;