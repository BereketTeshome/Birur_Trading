import React from 'react'
import Img1 from '../assets/coffee-white.png'
import Img2 from '../assets/coffee2.png'
import { motion } from 'framer-motion'

const CoffeeData = [
  {
    id: 1,
    img: Img2,
    name: "Nekemt",
    description:
      "Western Ethiopian coffee with winey flavors, medium acidity, and sweet chocolate notes.",
  },
  {
    id: 2,
    img: Img1,
    name: "Jimma",
    description:
      "Produces natural and washed coffees; bold, slightly earthy with hints of fruit and spice.",
  },
  {
    id: 3,
    img: Img2,
    name: "Metu",
    description:
      "Smooth, low-acid profile with nutty, chocolaty character and gentle sweetness.",
  },
  {
    id: 4,
    img: Img2,
    name: "Yirgacheffe",
    description:
      "Globally renowned; bright citrusy flavor, tea-like body, and distinct floral aroma.",
  },
  {
    id: 5,
    img: Img1,
    name: "Guji",
    description:
      "Elegant and complex; fruity with tropical notes and silky texture.",
  },
  {
    id: 6,
    img: Img2,
    name: "Harrar",
    description:
      "Famous for dry-processed beans; strong, winey, and blueberry-toned with wild intensity.",
  },
  {
    id: 7,
    img: Img2,
    name: "Sidama",
    description:
      " Versatile region; delicate balance of floral, fruity, and citrusy notes with vibrant acidity.",
  },
  {
    id: 8,
    img: Img1,
    name: "Illubabor",
    description:
      "Forest-grown coffee with mild acidity, soft body, and smooth, sweet flavors.",
  },
  {
    id: 9,
    img: Img2,
    name: "Sheka",
    description:
      "Dense rainforest coffee with sweet, fruity complexity and a clean, lingering finish.",
  },
  {
    id: 9,
    img: Img2,
    name: "Bench",
    description:
      "Known for rich, full-bodied coffee with earthy tones and subtle spice undertones.",
  },
  {
    id: 9,
    img: Img1,
    name: "Kaffa",
    description:
      "Birthplace of coffee, offering wild and heirloom beans with a balanced cup, floral notes, and smooth body.",
  },
];

const CoffeeVarieties = () => {
  return (
    <div id='coffee' className='py-20'>
      <div className='mx-auto max-w-7xl'>
        {/* Heading section */}
        <div className='mb-20 text-center'>
          <motion.h1 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.5, delay:0.5}}
            className='text-4xl font-bold font-cursive text-amber-900'
          >
            Our Export Coffee Varieties
          </motion.h1>
          <p className='max-w-2xl mx-auto mt-4 text-gray-600'>
            We proudly export some of the world’s finest Ethiopian coffee beans, 
            carefully selected and processed to meet international quality standards.
          </p>
        </div>

        {/* Coffee varieties section */}
        <motion.div 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1.5, delay:0.5}}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'
        >
          {CoffeeData.map((coffee)=> (
            <div 
              key={coffee.id}
              className='rounded-2xl mb-10 bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl duration-300 group max-w-[300px]'
            >
              <div className='h-[122px]'>
                <img 
                  src={coffee.img} 
                  alt={coffee.name} 
                  className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'
                />
              </div>
              <div className='p-4 text-center'>
                <h1 className='text-xl font-bold'>{coffee.name}</h1>
                <p className='text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-3'>
                  {coffee.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default CoffeeVarieties
