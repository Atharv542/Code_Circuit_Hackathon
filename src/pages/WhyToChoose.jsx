import React from 'react';
import { motion } from 'framer-motion';

function WhyToChoose() {
  const sections = [
    {
      title: "Personalized learning",
      description:
        "Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.",
      image: "ss2.png",
    },
    {
      title: "Trusted content",
      description:
        "Created by experts, Khan Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, SAT®, and more. It’s all free for learners and teachers.",
      image: "ss3.png",
    },
    {
      title: "Tools to empower teachers",
      description:
        "With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.",
      image: "ss4.png",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="text-center  px-4 py-12 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-5xl font-semibold font-lato mb-10"
      >
        Why Khan Academy Works
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 max-w-6xl mx-auto px-12"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col items-center text-center"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-30 h-20 mb-4"
            />
            <h2 className="text-2xl mb-2">{section.title}</h2>
            <p className="text-black text-lg">{section.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default WhyToChoose;
