import { ChatSession } from "@google/generative-ai";
import React, { useRef, useState } from "react";
import { chatSession } from "../service/AiModal";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AirplaneLoader from "./Animation";
const SelectTravelTypeOptions = [
  {
    title: "Business",
    desc: "Professional trips with tight schedules",
    icon: "💼",
  },
  {
    title: "Tourist",
    desc: "Relaxed vacation with popular attractions",
    icon: "🗺️",
  },
  {
    title: "Backpacking",
    desc: "Budget travel with adventure",
    icon: "🎒",
  },
];

const languages = [
  {
    title: "Italian",
    icon: "🍕",
    desc: "Useful for navigating Japan's cities, transport, and etiquette.",
  },
  {
    title: "Spanish",
    icon: "🌎",
    desc: "Spoken across Latin America and Spain, perfect for travel & culture.",
  },
  {
    title: "French",
    icon: "🗼",
    desc: "Widely spoken in Europe and Africa; great for dining & interaction.",
  },
];

const proficiencyLevels = [
  {
    title: "Beginner",
    icon: "🍼",
    desc: "Simple and essential phrases for first-time learners or travelers.",
    value: "beginner",
  },
  {
    title: "Intermediate",
    icon: "📘",
    desc: "More detailed phrases for users with some language experience.",
    value: "intermediate",
  },
  {
    title: "Advanced",
    icon: "🧠",
    desc: "Complex and nuanced phrases for confident speakers.",
    value: "advanced",
  },
];


