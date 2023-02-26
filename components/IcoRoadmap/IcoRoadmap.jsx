// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import React from "react";
import progressBar from "../../public/Assets/Images/Progress bar.svg";

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const IcoRoadmap = ({ text }) => {

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

            className="mx-5 bg-white pb-10" style={{ borderRadius: '44px' }}>
            <h1 className=" text-6xl font-bold  text-black text-center pt-10 md:pt-20" >{text.icoPageText17 ? text.icoPageText17 : 'Roadmap'} </h1>

            {
                text.icoPageText18 ?
                    <h5 className="commonMid1Text font-semibold text-xl text-black my-4 text-center mb-5 md:mb-40">
                        {text.icoPageText18.split("br")[0]}
                        {React.createElement('br')}
                        {text.icoPageText18.split("br")[1]}

                    </h5>
                    :
                    <h5 className="commonMid1Text font-semibold text-xl text-black my-4 text-center mb-5 md:mb-40">
                        {"We aims to innovate the world of digital assets.ing users to send and <br /> collect with convenience."} </h5>
            }


            <div style={{ color: '#000000', fontFamily: 'DM Sans' }} className="pt-8 md:pt-20 relative pb-20 w-full h-[107rem] sm:h-[120rem] lg:h-[30rem] text-lg">

                <div className='lg:absolute w-full xl:top-[-5rem] lg:top-[-7.5rem] lg:flex justify-around'>

                    <div style={{ borderLeft: '1px dashed black' }} className='px-2 ml-7 md:ml-5 h-[200px] md:h-[200px] lg:h-[230px]'>
                        <h6 className='text-xs font-[DM Sans] font-semibold'>APRIL 15, 2019</h6>
                        <h4 className='text-xl font-[DM Sans] font-semibold'>Concept</h4>
                        <ul style={{ listStyleType: 'disc' }} className='text-md font-[DM Sans] ml-8' >
                            <li>Concept Generation</li>
                            <li>Team Assemble</li>
                        </ul>

                        {/* <img style={{ width: '150px' }} src={eclipse1.src} className="z-10" /> */}

                        <span className='halfBorder'></span>

                    </div>

                    <div style={{ borderLeft: '1px dashed black' }} className='px-2 ml-7 md:ml-5 h-[210px] mt-10 lg:mt-0'>
                        <h6 className='text-xs font-[DM Sans] font-semibold'>MAY 15, 2019</h6>
                        <h4 className='text-xl font-[DM Sans] font-semibold'>Concept</h4>
                        <ul style={{ listStyleType: 'disc' }} className='text-md font-[DM Sans] ml-8' >
                            <li>Platform design</li>
                            <li>Building the MVP</li>
                        </ul>

                        {/* <img style={{ width: '150px' }} src={eclipse1.src} className="z-10" /> */}

                        <span className='halfBorder'></span>

                    </div>

                    <div style={{ borderLeft: '1px dashed black' }} className='px-2 ml-7 md:ml-5 md:h-[220px] lg:h-[200px] mt-10 lg:mt-0'>
                        <h6 className='text-xs font-[DM Sans] font-semibold'>Oct 01, 2019</h6>
                        <h4 className='text-xl font-[DM Sans] font-semibold'>App Beta Test</h4>
                        <ul style={{ listStyleType: 'disc' }} className='text-md font-[DM Sans] ml-8' >
                            <li>Private closed beta</li>
                            <li>Open beta launched to < br />public  and improvement < br /> the app</li>
                        </ul>

                        {/* <img style={{ width: '150px' }} src={eclipse1.src} className="z-10" /> */}

                        <span className='halfBorder'></span>

                    </div>

                    <div style={{ borderLeft: '1px dashed black' }} className='px-2 ml-7 md:ml-5 md:h-[220px] lg:h-[200px] mt-10 lg:-mt-4'>
                        <h6 className='text-xs font-[DM Sans] font-semibold'> Jan 10, 2020</h6>
                        <h4 className='text-xl font-[DM Sans] font-semibold'>Alpha Test</h4>
                        <ul style={{ listStyleType: 'disc' }} className='text-md font-[DM Sans] ml-8' >
                            <li>In-house testing of  < br />functional</li>
                            <li>Prototype published and < br />linked to Ethereum < br />blockchain with real-time < br />scanning</li>
                        </ul>

                        {/* <img style={{ width: '150px' }} src={eclipse1.src} className="z-10" /> */}

                        <span className='halfBorder'></span>

                    </div>
                </div>

                <div className='hidden md:block'>
                    <img className="w-full" src={progressBar.src} />
                </div>


                <div style={{ fontFamily: 'DM Sans' }} className='absolute w-full lg:w-10/12 xl:top-[8rem] lg:top-[7rem] lg:flex justify-around lg:left-[5rem]'>

                    <div style={{ borderLeft: '1px dashed black' }} className='px-2 ml-7 md:ml-5 h-[210px] mt-10 lg:mt-3 pt-16'>
                        <h6 className='text-xs font-[DM Sans] font-semibold'>APRIL 20, 2019</h6>
                        <h4 className='text-xl font-[DM Sans] font-semibold'>Research</h4>
                        <ul style={{ listStyleType: 'disc' }} className='text-md font-[DM Sans] ml-8' >
                            <li>Proving the concept <br /> can work
                            </li>
                            <li>White paper conpletion</li>
                        </ul>

                        {/* <img style={{ width: '150px' }} src={eclipse1.src} className="z-10" /> */}

                        <span className='halfBorder'></span>

                    </div>

                    <div style={{ borderLeft: '1px dashed black' }} className='px-2 ml-7 md:ml-5 md:h-[220px] lg:h-[200px] mt-10 lg:mt-0 pt-16'>
                        <h6 className='text-xs font-[DM Sans] font-semibold'>JULY 01, 2019</h6>
                        <h4 className='text-xl font-[DM Sans] font-semibold'>Pre-Sale</h4>
                        <ul style={{ listStyleType: 'disc' }} className='text-md font-[DM Sans] ml-8' >
                            <li>Public financing & Seed <br /> funding raised</li>

                        </ul>

                        {/* <img style={{ width: '150px' }} src={eclipse1.src} className="z-10" /> */}

                        <span className='halfBorder'></span>

                    </div>

                    <div style={{ borderLeft: '1px dashed black' }} className='px-2 ml-7 md:ml-5 md:h-[220px] lg:h-[200px] mt-10 lg:mt-0 pt-16'>
                        <h6 className='text-xs font-[DM Sans] font-semibold'>Nov 03, 2019</h6>
                        <h4 className='text-xl font-[DM Sans] font-semibold'>Token Sale</h4>
                        <ul style={{ listStyleType: 'disc' }} className='text-md font-[DM Sans] ml-8' >
                            <li>ICO press tour</li>
                            <li>Open global sales of <br />ICOblock token</li>
                        </ul>

                        {/* <img style={{ width: '150px' }} src={eclipse1.src} className="z-10" /> */}

                        <span className='halfBorder'></span>

                    </div>
                </div>


            </div>

        </div>
        //</motion.div>
    )
}

export default IcoRoadmap;