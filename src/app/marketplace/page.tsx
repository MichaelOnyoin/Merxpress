import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mid } from "@/components/MidSection";
import { ProductGallery } from "@/components/gallery/ProductGallery";
import { MerxLayout } from "@/components/merxDash";
import { Items } from "@/components/Items";
import { ItemDisplay } from "@/components/Display";
import { NavList } from "@/components/NavList";
//import Cart from "@/components/Cart";
//import { Products } from "@/components/Products";
//import { Products } from "@/components/cart/Products";
import CartPage from "@/components/cart/Cart";
import { CartProvider } from "@/components/cart/CartContext";


export default function Market(){
    return(
        <div>
            {/* <CartProvider> */}
            <CartProvider>
            <Header/>
            <NavList/>
            <ProductGallery/>
            
            <MerxLayout>              
                <Items/>
                <ItemDisplay/>
                <CartPage/>
            </MerxLayout>
     
            <Mid/>
            {/* <MerxLayout>
                <Products/>
                <CartPage/>
            </MerxLayout> */}
            </CartProvider>
            <Footer/>

        </div>
    )

}