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
                    <li><Link to="/" className="cursor-pointer hover:text-gray-600 font-bold">Events</Link></li>
                    <li><Link to="/about" className="cursor-pointer hover:text-gray-600 font-bold">About-Us</Link></li>
                    <li><Link to="/" className="cursor-pointer hover:text-gray-600 font-bold">Contact</Link></li>

                </ul>

                <div className="md:hidden flex justify-end w-full mt-3 mr-3">
                <img src={Menu} onClick={()=> setMobile(true)} className="w-[40px]"/>
                </div>

                
                
                { /*  Mobile View */}

                <div className={`${mobile? "bg-white fixed w-full h-full bottom-0 right-0 left-0 mt-[400px] z-50  items-center flex flex-col" : "h-0 w-0"}  gap-10`}>
                    <div  className="flex flex-col justify-end items-end w-full p-4">
                        <img onClick={()=> setMobile(false)} src={X} className="w-[40px] h-[40px] justify-end "/>
                    </div>
                    <ul className="text-3xl font-bold flex flex-col gap-7">
                        <li onClick={()=> setMobile(false)} className="cursor-pointer hover:text-gray-600 font-bold">Home</li>
                        <li onClick={()=> setMobile(false)} className="cursor-pointer hover:text-gray-600 font-bold">Events</li> 
                        <li onClick={()=> setMobile(false)} className="cursor-pointer hover:text-gray-600 font-bold"><Link to="/about">About</Link></li>
                        <li onClick={()=> setMobile(false)} className="cursor-pointer hover:text-gray-600 font-bold">Contact</li>
                                               
                    </ul>
                </div>
            </div>
    </div>
    );
}

export default Navbar;