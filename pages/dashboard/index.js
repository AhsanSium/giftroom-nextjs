import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Admin.module.css';
import AdminMain from '../../components/Admin/AdminMain';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import AdminNavBar from '../../components/Common/AdminNavBar';
import { useState } from 'react';
import IcoMain from '../../components/Admin/IcoMain';

export default withPageAuthRequired(function Dashboard() {

    const [tab, setTab] = useState('home');

    const user = useUser();

    //console.log(user);

    const handleTabChange = (selected) => {
        if (selected === 'home') {
            setTab('home');
        }
        if (selected === 'ico') {
            setTab('ico');
        }
    }

    return (
        <div>
            <Head>
                <title>Giftroom - Dashboard</title>
                <meta name="description" content="Giftroom - Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

                <AdminNavBar />
                <h3 className='pt-8 text-3xl text-center'> Dashboard </h3>
                <div className="tabs flex justify-center mt-5">
                    <a onClick={() => { handleTabChange('home') }} className={`tab tab-lifted ${tab === 'home' && 'tab-active'}`}>HomePage Text</a>
                    <a onClick={() => { handleTabChange('ico') }} className={`tab tab-lifted ${tab === 'ico' && 'tab-active'}`} >IcoPage Text</a>
                </div>
                {
                    tab === 'home' &&
                    <AdminMain />
                }
                {
                    tab === 'ico' &&
                    <IcoMain />
                }
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
});
