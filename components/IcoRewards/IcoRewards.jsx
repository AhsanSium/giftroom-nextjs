// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from "next/image";
import medalImage from "../../public/Assets/Images/medal.svg";



// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const IcoRewards = ({ text }) => {


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
            <div className="flex pt-10 md:pt-40 w-full">
                <div className="w-9/12 md:w-9/12 lg:w-10/12">
                    <h1 className="w-full lg:w-8/12 text-7xl font-bold  text-black text-left">
                        {text.icoPageText9 ? text.icoPageText9 : 'Rewards'}
                    </h1>
                    {/* <h5 className="commonMid1Text font-semibold text-2xl text-black my-4" >
                        {text.icoPageText10 ? text.icoPageText10 : 'The token that rewards for giving'}
                    </h5> */}
                    {/* <p style={{ color: '#23262F' }} className="commonMid1Text text-2xl">
                        {text.icoPageText11 ? text.icoPageText11 : 'We aims to innovate the world of digital assets. We make blockchain technology easy to use with our user-friendly interface allowing users to send and collect with convenience.'}
                    </p> */}
                </div>
                <div className="w-3/12 md:w-3/12 lg:w-2/12">
                    <Image src={medalImage} />
                </div>
            </div>


            <div className="lg:flex just-fy-center lg:justify-start items-center pb-20">

                <div className="md:flex justify-center p-2 md:w-8/12 w-full">

                    <div className="w-full md:w-4/12 digitalCardStyle1 m-2 pb-20">
                        <h3 className="rewardsCardText text-center text-3xl font-bold  p-3">For Gifting</h3>
                        <div className="w-full border-b-2"></div>

                        <ul className="cardListText p-3">
                            <li className="p-2 flex">

                                <p className="mt-1 font-semibold">
                                    Receive free  $giftroom for sending gifts or donating to charities
                                </p>
                            </li>

                        </ul>
                    </div>

                    <div className="w-full md:w-4/12  digitalCardStyle2 m-2 pb-20">
                        <h3 className="rewardsCardText text-center text-3xl font-bold p-3">Referrals</h3>
                        <div className="w-full border-b-2"></div>

                        <ul className="cardListText p-3">
                            <li className="p-2 flex">

                                <p className="mt-1 font-semibold">
                                    Receive $giftroom when your referral makes purchases
                                </p>
                            </li>

                        </ul>
                    </div>


                    <div style={{ background: ' linear-gradient(rgb(34 218 174) 0%, rgb(7, 43, 136) 100%);' }} className="w-full md:w-4/12 digitalCardStyle1 m-2 pb-20 xl:min-h-[350px]">
                        <h3 className="rewardsCardText text-3xl font-bold text-center  p-3">Discounts</h3>
                        <div className="w-full border-b-2"></div>

                        <ul className="cardListText p-3">
                            <li className="p-2 flex">

                                <p className="mt-1 font-semibold">
                                    Save 10% on gift items when purchased with $giftroom tokens
                                </p>
                            </li>

                        </ul>
                    </div>

                </div>




                {/* <div className="md:w-4/12 w-full pl-2 pt-5 md:pt-0">
                    <h3 style={{ color: '#23262F' }} className="commonMid1Text font-bold text-3xl sm:mt-5 md:mt-0">
                        {text.icoPageText12 ? text.icoPageText12 : 'It pays to $gift'}
                    </h3>
                    <p style={{ color: '#23262F' }} className="commonMid1Text text-2xl pt-3">
                        {text.icoPageText13 ? text.icoPageText13 : 'We aims to innovate the world of digital assets.We make blockchain technology easy to use with our user-friendly interface allowing users to send and collect with convenience.'}
                    </p>
                </div> */}

            </div>

        </div>
        //</motion.div>
    )
}

export default IcoRewards;