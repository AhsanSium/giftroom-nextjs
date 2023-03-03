// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from "next/image";
import partyPopperImage from "../../public/Assets/Images/PartyPopper.svg";
import home1Image from "../../public/Assets/Images/HomeSection First.png";
import home2Image from "../../public/Assets/Images/HomeSection Second.png";


// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const Home_Section1 = ({ text }) => {

    // const control = useAnimation();
    // const [ref, inView] = useInView();

    // useEffect(() => {
    //     if (inView) {
    //         control.start("visible");
    //     } else {
    //         control.start("hidden");
    //     }
    // }, [control, inView]);

    return (
        // <motion.div
        //     ref={ref}
        //     variants={boxVariant}
        //     initial="hidden"
        //     animate={control}
        <div
            className="mx-auto p-5 pt-60  pb-28 lg:px-16 content-around"
            style={{ backgroundImage: `url("${partyPopperImage.src}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}
        >

            <h1 className="headingText2 py-3">{text.homePageText4 ? text.homePageText4 : 'Connect'}</h1>

            {/* <h3 style={{ fontWeight: '900', fontSize: '40px', textShadow: '1px 0 black', letterSpacing: '-0.02em' }} className=" my-6 text-black text-4xl"
            >{text.homePageText5 ? text.homePageText5 : 'Designed for everyone'} </h3> */}

            <p style={{ fontWeight: '500' }} className="commonNewText pt-2 lg:w-7/12">
                {text.homePageText6 ? text.homePageText6 : 'We aim to innovate the world of digital assets. We make blockchain technology easy to use allowing users to send and collect with convenience.'}
            </p>

            <div className="md:flex relative pt-5" >
                <div className="lg:w-9/12 py-2 tracking-wide self-start">

                    <div className="ml-1">
                        <Image src={home1Image} />
                    </div>
                    <div className=" pt-4">
                        <Image src={home2Image} />
                    </div>


                    {/* <div className="md:flex justify-between px-5 py-3 gradientBlueBg rounded-xl">
                        <div className="flex font-semibold  bg-white pl-4 pr-28 py-3 rounded-xl mr-2 my-2">
                            <div>
                                <h5>Airbend XR</h5>
                                <div className="flex">
                                    <Image src="" />
                                    <p><span className="font-normal text-sm">By</span> Bob</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-column bg-white px-4 py-2 rounded-xl my-2">
                            <div className="sm:flex justify-between items-start font-semibold commonMid1Text">
                                <div>
                                    <p> Time Remaining</p>
                                    <p className="text-red-500">Ending Soon</p>
                                </div>
                                <div className="sm:flex ml-5">
                                    <button className="ml-2 bg-white text-white py-1 px-5
                                    border-2
                                    text-black
                                    rounded hover:bg-blue-500 hover:text-white
                                    hover:border-2"
                                    >
                                        MYSTERY </button>
                                    <button
                                        className="ml-2 bg-white text-white py-1 px-5
                                    border-2
                                    text-black
                                    rounded hover:bg-blue-500 hover:text-white
                                    hover:border-2"
                                    > 1000/1000 </button>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="px-5">
                                    <h5 className="font-bold">50</h5>
                                    <small className="text-slate-400">Minutes</small>
                                </div>
                                <div className="px-5">
                                    <h5 className="font-bold">24</h5>
                                    <small className="text-slate-400">Seconds</small>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="md:flex justify-between px-5 py-3 gradientViolateBg rounded-xl mt-10">
                        <div className="flex font-semibold  bg-white pl-4 pr-20 md:mr-2 py-3 rounded-xl my-2">
                            <div>
                                <h5>Splashi<span className="ml-1"></span>Collection</h5>
                                <div className="flex">
                                    <Image src="" />
                                    <p><span className="font-normal text-sm">By</span> Beeple</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-column bg-white px-4 py-2 rounded-xl my-2">
                            <div className="sm:flex justify-between items-start font-semibold commonMid1Text">
                                <div>
                                    <p> Time<span className="ml-1"></span>Remaining</p>
                                </div>
                                <div className="sm:flex ml-5">
                                    <button className="ml-2 bg-white text-white py-1 px-5
                                    border-2
                                    text-black
                                    rounded hover:bg-blue-500 hover:text-white
                                    hover:border-2"
                                    >
                                        LIMITED<span className=""> </span>TIME </button>
                                    <button
                                        className="ml-2 bg-white text-white py-1 px-5
                                    border-2
                                    text-black
                                    rounded hover:bg-blue-500 hover:text-white
                                    hover:border-2"
                                    > 100/100 </button>
                                </div>
                            </div>
                            <div className="flex justify-end pt-3">
                                <div className="px-5">
                                    <h5 className="font-bold">20</h5>
                                    <small className="text-slate-400">Hours</small>
                                </div>
                                <div className="px-5">
                                    <h5 className="font-bold">50</h5>
                                    <small className="text-slate-400">Minutes</small>
                                </div>
                                <div className="px-5">
                                    <h5 className="font-bold">24</h5>
                                    <small className="text-slate-400">Seconds</small>
                                </div>
                            </div>
                        </div>
                    </div> */}


                </div>
                <div className={['flex self-end h-38 lg:absolute right-0 top-44', "lg:w-3/12 sm:w-6/12"].join(" ")}>
                    {/* <Image className="w-0" src={partyPopperImage} /> */}
                </div>
            </div>
        </div>
        // </motion.div>
    )
}

export default Home_Section1