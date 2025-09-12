import React from "react";
function Events(){
    const events = [
        {
        id: 1,
        title: 'Burial Ceremony',
        date: 'August 22, 2025',
        time: '7:00 PM',
        location: 'Awka',
        description: 'Celebration of life for our Brothers Parent',
        exclusive: true
        },
        {
        id: 2,
        title: 'September Meeting',
        date: 'September 20, 2025',
        time: '2:00 PM',
        location: 'Lekki Homemade Bar',
        description: 'Connect with industry leaders and explore collaboration opportunities.',
        exclusive: false
        },
        {
        id: 3,
        title: 'Community Outreach',
        date: 'February 10, 2025',
        time: '10:00 AM',
        location: 'Lekki Community Center',
        description: 'Join us in making a difference in our local community.',
        exclusive: false
        }
    ];
    return(
        <div>
            <div className="flex justify-center items-center mb-10 mt-5">
                <h1  className="text-gray-700 text-4xl font-bold">Events</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                {events.map((event, index) => (
                    <div key={event.id} className="flex flex-col gap-3 shadow-2xl w-[350px] h-[300px] rounded-2xl p-10">
                        <div className="max-w-[250px] mb-6">
                            <h3 className="font-bold text-2xl text-green-500">{event.title}</h3>
                        </div>
                        <div>
                            <p className="text-gray-700">{event.date}</p>
                        </div>
                        <div>
                            <p className="text-gray-700">{event.time}</p>
                        </div>
                        <div>
                            <p className="text-gray-700">{event.location}</p>
                        </div>
                        <div>
                            <p className="text-gray-700">{event.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;