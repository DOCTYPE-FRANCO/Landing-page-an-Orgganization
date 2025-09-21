import React,{useState}  from "react";
import Location from "../assets/location.svg"
import Phone from "../assets/phone.svg"
import Mail from "../assets/mail.svg"
function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }));
    }

    function handleSubmit(e){
        e.preventDefault()
        setFormData({name : "", email: "", message: ""})
    }
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

                <div className="bg-green-500 w-[300px] h-[390px] md:w-[450px] md:h-[390px] rounded-2xl ">
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-5 gap-2">
                        <label className="flex flex-col font-bold">
                            Name
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Enter your name"
                                onChange={handleChange}
                                className="flex justify-center items-center border md:w-[350px] w-[250px] h-[50px] rounded-xs pl-5"
                            />  
                        </label>

                        <label className="flex flex-col font-bold">
                            E-mail
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="eg. youremail@gmail.com"
                                onChange={handleChange}
                                className="flex justify-center items-center border md:w-[350px] w-[250px] h-[50px] rounded-xs pl-5"
                            />  
                        </label>

                        <label className="flex flex-col font-bold">
                            Message
                            <input
                                type="text"
                                name="message"
                                value={formData.message}
                                placeholder="Write us a message"
                                onChange={handleChange}
                                className="flex border md:w-[350px] w-[250px] h-[100px] rounded-xs pl-5"
                            />  
                        </label>

                        <button className="font-bold m-2 text-white bg-black hover:text-black hover:bg-gray-400 px-6 py-3 md:px-8 rounded-full active:bg-gray-600">Send</button>
                    </form>
                </div>    
            </div>             
        </div>
    
    );
}

export default Contact;