import React, {useState} from "react";
import Logo from "../assets/lekki.jpg"
import Typewriter from 'typewriter-effect';
import {motion} from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css'
import GroupPic1 from "../assets/GroupPic1.jpg"
import GroupPic2 from "../assets/GroupPic2.jpg"
import GroupPic3 from "../assets/GroupPic3.jpg"
import GroupPic4 from "../assets/GroupPic4.jpg"
import GroupPic5 from "../assets/GroupPic5.jpg"
import GroupPic6 from "../assets/GroupPic6.jpg"
import GroupPic7 from "../assets/GroupPic7.jpg"
import SEO from "./SEO";



function Herosection(){
    const [selectedPic, setSelectedPic] = useState(null);

    function select(img){
        setSelectedPic(img);
    }
    return(
        <div className="mb-[150px]">
            <SEO 
                title="Lekki Brothers Club - Premier Social Organization in Lagos, Nigeria"
                description="Join Lekki Brothers Club, Lagos' fastest growing social organization fostering brotherhood, community development, and networking opportunities. Stronger together, learning and growing."
                url="https://www.lekkibrothers.com.ng/"
            />
            <div className=" flex flex-col mb-10 md:flex md:flex-row md:gap-[100px] justify-center items-center h-[400px] mt-[180px] md:mt-[15px] ">
                <div className="flex flex-col mb-10 justify-center items-center gap-5 md:gap-10">
                    <div>
                        <p className="md:text-4xl text-2xl font-bold">Welcome to </p>
                        <p className="text-green-600 text-3xl md:text-5xl mt-7 font-bold max-w-[300px] md:max-w-[500px]">
                           <Typewriter 
                                options={{
                                    strings: ["Lekki Brother Club 2024", "Fastest Growing Club in Africa"],
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

            <div className="mt-56">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay, Pagination, Navigation]}  
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    
                    loop={true}
                >
                    <SwiperSlide>
                        <img src={GroupPic1} onClick={() => select(GroupPic1)} className="md:w-[400px] h-[200px] object- rounded-2xl"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={GroupPic2} onClick={() => select(GroupPic2)} className="md:w-[400px] rounded-2xl"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={GroupPic3} onClick={() => select(GroupPic3)} className="md:w-[400px] rounded-2xl"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={GroupPic4} onClick={() => select(GroupPic4)} className="md:w-[400px] rounded-2xl"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={GroupPic5} onClick={() => select(GroupPic5)} className="md:w-[400px] rounded-2xl"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={GroupPic6} onClick={() => select(GroupPic6)} className="w-[200px] md:w-[400px] rounded-2xl"/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={GroupPic7} onClick={() => select(GroupPic7)} className="w-[200px] md:w-[400px] rounded-2xl"/>
                    </SwiperSlide>

                </Swiper>
            </div>
            
            {selectedPic && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="relative">
                        <img 
                            src={selectedPic} 
                            alt="Selected" 
                            className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-lg"
                        /> 
                        <button 
                            onClick={() => setSelectedPic(null)} 
                            className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full shadow-md"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Herosection;