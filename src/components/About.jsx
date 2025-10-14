import React from 'react'
import Bg from '../assets/Bg.png'
import Lottie from 'lottie-react';
import coffee from '../assets/Coffeeanime.json'
import { motion } from 'framer-motion'; 

const bgImage = {
  backgroundImage: `url(${Bg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const About = () => {
  return (
    <div id='about' className='py-40 md:py-20' style={bgImage}>
      <motion.h1 
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.5, delay:0.5}}
        className='text-5xl text-center text-amber-900 font-cursive'
      >
        About Us
      </motion.h1>

      <div className='flex flex-col items-center mx-auto md:flex-row max-w-7xl'>
        {/* animation section */}
        <motion.div
          initial={{opacity:0,scale:0.5}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:1.5, delay:0.5}}
        >
          <Lottie animationData={coffee} className='md:w-[600px]'/>
        </motion.div>

        {/* text section */}
        <div className='px-4 space-y-4 md:px-0'>
          <motion.h1 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1.5, delay:0.5}}
            className='text-2xl font-cursive2 text-amber-900'
          >
            Dedicated to Global Coffee Excellence
          </motion.h1>

          <motion.p 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1.5, delay:0.6}}
            className='font-cursive2'
          >
            Birur Coffee Exporters began with a mission to share 
            Ethiopia’s finest coffee with the world. What started as a local initiative 
            has grown into an international trading company, partnering with farmers, 
            cooperatives, and roasters across the globe. 
            <br/><br/>
            We specialize in sourcing premium Ethiopian beans such as Yirgacheffe, 
            Sidamo, and Harrar, ensuring sustainable practices and fair partnerships 
            with growers. Every shipment is carefully processed, graded, and exported 
            to meet international standards. 
            <br/><br/>
            Our passion lies not only in coffee, but in building long-term global 
            connections rooted in quality, trust, and authenticity.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About
