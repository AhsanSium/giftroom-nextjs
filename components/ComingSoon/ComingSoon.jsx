// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from "next/image";
import logoImage2 from "../../public/Assets/Images/vector logo black and white 2.svg";
import lockIconImage from "../../public/Assets/Images/lockIcon.svg";

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const ComingSoon = () => {


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

            className="my-12 pb-20">
            <div className="container mx-auto p-5">
                <h2 style={{ fontSize: '55px', textAlign: 'center' }} className="headingText2">Coming Soon..</h2>
            </div>
            <div className="container mx-auto p-5 lg:flex  pb-16">

                <div className="comingSoonCard lg:w-3/12 p-5 m-4">
                    <div className="py-36 px-30 bg-gray-700 rounded-xl flex justify-center">
                        <Image src={lockIconImage} />
                    </div>
                    <div className="flex pt-4 justify-between">
                        <div>
                            <h5 className="commonMid1Text font-semibold">Hidden Treasure</h5>
                            <p className="commonMid1Text">$50 / .04 ETH</p>
                            <button className="commonMid1Text text-blue-600" > Buy Now </button>
                        </div>
                        <div>
                            <Image src={logoImage2} />
                        </div>
                    </div>
                </div>
                <div className="comingSoonCard lg:w-3/12 p-5 m-4">
                    <div className="py-36 px-30 bg-gray-700 rounded-xl flex justify-center">
                        <Image src={lockIconImage} />
                    </div>
                    <div className="flex pt-4 justify-between">
                        <div>
                            <h5 className="commonMid1Text font-semibold">Hidden Treasure</h5>
                            <p className="commonMid1Text text-[#11790F]">$50 / .04 ETH</p>
                            <button className="commonMid1Text text-blue-600" > Buy Now </button>
                        </div>
                        <div>
                            <Image src={logoImage2} />
                        </div>
                    </div>
                </div>
                <div className="comingSoonCard lg:w-3/12 p-5 m-4">
                    <div className="py-36 px-30 bg-gray-700 rounded-xl flex justify-center">
                        <Image src={lockIconImage} />
                    </div>
                    <div className="flex pt-4 justify-between">
                        <div>
                            <h5 className="commonMid1Text font-semibold">Hidden Treasure</h5>
                            <p className="commonMid1Text text-[#11790F]">$50 / .04 ETH</p>
                            <button className="commonMid1Text text-blue-600" > Buy Now </button>
                        </div>
                        <div>
                            <Image src={logoImage2} />
                        </div>
                    </div>
                </div>
                <div className="comingSoonCard lg:w-3/12 p-5 m-4">
                    <div className="py-36 px-30 bg-gray-700 rounded-xl flex justify-center">
                        <Image src={lockIconImage} />
                    </div>
                    <div className="flex pt-4 justify-between">
                        <div>
                            <h5 className="commonMid1Text font-semibold">Hidden Treasure</h5>
                            <p className="commonMid1Text text-[#11790F]">$50 / .04 ETH</p>
                            <button className="commonMid1Text text-blue-600" > Buy Now </button>
                        </div>
                        <div>
                            <Image src={logoImage2} />
                        </div>
                    </div>
                </div>


            </div>

        </div>
        //</motion.div>
    )
}

export default ComingSoon;