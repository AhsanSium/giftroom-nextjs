// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

import Image from "next/image";
import collabrationsImage from "../../public/Assets/Images/Collabrations Side Pic.png";


// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, scale: 0 }
// };

const Collabrations = ({ text }) => {


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
            className="pt-20 ">
            <div>
                <div className="mx-auto px-5 lg:px-16">

                    <h2 className=" text-6xl font-bold">{text.homePageText8 ? text.homePageText8 : 'Collabrations'}</h2>
                    <h3 className="thirdHeadingText font-bold mt-5">{text.homePageText9 ? text.homePageText9 : 'We Collaborate with artists, celebrities and charities.'}</h3>
                </div>

                <div className="md:flex ml-5 mt-10">
                    <div className="md:w-6/12 pl-0 md:pl-10 lg:mr-2 mt-0">
                        <h3 className="midText text-semibold w-11/12">{text.homePageText10 ? text.homePageText10 : 'We offer the perfect ability to engage and get acknowledgment from their audience. You can now effortlessly share your appreciation for your favourite content creators, artists and causes.'} </h3>
                    </div>
                    <div className="md:w-6/12 ">
                        <Image layout="responsive" src={collabrationsImage} />
                    </div>
                </div>


            </div>


        </div>
        // </motion.div>
    )
}

export default Collabrations;