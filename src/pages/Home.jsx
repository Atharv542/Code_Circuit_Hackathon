import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, ShieldCheck } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center px-6 lg:px-24 py-16">
        {/* Left Text Section */}
        <motion.div
          className="max-w-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mb-4">
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
            className="px-4 py-2 text-black bg-pink-600 text-lg rounded-lg transition mb-8"
          >
            Generate Cheat Sheet
          </motion.button>

          {/* Key Features */}
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
          className="ml-0 lg:ml-48 mt-10 lg:mt-0"
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

      {/* Why Travelers Love It */}
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
              icon: "📄",
              title: "Download as PDF",
              desc: "Save your cheat sheet for offline use — perfect for no-internet zones.",
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

      {/* Flowchart: How It Works */}
      <motion.div
        className="w-full px-6 lg:px-24 pb-24 flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>

        <div className="relative flex flex-col  items-center">
          {[
            {
              step: "1",
              title: "Choose Your Travel Style",
              desc: "Select from Business, Tourist, Backpacking, or Emergency travel types.",
            },
            {
              step: "2",
              title: "Pick a Language",
              desc: "Choose a language like Spanish, French, and more.",
            },
            {
              step: "3",
              title: "AI Generates Your Sheet",
              desc: "Google Gemini creates a customized cheat sheet in seconds.",
            },
            {
              step: "4",
              title: "Download or Practice",
              desc: "Instantly download the sheet or use it on your phone with ease.",
            },
          ].map((item, i, arr) => (
            <motion.div
              key={i}
              className="relative z-10 bg-gray-800 p-6 mb-10 rounded-xl w-[90%] max-w-md shadow-md border-2 border-pink-600 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl mb-2 text-white">{item.step}</div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>

              {/* Vertical connector line */}
              {i < arr.length - 1 && (
                <div className="absolute left-1/2 top-full transform -translate-x-1/2 h-10 w-1 bg-pink-500"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;







