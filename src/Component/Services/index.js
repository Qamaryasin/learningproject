import React from "react";
import './services.css'
import { ServiceCard } from "../ServiceCard";
export const Service=()=>{
    return(
    <>
    <div className="main-div">
     <div className="container">
                <h1 className="whatwedo">Services We Can Help You With
                    <span className="dot"></span> </h1>
                <p className="pol">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           </div>
           <ServiceCard/>
       </div>     
    </>
)
}