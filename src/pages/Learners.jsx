import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Learners() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col  md:flex-row items-center justify-between px-8 md:px-28 gap-8 bg-white ">
      

      <motion.div
        className="md:w-1/2 w-full space-y-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img src="ss6.png" alt="Learner Visual" className="w-full h-auto " />
        <div className='mb-5'>
        <button
          onClick={() => navigate('/go-back')}
          className="px-6  py-4 ml-14 rounded-md bg-blue-600 text-white font-bold text-xl hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition cursor-pointer"
        >
          Learners, start here
        </button>
        </div>
       
      </motion.div>

      <motion.div
        className="md:w-1/2 w-full"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="ss7.png"
          alt="Learning Illustration"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}

export default Learners;
