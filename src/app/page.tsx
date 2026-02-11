import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ComeFunziona from "@/components/sections/ComeFunziona";
import TreModi from "@/components/sections/TreModi";
import Guadagni from "@/components/sections/Guadagni";
import ZoneAttive from "@/components/sections/ZoneAttive";
import Features from "@/components/sections/Features";
import Testimonianze from "@/components/sections/Testimonianze";
import Registrati from "@/components/sections/Registrati";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ComeFunziona />
        <TreModi />
        <Guadagni />
        <ZoneAttive />
        <Features />
        <Testimonianze />
        <Registrati />
      </main>
      <Footer />
    </>
  );
}
