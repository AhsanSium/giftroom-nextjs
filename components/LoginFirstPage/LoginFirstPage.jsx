// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import Image from "next/image";
import globeGiftImage from "../../public/Assets/Images/glob gift.png";

// let isMobile;
// if (typeof window !== "undefined") {
//     // Client-side-only code
//     isMobile = window.innerWidth < 768;
// }
// let boxVariant = {};
// if (!isMobile) {
//     boxVariant = {
//         visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//         hidden: { opacity: 0, scale: 0 }
//     }
// };

const LoginFirstPage = () => {


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
            <h3 className="text-[#6A708D] text-lg pt-10">INITIAL COIN OFFERING</h3>
            <div className="md:flex pt-5 w-full justify-center items-start mt-20">

                <div className="w:full md:w-6/12 ">
                    <div className="">
                        <h1 className="commonMid1Text font-bold lg:text-5xl sm:text-3xl text-4xl text-black text-left text-center">We’re still developing, < br />
                            come back later!</h1>
                    </div>
                    <div className="pt-5">
                        <Image src={globeGiftImage} />
                    </div>
                </div>

                <div className="w-full md:w-6/12 px-5 flex-col justify-center items-center">
                    <div className="md:ml-8 w-full lg:w-[450px] md:px-8">

                        <h5 className="commonMid1Text font-semibold text-xl text-black my-4" >Account Login</h5>
                        <p className="commonMid1Text text-slate-500">If you are already a member you can login with your email address and password.</p>

                        <div class="mb-6 pt-10">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>

                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Remember me </label>

                        </div>
                        <button disabled type="submit" class="text-white bg-slate-400 active:ring-4 font-medium rounded-lg text-sm w-full py-2">Submit</button>

                        <h5 for="remember" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 mt-10">Don't have an account ? <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">Sign Up Here</a>.</h5>
                    </div>
                </div>


            </div>
        </div>
        //</motion.div>
    )
}

export default LoginFirstPage;