import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="min-h-screen px-4 mx-auto w-screen sm:px-6 md:px-12 lg:px-24 lg:py-24">
            < Head >
                <title>Giftroom - Error Page</title>
                <meta name="description" content="Giftroom, An NFT buying platform" />
                <link rel="icon" href="/favicon.ico" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
                </style>
            </Head >

            <main className='w-full'>
                <div className='w-full text-center justify-center items-center pt-20 mx-auto'>

                    <h1 className='text-center text-6xl'>
                        404 - Page Not Found
                    </h1>

                    <div className='mt-10'>
                        <Link href='/'>
                            <button className='btn'>Go Back</button>
                        </Link>
                    </div>


                </div>

            </main>

        </div >
    )
}