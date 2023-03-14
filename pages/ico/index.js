import Head from 'next/head'
import IcoHeader from '../../components/IcoHeader/IcoHeader';
import IcoMenu from '../../components/IcoMenu/IcoMenu'
import IcoMission from '../../components/IcoMission/IcoMission';
import moneyImage from "../../public/Assets/Images/Money ICO Header.png";
import IcoRewards from '../../components/IcoRewards/IcoRewards';
import IcoFooter from '../../components/IcoFooter/IcoFooter';

export default function ICO({ text }) {
    return (
        <div>
            <Head>
                <title>Giftroom - ICO</title>
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

            <main>
                <div className='bg-[#8639E8]'>
                    <IcoMenu />
                </div>

                <div className="relative">
                    <div className="bg-[#8639E8] pb-6">
                        <IcoHeader text={text} />
                    </div>
                    <div style={{ left: '25rem', top: '25rem', width: 'auto', height: '100vh', objectFit: 'cover' }} className='absolute hidden lg:block'>
                        <img className='w-full' src={moneyImage.src} />
                    </div>
                    <div className="pb-5 pt-5" style={{ background: '#FFA53C' }}>
                        <section id="mission">
                            <IcoMission text={text} />
                        </section>
                    </div>
                </div>

                <div className="pb-5 pt-5" style={{ background: '#E61184' }}>
                    <section id='rewards'>
                        <IcoRewards text={text} />
                    </section>
                </div>

                {/* <section id="tokenomics">
                    <div className="pb-5 pt-5" style={{ background: '#2D1CEE' }}>
                        <IcoTokenomics text={text} />
                    </div>
                </section>

                <section id="giftoken">
                    <div className="pb-5 pt-5" style={{ background: '#2D1CEE' }}>
                        <IcoGiftToken text={text} />
                    </div>
                </section>

                <div style={{ overflow: 'hidden' }} className="relative">
                    <div className="pb-5 pt-5" style={{ background: "linear-gradient(0deg, #19D184, #19D184), #19D184" }}>
                        <IcoRoadmap text={text} />
                        <Image className='' src={giftBox} />
                    </div>

                    <div className='absolute hidden lg:block' style={{ bottom: '-8rem', right: '-22rem', zIndex: '2', }}>
                        <img className='w-[600px] xl:w-[700px] -z-10' style={{ overflow: 'hidden' }} src={giftBox.src} />
                    </div>
                </div>

                <section id="pre-sale">
                    <div className="pb-5 pt-5" style={{ background: 'linear-gradient(0deg, #992CEE, #992CEE), #992CEE' }}>
                        <IcoHowtoBuy text={text} />
                    </div>
                </section>

                <section id="whitepaper">

                    <div className="pb-5 pt-5" style={{ background: 'linear-gradient(0deg, #992CEE, #992CEE), #992CEE' }}>
                        <IcoEarlyBirds text={text} />
                    </div>

                </section> */}


            </main>

            <footer style={{ background: '#E61184', color: 'white' }} className="pt-20 pb-10">
                <IcoFooter />
            </footer>
        </div>
    )
}


export async function getStaticProps({ params }) {

    let textData = {};

    const id = "icoPageText";
    const data = {
        id: id,
    };
    console.log(data);

    await fetch('https://giftroom.gifts/api/getDBData', {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    })
        .then(response => response.json())
        .then((data) => {
            //console.log("DATA => ", data.data.content);
            textData = JSON.parse(data && data[0][0].content);
        }
        )
        .catch(err => console.log(err));

    return {
        props: { text: textData }
    }
}
