import React from 'react';
import { useEffect } from 'react';
import Footer from '@/components/global/footer/Footer';
import Navbar from '@/components/global/navbar/Navbar';
import ReactGA from 'react-ga4';
import Link from 'next/link';
import SEO from '@/components/common/SEO';

export default function FourOhFour() {
    useEffect(() => {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    }, []);

    return (
        <div>
            <SEO/>
            <Navbar />
            <div className="container ">
                <div className="row">
                    <div className="col-12 h-[500px] flex items-center justify-center">
                        <div className='text-center'>
                            <h1 className="text-lg font-black">404</h1>
                            <p className="lead">The page you are looking for does not exist.</p>
                            <p className="lead">You may head back to home from <Link href="/" className="text-blue-400">here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}