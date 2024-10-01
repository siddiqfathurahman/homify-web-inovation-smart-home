import TrustBoxBackground from "../assets/trust-box-background.png"

const TrustBox = () => {
    return (
        <section 
            className={`bg-cover bg-center scale-[2] md:scale-[1] md:rounded-[28px] mx-auto w-full aspect-video max-w-5xl relative before:absolute before:bg-black before:inset-0 md:before:rounded-[28px] before:opacity-[0.85]`}
            style={{ backgroundImage: `url(${TrustBoxBackground})`}}
        >
            <h3 className="font-bold text-sm sm:text-xl md:text-3xl lg:text-4xl text-white w-[40%] md:w-full md:text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">Over <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent"><strong>7,000+</strong></span> homes trust Homify for their smart home solutions</h3>
        </section>
    )
}

export default TrustBox