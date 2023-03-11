// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from 'next/image';
import globBg from '../../public/Assets/Images/Glob BG Image.svg';
import jsonColeImage from '../../public/Assets/Images/Json cole.svg';
import jsonColeCardImage from '../../public/Assets/Images/json cole.png';
import threeDot from '../../public/Assets/Images/threeDot.svg';


// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const GiftingAndCollecting = ({ text }) => {

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
            className=" flex justify-start  bg-contain bg-auto bg-no-repeat bg-right-bottom mx-auto p-5 pb-20 lg:px-16 " style={{ backgroundImage: `url("${globBg.src}")`, backgroundPosition: "right 10px top 390px" }}
        >
            <div className="mt-5 md:mt-32">
                <h1 className="text-center md:text-end headingTextNew3 ">{text.homePageText12 ? text.homePageText12 : 'Next-Gen Gifting and Collecting'}</h1>
                {/* <h3 style={{ lineHeight: '50px' }} className="text-end thirdHeadingText py-4">{text.homePageText13 ? text.homePageText13 : 'Socially Interact and Exchange'}</h3> */}
                <p className="ml-auto mr-0 lg:w-7/12 py-3 commonNewText text-center md:text-end">
                    {text.homePageText14 ? text.homePageText14 : 'We offer the perfect ability to engage and get acknowledgment from their audience. You can now'}

                </p>

                <div className='mt-32 flex-column justify-center lg:ml-20 xl:ml-40 lg:mt-60 transition-all duration-200'>
                    <img className="cursor-pointer" src={jsonColeCardImage.src} />
                </div>

                {/* <div style={{ borderRadius: '40px' }} className='mt-32 flex-column cardStyle2 sm:w-[500px] sm:h-[440px] justify-center p-5 commonMid1Text transition-all duration-200 lg:ml-20 xl:ml-40 lg:mt-60 '>
                    <div className='flex h-[150px]'>
                        <div className='w-[200px] p-4'>
                            <Image className="bg-[#2A3DA2] rounded-full" src={jsonColeImage} />
                        </div>
                        <div className='w-full pt-0'>
                            <div className='flex justify-between'>
                                <h3 className="font-extrabold ml-2 text-[42px] text-4xl text-black">Jason Cole</h3>
                                <button className='border-2 border-slate-300 px-3 py-3 rounded-full hover:border-slate-400 active:bg-slate-300'>
                                    <Image src={threeDot} />
                                </button>

                            </div>
                            <div className='flex'>
                                <div className='p-3 border-r-2 border-slate-300'>
                                    <p className='font-semibold text-lg text-center'>$35K</p>
                                    <small className='font-poppins text-slate-500 text-lg'>Balance</small>
                                </div>
                                <div className='p-3 border-r-2 border-slate-300'>
                                    <p className='font-semibold text-lg text-center'>987</p>
                                    <small className='font-poppins text-slate-500 text-lg'>Received</small>
                                </div>
                                <div className='p-3'>
                                    <p className='font-semibold text-lg text-center'>43</p>
                                    <small className='font-poppins text-slate-500 text-lg'>Sent</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 mt-2'>
                        <h3 className='commonMid1Text text-xl font-semibold'>@Jason12cole</h3>
                        <p className='font-poppins text-slate-500 text-lg'>To give is to receive &#128151; &#127873;</p>

                    </div>

                    <div className='flex justify-center pt-5 mt-3'>
                        <button className='w-28 bg-[#3772FF] px-5 py-4 rounded-full text-white mr-2 hover:bg-blue-700 active:bg-blue-800 font-semibold' >Follow</button>
                        <button className='w-28 bg-[#C727FF] px-5 py-4 rounded-full text-white mr-2 hover:bg-purple-700 active:bg-purple-800 font-semibold' >Gift</button>
                    </div>

                    <div className='flex justify-center items-center mt-3'>
                        <hr className=' w-9/12 mt-5'></hr>

                    </div>


                    <div className='flex py-5 justify-center mt-3' >
                        <small className='w-full text-center font-poppins text-lg  text-slate-500'>Member since mar 15,2022</small>
                    </div>


                </div> */}



            </div>
        </div>
        // </motion.div>
    )
}

export default GiftingAndCollecting;    