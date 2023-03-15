import Image from "next/image";
import logo_image_black from "../../public/Assets/Images/GiftRoom Logo Black.png";
//import logo_image from "../../public/Assets/Images/giftroom logo white.svg";
import { useState } from 'react';
//import styles from "../../styles/Menu.module.css";
//import Link from "next/link";
import logo_image3 from "../../public/Assets/Images/GiftRoomWhiteResized.png";

function NavLink({ to, children }) {
    return <a href={to} className={` mx-2 pl-5 my-3 shadow md:shadow-none p-2 active:shadow-lg md:active:shadow-none rounded-lg`}>
        {children}
    </a>
}

function NavLink1({ to, children }) {
    return <a href={to} className={`text-2xl text-black mx-2 pl-5 my-3 shadow md:shadow-none p-2 active:shadow-lg md:active:shadow-none rounded-lg`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md z-10`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}

                <Image src={logo_image_black} alt="giftroom logo" w="100%" />

            </div>
            <div className="flex flex-col  text-xl font-medium my-4 space-evenly">

                <NavLink1 to="/">
                    Home
                </NavLink1>

                <NavLink to="/ico#pre-sale">
                    Pre-sale
                </NavLink>
                <NavLink to="/ico#tokenomics">
                    Tokenomics
                </NavLink>
                <NavLink to="/ico#whitepaper">
                    Whitepaper
                </NavLink>

                <NavLink1 to="/login">
                    Login
                </NavLink1>
            </div>
        </div>
    )
}

export default function IcoMenu() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter bg-transparent px-4 pt-2 h-18 items-center ">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="mx-4 md:mx-0 lg:mx-4 cursor-pointer">
                <div style={{ minWidth: "150px" }}>
                    <a href="/" className="cursor-pointer ml-2" >
                        <Image src={logo_image3} alt="giftroom logo" />
                    </a>
                </div>
            </div>

            <span className={["separatorSpan1 hidden md:flex"].join(' ')} />
            <div className="px-2 w-5/12 md:w-8/12 flex items-center">

                <div className={["menuMidText1 ml-5 hidden md:flex"].join(' ')} >
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/ico#mission">
                        Mission
                    </NavLink>
                    <NavLink to="/ico#rewards">
                        Rewards
                    </NavLink>
                    {/* <NavLink to="/ico#tokenomics">
                        Tokenomics
                    </NavLink>
                    <NavLink to="/ico#whitepaper">
                        Whitepaper
                    </NavLink> */}

                </div>
            </div>
            {/* <div className="hidden md:flex w-4/12 flex items-center relative">
                <input type="search" placeholder="search"
                    className="w-full border-2 p-1 pl-3 rounded-md"
                />
                <div className="flex absolute inset-y-0 right-5 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div> */}
            <div className="w-4/12 flex justify-end items-center">

                <div className="cursor-pointer z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden " onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5 " : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className={["menuMidText1 ml-5 mr-4 lg:mr-9 hidden md:flex"].join(' ')}>
                    {/* <a className="mr-1" href="/ico#giftoken">
                        <button className="ml-2 bg-white text-white py-2 px-5
                        border-2
                        text-black
                        rounded-full hover:bg-blue-500 hover:text-white
                        hover:border-2">
                            $giftoken

                        </button>
                    </a> */}
                    <a className="ml-2" href="/login">
                        <button className="w-32 mr-2 bg-[#8639E8] text-white py-2 px-5 rounded-full hover:bg-white
                        border-2
                        hover:text-black
                        ">
                            Login
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    )
}


// export async function getStaticProps({ params }) {

//     const req = await fetch(`http://localhost:3000/${params.id}.json`);

//     const data = await req.json();

//     return {
//         props: {
//             car: data
//         },
//     }

// }

// export async function getStaticPaths() {

//     const req = await fetch(`http://localhost:3000/cars.json`);

//     const data = await req.json();

//     const paths = data.map(car => {
//         return { params: { id: car } }
//     });

//     return {
//         paths,
//         fallback: false
//     }

// }