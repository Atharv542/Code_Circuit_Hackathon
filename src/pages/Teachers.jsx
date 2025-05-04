import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TeacherSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col md:flex-row  px-10 md:px-36 py-10 gap-20">
      
  
      <motion.div
        className="md:w-1/2 py-10 w-full"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="ss5.png"
          alt="Teachers"
          className="w-full h-auto"
        />
      </motion.div>

   
      <motion.div
        className="md:w-1/2 w-full text-left space-y-4"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-gray-500">TEACHERS</h2>
        <blockquote className="text-5xl leading-[55px] text-black">
          “I’m finally able to truly<br />
          <span className="underline decoration-[#BFE7DE] ml-3">differentiate</span> my<br />
          <span className="ml-3">classroom.</span> This has<br />
          <span className="ml-3">been</span> priceless for my<br />
          <span className="ml-3">students’</span> engagement.”
        </blockquote>
        <p className="text-[13px] text-gray-500 mt-5">
          UDAYA LAKSHMI PALAPALA / Middle school Coordinator / Hyderabad, Telangana
        </p>
        <p className="text-black text-lg">
          We empower teachers to support their entire classroom.<br />
          90% of US teachers who have used Khan Academy have <br />
          found us effective.
        </p>
        <button
          onClick={() => navigate('/go-back')}
          className="px-6 py-4 rounded-md bg-blue-600 text-white font-bold text-xl hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition cursor-pointer"
        >
          Teachers, start here
        </button>
      </motion.div>
    </section>
  );
};

export default TeacherSection;

