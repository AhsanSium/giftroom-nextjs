// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Countdown from "../Countdown/Countdown";
import React, { useRef } from "react";
import EmailWaitlist from "../EmailWaitlist/EmailWaitlist";
import giftRoomLogo from "../../public/Assets/Images/GiftRoom White Logo Large.svg";
import NewsletterSubscribe from "../Common/NewsLetterSubscribe";

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };


const IcoHeader = ({ text }) => {

    const modalRef = useRef(null);

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
            style={{ borderRadius: '44px' }} className="icoGeneralFont mx-6 bg-white px-10 pb-5 sm:h-auto md:h-[1000px]">
            <div className=" md:pb-4 pt-10">
                <h3 style={{ fontWeight: '700', fontSize: '20px' }} className="text-[#6A708D] text-lg font-[DM Sans]">{text.icoPageText1 ? text.icoPageText1 : 'INITIAL COIN OFFERING'}</h3>
            </div>

            <div className="flex justify-center">
                <img style={{ width: '280px' }} src={giftRoomLogo.src} />
            </div>

            <input ref={modalRef} type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal text-black">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-2xl">You have been subscribed to our news letter!</h3>
                    <p className="py-4">We will contact you soon. Thanks for being with us!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn bg-black border-2 hover:border-gray-400  active:border-gray-500 font-medium rounded-full">Done</label>
                    </div>
                </div>
            </div>

            <div className="w-full lg:flex justify-center items-center">
                <div className="w-full lg:w-6/12">
                    {
                        text.icoPageText2 ?
                            <h1 className="icoHeaderh1Text text-black text-left">
                                {text.icoPageText2.split("br")[0]}
                                {React.createElement('br')}
                                {text.icoPageText2.split("br")[1]}
                            </h1>
                            :
                            <h1 className="icoHeaderh1Text text-black text-left">
                                Earlybirds, The <br /> $gifttoken Pre-Sale
                            </h1>
                    }
                    <p className="icoHeaderMidText text-black mt-8 mb-4">{text.icoPageText4 ? text.icoPageText4 : 'Receive free  $gift for sending gifts or donation'}</p>
                    <div className="pb-5">
                        <a href="/ico#rewards">
                            <button className=" py-2 my-2 text-xl text-white rounded-full bg-[#8639E8] px-10 hover:bg-white hover:text-black border-2 hover:border-black active:bg-slate-100">
                                Rewards
                            </button>
                        </a>
                    </div>
                </div>


                <div className="sm:w-full md:w-6/12 lg:w-4/12 flex-col mx-auto justify-center content-center icoPageBoxStyle p-5 lg:py-16 sm:mt-4 z-10 bg-white">
                    <h3 style={{ textShadow: '1px 0 black' }} className="py-10 text-center text-black icoMailSubscribeText ">Join the waitlist, be the <br /> first to invest</h3>



                    <div className="w-full py-10 px-2">

                        <NewsletterSubscribe modalRef={modalRef} color={"black"} />

                    </div>

                    {/* <div className="w-full flex justify-center">
                        <div className="md:w-[340px] flex-col justify-center">
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
                    </div> */}
                </div>
            </div>
            {/* </motion.div > */}
        </ div>
    )
}

export default IcoHeader;