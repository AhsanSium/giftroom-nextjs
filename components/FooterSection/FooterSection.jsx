import Image from "next/image";
import giftRoomLogo from "../../public/Assets/Images/GiftRoomLogo.svg";
import facebookLogo from "../../public/Assets/Images/Facebook.svg";
import instagramLogo from "../../public/Assets/Images/instagram.svg";
import youtubeLogo from "../../public/Assets/Images/Youtube.svg";
import linkedInLogo from "../../public/Assets/Images/LinkedIn.svg";

const FooterSection = () => {
    return (
        <div className="pb-24 pt-5 bg-white">
            <div className="flex justify-between">

                <div className="md:flex mx-10 w-full">
                    <div className="sm:flex w-full md:w-7/12 justify-center content-center items-center mx-12 md:mx-0">
                        <div className="w-4/12 flex justify-center items-centerr">
                            <Image src={giftRoomLogo} />
                        </div>
                        <div className="w-8/12">
                            <h2 className="headingText2 p-2 ">The<span className="ml-1" />Marketplace</h2>

                            <p className="commonMid1Text p-2">Subscribe and be notified of upcoming collections </p>

                            <div className="flex p-2">
                                <button className="mr-5"> <Image src={facebookLogo} /></button>
                                <button className="mr-5"> <Image src={instagramLogo} /></button>
                                <button className="mr-5"> <Image src={youtubeLogo} /></button>
                                <button className="mr-5"> <Image src={linkedInLogo} /></button>
                            </div>

                        </div>
                    </div>


                    <div className="w-full md:w-5/12 text-center md:text-end mt-8">
                        <div className="flex-col items-center justify-center p-2">
                            <h3 className="commonMid1Text font-semibold text-3xl  p-2">Professional Web Design</h3>

                        </div>
                        <div className="mx-auto">
                            <p className="commonMid1Text">High level experience in web design and development<br /> knowledge, producing quality work.</p>
                            <ul className="flex justify-center md:justify-end mt-5">
                                <li className="p-2"><a href="#">About</a></li>
                                <li className="p-2"><a href="#">Terms and Conditions</a></li>
                                <li className="p-2"><a href="#">FAQ</a></li>
                                <li className="p-2"><a href="/ico">ICO</a></li>
                                <li className="p-2"><a href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;