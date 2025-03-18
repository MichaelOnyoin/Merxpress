import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mid } from "@/components/MidSection";
import { ProductGallery } from "@/components/gallery/ProductGallery";
import { MerxLayout } from "@/components/merxDash";
import { Items } from "@/components/Items";
import { ItemDisplay } from "@/components/Display";
import { NavList } from "@/components/NavList";
//import Products  from "@/components/Shelf";
import CartPage from "@/components/cart/Cart";
import { CartProvider } from "@/components/cart/CartContext";
//import { CatalogData } from "@/components/CatalogData";


export default function Market(){
    return(
        <div>
            
            <CartProvider>
            <Header/>
            <NavList/>
            <ProductGallery/>
            
            <MerxLayout>              
                <Items/>
                <ItemDisplay/>
                {/* <Products/> */}
                {/* <CatalogData id={""} price={0} title={""} description={""} imageUrl={""}/> */}
                <CartPage/>
            </MerxLayout>
     
            <Mid/>
            </CartProvider>
            <Footer/>

        </div>
    )

}