// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Countdown from "../Countdown/Countdown";



// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const IcoHowtoBuy = ({ text }) => {

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
            className="mx-5 bg-white px-10 pb-10 pt-20 md:flex" style={{ borderRadius: '44px' }}>

            <div>
                <h1 className=" text-6xl font-bold  text-black text-left text-left">

                    {text.icoPageText19 ? text.icoPageText19 : 'How to buy $giftcoin'}
                </h1>

                <ol style={{ color: '#000000', listStyleType: 'number' }} className="commonMid1Text text-2xl font-semibold pl-6 md:pl-10 pt-10">
                    <li className="py-3 md:p-3">Press buy $giftroom</li>
                    <li className="py-3 md:p-3">Make account and purchase </li>
                    <li className="py-3 md:p-3">Own $gifttoken </li>
                </ol>
                <button style={{ background: 'linear-gradient(180deg, #EF37FF 0%, rgb(3 59 255) 100%)', borderRadius: '90px', color: 'white', fontWeight: '700px' }} className=" my-8 commonMid1Text text-2xl px-10 py-4 text-white border-2 border-slate-50 active:border-blue-600 hover:border-blue-400">Buy $Giftcoin </button>
            </div>

            <div style={{ fontFamily: 'Inter' }} className="sm:w-full md:w-7/12 lg:w-5/12 flex-col mx-auto justify-center content-center icoPageBoxStyle p-5 lg:py-16 sm:mt-4 z-10 bg-white">
                <h3 className="text-center text-black font-semibold text-2xl">Token Pre-Sale</h3>
                <div className="w-full flex justify-center">
                    <div className="md:w-[350px] flex-col justify-center">
                        <Countdown />
                    </div>
                </div>
                <div>
                    <div className=" flex justify-center" >

                        <div className=" w-[450px] flex justify-between pb-2">
                            <p>Raised - <span className="text-blue-600">1,450 Tokens</span></p>
                            <p>Target - <span className="text-blue-600">150,000 Tokens</span></p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div class="w-[450px] bg-gray-200 rounded-full pr-10 pl-1 py-1 flex justify-start">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-40 py-2"> 60,490</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        //</motion.div>
    )
}

export default IcoHowtoBuy;