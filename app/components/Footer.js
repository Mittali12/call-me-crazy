import React from 'react';
import Link from 'next/link';
// import { BRAND, FOOTER_CONFIG } from '../config';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import Image from 'next/image';

const Footer = () => {
    const privacyTerm = [
        {
            link: '',
            title: 'Terms of Service'
        },
        {
            link: '',
            title: 'Privacy Policy'
        },
        {
            link: '',
            title: 'Refund Policy'
        },
        {
            link: '',
            title: 'User Guidelines'
        },
    ]
    return (
        <footer className="bg-black text-white lg:pt-20 pt-10 lg:py-10 px-6 md:px-16 lg:px-28 z-[999]">
            <div className='flex flex-col-reverse gap-10 xl:grid grid-cols-12'>
                <div className='col-span-2 flex gap-5'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <Image
                                src="/images/logo.svg"
                                alt=""
                                width="0"
                                height="0"
                                sizes="30px"
                                style={{ width: '30px', height: 'auto' }}
                                priority
                            />
                            <div className="shadow-md text-[#C7C7C7] border-dashed rounded-xl border-white border-y text-xl p-2 flex gap-2">
                                <i>Call me Crazy </i>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-end'>
                        <p className='text-gray-300 text-xs'>Making food date memorable...</p>
                        <div className='flex gap-5 items-center'>
                            <BsFacebook />
                            <BsTwitter />
                            <BsInstagram />
                            <BsYoutube />
                            <BsLinkedin />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 mt-8 py-6 flex flex-col lg:flex-row justify-between gap-4">
                <p className='[@media(min-width:100px)]:text-xs [@media(min-width:300px)]:text-sm tracking-wide'>&copy; {new Date().getFullYear()} Call me Craxzy. All rights reserved.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:flex justify-center gap-1 lg:gap-5 text-gray-300">
                    {privacyTerm.map((itm, idx) => {
                        return (
                            <Link className='whitespace-nowrap text-xs lg:text-base' key={idx} href={itm.link}>
                                {itm.title}
                            </Link>
                        )
                    })
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
