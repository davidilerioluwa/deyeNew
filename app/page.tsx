import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolarBattery from "@/components/SolarBattery";
import SolarInverter from "@/components/SolarInverter";
import RequestAQuote from "@/components/RequestAQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <SolarBattery />
      <SolarInverter />
      <RequestAQuote />
      <Footer />
    </div>
  );
}
