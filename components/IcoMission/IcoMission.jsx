// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from "next/image"
import coinImage from "../../public/Assets/Images/icoCoin.svg";

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const IcoMission = ({ text }) => {

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

            className="mx-5 bg-white px-10 pb-10 h-[1050px] lg:h-[900px]" style={{ borderRadius: '44px' }}>
            <div className="pt-10 md:pt-40 w-full md:w-5/12">
                <h1 className="py-4 text-7xl font-bold  text-black text-left">
                    {text.icoPageText3 ? text.icoPageText3 : 'Mission'}

                </h1>
                {/* <h5 className="commonMid1Text font-semibold text-2xl text-black my-4">{text.icoPageText4 ? text.icoPageText4 : 'Receive free  $gift for sending gifts or donations'}</h5> */}
                <p style={{ color: '#23262F' }} className="commonMid1Text text-2xl py-2">
                    {text.icoPageText5 ? text.icoPageText5 : 'We aims to innovate the world of digital assets. We make blockchain technology easy to use with our user-friendly interface allowing users to send and collect with convenience.'}

                </p>
            </div>

            <div className="w-full md:w-7/12 ml-auto pt-10">
                <div className="flex">
                    <div>
                        <Image src={coinImage} />
                    </div>
                    <div className="">
                        <h1 className="py-4 text-7xl font-bold text-black text-left">
                            {text.icoPageText6 ? text.icoPageText6 : '$giftroom'}
                        </h1>

                        {/* <h5 className="commonMid1Text font-semibold text-2xl text-black my-4">
                            {text.icoPageText7 ? text.icoPageText7 : ' The giving token that rewards'}

                        </h5> */}
                        <p style={{ color: '#23262F' }} className="commonMid1Text text-2xl py-2">

                            {text.icoPageText8 ? text.icoPageText8 : "As you collect and gift digital assets using the $gifttoken, you'll earn rewards and discounts."}

                        </p>
                    </div>
                </div>
            </div>

        </div>
        //</motion.div>
    )
}

export default IcoMission