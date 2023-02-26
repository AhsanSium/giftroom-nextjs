// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from "next/image";
import walletImage from "../../public/Assets/Images/Wallet NFT.png";
import cardNFTImage from "../../public/Assets/Images/Free NFT1.png";
import sellNFTImage from "../../public/Assets/Images/Sell NFT.png";

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const HowItWorks = ({ text }) => {

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
            className="my-12 md:my-32 pb-10">
            <div>

                <div>
                    <h1 style={{ textAlign: 'center' }} className=" text-6xl font-bold pb-4">{text.homePageText20 ? text.homePageText20 : 'How it Works'}</h1>
                </div>



                <div className="lg:flex text-center justify-center mt-20 container mx-auto">
                    <div className="howItWorksCard w-11/12 lg:w-4/12 px-4 py-16 m-4">
                        <h3 className="cardHeadingText2 md:h-28 lg:h-36">Sign-up</h3>
                        <div className="w-48  h-60 lg:w-64 lg:h-80  mx-auto">
                            <Image src={walletImage} />
                        </div>
                        <p className="h-22 commonMid1Text text-xl">
                            Create account or connect wallet,
                            Browse our categories and
                            explore our collabration with Artists from  around the world
                        </p>
                    </div>
                    <div className="howItWorksCard w-11/12 lg:w-4/12 px-4 py-16 m-4">
                        <h3 className="cardHeadingText2 md:h-28 lg:h-36">Send a gift or purchase collectible</h3>
                        <div className="w-48  h-60 lg:w-64 lg:h-80  mx-auto">
                            <Image src={cardNFTImage} />
                        </div>
                        <p className="h-22 commonMid1Text text-xl">
                            find the perfect gift to collect or send by wallet or giftroom username
                        </p>
                    </div>
                    <div className="howItWorksCard w-11/12 lg:w-4/12 px-4 py-16 m-4">
                        <h3 className="cardHeadingText2 md:h-28 lg:h-36">Sell your NFTs</h3>
                        <div className="w-48  h-60 lg:w-64 lg:h-80  mx-auto">
                            <Image src={sellNFTImage} />
                        </div>
                        <p className="h-22 commonMid1Text text-xl">
                            find the perfect gift to collect or send by wallet or giftroom username
                        </p>
                    </div>

                </div>
            </div>



        </div>
        //</motion.div>
    )
}

export default HowItWorks;