import React from "react"; 
import CareerHero from "./sections/CareerHero";
import NewJobs from "./sections/NewJobs";
import CareerCTA from "./sections/CareerCTA";
import TechJoinUs from "./sections/TechJoinUs"; 
import Promise from "../Home/sections/Promise";
const Career = ()=>{

    return (
        <>
        <CareerHero/>
     <NewJobs/>
        <TechJoinUs/>
        <CareerCTA/>
        <Promise/>
        </>
    )
}

export default Career