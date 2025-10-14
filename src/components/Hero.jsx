import React from 'react'
import coffee from '../assets/coffee5.png'
import Bean1 from '../assets/bean1.png'
import Bean2 from '../assets/bean2.png'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='from-slate-100 to-amber-950 bg-gradient-to-r mt-14'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0'>
                {/* text section */}
                <div className='px-4 space-y-5 md:px-0'>
                    <motion.h3 
                        initial={{opacity:0,x:-50}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1, delay:0.2}}
                        className='text-lg font-semibold text-amber-900 font-cursive'
                    >
                        Welcome to Birur Trading ___
                    </motion.h3>

                    <motion.h1 
                        initial={{opacity:0,x:-60}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1, delay:0.4}}
                        className='text-4xl font-bold md:text-6xl font-cursive2'
                    >
                        Delivering Premium <span className='text-amber-900'>Coffee Beans</span> Worldwide
                    </motion.h1>

                    <motion.p
                        initial={{opacity:0,x:-60}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1.2, delay:0.6}}
                    >
                        We specialize in sourcing, processing, and exporting the finest Ethiopian coffee beans.<span className='hidden sm:block'>And other finest cereals.</span>
                    </motion.p>

                    <motion.div 
                        initial={{opacity:0,x:-70}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1.4, delay:0.8}}
                        className='flex gap-2'
                    >
                        <a href="#coffee"><button className='px-3 py-2 text-white rounded-md bg-amber-900'>Our Coffee</button></a>
                        <a href="#about"><button className='px-3 py-2 bg-transparent border rounded-md border-amber-900 text-amber-900'>About Us</button></a>
                    </motion.div>
                </div>

                {/* image section */}
                <div className=''>
                    <motion.img 
                     initial={{opacity:0,scale:0.5}}
                     whileInView={{opacity:1,scale:1}}
                     transition={{duration:1.5, delay:0.5}}
                    src={coffee} alt="coffee hero" className='w-[500px]' />
                </div>
                <motion.img 
                 initial={{opacity:0,x:400,scale:0.7}}
                 whileInView={{opacity:1,x:0,scale:1,rotate:45}}
                 transition={{duration:1.8, delay:0.8}}
                src={Bean2} alt="" className='absolute hidden w-20 rotate-45 md:block bottom-20 left-36 x-10'/>
                <motion.img 
                 initial={{opacity:0,x:600,y:200,scale:0.7}}
                 whileInView={{opacity:1,x:0,y:0,scale:1}}
                 transition={{duration:1.8, delay:0.8}}
                src={Bean1} alt="" className='absolute left-0 hidden w-20 md:block top-14'/>
                <motion.img 
                initial={{opacity:0,x:-100,y:100,scale:0.7}}
                whileInView={{opacity:1,x:0,y:0,scale:1,rotate:45}}
                transition={{duration:1.8, delay:0.8}}
                src={Bean2} alt="" className='absolute top-0 right-0 hidden w-20 -rotate-45 md:block'/>
            </div>
        </div>
    )
}

export default Hero
