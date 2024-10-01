import PricingCard from "./PricingCard.jsx"
import CustomHomeSetupCard from "./CustomHomeSetupCard.jsx"

const plan1Features = [
    "Unlimited device control",
    "24/7 customer support",
    "Energy saving reports",
    "Smart automation routines",
    "Real-time monitoring",
    "Adjustable brightness",
    "Schedule automation",
];
const plan2Features = [
    "Unlimited device control",
    "24/7 customer support",
    "Energy saving reports",
    "Smart automation routines",
    "Real-time monitoring",
    "Temperature optimization",
    "Remote temperature control",
];
const plan3Features = [
    "Unlimited device control",
    "24/7 customer support",
    "Energy saving reports",
    "Smart automation routines",
    "Real-time monitoring",
    "HD video surveillance",
    "Motion detection and alerts",
];

const Pricing = () => {
    return (
        <>
            <section id="normal_pricing" className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-y-10 gap-x-8">
                <PricingCard
                    title="Smart Lighting System"
                    subtitle="Automate lighting with remote  control, brightness adjustment and scheduling"
                    price="49" save="5"
                    features={ plan1Features }
                />
                <PricingCard
                    title="Smart Thermostat System"
                    subtitle="Automate lighting with remote  control, brightness adjustment and scheduling"
                    price="69" save="7"
                    features={ plan2Features }
                />
                <PricingCard
                    title="Smart Security Cameras"
                    subtitle="Automate lighting with remote  control, brightness adjustment and scheduling"
                    price="79" save="8"
                    features={ plan3Features }
                />
            </section>
            <section id="custom_pricing" className="mt-10">
                <CustomHomeSetupCard />
            </section>
        </>
    )
}

export default Pricing