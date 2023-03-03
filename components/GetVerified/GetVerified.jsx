
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import React from "react";
import blueTickImage from "../../public/Assets/Images/BlueTickNew.svg";
import downArrow from "../../public/Assets/Images/ArrowDown.svg";
import leftArrow from "../../public/Assets/Images/Left arrow.svg";
import rightArrow from "../../public/Assets/Images/Right arrow.svg";
import cupImage from "../../public/Assets/Images/cup.svg";
import plusImage from "../../public/Assets/Images/plusSquare.svg";
import arrowCornerImage from "../../public/Assets/Images/ArrowExpand.svg";
import eddHarrisImage from "../../public/Assets/Images/Edd Harris.png";
import odellHaneImage from "../../public/Assets/Images/odell hane.png";
import marieeKuphalImage from "../../public/Assets/Images/Marlee kuphal.png";
import paytonKundeImage from "../../public/Assets/Images/payton kunde.png";
import paytonBuckridgeImage from "../../public/Assets/Images/payton buckridge.png";
import Image from 'next/image';

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const GetVerified = ({ text }) => {

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
        // >
        <div>
            <div className="mx-auto px-5 lg:px-16 mt-20 flex relative">


                {
                    text.homePageText11 ?
                        <h3 className="artistHeadingText mt-3">
                            {text.homePageText11.split("br")[0]}
                            {React.createElement('br')}
                            {text.homePageText11.split("br")[1]}
                        </h3>
                        :
                        <h3 className="artistHeadingText mt-3">
                            Get verified and connect  <br /> with your fan base in a new way
                        </h3>
                }

                {/* <h3 style={{ fontWeight: '900', textShadow: '.5px 0 #000000', letterSpacing: '-0.02em' }} className="midSectionText mt-3">{text ? text.homePageText11 : 'Get verified and connect  <br /> with your fan base in a new wayr'}</h3> */}



                <div className="ml-2 md:ml-5 absolute bottom-[5rem] left-[50rem]">
                    <img className="w-[100px]" src={blueTickImage.src} />
                </div>
            </div>

            <div className=" mt-20 mx-auto px-5 lg:px-16">
                <div className="md:flex justify-around  md:items-center">
                    <div className="">
                        <p className="greyText">{'Top Collaborator'}s</p>
                        <div className="flex">
                            <h3 className="midSectionText mr-5">Artists</h3>
                            <Image width={15} src={downArrow} />
                        </div>
                    </div>
                    <div className="px-10 py-2">

                        <select id="countries" className="pr-32 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option defaultValue>Today</option>
                        </select>
                    </div>
                    <div className="px-10 py-2">
                        <select id="countries" className="pr-32 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option defaultValue>Today</option>
                        </select>
                    </div>
                </div>
            </div>





            <div className="mx-auto px-5 md:px-10 lg:px-16 lg:flex w-full  items-center pb-32">
                <div className="lg:w-1/12 hidden lg:flex justify-start">
                    <button className="bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center active:bg-gray-500">
                        <Image src={leftArrow} />
                    </button>
                </div>


                <div className="p-3 m-1 justify-center cardStyle transition-all	 duration-150 lg:w-2/12 w-full mt-4">
                    <div className="flex justify-between border-b-2 pb-5">
                        <div className="flex bg-[#3772FF] py-1 px-3 rounded-full">
                            <Image src={cupImage} />
                            <p style={{ color: 'white' }} className="commonMid1Text pl-1 text-white"> #1</p>
                        </div>
                        <div className="flex justify-around">
                            <button>
                                <Image src={plusImage} />
                            </button>
                            <button className="ml-5 lg:ml-1">
                                <Image src={arrowCornerImage} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center pt-5">
                        <Image src={eddHarrisImage} />
                        {/* <Image /> */}
                    </div>

                    <h3 className="text-center commonMid1Text font-semibold">Edd Haris</h3>

                    <h3 className="text-center font-medium">$1,000 <span className="commonMid1Text font-normal text-slate-500"> USD </span> </h3>
                </div>




                <div className="p-3 m-1 justify-center cardStyle transition-all	 duration-150 lg:w-2/12 w-full mt-4">
                    <div className="flex justify-between border-b-2 pb-5">
                        <div className="flex bg-[#9757D7] py-1 px-3 rounded-full">
                            <Image src={cupImage} />
                            <p style={{ color: 'white' }} className="commonMid1Text pl-1 text-white"> #1</p>
                        </div>
                        <div className="flex justify-around">
                            <button>
                                <Image src={plusImage} />
                            </button>
                            <button className="ml-5 lg:ml-1">
                                <Image src={arrowCornerImage} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center pt-5">
                        <Image src={odellHaneImage} />
                        {/* <Image /> */}
                    </div>

                    <h3 className="text-center commonMid1Text font-semibold">Odell Hane</h3>

                    <h3 className="text-center font-medium">2,456 <span className="commonMid1Text font-normal text-slate-500"> ETH </span> </h3>
                </div>




                <div className="p-3 m-1 justify-center cardStyle transition-all	 duration-150 lg:w-2/12 w-full mt-4">
                    <div className="flex justify-between border-b-2 pb-5">
                        <div className="flex bg-[#45B36B] py-1 px-3 rounded-full">
                            <Image src={cupImage} />
                            <p style={{ color: 'white' }} className="commonMid1Text pl-1 text-white"> #1</p>
                        </div>
                        <div className="flex justify-around">
                            <button>
                                <Image src={plusImage} />
                            </button>
                            <button className="ml-5 lg:ml-1">
                                <Image src={arrowCornerImage} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center pt-5">
                        <Image src={marieeKuphalImage} />
                        {/* <Image /> */}
                    </div>

                    <h3 className="text-center commonMid1Text font-semibold">Mariee Kuphal</h3>

                    <h3 className="text-center font-medium">2,456 <span className="commonMid1Text font-normal text-slate-500"> ETH </span> </h3>
                </div>




                <div className="p-3 m-1 justify-center cardStyle transition-all	 duration-150 lg:w-2/12 w-full mt-4">
                    <div className="flex justify-between border-b-2 pb-5">
                        <div className="flex bg-[#23262F] py-1 px-3 rounded-full">
                            <Image src={cupImage} />
                            <p style={{ color: 'white' }} className="commonMid1Text pl-1 text-white"> #1</p>
                        </div>
                        <div className="flex justify-around">
                            <button>
                                <Image src={plusImage} />
                            </button>
                            <button className="ml-5 lg:ml-1">
                                <Image src={arrowCornerImage} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center pt-5">
                        <Image src={paytonKundeImage} />
                        {/* <Image /> */}
                    </div>

                    <h3 className="text-center commonMid1Text font-semibold">Payton Kunde</h3>

                    <h3 className="text-center font-medium">2,456 <span className="commonMid1Text font-normal text-slate-500"> ETH </span> </h3>
                </div>




                <div className="p-3 m-1 justify-center cardStyle transition-all	 duration-150 lg:w-2/12 w-full mt-4">
                    <div className="flex justify-between border-b-2 pb-5">
                        <div className="flex bg-[#777E91] py-1 px-3 rounded-full">
                            <Image src={cupImage} />
                            <p style={{ color: 'white' }} className="commonMid1Text pl-1 text-white"> #1</p>
                        </div>
                        <div className="flex justify-around">
                            <button>
                                <Image src={plusImage} />
                            </button>
                            <button className="ml-5 lg:ml-1">
                                <Image src={arrowCornerImage} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center pt-5">
                        <Image src={paytonBuckridgeImage} />
                        {/* <Image /> */}
                    </div>

                    <h3 className="text-center commonMid1Text font-semibold">Payton Buckridge</h3>

                    <h3 className="text-center font-medium">2,456 <span className="commonMid1Text font-normal text-slate-500"> ETH </span> </h3>
                </div>



                <div className="md:w-1/12 hidden lg:flex justify-end ">
                    <button className="bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center active:bg-gray-500">
                        <Image src={rightArrow} />
                    </button>

                </div>

            </div>
            {/* <div className="md:w-85 pb-10 md:pb-0">
                <hr className="mx-auto w-10/12 h-[3px] bg-gray-200 border-0 dark:bg-gray-700" />
            </div> */}
        </div>
        // </motion.div>
    )
}

export default GetVerified