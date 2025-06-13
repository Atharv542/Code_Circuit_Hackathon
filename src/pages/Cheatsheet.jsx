import React, { useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import { Volume2 } from "lucide-react";

const languageCodeMap = {
  Spanish: "es-ES",
  French: "fr-FR",
  Japanese: "ja-JP",
};

const Cheatsheet = () => {
  const [latestSheet, setLatestSheet] = useState(null);

  useEffect(() => {
    const sheets = JSON.parse(localStorage.getItem("cheatSheets")) || [];
    if (sheets.length > 0) {
      setLatestSheet(sheets[sheets.length - 1]);
    }
  }, []);

  if (!latestSheet) return <p className="text-white text-center">No cheat sheet found.</p>;

  const { formData, cheatSheet } = latestSheet;
  const phrases = cheatSheet?.cheat_sheet?.phrases;
  const culturalTips = cheatSheet?.cheat_sheet?.cultural_tips || "";

  if (!phrases) {
    return <p className="text-red-500 text-center">Error: Cheat sheet is not in the expected format.</p>;
  }

 const speak = (text) => {
  
  const langKey = formData.language.toLowerCase();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languageCodeMap[langKey] || "en-US";
  window.speechSynthesis.speak(utterance);
};


  // 📄 Download as PDF
  const downloadPDF = () => {
    const element = document.getElementById("cheat-sheet-content");
    const opt = {
      margin: 0.5,
      filename: `${cheatSheet.language}_CheatSheet.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
     <div className="p-4 sm:p-6 bg-gray-900 min-h-screen">
      {/* Top - Heading + Download Button */}
      <div className="flex flex-col md:justify-center md:gap-20 sm:flex-row sm:justify-between  sm:items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left mb-4 sm:mb-0">
          Cheat Sheet
        </h1>
        <div className="flex justify-center sm:justify-end">
          <button
            onClick={downloadPDF}
            className="bg-pink-600 text-white px-4 py-2 text-sm sm:text-base rounded hover:bg-pink-700"
          >
            Download as PDF
          </button>
        </div>
      </div>

      {/* Sheet Info */}
      <p className="text-center text-base sm:text-lg mb-6 text-white px-2">
        Language: <b className="text-pink-600">{cheatSheet.language}</b> | Travel Type:{" "}
        <b className="text-pink-600">{cheatSheet.travel_type}</b> | Proficiency Level:{" "}
        <b className="text-pink-600">{cheatSheet.level}</b>
      </p>

      {/* Cheat Sheet Content */}
      <div id="cheat-sheet-content">
        {Object.entries(phrases).map(([sectionTitle, items]) => (
          <div key={sectionTitle} className="mb-8 px-1 sm:px-0">
            <h2 className="text-xl sm:text-2xl text-pink-600 font-semibold mb-3">{sectionTitle}</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border rounded">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border px-3 sm:px-4 py-2 text-pink-600 text-left text-sm sm:text-base">
                      Phrase
                    </th>
                    <th className="border px-3 sm:px-4 py-2 text-pink-600 text-center text-sm sm:text-base">
                      Translation (English)
                    </th>
                    <th className="border px-3 sm:px-4 py-2 text-pink-600 text-center text-sm sm:text-base">
                      Pronunciation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr key={idx} className="bg-gray-700">
                      <td className="border px-3 sm:px-4 py-2 text-white flex items-center gap-2 text-sm sm:text-base">
                        <button
                          onClick={() => speak(item[formData.language.toLowerCase()] || "—")}
                          title="Listen"
                          className="hover:text-pink-500"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                        {item[formData.language.toLowerCase()] || "—"}
                      </td>
                      <td className="border px-3 sm:px-4 py-2 text-white text-center text-sm sm:text-base">
                        {item.english}
                      </td>
                      <td className="border px-3 sm:px-4 py-2 text-white text-center text-sm sm:text-base">
                        {item.pronunciation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cheatsheet;






