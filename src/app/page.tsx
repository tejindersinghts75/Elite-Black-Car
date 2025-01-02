
import HeroSection from "@/components/herosection/HeroSection";
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
     
      <HeroSection />
      <Section2/>
      <Section3 />
      <Section4/> 
      {/* <Section5 mainhead="welcome" paragraph="to the luxury rides" src="/about-limmo-large.png"/> */}
      <Section6 />
      <Section7 />
      <Section8
            backgroundImage="/section8bg.png"
            heading="To the airport with maximum comfort"
            description="We value the time and quality of travel for each of our clients" />
    </div>
  );
}
