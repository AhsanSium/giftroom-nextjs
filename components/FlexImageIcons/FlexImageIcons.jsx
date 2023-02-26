import React from 'react';
import Image from "next/image";
import ethereumImage from "../../public/Assets/Images/etherum.svg";
import wethImage from "../../public/Assets/Images/weth.svg";
import polygonImage from "../../public/Assets/Images/polygon.svg";
import stripeImage from "../../public/Assets/Images/Stripe.svg";
import appleImage from "../../public/Assets/Images/ApplePay.svg";
import visaImage from "../../public/Assets/Images/visa.svg";
import masterCardImage from "../../public/Assets/Images/Mastercard.svg";

const FlexImageIcons = () => {
    return (
        <div className="md:flex py-20 space-x-1">
            <div className="px-10 mx-auto">

                <Image className='cursor-pointer' src={ethereumImage} />
                <div className='self-end inline'>
                    <Image className='rounded-lg p-2 border-2 border-inheri cursor-pointer' width={200}
                        height={120} src={wethImage} />
                </div>
                <Image className='cursor-pointer' src={polygonImage} />
                <Image className='cursor-pointer' src={stripeImage} />
                <Image className='cursor-pointer' src={appleImage} />
                <Image className='cursor-pointer' src={visaImage} />
                <Image className='cursor-pointer' src={masterCardImage} />
            </div>

        </div>
    )
}

export default FlexImageIcons;