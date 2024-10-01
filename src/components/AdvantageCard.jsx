const AdvantageCard = ({
    Icon,
    title = "Title", 
    body = "Body" 
}) => {
    return (
        <article className="p-4">
            <div className="mx-auto">
                { Icon && 
                <Icon size={50} style={{
                    marginRight: "auto",
                    marginLeft: "auto",
                }}/>}
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl text-center font-bold my-[0.5em]">{ title }</h3>
            <p className="text-sm">{ body }</p>
        </article>
    )
}

export default AdvantageCard