
import HeroSection from "@/components/herosection/HeroSection";
import Footer from "@/footer/Footer";
import Header from "@/header/header";
import Faq from "@/Section/faq/Faq";
import Offer from "@/Section/offer/Offer";
import Section2 from "@/Section/Section2";
import Section3 from "@/Section/Section3/Section3";
import Section4 from "@/Section/Section4/Section4";
import Section5 from "@/Section/Section5/Section5";
import Section6 from "@/Section/Section6/Section6";
import Section7 from "@/Section/Section7/Section7";
import Section8 from "@/Section/Section8/Section8";


export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Section2 />
      <Section4 />
      {/* <Section3 /> */}
      
      <Section5 mainhead="We value the time and quality of travel for each of our clients" paragraph="Incredible comfort" src="/about-limmo-large.png" />
      <Section6 />
     
      <Section7 />
      <Faq />
     
      <Section8
        backgroundImage="/section8bg.png"
        heading="To the airport with maximum comfort"
        description="We value the time and quality of travel for each of our clients" />
        <Offer />
      <Footer />
    </div>

  );
}
