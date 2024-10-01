import NumbersCard from "./NumbersCard.jsx"

const TheNumbers = () => {
    return (
        <section id="the_numbers" className="px-10 py-[6rem]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mx-auto mb-[0.5em]">
            The <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Numbers</span> say it all
            </h2>
            <p className="text-sm text-center max-w-sm mx-auto">Homify efficiently transforms your home with smart solutions for any lifestyle and budget</p>
            <section id="numbers_card" className="w-[90%] md:w-[80%] mx-auto my-8 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
                <NumbersCard number="5.6 hrs" description="saved on average by automating daily tasks with Homify&rsquo;s smart systems" />
                <NumbersCard number="75%" description="reduction in energy usage with Homify&rsquo;s smart thermostats and lighting solutions compared to traditional systems" />
                <NumbersCard number="0.3%" description="of the average household budget invested in Homify to make your home smarter, safer and more efficient" />
                <NumbersCard number="$50K" description="saved in energy costs by one Homify customer over 3 years using our automation and energy management solutions" />
            </section>
        </section>
    )
}

export default TheNumbers