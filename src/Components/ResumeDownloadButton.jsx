import React from "react";
import { saveAs } from "file-saver";

const ResumeDownloadButton = () => {
  const downloadResume = () => {
    const resumePath = process.env.REACT_APP_RESUME_PATH;

    console.log("resumePath:", resumePath);

    saveAs(resumePath, "Rakshith.pdf");
  };

  return (
    <div className="download-btn-container">
      <button onClick={downloadResume} className="download-btn">
        Download CV
      </button>
    </div>
  );
};

export default ResumeDownloadButton;
