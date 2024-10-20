import Approach from "@/components/Home/Approach";
import CardSlider from "@/components/Home/CardSlider";
import Faq from "@/components/Home/Faq";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Services/>
    <Approach/>
    <Testimonial/>
    <Faq/>
    {/* <Footer/> */}
    </>
  );
}
