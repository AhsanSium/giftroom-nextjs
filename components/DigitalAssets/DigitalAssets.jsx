// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from "next/image";
import checkCircle from "../../public/Assets/Images/Check Circle.svg";
import coinIcon from "../../public/Assets/Images/coin-Icon.svg";


// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const DigitalAssets = ({ text }) => {


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
            className="sm:mt-20 md:mt-32 lg:mt-10 mx-auto p-5">
            <div className="flex-column w-full justify-center text-center pt-10 pb-2 relative">
                <div className="hidden lg:block left-0 bottom-16 absolute">
                    <Image src={coinIcon} />
                </div>
                <h1 style={{ textAlign: 'center' }} className="headingTextNew3 py-4">{text ? text.homePageText15 : 'Digital Assets'}</h1>
                {/* <h3 className="thirdHeadingText pt-5 pb-1 font-bold">
                    {text.homePageText16 ? text.homePageText16 : 'Send, Recieve or Collect'}
                </h3> */}
                <p className="digitalAssetsCommonText pt-2 pb-10">
                    {text.homePageText17 ? text.homePageText17 : 'Send and recieve digital assets with or without a digital walle'}
                </p>
            </div>

            <div className="md:flex justify-center  p-2">

                <div className="w-full md:w-6/12 lg:w-4/12 h-auto py-4 digitalCardStyle1 m-2 hover:shadowed lg:min-h-[38rem]
                ">
                    <h3 className="cardHeadingText font-italic text-center p-3">Gifts</h3>

                    <div className="w-full border-b-2"></div>

                    <ul className="cardListText py-5 lg:pl-8 lg:pt-8">
                        <li className="p-5 flex lg:items-start ">
                            <div className="flex justify-center items-center w-10 lg:w-14 mr-1">
                                <Image className="" src={checkCircle} />
                            </div>
                            <p className="">
                                Unlimited Supply
                            </p>
                        </li>
                        <li className="p-5 flex lg:items-start">
                            <div className="flex justify-center items-center w-10 lg:w-14 mr-1">
                                <Image src={checkCircle} />
                            </div>
                            <p className="">
                                Liquidity Guranteed
                            </p>

                        </li>
                        <li className="p-5 flex lg:items-start">
                            <div className="flex justify-center items-center w-10 lg:w-14 mr-1">
                                <Image src={checkCircle} />
                            </div>
                            <p className="">
                                Made to gift
                            </p>
                        </li>
                    </ul>

                </div>


                <div className="w-full md:w-6/12 lg:w-4/12 digitalCardStyle2 m-2 lg:min-h-[38rem] mt-10 md:mt-0">
                    <h3 className="cardHeadingText text-center  p-3  ">Collectibles</h3>
                    <div className="w-full border-b-2"></div>

                    <ul className="cardListText py-5 lg:pl-8 lg:pt-8">
                        <li className="p-5 flex lg:items-start">
                            <div className="flex justify-center items-center w-10 lg:w-14 mr-1">
                                <Image src={checkCircle} />
                            </div>
                            <p className="">
                                Limited Supply
                            </p>
                        </li>
                        <li className="p-5 flex lg:items-start">
                            <div className="flex justify-center items-center w-10 lg:w-14 mr-1">
                                <Image src={checkCircle} />
                            </div>
                            <p className="">
                                Made by Artists
                            </p>
                        </li>
                        <li className="p-5 flex lg:items-start">

                            <div className="flex justify-center items-center w-10 lg:w-14 mr-1">
                                <Image src={checkCircle} />
                            </div>
                            <p className="mt-0">
                                Made to collect
                            </p>
                        </li>
                    </ul>
                </div>



            </div>
        </div>
        //    </motion.div>
    )
}

export default DigitalAssets;