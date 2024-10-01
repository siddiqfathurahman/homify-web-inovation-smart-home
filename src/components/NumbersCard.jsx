const NumbersCard = ({
    number="100%",
    description="is great!",
}) => {
    return(
        <section className="rounded-[14px] p-8 shadow-xl shadow-slate-300">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">{ number }</h3>
            <p className="text-sm font-light">{ description }</p>
        </section>
    )
}

export default NumbersCard