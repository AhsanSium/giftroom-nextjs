// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

import Image from 'next/image';
import nftImage from "../../public/Assets/Images/Free NFT.png";

import twtImage from "../../public/Assets/Images/TWT 1.png";
import roundImage from "../../public/Assets/Images/Round.png";
import componentImage from "../../public/Assets/Images/Component 1.png";


// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const Home_Section2 = ({ text }) => {

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
            className="container mx-auto p-5 ">
            <div className="md:flex md:flex-row-reverse mx-auto">

                <div className="md:w-6/12 p-5 content-center">
                    <h2 className=" text-6xl font-bold">{text.homePageText7 ? text.homePageText7 : 'Send and recieve NFTs  with or without a digital wallet'}</h2>

                    <div className="w-8/12 flex justify-center pt-4">
                        <ul className="text-left commonMid1Text ">
                            <li className='mt-4 w-60 flex justify-between homeSection1List hover:shadow[inset 0px 64px 64px -48px rgb(15 15 15 / 10%)]  border-slate-50 border-2 active:border-2 active:border-slate-400 items-center'>
                                <Image src={twtImage} />
                                Trust Wallet <svg className="inline" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.62883C9.40237 9.01935 9.40237 9.65252 9.79289 10.043L12.5858 12.8359L9.79289 15.6288C9.40237 16.0194 9.40237 16.6525 9.79289 17.043C10.1834 17.4336 10.8166 17.4336 11.2071 17.043L14.7071 13.543C15.0976 13.1525 15.0976 12.5194 14.7071 12.1288L11.2071 8.62883C10.8166 8.23831 10.1834 8.23831 9.79289 8.62883Z" fill="#23262F" />
                                </svg>
                            </li>
                            <li className='mt-2 w-60 flex justify-between homeSection1List hover:shadow[inset 0px 64px 64px -48px rgb(15 15 15 / 10%)] border-slate-50 border-2 active:border-2 active:border-slate-400 items-center'>
                                <Image src={roundImage} />
                                Coinbase

                                <svg className="inline " width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.62883C9.40237 9.01935 9.40237 9.65252 9.79289 10.043L12.5858 12.8359L9.79289 15.6288C9.40237 16.0194 9.40237 16.6525 9.79289 17.043C10.1834 17.4336 10.8166 17.4336 11.2071 17.043L14.7071 13.543C15.0976 13.1525 15.0976 12.5194 14.7071 12.1288L11.2071 8.62883C10.8166 8.23831 10.1834 8.23831 9.79289 8.62883Z" fill="#23262F" />
                                </svg>

                            </li>
                            <li className='mt-2 w-60 flex justify-between items-center homeSection1List hover:shadow[inset 0px 64px 64px -48px rgb(15 15 15 / 10%)]  border-slate-50 border-2 active:border-2 active:border-slate-400'>
                                <Image src={componentImage} />
                                Metamask
                                <svg className="inline text-right" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.62883C9.40237 9.01935 9.40237 9.65252 9.79289 10.043L12.5858 12.8359L9.79289 15.6288C9.40237 16.0194 9.40237 16.6525 9.79289 17.043C10.1834 17.4336 10.8166 17.4336 11.2071 17.043L14.7071 13.543C15.0976 13.1525 15.0976 12.5194 14.7071 12.1288L11.2071 8.62883C10.8166 8.23831 10.1834 8.23831 9.79289 8.62883Z" fill="#23262F" />
                                </svg>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="md:w-6/12 p-5">
                    <Image src={nftImage} />
                </div>
            </div>



        </div>
        //        </motion.div>
    )
}

export default Home_Section2;