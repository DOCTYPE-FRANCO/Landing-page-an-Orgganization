import React from "react";
import Chairman from "../assets/chairman.jpg";
import President from "../assets/president.jpg";
import VP from "../assets/VP.jpg";
import Treasurer from "../assets/treasurer.jpg";
import Lawyer from "../assets/lawyer.jpg";
import Provost from "../assets/provost.jpg";
import PublicRel from "../assets/publicrel.jpg";
import Orjison from "../assets/Orjisonedit.jpeg";
import EmekaAnthony from "../assets/EnemchukwuAnthony.jpg";
import VictorArase from "../assets/VictorArase.jpg";
import NonsoFelix from "../assets/NonsoFelix.jpg";
import ChukwuemekaAnosike from "../assets/ChukwuemekaAnosike.jpeg";
import Joeigwe from "../assets/Joeigwe.jpg";
import ChukwujekwuMadubuko from "../assets/ChukwujekwuMadubuko.jpg";
import clementemeh from "../assets/clementemeh.jpg";
import ChrisBuchi from "../assets/ChrisBuchi.jpg";
import Okenwa from "../assets/Okenwaedit.jpeg";
import EmekaUdeo from "../assets/Emekaedit.jpeg";
import JudeDuru from "../assets/judeduru.jpg"

function About() {
    const executives = [
        { name: 'President', image: President, role: 'President', business: 'Management' },
        { name: 'Vice President', image: VP, role: 'Vice President', business: 'Management' },
        { name: 'Treasurer', image: Treasurer, role: 'Treasurer', business: 'Finance' },
        { name: 'Lawyer', image: Lawyer, role: 'Legal Counsel', business: 'Legal' },
        { name: 'Provost', image: Provost, role: 'Provost', business: 'Academics' },
        { name: 'Public Relations Officer', image: PublicRel, role: 'PR Officer', business: 'Communications' },
        { name: 'Sir Chigozie Ijeomah', image: Chairman, role: 'Chairman Board of Trustees', business: 'Board' },
        { name: 'Joe NWANNEBIKE Igwe', image: Joeigwe, role: 'Disciplinary Committee Chairman', business: 'Disciplinary' },
        { name: 'Orjison chukwuka Charles', image: Orjison, role: 'Member', business: 'General' },
        { name: 'Enemchukwu Emeka ', image: EmekaAnthony, role: 'Member', business: 'General' },
        { name: 'Mr. Victor Arase', image: VictorArase, role: 'Member', business: 'General' },
        { name: 'ORANUGO FELIX NONSO', image: NonsoFelix, role: 'Member', business: 'General' },
        { name: 'ChukwuEmeka Emmanuel Anosike', image: ChukwuemekaAnosike, role: 'Member', business: 'General' },
        { name: 'Madubuko chukwujekwu ', image: ChukwujekwuMadubuko, role: 'Member', business: 'General' },
        { name: 'Emenike Clement Emeh', image: clementemeh, role: 'Welfare - Member', business: 'Welfare' },
        { name: 'Nwosu Mmaduabuchi Christian', image: ChrisBuchi, role: 'Member', business: 'General' },
        { name: 'Chigozie Ijeaoma', image: Okenwa, role: 'Member', business: 'General' },
        { name: 'Emeka Udeogaranya', image: EmekaUdeo, role: 'Member', business: 'General' },
        { name: 'Mr jude Duru ', image: JudeDuru, role: 'Member', business: 'General' },
    ];

    return (
        <div className="flex flex-col justify-center items-center overflow-hidden mb-[100px] ">
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
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet the Family</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center rounded-2xl px-10">
                    {executives.map((executive, index) => (
                        <div key={index} className="flex flex-col justify-center items-center mt-10 ">
                            <div className="relative overflow-hidden rounded-lg mb-4 w-full">
                                <img src={executive.image} alt={executive.name} className="w-full h-64 object-cover object-top hover:scale-110 transition-all duration-700" />
                            </div>
                            
                            <div className="flex flex-col gap-8 justify-center items-center">
                                <h3 className="text-lg font-bold">{executive.name.toLocaleUpperCase()}</h3>
                                <p>{}</p>
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