import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mid } from "@/components/MidSection";
import { Navigation } from "@/components/lists/Navigation";
import { ProductGallery } from "@/components/gallery/ProductGallery";
import { MerxLayout } from "@/components/merxDash";
import { Items } from "@/components/Items";
import { ItemDisplay } from "@/components/Display";


export default function Market(){
    return(
        <div>
            <Header/>
            <Navigation/>
            <ProductGallery/>
            <MerxLayout>              
                <Items/>
                <ItemDisplay/>
            </MerxLayout>
            <Mid/>
            <Footer/>

        </div>
    )

}