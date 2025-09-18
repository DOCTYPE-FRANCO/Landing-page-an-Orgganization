import React from "react";
import Location from "../assets/location.svg"
import Phone from "../assets/phone.svg"
import Mail from "../assets/mail.svg"
function Contact(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mt-5 pb-14">
                <h1 className="text-3xl text-gray-700 font-bold">Contact Us</h1>
            </div>
            
            <div className="flex  flex-col md:flex-row sm:gap-15 gap-40 justify-center items-center">
                <div className=" flex  flex-col gap-5 justify-center p-5 w-[300px] h-[200px] bg-green-500 rounded-2xl">
                    <div className="flex flex-row gap-2">
                        <img src={Location} className="w-[40px] h-[40px]"/>
                        <p className="font-bold">
                            Lekki Homemade Bar
                        </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <img src={Phone} className="w-[40px] h-[40px]"/>
                        <p className="font-bold">
                            +234-803-966-4422
                        </p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img src={Mail} className="w-[40px] h-[40px]"/>
                        <p className="font-bold">
                            lekkibrother@gmail.com
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 w-[400px] h-[550px] p-5 shadow-lg ">
                    <div className="flex justify-center pb-4">
                        <h2 className="text-2xl font-bold">Send Us a Message</h2>
                    </div>

                    <div className="flex flex-col">
                        <label>Full Name:</label>
                        <input type="text" className="border border-black p-2"/>
                    </div>

                     <div className="flex flex-col">
                        <label>Email:</label>
                        <input type="text" className="border border-black p-2"/>
                    </div>

                     <div className="flex flex-col">
                        <label>Phone Number: </label>
                        <input type="tel" className="border border-black p-2"/>
                    </div>

                     <div className="flex flex-col">
                        <label>Intrest</label>
                        <select className="border border-black">
                            <option value="general">General Inquiry</option>
                            <option value="membership">Membership Application</option>
                            <option value="events">Event Information</option>
                            <option value="partnership">Partnership Opportunity</option>
                        </select>

                    </div>

                     <div className="flex flex-col">
                        <label>Write us a Message</label>
                        <input type="text" className="border border-black p-5"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="font-bold bg-green-400 text-white w-[100px] h-[50px] rounded-full hover:bg-slate-500">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;