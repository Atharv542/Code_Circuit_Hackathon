import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Child() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col md:flex-row min-h-screen px-8 md:px-36 py-10 gap-20 items-center bg-white">
      
      {/* Left: Image with Slide from Left Animation */}
      <motion.div
        className="md:w-1/2 w-full py-10 mt-5"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="ss15.png"
          alt="Child Visual"
          className="w-full h-auto"
        />
      </motion.div>

      {/* Right: Text & Button with Slide from Right Animation */}
      <motion.div
        className="md:w-1/2 w-full mt-10 md:mt-0 text-center md:text-left"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img src="ss16.png" alt="Inspiring Text" className="mx-auto md:mx-0" />
        <button
          onClick={() => navigate('/go-back')}
          className="px-4 py-4 w-60 font-bold text-lg cursor-pointer ml-0 md:ml-6 mt-5 bg-blue-600 text-white rounded hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition"
        >
          Give them the chance
        </button>
      </motion.div>

    </section>
  );
}

export default Child;
