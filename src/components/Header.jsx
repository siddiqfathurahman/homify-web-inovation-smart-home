import Logo from "../assets/homify-logo.png"
import Nav from "./Nav.jsx"

import { GoHome } from "react-icons/go"
import { IoCartOutline } from "react-icons/io5"
import { GoCheckCircle } from "react-icons/go"
import { GoNote } from "react-icons/go"

const Header = () => {

    const navItems = [
        {label:"Home", icon: <GoHome size="30" title="Home" />, link:"#"},
        {label:"Products", icon: <IoCartOutline size="30" title="Products" />, link:"#plans"},
        {label:"Solutions", icon: <GoCheckCircle size="30" title="Solutions" />, link:"#faq"},
        {label:"Blog", icon: <GoNote size="30" title="Blog" />, link:"#discover"},
    ];

    return (
        <>
            <header className="w-full pt-8 pb-4 md:hidden shadow-lg shadow-slate-300">
                <div className="logo max-w-48 mx-auto">
                    <img src={ Logo } alt="Homify Logo" className="transform"/>
                </div>
            </header>
            <header className="bg-white m-8 py-4 px-7 border-4 rounded-[10px] shadow-xl fixed right-0 left-0 bottom-0 z-50 md:relative flex justify-between items-center">
                <div className="logo max-w-48 hidden md:block">
                    <img src={ Logo } alt="Homify Logo" className="transform"/>
                </div>
                <Nav navItems={ navItems } />
            </header>
        </>
    );
};

export default Header