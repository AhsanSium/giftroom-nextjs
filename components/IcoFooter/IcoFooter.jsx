import Image from "next/image";
import giftRoomLogo from "../../public/Assets/Images/GiftRoom White Logo Large.svg";
import facebookLogo from "../../public/Assets/Images/social (3).svg";
import instagramLogo from "../../public/Assets/Images/social (2).svg";
import youtubeLogo from "../../public/Assets/Images/social (1).svg";
import linkedInLogo from "../../public/Assets/Images/social.svg";
import { useRef } from "react";
import NewsletterSubscribe from "../Common/NewsLetterSubscribe";

const IcoFooter = () => {

    const modalRef = useRef(null);

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     modalRef.current.checked = true;
    // }

    return (
        <div className="pb-24 pt-12">
            <div className="flex justify-center">

                <div className="md:flex justify-center mx-10 w-full">



                    <div className="w-full md:w-7/12 ">


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

                        <div className=" flex flex-col justify-center items-center ">

                            <h2 style={{ color: 'white' }} className="icoFooterHeadingText ">Join the waitlist</h2>

                            {/* <p className="commonMid1Text text-lg p-2">Subscribe and be notified of upcoming collections </p> */}

                            <div className="mt-8 w-full xl:w-8/12">

                                <NewsletterSubscribe modalRef={modalRef} color={"homeBlue"} />

                            </div>

                        </div>




                    </div>


                    {/* <div className="w-full md:w-5/12 text-end mt-8">
                        <div className="flex-col items-center justify-center p-2">
                            <h3 className="commonMid1Text font-semibold text-3xl  p-2">A Social Platform to Send
                                and Collect Digital Assets</h3>

                        </div>



                        <div className="">
                            <p className="commonMid1Text">High level experience in Digital Token and development knowledge, producing quality work.</p>

                            <div className="flex p-2 justify-end pt-24">
                                <button className="mr-5"> <Image style={{ color: 'white' }} src={facebookLogo} /></button>
                                <button className="mr-5"> <Image src={instagramLogo} /></button>
                                <button className="mr-5"> <Image src={youtubeLogo} /></button>
                                <button className="mr-5"> <Image src={linkedInLogo} /></button>
                            </div>

                            <ul className="flex justify-end mt-5">
                                <li className="p-2"><a href="#">About</a></li>
                                <li className="p-2"><a href="#">Terms and Conditions</a></li>
                                <li className="p-2"><a href="#">FAQ</a></li>
                                <li className="p-2"><a href="/ico">ICO</a></li>
                                <li className="p-2"><a href="#"></a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default IcoFooter;