const CheatSheetGenerator = () => {
  const [formData, setFormData] = useState({
    travelType: "",
    language: "",
    level: "",
  });
  const navigate= useNavigate();
    const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
    const sound = useRef(null);
    const sound2 = useRef(null);


  const handleSelect = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    sound.current.play();
  };

 const generateCheatSheet = async () => {
  const { travelType, language, level } = formData;

  if (!travelType || !language || !level) {
    toast.error("Please select travel type, language, and level.");
    return;
  }

  setLoading(true);
  setProgress(0);

  // Animate progress bar (AirplaneLoader) until API returns or error
  const intervalDuration = 85; // ms
  const increment = 1; // % increment

  const intervalId = setInterval(() => {
    sound2.current.play();
    setProgress((prev) => {
      if (prev >=100) {
        clearInterval(intervalId);
        return 100;
      }
      return prev + increment;
      
    });
  }, intervalDuration);

  toast.success(`Cheat sheet for ${language}  is generating!`);

  const AI_PROMPT = `
You are a travel language expert.

Generate a detailed travel phrase cheat sheet for a person going on a "${travelType}" trip.
The person needs help communicating in "${language}".

The cheat sheet should be according to "${level}" level  (e.g., beginner, intermediate, or advanced).

✅ Include the following sections:
1. Common greetings
2. Asking for directions
3. Ordering food / Shopping
4. Emergency phrases
5. Cultural tips (1-2 lines)

✅ Format requirements:
- Return JSON object only, no explanations or additional text.
- Structure:
{
  "language": "${language}",
  "travel_type":"${travelType}",
  "level": "${level}",
  "cheat_sheet": {
    "greeting": "<greeting phrase>",
    "phrases": {
      "Common greetings": [
        {
          "english": "<English phrase>",
          "${language.toLowerCase()}": "<translated phrase>",
          "pronunciation": "<phonetic guide>"
        }
      ],
      "Asking for directions": [
        {
          "english": "...",
          "${language.toLowerCase()}": "...",
          "pronunciation": "..."
        }
      ],
      "Ordering food / Shopping": [ ... ],
      "Emergency phrases": [ ... ]
    },
    "cultural_tips": "<short cultural tips>"
  }
}
`;

  try {
    const result = await chatSession.sendMessage(AI_PROMPT);
    const cheatSheetText = await result?.response?.text();

    clearInterval(intervalId);
    setProgress(100);

    if (cheatSheetText) {
      let parsedCheatSheet;
      try {
        parsedCheatSheet = JSON.parse(cheatSheetText);
      } catch (e) {
        toast.error("Failed to parse cheat sheet. Try again.");
        console.error("JSON parse error:", e);
        setLoading(false);
        setProgress(0);
        return;
      }

      // Save to local storage
      const existingSheets = JSON.parse(localStorage.getItem("cheatSheets")) || [];
      const updatedSheets = [...existingSheets, { formData, cheatSheet: parsedCheatSheet }];
      localStorage.setItem("cheatSheets", JSON.stringify(updatedSheets));
      console.log("Saved cheat sheet:", parsedCheatSheet);

      // Navigate to view page
      navigate("/view-sheet");
    } else {
      toast.error("Failed to generate cheat sheet.");
      setLoading(false);
      setProgress(0);
    }
  } catch (error) {
    clearInterval(interval);
    setProgress(0);
    setLoading(false);
    console.error("Error generating cheat sheet:", error);
    toast.error("An error occurred while generating the cheat sheet.");
  }
};





  return (
<div className="bg-gray-900 text-white min-h-screen flex flex-col">
  <audio ref={sound} src="sound.wav" preload="auto" />
  <audio ref={sound2} src="sound2.wav" preload="auto" />

  <div className="px-4 sm:px-6 md:px-20 py-6 flex-grow overflow-auto">
    <h2 className="text-2xl sm:text-3xl text-center font-bold lg:px-36">
      Generate Your Personalized Travel Language Cheat Sheet 🌍
    </h2>
    <p className="mt-3 text-gray-400 text-sm sm:text-base text-center lg:px-36">
      Choose your travel type and language — LingoTrip will give you a ready-to-use phrase sheet powered by Google Gemini.
    </p>

    <div className="mt-6 flex flex-col gap-6">
      {/* Travel Type */}
      <div className="px-4 lg:px-36">
        <h2 className="font-medium text-lg sm:text-xl italic my-2 text-center lg:text-left lg:px-24">
          What is your travel type?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-24">
          {SelectTravelTypeOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect("travelType", item.title)}
              className={`p-4 cursor-pointer rounded-lg text-center transition-all duration-200 ${
                formData.travelType === item.title
                  ? "border-[3px] border-pink-600 shadow-md"
                  : "border-[3px] border-gray-300 hover:shadow-md"
              }`}
            >
              <h2 className="text-2xl">{item.icon}</h2>
              <h2 className="font-bold text-base sm:text-lg">{item.title}</h2>
              <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="px-4 lg:px-36">
        <h2 className="font-medium text-lg sm:text-xl italic my-2 text-center lg:text-left lg:px-24">
          Which language do you want to speak?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-24">
          {languages.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect("language", item.title)}
              className={`p-4 cursor-pointer rounded-lg text-center transition-all duration-200 ${
                formData.language === item.title
                  ? "border-[3px] border-pink-600 shadow-md"
                  : "border-[3px] border-gray-300 hover:shadow-md"
              }`}
            >
              <h2 className="text-3xl">{item.icon}</h2>
              <h2 className="font-bold text-base sm:text-lg">{item.title}</h2>
              <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proficiency */}
      <div className="px-4 lg:px-36">
        <h2 className="font-medium text-lg sm:text-xl italic my-2 text-center lg:text-left lg:px-24">
          What is your proficiency level?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-24">
          {proficiencyLevels.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect("level", item.value)}
              className={`p-4 cursor-pointer rounded-lg text-center transition-all duration-200 ${
                formData.level === item.value
                  ? "border-[3px] border-pink-600 shadow-md"
                  : "border-[3px] border-gray-300 hover:shadow-md"
              }`}
            >
              <h2 className="text-2xl">{item.icon}</h2>
              <h2 className="font-bold text-base sm:text-lg">{item.title}</h2>
              <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center lg:justify-end lg:mx-40 mt-4 mb-2">
        <button
          onClick={generateCheatSheet}
          className="text-white px-6 py-2 border-2 border-pink-600 rounded-lg font-semibold shadow-md hover:bg-pink-600 hover:text-black transition-all"
        >
          Generate Cheat Sheet
        </button>
      </div>
    </div>
  </div>

  {loading && <AirplaneLoader progress={progress} />}
</div>

  );
};

export default CheatSheetGenerator;



