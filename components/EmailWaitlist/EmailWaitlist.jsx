import Image from "next/image";

import logoImage from "../../public/Assets/Images/GiftRoom Logo Medium White.svg";
import NewsletterSubscribe from "../Common/NewsLetterSubscribe";

const EmailWaitlist = ({ text, modalRef }) => {



    const handleFormSubmit = (e) => {
        e.preventDefault();
        modalRef.current.checked = true;
    }

    return (
        <div className="flex-col justify-center py-16 pb-32 bg-[#3772FF]">


            <div className="flex-col items-center justify-center lg:w-5/12 mx-auto">
                <div className="flex justify-center items-center">
                    <span className="w-8/12">
                        <Image src={logoImage} />
                    </span>
                </div>
                <div className="mx-5">
                    <h3 style={{ color: 'white' }} className="thirdHeadingText  text-center font-semibold">{text ? text.homePageText21 : 'Join the waitlist'}</h3>
                    {/* <p className="commonMid1Text text-center font-semibold">
                        {text.homePageText22 ? text.homePageText22 : 'Subscribe and be notified of upcoming collections'}
                    </p> */}

                    <div className="mt-10 ">

                        <input ref={modalRef} type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-2xl text-center">You have been subscribed to our newsletter!</h3>
                                <p className="py-4"></p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal-5" className="btn bg-black border-2 hover:border-gray-400  active:border-gray-500 font-medium rounded-full">Done</label>
                                </div>
                            </div>
                        </div>

                        <NewsletterSubscribe modalRef={modalRef} color={'homeBlue'} />

                    </div>





                </div>
            </div>
        </div >
    )
}

export default EmailWaitlist;