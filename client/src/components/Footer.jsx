import React from 'react'
import FooterBg from '../assets/coffee-footer.jpg'
import Logo from "../../public/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
};

const Footer = () => {
    return (
        <div style={bgImage} className='text-white'>
            <div className='bg-black/40 min-h-[400px]'>
                <div className='grid pt-5 pb-20 mx-auto max-w-7xl md:grid-cols-3'>
                    {/* company details */}
                    <div className='px-4 py-8'>
                        <div className='flex items-center'>
                            <img src={Logo} alt="footer logo" className='w-24 h-20' />
                            <h1 className='text-2xl text-white font-cursive'>Birur Trading</h1>
                        </div>
                        {/* <a href="#" className='text-2xl font-semibold tracking-widest sm:text-3xl font-cursive'>Birur Trading</a> */}
                        <p className='pt-4'>We specialize in sourcing premium Ethiopian beans – High quality cereals</p>                        
                    </div>
                    {/* footer links */}
                    <div className='grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10'>
                        <div className='px-4 py-8'>
                            <h1 className='mb-3 text-xl font-semibold sm:text-left'>Important Links</h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block duration-200 hover:scale-105'>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* second col links */}
                        <div className='hidden px-4 py-8'>
                            <h1 className='mb-3 text-xl font-semibold sm:text-left'>
                                Quick Links
                            </h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block duration-200 hover:scale-105'>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* company address */}
                        <div className='col-span-2 px-4 py-8 sm:col-auto'>
                            <h1 className='mb-3 text-xl font-semibold sm:text-left'>Address</h1>
                            <div>
                                <p className='mb-3'>Addis Ababa, Ethiopia</p>
                                <p>+251 911524316</p>
                                {/* social links */}
                                <div className='flex items-center gap-3 mt-6'>
                                    <a href="#">
                                        <FaInstagram className='text-3xl duration-300 hover:text-amber-900' />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className='text-3xl duration-300 hover:text-amber-900' />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className='text-3xl duration-300 hover:text-amber-900' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
