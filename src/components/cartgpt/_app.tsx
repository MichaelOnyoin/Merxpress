// pages/_app.tsx
import { AppProps } from "next/app";
import { CartProvider } from "./CartContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}