import DefaultPFP from "../assets/default-pfp.png"
import StarIcon from "../assets/icons/testimony-star.png"

const TestimonyCard = ({
    CustomerPFP = DefaultPFP,
    CustomerName = "John Doe",
    CustomerUsername = "johndoe",
    Testimony = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, nunc vel bibendum iaculis, justo ipsum semper lectus, vitae tincidunt neque urna sit amet diam."
}) => {
    return (
        <section className="min-w-[19rem] w-[19rem] md:w-[24rem] max-w-[24rem] aspect-square border-4 rounded-[14px] p-8 shrink-0 flex flex-col gap-2 shadow-xl shadow-slate-300">
            <section className="flex items-center">
                <img src={ CustomerPFP } alt="Customer Testimonial" className="w-1/4 aspect-square object-cover scale-[0.75]" />
                <div className="py-6">
                    <p className="text-md font-bold">{ CustomerName }</p>
                    <p className="text-md font-bold">@{ CustomerUsername }</p>
                </div>
            </section>
            <section>
                <p className="text-sm md:text-base">{ Testimony }</p>
            </section>
            <section className="mt-auto flex justify-center items-center gap-2">
                {[...Array(5)].map((_, index) => (
                    <img src={ StarIcon } key={ index } className="w-[6.25%]" />
                ))}
            </section>
        </section>
    )
}

export default TestimonyCard