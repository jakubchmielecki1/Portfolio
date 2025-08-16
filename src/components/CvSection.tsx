"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const CvSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showCvContainer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const hideCvContainer = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const toggleCvContainer = () => {
    setIsOpen((prev) => !prev);
  };

  const CvIconSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e3e3e3"
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
    </svg>
  );

  return (
    <div className="cv-wrapper">
      <div
        className="cv-highlight"
        onMouseEnter={showCvContainer}
        onMouseLeave={hideCvContainer}
        onClick={toggleCvContainer}
      >
        {CvIconSvg}
      </div>

      <div
        className={`cv-container ${isOpen ? "open" : ""}`}
        onMouseEnter={showCvContainer}
        onMouseLeave={hideCvContainer}
      >
        <button className="cv-btn">
          <Link href="/assets/PL Jakub Chmielecki A4.pdf" target="_blank">
            CV - Polskie
          </Link>
        </button>
        <button className="cv-btn">
          <Link href="/assets/ENG Jakub Chmielecki.pdf" target="_blank">
            CV - English
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CvSection;
