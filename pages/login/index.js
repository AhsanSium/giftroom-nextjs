import Head from 'next/head';
// import Image from 'next/image';
// import IcoHeader from '../../components/IcoHeader/IcoHeader';
// import IcoMenu from '../../components/IcoMenu/IcoMenu'
// import IcoMission from '../../components/IcoMission/IcoMission';
// import moneyImage from "../../public/Assets/Images/Money.svg";
// import IcoRewards from '../../components/IcoRewards/IcoRewards';
// import IcoTokenomics from '../../components/Tokenomics/IcoTokenomics';
// import IcoGiftToken from '../../components/IcoGiftToken/IcoGiftToken';
import LoginFirstPage from '../../components/LoginFirstPage/LoginFirstPage';
// import FooterSection from '../../components/FooterSection/FooterSection';
import LoginMenu from '../../components/Menu/LoginMenu';

export default function Login() {
    return (
        <div>
            <Head>
                <title>Giftroom - LOGIN</title>
                <meta name="description" content="Giftroom, An NFT buying platform" />
                <link rel="icon" href="/favicon.ico" />
                {/* <style>
                    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
                </style> */}

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />

            </Head>

            <main className='bg-[#3772FF] h-screen'>
                <div className='bg-[#3772FF]'>
                    {/* <IcoMenu /> */}
                    <LoginMenu />
                </div>

                <div className='bg-[#3772FF] pb-5'>
                    <LoginFirstPage />
                </div>

            </main>

            {/* <footer className="">
                <FooterSection />
            </footer> */}
        </div>
    )
}
