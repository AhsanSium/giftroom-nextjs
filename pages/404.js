import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="min-h-screen px-4 mx-auto w-screen sm:px-6 md:px-12 lg:px-24 lg:py-24">
            < Head >
                <title>Giftroom - Error Page</title>
                <meta name="description" content="Giftroom, An NFT buying platform" />
                <link rel="icon" href="/favicon.ico" />
                {/* <style>
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
                </style> */}

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100;200;400;500;600;700;800&display=swap" rel="stylesheet" />

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