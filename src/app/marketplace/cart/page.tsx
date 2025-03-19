//'use client'
import React from 'react';
import { CartProvider } from '@/components/cart/CartContext';
import CartPage from '@/components/cart/Cart';
import { Header } from '@/components/Header';
import { MerxLayout } from '@/components/merxDash';
import { Mid } from '@/components/MidSection';
import { Footer } from '@/components/Footer';
//import { OrderView } from '@/components/checkout/Order';
//import {OrderData} from '@/components/OrderData';
import Auth from '@/components/Auth';
import Orders from '@/components/orders/OrderList';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <MerxLayout>
          <Auth/>
        
        <CartPage />
        {/* <OrderView/> */}
        {/* <OrderData/> */}
        <Orders/>
        </MerxLayout>
      </div>
      <Mid/>
      <Footer/>

    </CartProvider>
  );
};

export default App;