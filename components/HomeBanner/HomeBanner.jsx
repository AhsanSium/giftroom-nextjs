// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from "next/image";
import coinImage from "../../public/Assets/Images/icoCoin.svg";


// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const HomeBanner = ({ text }) => {

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

            className="homeBannerBg mt-20 p-5">
            <div className="w-full md:flex   pt-0 pb-0 px-10 md:px-16 md:py-10 lg:py-20 lg:px-22 justify-around" >
                <div className="w-full md:w-9/12 md:flex" >
                    <div className="w-full md:w-3/12 flex justify-center">
                        <Image src={coinImage} />
                    </div>
                    <div className="w-full md:w-9/12">
                        <h1 className=" homeBannerHeadingText py-3 ">
                            {text.homePageText18 ? text.homePageText18 : 'Get in early with the pre-sale our tokens'}

                        </h1>
                        <h3 className="homeBannerMidText">
                            {text.homePageText19 ? text.homePageText19 : 'Send and recieve digital assets with or without a digital wallet'}
                        </h3>
                    </div>
                </div>
                <div className="md:w-3/12 w-full flex justify-center align-center " >
                    <div className="flex items-center justify-center pt-5 md:pt-0">
                        <button className="text-white homeBannerButton px-16 py-2 border-2 border-blue-600 active:border-2 active:border-slate-200" >Info</button>
                    </div>
                </div>
            </div>
        </div>
        //</motion.div>
    )
}

export default HomeBanner;