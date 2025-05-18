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
    <div className="p-6 bg-gray-900 min-h-screen relative">
      {/* Top-right Download Button */}
      <div className="absolute right-6 mr-20 top-6">
        <button onClick={downloadPDF} className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
          Download as PDF
        </button>
      </div>

      {/* Sheet Content */}
      <div id="cheat-sheet-content">
        <h1 className="text-3xl font-bold text-center text-white mb-4">Cheat Sheet</h1>
        <p className="text-center text-lg mb-6 text-white">
          Language: <b className="text-pink-600">{cheatSheet.language}</b> | Travel Type:{" "}
          <b className="text-pink-600">{cheatSheet.travel_type}</b> | Proficiency Level:{" "}
          <b className="text-pink-600">{cheatSheet.level}</b>
        </p>

        {Object.entries(phrases).map(([sectionTitle, items]) => (
          <div key={sectionTitle} className="mb-8">
            <h2 className="text-2xl text-pink-600 font-semibold mb-3">{sectionTitle}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border px-4 py-2 text-pink-600 text-left">Phrase</th>
                    <th className="border px-4 py-2 text-pink-600">Translation (English)</th>
                    <th className="border px-4 py-2 text-pink-600">Pronunciation</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr key={idx} className="bg-gray-700">
                      <td className="border px-4 py-2 text-white flex items-center gap-2">
                        <button
                          onClick={() => speak(item[formData.language.toLowerCase()] || "—")}
                          title="Listen"
                          className="hover:text-pink-500"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                        {item[formData.language.toLowerCase()] || "—"}
                      </td>
                      <td className="border px-4 py-2 text-white text-center">{item.english}</td>
                      <td className="border px-4 py-2 text-white text-center">{item.pronunciation}</td>
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






