import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const navigate = useNavigate();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const visited = sessionStorage.getItem('home-animated');
    if (!visited) {
      setShouldAnimate(true);
      sessionStorage.setItem('home-animated', 'true');
    }
  }, []);

  const animationProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const Content = (
    <div className="py-4 flex items-center px-4 md:px-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <img
            src="SS1.png"
            alt="Learning"
            className="w-full h-auto object-contain"
          />
        </div>

      
        <div className="w-full md:w-1/2 text-center mt-10 md:text-left">
          <h1 className="text-3xl font-bold text-[#212422] mb-4">
            For every student,<br />
            every classroom.<br />
            <span className='underline decoration-[#BFE7DE]'>Real results.</span>
          </h1>
          <p className="text-gray-700 text-md mb-6">
            We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
          </p>
          <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-start">
            {['Learners', 'Teachers', 'Parents'].map(label => (
              <button
                key={label}
                onClick={() => navigate('/go-back')}
                className="px-6 py-2 w-60 cursor-pointer bg-blue-600 text-white rounded hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return shouldAnimate ? <motion.div {...animationProps}>{Content}</motion.div> : Content;
}

export default Home;
