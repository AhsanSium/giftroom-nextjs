// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };


const IcoGiftToken = ({ text }) => {

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
            className="mx-5 bg-white px-10 pb-10" style={{ borderRadius: '44px' }}>
            <h1 className=" text-7xl font-bold  text-black text-left pt-10 md:pt-20" >{text.icoPageText16 ? text.icoPageText16 : '$giftoke'}</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3  pt-8 md:pt-20">


                <div className="p-2 py-8 lg:py-10 m-2 bg-blue-500 rounded-lg text-white text-center giftTokenCardStyle">
                    <h5 className="commonMid1Text text-xl">Number of Tokens for Sale</h5>
                    <p className="commonMid1Text font-semibold text-2xl my-2">20,000,000</p>
                </div>

                <div className="p-2 py-8 lg:py-10 m-2 bg-blue-500 rounded-lg text-white text-center giftTokenCardStyle">
                    <h5 className="commonMid1Text text-xl">Number of Tokens for Sale</h5>
                    <p className="commonMid1Text font-semibold text-2xl my-2">20,000,000</p>
                </div>

                <div className="p-2 py-8 lg:py-10 m-2 bg-blue-500 rounded-lg text-white text-center giftTokenCardStyle">
                    <h5 className="commonMid1Text text-xl">Number of Tokens for Sale</h5>
                    <p className="commonMid1Text font-semibold text-2xl my-2">20,000,000</p>
                </div>

                <div className="p-2 py-8 lg:py-10 m-2 bg-blue-500 rounded-lg text-white text-center giftTokenCardStyle">
                    <h5 className="commonMid1Text text-xl">Number of Tokens for Sale</h5>
                    <p className="commonMid1Text font-semibold text-2xl my-2">20,000,000</p>
                </div>

                <div className="p-2 py-8 lg:py-10 m-2 bg-blue-500 rounded-lg text-white text-center giftTokenCardStyle">
                    <h5 className="commonMid1Text text-xl">Number of Tokens for Sale</h5>
                    <p className="commonMid1Text font-semibold text-2xl my-2">20,000,000</p>
                </div>

                <div className="p-2 py-8 lg:py-10 m-2 bg-blue-500 rounded-lg text-white text-center giftTokenCardStyle">
                    <h5 className="commonMid1Text text-xl">Number of Tokens for Sale</h5>
                    <p className="commonMid1Text font-semibold text-2xl my-2">20,000,000</p>
                </div>


            </div>
        </div>

        //</motion.div>
    )
}

export default IcoGiftToken;