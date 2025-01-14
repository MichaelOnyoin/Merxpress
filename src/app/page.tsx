// import { Navigation } from "@/components/ui/Header";
import { Header } from "@/components/Header";
import { Page } from "@/components/Hero1";
import { MerxLayout } from "@/components/merxDash/";
import { Mid } from "@/components/MidSection";
import { Dash } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";


export default function Home() {
  return (
    
    <div>
      <CartProvider>
      <Header />
      <Page/>
      <MerxLayout >
        <Dash/>
      </MerxLayout>
      <Mid/>
      <Footer/>
      </CartProvider>
     
    </div>
  );
}
