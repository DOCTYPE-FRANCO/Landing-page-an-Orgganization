import React from "react";
import Navbar from "./Navbar";
import Logo from "../assets/logo-lekki.jpg"

function Header(){
    return(
        <div className="flex flex-row justify-between items-center p-4 w-full ">
            <div>                
                <img src={Logo} className="w-[100px]"/>
            </div>
            <Navbar />             
        </div>
    );
}

export default Header;