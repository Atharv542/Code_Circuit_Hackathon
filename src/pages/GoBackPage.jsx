import React from 'react';
import { useNavigate } from 'react-router-dom';


const GoBackPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="text-center mb-8">
        <img
          src='ss20.jpg'
          alt="Cartoon Image"
          className="w-xl ml-5 h-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
          Oops! Something went wrong!
        </h1>
        <p className="text-lg mt-4">You can go back home and try again.</p>
      </div>
      <button
        onClick={handleGoBack}
        className="px-6 py-3 hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-lg transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default GoBackPage;
