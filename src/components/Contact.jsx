import React from 'react'
import Bg from '../assets/Bg.png'
import { motion } from 'framer-motion'

const bgImage = {
    backgroundImage: `url(${Bg})`,
    backgroundcolor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Contact = () => {
    return (
        <div id='contact' style={bgImage} className='flex items-center justify-center min-h-screen p-6'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className='w-full max-w-3xl p-8 rounded-lg shadow-md bg-amber-900/20'>
                <h1
                    className='mb-6 text-3xl font-bold text-center text-amber-900 font-cursive'>Contact Us</h1>
                <p className='mb-8 text-lg text-center text-gray-600 font-cursive'>We would love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>
                <form className='space-y-6'>
                    <div>
                        <label htmlFor="name" className='block mb-1 text-sm font-medium text-gray-700'>Name</label>
                        <input type="text" id='name' name='name' placeholder='Your Name'
                            className='w-full px-4 py-2 border rounded-lg borde-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-900'
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block mb-1 text-sm font-medium text-gray-700'>Email</label>
                        <input type="email" id='email' name='email' placeholder='Your Email'
                            className='w-full px-4 py-2 border rounded-lg borde-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-900'
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block mb-1 text-sm font-medium text-gray-700'>Message</label>
                        <textarea name="message" id="message" placeholder='Your Message' rows="5"
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 '
                        ></textarea>
                    </div>
                    <button className='w-full px-4 py-2 font-semibold text-white transition duration-300 rounded-lg shadow-md bg-amber-900 hover:bg-amber-950'>Send Message</button>
                </form>
                <div className='mt-8 text-center'>
                    <p className='text-gray-600'>Or reach us directly:</p>
                    <p className='font-semibold text-black'>+251 911524316</p>                    
                </div>
            </motion.div>
        </div>
    )
}

export default Contact
