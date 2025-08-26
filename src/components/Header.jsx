import React from "react";
import Navbar from "./Navbar";
import Logo from "../assets/lekki.jpg"

function Header(){
    return(
        <div className="flex flex-row justify-between items-center p-4 w-full fixed top-0 bg-white z-50 ">
            <div>                
                <img src={Logo} className="w-[100px]"/>
            </div>
            <Navbar />             
        </div>
    );
}

export default Header;