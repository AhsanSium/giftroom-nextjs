import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Image from "next/image"
import earthImage from "../../public/Assets/Images/globe-4.svg";
import listImage from "../../public/Assets/Images/List.svg";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

const IcoEarlyBirds = ({ text }) => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        // <motion.div
        //     ref={ref}
        //     variants={boxVariant}
        //     initial="hidden"
        //     animate={control} 

        <div

            className="mx-5 bg-white px-10 pb-10" style={{ borderRadius: '44px', borderEndEndRadius: '0px', borderBottomLeftRadius: '0px' }}>
            <div className="pt-20 flex-col justify-center items-center">

                {
                    text.icoPageText20 ?
                        <h1 className=" text-6xl font-bold  text-black text-left text-center">

                            {text.icoPageText20.split("br")[0]}
                            {React.createElement('br')}
                            {text.icoPageText20.split("br")[1]}
                        </h1>
                        :
                        <h1 className=" text-6xl font-bold  text-black text-left text-center">

                            Earlybirds,<br />
                            this is your chance.
                        </h1>

                }
                <div className="flex justify-center">
                    <Image src={earthImage} />

                </div>
            </div>

            <hr className="w-full bg-slate-300 p-1 mt-20"></hr>

            <div className="md:flex-col pt-20 justify-center items-center">
                <h3 className="commonMid1Text font-bold lg:text-3xl sm:text-xl text-xl text-black text-left text-center">
                    {text.icoPageText21 ? text.icoPageText21 : 'Documents'}
                </h3>

                {
                    text.icoPageText22 ?

                        <p className="commonMid1Text text-lg text-black text-left text-center mt-4">

                            {text.icoPageText22.split("br")[0]}
                            {React.createElement('br')}
                            {text.icoPageText22.split("br")[1]}
                        </p>
                        :
                        <p className="commonMid1Text text-lg text-black text-left text-center mt-4">

                            Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach <br /> and the team/advisors.
                        </p>

                }

                <div className="my-5 mt-16 flex justify-center">
                    <Image className="cursor-pointer" src={listImage} />
                </div>
            </div>

        </div>
        //</motion.div>
    )
}

export default IcoEarlyBirds