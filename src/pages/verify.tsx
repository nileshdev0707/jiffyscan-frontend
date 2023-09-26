import React, {useEffect, useState} from 'react';
import Footer from '@/components/global/footer/Footer';
import Navbar from '@/components/global/navbar/Navbar';
import ReactGA from 'react-ga4';
import Link from 'next/link';
import SEO from '@/components/common/SEO';
import {useRouter} from "next/router";
import {Amplify, Auth} from "aws-amplify";
import Spinner from "@/components/common/Spinner";

const COGNITO_REGION = process.env.NEXT_PUBLIC_COGNITO_REGION;
const LOGIN_REGISTER_COGNITO_CLIENT_ID = process.env.NEXT_PUBLIC_LOGIN_REGISTER_COGNITO_CLIENT_ID;
const COGNITO_USER_POOL_ID = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID;


export default function VerifyEmail() {
    const router = useRouter();
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        ReactGA.send({hitType: 'pageview', page: window.location.pathname});

    }, []);
    useEffect(() => {
        if (router?.query) {
            const awsAmplifyConfig = {
                mandatorySignId: true,
                region: COGNITO_REGION,
                userPoolId: COGNITO_USER_POOL_ID,
                userPoolWebClientId: LOGIN_REGISTER_COGNITO_CLIENT_ID
            }
            Amplify.configure(awsAmplifyConfig)
            const userName = router?.query?.userName;
            const confirmation_code = router.query.confirmation_code;
            if (typeof userName === 'string' && typeof confirmation_code === 'string') {
                Auth.confirmSignUp(userName, confirmation_code).then((response) => {
                    if (response === "SUCCESS") {
                        setMessage("SUCCESS")
                        setLoading(false)
                    }
                }).catch(error => {
                    if (error?.message?.includes('CONFIRMED')) {
                        setMessage('User is already verified')
                        setLoading(false)
                    } else {
                        setMessage(error?.message)
                    }
                })
            }
        }
    }, [router?.query]);
    return (
        <div>
            <SEO/>
            <Navbar/>
            <div className="container flex items-center justify-center ">

                <div className="row">
                    <div className="col-12 h-[500px] flex items-center justify-center">
                        {loading ? <Spinner/> :
                            <div className='text-center'>
                                {message && message === 'SUCCESS' ?
                                    <h1 className="lead">Your email has been verified</h1>
                                    :
                                    <h1 className="lead text-red">{message}</h1>
                                }
                                <p className="lead">You may head back to login from <Link href="/login"
                                                                                          className="text-blue-400">here</Link>
                                </p>
                            </div>}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}