import React from "react";
import StaffingIntro from "./sections/StaffingIntro";
import Proposal from "./sections/Proposal";
import ExpertiseGrid from "./sections/ExpertiseGrid";
import HiringModels from "./sections/HiringModels";
import SlideBottem from "../Home/sections/SlideBottem";
import Assurance from "./sections/Assurance";
const Staffing = ()=>{
    return (
        <>
        <StaffingIntro/>
        <Proposal/>
        <ExpertiseGrid/>
        <HiringModels/>
        <Assurance/>
        <SlideBottem/>
       
        </>
    )
}

export default Staffing