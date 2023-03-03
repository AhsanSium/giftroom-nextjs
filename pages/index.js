import Head from 'next/head';

import Collabrations from '../components/Collabrations/Collabrations';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import DigitalAssets from '../components/DigitalAssets/DigitalAssets';
import EmailWaitlist from '../components/EmailWaitlist/EmailWaitlist';

import GetVerified from '../components/GetVerified/GetVerified';
import GiftingAndCollecting from '../components/GiftingandCollecting/GiftingAndCollecting';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import Home_Header from '../components/Home_Header/Home_Header';
import Home_Section1 from '../components/Home_Section1/Home_Section1';
import Home_Section2 from '../components/Home_Section2/Home_Section2';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Menu from '../components/Menu/Menu';
import { useRef } from "react";
import mainImage from "../public/Assets/Images/Giftroom Main Header.png";
import FlexImageIcons from '../components/FlexImageIcons/FlexImageIcons';

export default function Home({ text }) {

  //log("DYnamic Text", text);

  const modalRef = useRef(null);

  return (
    <div style={{ background: '#3772FF' }}>
      <Head>
        <title>Giftroom</title>
        <meta name="description" content="Giftroom, An NFT buying platform" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
        </style>
      </Head>

      <main className='w-full' style={{ background: '#3772FF', color: 'black' }}>
        <Menu />
        <div className='bg-white mx-4 rounded-t-[44px] pt-10'>
          <section className='' id="home-section"
            style={{ backgroundImage: `url("${mainImage.src}")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundPosition: 'right 0px top 20px' }}
          >
            <Home_Header text={text} modalRef={modalRef} />
            <Home_Section1 text={text} />
            {/* <Home_Section2 text={text} /> */}
            <GiftingAndCollecting text={text} />
            <FlexImageIcons />
          </section>
          {/* <section id="collabrations">
            <Collabrations text={text} />
          </section> */}
          <section id="feature_section">
            <GetVerified text={text} />
          </section>
          <section id="how-it-works">
            <DigitalAssets text={text} />
          </section>
          {/* <HomeBanner text={text} /> */}
          {/* <section id="how-it-works">
            <HowItWorks text={text} />
          </section> */}
          <ComingSoon text={text} />
        </div>
      </main>

      <footer className=''>
        <EmailWaitlist text={text} modalRef={modalRef} />
        {/* <FooterSection /> */}
      </footer>
    </div>
  )
}


export async function getServerSideProps({ params }) {

  let textData = {};

  const id = "homePageText";
  const data = {
    id: id,
  };
  //console.log(data);

  await fetch('https://giftroom.gifts/api/getDBData', {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
    .then(response => response.json())
    .then((data) => {
      //onsole.log("DATA => ", data[0][0].content);
      textData = JSON.parse(data && data[0][0].content);
    }
    )
    .catch(err => console.log(err));

  return {
    props: { text: textData }
  }
}