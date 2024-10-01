import LightBulb from "../assets/light-bulb.png";
import CCTV from "../assets/cctv.png";

const Hero = () => {
    return (
        <section id="hero" className="w-full px-5 py-12 md:px-10">
            <h1 className="mx-auto mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-tight lg:leading-snug sm:text-center font-extrabold max-w-5xl relative">
                Elevate Your Home Experiences with Cutting-edge <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Smart Technology</span> from Homify
                <img className="w-24 absolute top-[-2rem] left-[-2rem] z-30 hidden lg:block" src={ CCTV } alt="CCTV" />
                <img className="w-20 absolute bottom-[-3rem] right-[-3rem] z-30 hidden lg:block" src={ LightBulb } alt="Light Bulb" />
            </h1>
            <p className="sm:mx-auto mb-5 text-sm md:text-lg lg:text-xl text-gray-3 sm:text-center max-w-lg">Automate your home effortlessly with seamless integration and no tech skills needed</p>
            <a href="#plans" className="w-fit mx-auto px-4 py-2 sm:px-10 sm:py-4 rounded-[35px] text-center text-white text-sm lg:text-lg font-bold bg-black block">
                Upgrade Your Home
            </a>
        </section>
    )
}

export default Hero