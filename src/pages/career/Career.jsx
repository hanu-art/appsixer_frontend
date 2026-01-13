import React from "react"; 
import CareerHero from "./sections/CareerHero";

import CareerCTA from "./sections/CareerCTA";
import TechJoinUs from "./sections/TechJoinUs"; 
import Promise from "../Home/sections/Promise";
const Career = ()=>{

    return (
        <>
        <CareerHero/>
     
        <TechJoinUs/>
        <CareerCTA/>
        <Promise/>
        </>
    )
}

export default Career