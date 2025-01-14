import React from "react";
import { CartProvider } from "./cartgpt/CartContext";
import { AppProps } from "next/app";
//import{CartPage} from "@/components/cartgpt/cart";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
        <Component {...pageProps} />
        
        </CartProvider>
    );
    }