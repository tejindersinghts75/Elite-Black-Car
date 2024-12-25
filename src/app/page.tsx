
import HeroSection from "@/components/herosection/HeroSection";
import Section2 from "@/Section/Section2";
import Section3 from "@/Section/Section3/Section3";
import Section4 from "@/Section/Section4/Section4";
import Section5 from "@/Section/Section5/Section5";


export default function Home() {
  return (
    <div className="">
     
      <HeroSection />
      <Section2/>
      <Section3 />
      <Section4/> 
      <Section5 mainhead="welcome" paragraph="to the luxury rides" src="/about-limmo-large.png"/>
    </div>
  );
}
