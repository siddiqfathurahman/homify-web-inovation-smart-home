import TestimonyCard from "./TestimonyCard.jsx"

import PFP1 from "../assets/pfp-1.png"
import PFP2 from "../assets/pfp-2.png"
import PFP3 from "../assets/pfp-3.png"
import PFP4 from "../assets/pfp-4.png"
import PFP5 from "../assets/pfp-5.png"
import PFP6 from "../assets/pfp-6.png"


const Testimony = () => {

    const customers = [
        {
            PFP: PFP1,
            name: "River Thompson",
            username: "riverthompson",
            testimony: "The smart home system from Homify has transformed the way we manage our home. The devices are reliable, and everything runs smoothly. Their support team is always quick to help with any questions."
        },
        {
            PFP: PFP2,
            name: "Michael Rivera",
            username: "michaelrivera",
            testimony: "Thanks to Homify, our home automation has never been easier. The app is responsive and setting up routines has saved us time and energy. The technical support is exceptional, especially in urgent situations."
        },
        {
            PFP: PFP3,
            name: "Emily Johnson",
            username: "emilyjohnson",
            testimony: "Homify\'s smart security solutions give us peace of mind. The cameras and automation features work flawlessly, and their customer service is always ready to assist. We feel safe and secure using Homify.",
        },
        {
            PFP: PFP4,
            name: "David Lee",
            username: "davidlee",
            testimony: "Homify has made our home truly smart. From controlling the lights to adjusting the thermostat, everything works seamlessly. The app is intuitive, and the customer support is always there when we need assistance.",
        },
        {
            PFP: PFP5,
            name: "Anna Williams",
            username: "annawilliams",
            testimony: "Using Homify has been a game changer for our home security. The cameras and motion sensors provide real-time updates, and we can control everything remotely. The support team has been incredibly helpful with setup and troubleshooting.",
        },
        {
            PFP: PFP6,
            name: "James Brown",
            username: "jamesbrown",
            testimony: "Homify\'s automation system has simplified our daily routines. We can set schedules for lighting, heating, and even security. Their team is responsive and always ready to hep with any issues. We could\"nt be happier with the service.",
        },
    ];

    return (
        <section className="px-5 sm:px-10 py-[6rem] overflow-x-auto scroll-smooth">
            <h2 className="text-3xl sm:text-4xl md:text-5xl px-5 sm:px-0 font-bold md:text-center max-w-[35ch] mx-auto mb-[1em]">
                What customers are saying about Homify, the leading smart home solution since 2010
            </h2>
            <section className="flex items-center gap-8 px-2 sm:px-4 py-8 overflow-x-auto">
                {customers.map((customer, index) => (
                    <TestimonyCard
                        key={index}
                        CustomerPFP={customer.PFP}
                        CustomerName={customer.name}
                        CustomerUsername={customer.username}
                        Testimony={customer.testimony}
                    />
                ))}
            </section>
        </section>
    )
}

export default Testimony