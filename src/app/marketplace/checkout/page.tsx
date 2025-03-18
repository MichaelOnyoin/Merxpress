import React from "react";
import { Header } from "@/components/Header";
import { Mid } from '@/components/MidSection';
import { Footer } from '@/components/Footer';
//import { OrderData } from "@/components/OrderData";

export default function CheckOut(){
    return(
        <div>
            <Header />
            <h1>Your Recent Orders</h1>
            {/* <OrderData /> */}
            <Mid />
            <Footer />

        </div>
    )

}