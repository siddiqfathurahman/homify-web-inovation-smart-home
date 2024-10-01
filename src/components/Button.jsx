const Button = ({
    link="#", 
    label="Button", 
    color="text-white",
    bgColor="bg-black" 
}) => {

    const buttonClasses = `${color} ${bgColor} px-5 md:px-10 py-2 rounded-[25px] text-center text-sm sm:text-md font-bold inline-block`;

    return(
        <a href={ link } className={ buttonClasses }>
            { label }
        </a>
    );
};

export default Button