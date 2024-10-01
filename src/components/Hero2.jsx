import Hero2Image from "../assets/hero2-img.png"

const Hero2 = () => {
    return (
        <section id="discover" className="w-full px-10 py-[6rem] md:pb-2 flex flex-wrap justify-center items-center content-around gap-16">
            <img src={ Hero2Image } alt="Modern IoT System Illustration" className="md:max-w-md lg:max-w-lg inline-block" />
            <div className="max-w-lg inline-block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-[0.5em] grow">Discover the<br/> Homify <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Differences</span></h2>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl">
                    Homify transforms your home into a smart, connected space with cutting-edge 
                    technology, making management, security, and efficiency effortless from your 
                    smartphone
                </p>
            </div>
        </section>
    )
}

export default Hero2