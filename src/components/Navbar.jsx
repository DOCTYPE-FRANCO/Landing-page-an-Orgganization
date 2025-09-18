import React, {useState} from "react";
import Menu from "../assets/menu-img.svg"
import X from "../assets/Xicon.svg"
import { Link } from "react-router-dom";

function Navbar(){
    const [mobile, setMobile] = useState(false);
    return(
        <div className="absolute top-0 left-0 w-full h-[50px] overflow-hidden">
            <div className="flex justify-center items-center h-full">
                <ul className="hidden md:flex gap-8 text-black">
                    <li><Link to="/" className="cursor-pointer hover:text-gray-600 font-bold">Home</Link></li>
                    <li><Link to="/events" className="cursor-pointer hover:text-gray-600 font-bold">Events</Link></li>
                    <li><Link to="/about" className="cursor-pointer hover:text-gray-600 font-bold">About-Us</Link></li>
                    <li><Link to="/contact" className="cursor-pointer hover:text-gray-600 font-bold">Contact</Link></li>

                </ul>

                <div className="md:hidden flex justify-end w-full mt-3 mr-3">
                <img src={Menu} onClick={()=> setMobile(true)} className="w-[40px]"/>
                </div>

                
                
                { /*  Mobile View */}

                <div className={`${mobile? "bg-white fixed w-full h-[250px] top-0 z-50 items-center flex flex-col" : "h-0 w-0"}  gap-20`}>
                    <div  className="flex flex-col justify-end items-end w-full">
                        <img onClick={()=> setMobile(false)} src={X} className="w-[40px] h-[40px] justify-end "/>
                    </div>
                    <ul className="text-2xl justify-center items-center font-bold flex flex-col gap-3  fixed top-20">
                        <li onClick={()=> setMobile(false)} className="border border-black text-center w-[200px] items-center cursor-pointer hover:text-gray-600 font-bold"><Link to="/">HOME</Link></li>
                        <li onClick={()=> setMobile(false)} className="border border-black text-center w-[200px] items-center cursor-pointer hover:text-gray-600 font-bold"><Link to="/events">EVENTS</Link></li> 
                        <li onClick={()=> setMobile(false)} className="border border-black text-center w-[200px] items-center cursor-pointer hover:text-gray-600 font-bold"><Link to="/about">ABOUT</Link></li>
                        <li onClick={()=> setMobile(false)} className="border border-black text-center w-[200px] items-center cursor-pointer hover:text-gray-600 font-bold"><Link to="/contact">CONTACT</Link></li>
                                               
                    </ul>
                </div>
            </div>
    </div>
    );
}

export default Navbar;