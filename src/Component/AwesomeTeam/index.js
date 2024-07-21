import React from "react";
import { Team } from "../Teammember";
import './ourteam.css'
export const OurTeam=()=>{
    return(
        <>
        <div className="main-div-team">
         <div className="container">
                    <h1 className="whatwedo">Services We Can Help You With
                        <span className="dot"></span> </h1>
                    <p className="pol">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>
    <Team/>
           </div>     
        </>
    )
}