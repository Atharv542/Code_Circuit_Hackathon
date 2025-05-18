import React from "react";

const AirplaneLoader = ({ progress }) => {
  return (
    <div
      style={{
        position: "fixed", // overlay over the entire page
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.4)", // faded black background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // on top of everything
        flexDirection: "column", // to stack text above progress bar
      }}
    >
      <div
        style={{
          marginBottom: "", // spacing above the progress bar
          fontSize: "20px",
          fontWeight: "bold",
          color: "#DB2777",
          textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Processing...
      </div>

      <div
        style={{
          width: "80%", // progress bar container width (adjust as needed)
          maxWidth: "400px",
          height: "30px",
          backgroundColor: "#e0e0e0",
          borderRadius: "10px",
          overflow: "hidden",
          position: "relative",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          color: "#333",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#DB2777",
            borderRadius: "10px",
            transition: "width 0.3s ease-in-out",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
            pointerEvents: "none",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default AirplaneLoader;


