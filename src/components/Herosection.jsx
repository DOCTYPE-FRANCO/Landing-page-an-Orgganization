import React from "react";
import Logo from "../assets/lekki.jpg"
import Typewriter from 'typewriter-effect';
import {motion} from "framer-motion"



function Herosection(){
    return(
        <div className="mb-[150px]">
            <div className=" flex flex-col mb-10 md:flex md:flex-row md:gap-[100px] justify-center items-center h-[400px] mt-[180px] md:mt-[15px] ">
                <div className="flex flex-col mb-10 justify-center items-center gap-3 md:gap-10">
                    <div>
                        <p className="md:text-4xl text-3xl font-bold">Welcome to </p>
                        <p className="text-green-600 text-4xl md:text-5xl mt-7 font-bold">
                           <Typewriter 
                                options={{
                                    strings: ["Lekki Brother Club", "A Community of Growth"],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor : 5000
                                }}
                            /> 
                        </p>
                    </div>

                    <div>
                         <p className="max-w-[330px] md:max-w-[450px] font-bold">Stronger together, learning and growing, staying active, sharing good times, giving back, building friendships, finding purpose, enjoying moments, creating impact, leaving a positive mark wherever the journey takes us.</p>
                    </div>
                    
                </div>
               
                <div className="w-[400px] ">
                   <motion.img 
                        src={Logo}
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1}}
                   /> 
                </div>
            </div>
        </div>
    );
}

export default Herosection;