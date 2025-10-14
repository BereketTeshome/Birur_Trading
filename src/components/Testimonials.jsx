import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { X } from "lucide-react"; // close icon (optional, install `lucide-react`)


const TestimonialData = [{
    id: 1,    
    text: "Coffee Beans",
    img: "../../public/1.jpg",
},
{
    id: 2,    
    text: "Red Kidney Beans",
    img: "../../public/2.jpg",
},
{
    id: 3,    
    text: "Coffee Beans",
    img: "../../public/3.jpg",
},
{
    id: 4,    
    text: "Coffee Beans",
    img: "../../public/4.jpg",
},
{
    id: 5,    
    text: "Mustard Seed",
    img: "../../public/5.jpg",
},
{
    id: 6,    
    text: "Sesame Seed",
    img: "../../public/6.jpg",
},
{
    id: 7,    
    text: "Sesame Seed",
    img: "../../public/7.jpg",
},
{
    id: 8,    
    text: "Mung Beans",
    img: "../../public/8.jpg",
},
{
    id: 9,    
    text: "Lupin Beans",
    img: "../../public/9.jpg",
},
{
    id: 10,    
    text: "Jack Fruit Seeds",
    img: "../../public/10.jpg",
},
{
    id: 11,    
    text: "Chick Peas",
    img: "../../public/11.jpg",
},
{
    id: 12,    
    text: "Pigeon Peas",
    img: "../../public/12.jpg",
},
{
    id: 13,    
    text: "Pigeon Peas",
    img: "../../public/13.jpg",
},
{
    id: 14,    
    text: "Mix Display",
    img: "../../public/14.jpg",
},
{
    id: 15,    
    text: "Maize",
    img: "../../public/15.jpg",
},
{
    id: 16,    
    text: "Red Kidney Beans",
    img: "../../public/16.jpg",
},
{
    id: 17,    
    text: "Black Beans",
    img: "../../public/17.jpg",
},
{
    id: 18,    
    text: "Chick Pea",
    img: "../../public/18.jpg",
},
{
    id: 19,    
    text: "Sesame Seed",
    img: "../../public/19.jpg",
},
{
    id: 20,    
    text: "Coffee Beans",
    img: "../../public/20.jpg",
},
{
    id: 21,    
    text: "Sesame Seed",
    img: "../../public/21.jpg",
},
{
    id: 22,    
    text: "Red Kidney Beans",
    img: "../../public/22.jpg",
},
{
    id: 23,    
    text: "Pinto Beans",
    img: "../../public/23.jpg",
},
{
    id: 24,    
    text: "Mung Beans",
    img: "../../public/24.jpg",
},
{
    id: 25,    
    text: "Chick Peas",
    img: "../../public/25.jpg",
},
];

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div id='testimonial' className='py-20'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className='my-6'>
                <div className='relative flex flex-col gap-4 px-6 py-8 mx-4 shadow-lg rounded-xl bg-amber-900/10'>
                  <div 
                    className='object-cover mb-4 cursor-pointer'
                    onClick={() => setSelectedImage(data.img)}
                  >
                    <img src={data.img} alt="" className='w-full h-[320px] rounded-md' />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-lg text-gray-500'>{data.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button 
            className="absolute p-2 text-3xl text-white top-4 right-4"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="fullscreen" 
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  )
}

export default Testimonials