// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// import Image from "next/image";
import React from 'react';
import styles from "../../styles/Home_Header.module.css";
import mainImage from "../../public/Assets/Images/Giftroom Main Header.png";
import homePageText from "../../lib/homePageText";
import NewsletterSubscribe from '../Common/NewsLetterSubscribe';
// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };


const Home_Header = ({ text, modalRef }) => {

    // const control = useAnimation();
    // const [ref, inView] = useInView();

    // useEffect(() => {
    //     if (inView) {
    //         control.start("visible");
    //     } else {
    //         control.start("hidden");
    //     }
    // }, [control, inView]);


    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     modalRef.current.checked = true;
    // }

    return (
        // <motion.div
        //     ref={ref}
        //     variants={boxVariant}
        //     initial="hidden"
        //     animate={control}
        <div

            className=" mx-auto py-5 sm:py-52">
            <div className="md:flex md:pt-10 p-5 lg:px-16 content-around space-x-5">
                <div className="w-full md:w-8/12 flex flex-col pb-5 justify-evenly p-4 xl:p-0 rounded-xl xl:bg-transparent bg-slate-200/80 lg:shadow-none shadow-lg">
                    {
                        text.homePageText1 ?
                            <h1 style={{ textShadow: '.5px 0 black' }} className="headingText ">
                                {text.homePageText1.split("br")[0]}
                                {React.createElement('br')}
                                {text.homePageText1.split("br")[1]}
                            </h1>
                            :
                            <h1 style={{ textShadow: '.5px 0 black' }} className="headingText ">
                                A Social Platform to Send <br />and Collect Digital Assets
                            </h1>

                    }

                    <div className="w-11/12">

                        {
                            text.homePageText2 ?
                                <h4 className=" my-6 secondHeadingText">{text.homePageText2}</h4>

                                :
                                <h4 className=" my-6 secondHeadingText">{homePageText.homePageText2}</h4>

                        }


                        {/* <small className={styles.emailText}>{homePageText.homePageText3}</small> */}

                        <div className="mt-4 w-full xl:w-8/12">
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">


                                </div>

                                {/* <form onSubmit={(e) => handleFormSubmit(e)} action="">
                                <input type="email" id="default-search" className="block p-4 pl-14  w-full text-sm text-gray-900 bg-white rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Email" required />
                                <button type="submit" className="w-32 lg:w-48 text-md lg:text-lg text-white absolute right-0 bottom-0 top-0 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Subscribe
                                </button>

                            </form> */}

                                <NewsletterSubscribe modalRef={modalRef} color={'blue'} />
                            </div>

                        </div>
                    </div>

                </div>
                {/* <div className="md:w-6/12 flex justify-center box-border mt-5">
                    <Image src={mainImage} />
                </div> */}
            </div>
        </div>
        //        </motion.div>
    )
}

export default Home_Header;