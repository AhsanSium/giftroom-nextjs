// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from "next/image";
import React from "react";
import allocationImage from "../../public/Assets/Images/ALLOCATION.svg";
import distributionImage from "../../public/Assets/Images/DISTRIBUTION.svg";

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const IcoTokenomics = ({ text }) => {


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

            className="mx-5 bg-white px-10 pb-10 md:min-h-[900px]" style={{ borderRadius: '44px' }}>
            <div className="pt-20 flex-col justify-center items-center">
                <h1 className=" text-6xl font-bold  text-black text-left text-center">
                    {text.icoPageText14 ? text.icoPageText14 : 'Tokenomics'}
                </h1>
                {
                    text.icoPageText15 ?
                        <h5 className="commonMid1Text font-semibold text-xl text-black my-4 text-center">
                            {text.icoPageText15.split("br")[0]}
                            {React.createElement('br')}
                            {text.icoPageText15.split("br")[1]}
                        </h5>
                        :
                        <h5 className="commonMid1Text font-semibold text-xl text-black my-4 text-center">
                            {'We aims to innovate the world of digital assets.ing users to send and <br /> collect with convenience.'}

                        </h5>
                }

            </div>

            <div className="md:flex pt-20 justify-evenly items-center">
                <div className="ml-8 md:ml-0 md:mr-5">
                    <Image src={allocationImage} />
                </div>
                <div className="mr-8 md:mr-0 pt-3 md:pt-0">
                    <Image src={distributionImage} />
                </div>
            </div>
        </div>
        //</motion.div>
    )
}

export default IcoTokenomics