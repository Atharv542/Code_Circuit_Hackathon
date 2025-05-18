import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, ShieldCheck } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Top Hero Section with Image and Text */}
      <div className="flex flex-col lg:flex-row  items-center px-6 lg:px-24 py-16">
        {/* Left Text Section */}
        <motion.div
          className="max-w-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold  mb-4">
            Travel Confidently with a Language Cheat Sheet
          </h1>

          <p className="text-md text-gray-300 mb-4">
            Choose your travel type and language, and get instant phrase sheets powered by Google Gemini AI.
          </p>

          <p className="text-sm text-gray-400 mb-6">
            Whether you're navigating a bustling street in Rome, closing a deal in Madrid, or facing an emergency while backpacking through the Alps — we've got the phrases you need at your fingertips.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/options")}
            className="px-4 py-2 text-black bg-pink-600  text-lg rounded-lg transition mb-8"
          >
            Generate Cheat Sheet
          </motion.button>

          {/* Key Feature Highlights */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-start space-x-3">
              <Globe className="text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Supports multiple Languages</h3>
                <p className="text-sm text-gray-400">
                  Instantly get cheat sheets in major languages for tourist, business, and emergency needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <ShieldCheck className="text-green-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Safe, Smart Travel</h3>
                <p className="text-sm text-gray-400">
                  Access local emergency phrases and etiquette to stay secure and respected wherever you go.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className=" ml-48 "
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="Travel1.jpg"
            alt="Language travel helper"
            className="w-full max-w-lg rounded-xl shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>

      {/* Feature Cards Section - Placed below full width */}
      <motion.div
        className="w-full px-6 lg:px-24 pb-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10">Why Travelers Love It</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "🧭",
              title: "Custom by Travel Type",
              desc: "Business, backpacking, or emergencies — we tailor it to your journey.",
            },
            {
              icon: "🚀",
              title: "Lightning Fast",
              desc: "Instant cheat sheets powered by Google Gemini AI in under 3 seconds.",
            },
            {
              icon: "🎯",
              title: "Smart & Accurate",
              desc: "Context-aware phrases ensure you’re always saying the right thing.",
            },
            {
              icon: "🗣️",
              title: "Speak It Easily",
              desc: "Includes pronunciation hints so you can speak clearly and confidently.",
          },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;





