//import Image from "next/image";
// import { Navigation } from "@/components/ui/Header";
// import { MerxpressHero } from "@/components/MerxpressHero";
//import { Tome } from "@/components/Home";
import { Header } from "@/components/Header";
import { Page } from "@/components/Hero1";
import { MerxLayout } from "@/components/merxDash";
//import { MerxDashboard } from "@/components/merxDash";
import { Dash } from "@/components/Dashboard";

export default function Home() {
  return (
    
    <div>
      <Header />
      <Page/>
      {/* <Tome/> */}
      {/* <Navigation/>
      <MerxpressHero/> */}
      <MerxLayout >
        {/* <MerxDashboard/> */}
        <Dash/>
      </MerxLayout>


    </div>
  );
}
