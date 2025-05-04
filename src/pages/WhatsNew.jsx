import React,{ forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const WhatsNew =  forwardRef((props, ref) => {
    const navigate= useNavigate();
    const clickHandler=()=>{
        navigate('/notes')
    }
  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto py-10 my-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-black  mb-10">What's New 🎉</h1>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full max-w-2xl mx-auto"
      >
        <SwiperSlide className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-xl px-6 py-8 text-black transition duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-3 text-blue-600">OCR Note Upload</h3>
          <p className="text-sm md:text-base">
            Simply upload your handwritten or printed notes — no formatting needed. Our advanced OCR (Optical Character Recognition)
            technology extracts content accurately and prepares it for smart processing.
          </p>
          <p className="text-sm md:text-base mt-2">
            This removes the hassle of typing and helps you digitize your study material in seconds.
          </p>
        </SwiperSlide>

        <SwiperSlide className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-xl px-6 py-8 text-black transition duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-3 text-blue-600">Auto Quiz Generation</h3>
          <p className="text-sm md:text-base">
            Our intelligent system analyzes your notes and automatically generates quizzes tailored to your content.
            These quizzes include multiple-choice, fill-in-the-blanks, and short answer questions.
          </p>
          <p className="text-sm md:text-base mt-2">
            It’s a great way to reinforce your knowledge without manually creating test questions.
          </p>
        </SwiperSlide>

        <SwiperSlide className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl rounded-xl px-6 py-8 text-black transition duration-300 ease-in-out">
          <h3 className="text-2xl font-bold mb-3 text-blue-600">Smart Flashcards</h3>
          <p className="text-sm md:text-base">
            Instantly turn key definitions, facts, and formulas from your notes into interactive flashcards.
            Ideal for quick reviews and spaced repetition learning.
          </p>
          <p className="text-sm md:text-base mt-2">
            Stay organized and study smarter with automatically categorized flashcards you can review anytime.
          </p>
        </SwiperSlide>
      </Swiper>

      {/* CTA Button */}
      <button className="px-6 py-2 mt-10 w-60 cursor-pointer bg-blue-600 text-white rounded hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition" onClick={clickHandler}>
          Get Started
        
      </button>
    </div>
  );
});

export default WhatsNew;



