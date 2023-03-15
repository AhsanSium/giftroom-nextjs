import Image from "next/image";
//import logo_image from "../../public/Assets/Images/giftroom logo white.svg";
import logo_image3 from "../../public/Assets/Images/GiftRoomWhiteResized.png";
import logo_image_black from "../../public/Assets/Images/GiftRoom Logo Black.png";
import { useState } from 'react';
import styles from "../../styles/Menu.module.css";
import Link from "next/link";

function NavLink({ to, children }) {
    return <a href={to} className={`mx-2 pl-5 my-3 shadow md:shadow-none p-2 active:shadow-lg md:active:shadow-none rounded-lg`}>
        {children}
    </a>
}

function NavLink1({ to, children }) {
    return <a href={to} className={`text-2xl mx-2 pl-5 my-3 shadow md:shadow-none p-2 active:shadow-lg md:active:shadow-none rounded-lg`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md z-10`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}

                <Image src={logo_image_black} alt="giftroom logo" w="100%" />

            </div>
            <div className="text-slate-800 flex flex-col  text-xl font-medium my-4 space-evenly">

                <NavLink1 to="/">
                    Home
                </NavLink1>
                <NavLink1 to="/#how-it-works">
                    How<span className="ml-1" />it<span className="ml-1" />Works
                </NavLink1>
                {/* <NavLink1 to="/#collabrations">
                    Collabrations
                </NavLink1> */}
                <NavLink1 to="/ico">
                    ICO
                </NavLink1>
                <NavLink1 to="/login">
                    Login
                </NavLink1>
            </div>
        </div>
    )
}

export default function LoginMenu() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter text-white  px-4 pt-2 h-18 items-center bg-[#3772FF]">
            <MobileNav open={open} setOpen={setOpen} />



            <div className="mx-4 md:mx-0 lg:mx-4 w-10/12 md:w-4/12 lg:w-2/12">

                <div style={{ minWidth: '150px' }}>
                    <a href="/" className="cursor-pointer ml-2" >
                        <Image src={logo_image3} alt="giftroom logo" />
                    </a>
                </div>
            </div>
            <span className={[styles.separatorSpan, "hidden md:flex ml-2"].join(' ')} />
            <div className="px-2 lg:w-4/12 flex items-center">

                <div className={[styles.menuMidText, "ml-2 lg:ml-5 hidden md:flex"].join(' ')} >
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/#how-it-works">
                        How<span className="ml-1" />it<span className="ml-1" />works
                    </NavLink>
                    {/* <NavLink to="/#collabrations">
                        Collabrations
                    </NavLink> */}
                </div>
            </div>

            {/* <div className="hidden lg:flex w-4/12 flex items-center relative">
                <input id="Search_Input" type="text" placeholder="search"
                    className="text-white placeholder-white/[.8] w-full border-2 border-white p-1 pl-3 rounded-md bg-[#3772FF]"
                />
                <div className="flex absolute inset-y-0 right-5 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div> */}

            <div className="hidden lg:flex w-4/12 flex">

            </div>

            <div className="w-full flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className={[styles.menuMidText, " ml-5 hidden md:flex"].join(' ')}>

                    <a href="/">
                        <button className=" mr-2 bg-transparent py-2 px-4
                        border-2
                        text-white
                        rounded-full hover:bg-blue-500 hover:text-white
                        hover:border-2
                        hover:border-white
                        tracking-wide
                        ">
                            $gifttoken

                        </button>
                    </a>

                    {/* <NavLink to="/ico">
                    </NavLink> */}
                    {/* <Link className="ml-4" href="/login">
                        <button className="w-24 lg:w-32 mr-2 bg-[#DC02AC] text-white py-[10px] px-[10px] rounded-full hover:bg-white
                        border-2
                        hover:text-black
                        tracking-wider text-center
                        ">
                            Login
                        </button>
                    </Link> */}
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