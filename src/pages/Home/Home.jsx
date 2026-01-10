import HeroSection from "./sections/HeroSection";
import React from "react";  
import TrustBox from "./sections/TrustBox";
import ServicesSection from "./sections/ServicesSection";
import TrustSection from "./sections/TrustSection";
import TechnologyStacks from "./sections/TechnologyStacks";
import ShowcaseSection from "./sections/ShowcaseSection";
import SlideBottem from "./sections/SlideBottem";
import Promise from "./sections/Promise";
const Home = () => {
  return <React.Fragment>
    <HeroSection />
    <TrustBox/>
    <ServicesSection/>
    <TrustSection/>
    <TechnologyStacks/>
    <ShowcaseSection/>
    <SlideBottem/>
    <Promise/>
  </React.Fragment>;
};

export default Home;