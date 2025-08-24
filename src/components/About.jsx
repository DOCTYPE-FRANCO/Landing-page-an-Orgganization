import React from "react";
import Chairman from "../assets/chairman.jpg";
import President from "../assets/president.jpg";
import VP from "../assets/VP.jpg";
import Treasurer from "../assets/treasurer.jpg";
import Lawyer from "../assets/lawyer.jpg";
import Provost from "../assets/provost.jpg";
import PublicRel from "../assets/publicrel.jpg";

function About() {
    const executives = [
        
        { name: 'President', image: President, role: 'President' },
        { name: 'Vice President', image: VP, role: 'Vice President' },
        { name: 'Treasurer', image: Treasurer, role: 'Treasurer' },
        { name: 'Lawyer', image: Lawyer, role: 'Legal Counsel' },
        { name: 'Provost', image: Provost, role: 'Provost' },
        { name: 'Public Relations Officer', image: PublicRel, role: 'PR Officer' },
        { name: 'Chairman Board of Trustee', image: Chairman, role: 'Chairman' }
    ];
    return (
        <div className="flex flex-col justify-center items-center overflow-hidden mb-[100px] overflow-hidden">
            <div>
                <h1 className="md:text-4xl text-3xl font-bold text-gray-900"> About Us</h1>
            </div>
            <div>
                <p className="md:max-w-[1150px] max-w-[350px] text-center mt-10 font-bold">
                    We are a community built on the values of connection, growth, and purpose. Our mission is to bring people together to learn, share, and support one another while enjoying life to the fullest.

                    We believe in staying active in mind, body, and spirit, nurturing friendships, and creating spaces where good times are shared and lasting bonds are formed. Every step we take is guided by a desire to grow personally and collectively, finding purpose in the journey and joy in the moments along the way.

                    Beyond ourselves, we are committed to giving back and creating a positive impact in the communities we touch. Through acts of kindness, shared experiences, and meaningful contributions, we strive to leave a lasting mark wherever life leads us.

                    Together, we celebrate life, embrace growth, and inspire each other to keep moving forward — stronger, happier, and more fulfilled.
                </p>
            </div>
            <div className="mt-20">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Leadership</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center rounded-2xl px-10">
                    {executives.map((executive, index) => (
                        <div key={index} className="flex flex-col justify-center items-center mt-10 ">
                            <div className="relative overflow-hidden rounded-lg mb-4 w-full">
                                <img src={executive.image} alt={executive.name} className="w-full h-64 object-cover object-top" />
                            </div>
                            
                            <div className="flex flex-col gap-8 justify-center items-center">
                                <h3 className="text-lg font-bold">{executive.name}</h3>
                                <p className="text-sm">{executive.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;