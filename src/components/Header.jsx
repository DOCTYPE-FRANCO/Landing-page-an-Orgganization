import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/lekki.jpg"


function Header(){
    return(
        <>
            <div className="flex flex-row justify-between items-center p-4 w-full ">
                <div>                
                    <img src={Logo} className="w-[100px]"/>
                </div>
                <Navbar />             
            </div>
            <div className="flex flex-row gap-[100px] justify-center items-center h-[400px] ">
                <div className="flex flex-col gap-10 justify-between align-top">
                    <p className="text-4xl font-bold">Welcome to <br/><br/><span className="text-green-600 text-5xl">Lekki Brothers Club</span></p>
                    <p className="max-w-[400px] font-bold">Stronger together, learning and growing, staying active, sharing good times, giving back, building friendships, finding purpose, enjoying moments, creating impact, leaving a positive mark wherever the journey takes us.</p>
                </div>

                <div className="w-[400px]">
                   <img src={Logo} /> 
                </div>
            </div>
        </>
    );
}

export default Header;