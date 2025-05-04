import React, { useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
const SubjectItem = ({ icon, title, classes }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-4 border-b border-gray-300">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <img src={icon} alt="icon" className="w-8 h-8" />
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <span className="text-xl">{isOpen ? <RiArrowDropUpLine className="w-20 h-14
        " /> : <RiArrowDropDownLine className="w-20 h-14"/>}</span>
      </div>

      {isOpen && (
        <div className="grid grid-cols-2 gap-y-1 mt-3 ml-11 text-black">
          {classes.map((cls, i) => (
            <p key={i} className="cursor-pointer hover:text-blue-600 hover:underline">{cls}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const AllSubjects = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gray-100 p-6 rounded-lg shadow">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Math */}
        <div>
          <SubjectItem
            icon="https://cdn-icons-png.flaticon.com/512/726/726448.png"
            title="Math (NCERT)"
            classes={[
              "Class 1", "Class 7", "Class 2", "Class 8", "Class 3", "Class 9",
              "Class 4", "Class 10", "Class 5", "Class 11", "Class 6 (2024)", "Class 12"
            ]}
          />
          <SubjectItem
            icon="https://cdn-icons-png.flaticon.com/512/726/726448.png"
            title="Math (Bridge)"
            classes={["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"]}
          />
          <SubjectItem
            icon="https://cdn-icons-png.flaticon.com/512/726/726448.png"
            title="Math (Telangana)"
            classes={["Class 7", "Class 8", "Class 9", "Class 10", "Class 12"]}
          />
          <SubjectItem
              icon="https://cdn-icons-png.flaticon.com/512/726/726448.png"
            title="Math (Maharashtra)"
            classes={["Class 1", "Class 6", "Class 2", "Class 7", "Class 3", "Class 8",
              "Class 4", "Class 9", "Class 5", "Class 10 "]}
          />
          <SubjectItem 
                  icon="https://cdn-icons-png.flaticon.com/512/726/726448.png"
            title="Science (NCERT)"
            classes={["NCERT (Hinglish)", "Class 11 Chemistry", "Class 6", "Class 11 Biology", "Class 7", "Class 12 Physics",
              "Class 8", "Class 12 Chemistry", "Class 9", "Class 12 Biology","Class 10","Essentials (9-12)","Class 11 Physics"]}
          />
        </div>

        {/* Right Column: Science */}
        <div>
          <SubjectItem
            icon="https://cdn-icons-png.flaticon.com/512/3899/3899618.png"
            title="Science (Bridge)"
            classes={[
              "Class 7", "Class 8", "Class 9", "Class 10", "Class 11 Physics",
              "Class 11 Chemistry", "Class 11 Biology",
              "Class 12 Physics", "Class 12 Chemistry", "Class 12 Biology"
            ]}
          />
          <SubjectItem
            icon="https://cdn-icons-png.flaticon.com/512/3899/3899618.png"
            title="Science (Telangana)"
            classes={[
              "Class 7", "Class 8 Physical Science", "Class 8 Biology",
              "Class 9 Physical Science", "Class 9 Biology", "Class 10 Physical Science",
              "Class 10 Biology", "Class 12 Physics", "Class 12 Chemistry",
              "Class 12 Botany", "Class 12 Zoology"
            ]}
          />
          <SubjectItem
            icon="https://cdn-icons-png.flaticon.com/512/726/726448.png"
            title="All boards"
            classes={["Punjab", "Assam","Uttar Pradesh","Odisha","Maharashtra"]}
          />
          <SubjectItem
             icon="https://cdn-icons-png.flaticon.com/512/726/726448.png"
            title="Explore More"
            classes={["Digital SAT", "Finance","Grammar","Personal Finance","Intro to CS-Python","Financial Literacy","Computer Programming","Social Media Literacy","Computer Science","AI for Eduction","World History","Wireless Philosophy","Macroeconomics","Learn to Larn","Microeconomics",""]}
          />
             <SubjectItem
            icon="https://cdn-icons-png.flaticon.com/512/726/726448.png"
            title="Khan for Educators"
            classes={[
  <>
    <span className="hover:text-blue-600">Khan for Educators<br/>(Beginner)</span>
   
    
 
  </>,
  <>

    <span className="hover:text-blue-600">Khan for Educators<br/>(Mentors)</span>
    
   
  </>,
  <>
    <span className="hover:text-blue-600">Khan for Educators<br/>(Advanced)</span>


  </>
]}
          />
        </div>
      </div>
    </div>
  );
};

export default AllSubjects;


