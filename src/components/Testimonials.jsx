import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { X } from "lucide-react";

// ✅ Import all images from src/assets (or adjust path if different)
import img1 from "../../public/1.jpg";
import img2 from "../../public/2.jpg";
import img3 from "../../public/3.jpg";
import img4 from "../../public/4.jpg";
import img5 from "../../public/5.jpg";
import img6 from "../../public/6.jpg";
import img7 from "../../public/7.jpg";
import img8 from "../../public/8.jpg";
import img9 from "../../public/9.jpg";
import img10 from "../../public/10.jpg";
import img11 from "../../public/11.jpg";
import img12 from "../../public/12.jpg";
import img13 from "../../public/13.jpg";
import img14 from "../../public/14.jpg";
import img15 from "../../public/15.jpg";
import img16 from "../../public/16.jpg";
import img17 from "../../public/17.jpg";
import img18 from "../../public/18.jpg";
import img19 from "../../public/19.jpg";
import img20 from "../../public/20.jpg";
import img21 from "../../public/21.jpg";
import img22 from "../../public/22.jpg";
import img23 from "../../public/23.jpg";
import img24 from "../../public/24.jpg";
import img25 from "../../public/25.jpg";

const TestimonialData = [
  { id: 1, text: "Coffee Beans", img: img1 },
  { id: 2, text: "Red Kidney Beans", img: img2 },
  { id: 3, text: "Coffee Beans", img: img3 },
  { id: 4, text: "Coffee Beans", img: img4 },
  { id: 5, text: "Mustard Seed", img: img5 },
  { id: 6, text: "Sesame Seed", img: img6 },
  { id: 7, text: "Sesame Seed", img: img7 },
  { id: 8, text: "Mung Beans", img: img8 },
  { id: 9, text: "Lupin Beans", img: img9 },
  { id: 10, text: "Jack Fruit Seeds", img: img10 },
  { id: 11, text: "Chick Peas", img: img11 },
  { id: 12, text: "Pigeon Peas", img: img12 },
  { id: 13, text: "Pigeon Peas", img: img13 },
  { id: 14, text: "Mix Display", img: img14 },
  { id: 15, text: "Maize", img: img15 },
  { id: 16, text: "Red Kidney Beans", img: img16 },
  { id: 17, text: "Black Beans", img: img17 },
  { id: 18, text: "Chick Pea", img: img18 },
  { id: 19, text: "Sesame Seed", img: img19 },
  { id: 20, text: "Coffee Beans", img: img20 },
  { id: 21, text: "Sesame Seed", img: img21 },
  { id: 22, text: "Red Kidney Beans", img: img22 },
  { id: 23, text: "Pinto Beans", img: img23 },
  { id: 24, text: "Mung Beans", img: img24 },
  { id: 25, text: "Chick Peas", img: img25 },
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