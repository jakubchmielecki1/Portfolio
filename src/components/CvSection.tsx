// components/CvSection.tsx
"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // Jeśli chcesz użyć komponentu Link dla linków

interface CvSectionProps {}

const CvSection: React.FC<CvSectionProps> = () => {
  // Stan do kontrolowania, czy kontener CV jest otwarty
  const [isOpen, setIsOpen] = useState(false);

  // useRef do odniesienia się do elementu DOM (nie zawsze konieczne, ale przydatne dla useEffect)
  // W tym przypadku bardziej dla klarowności, ponieważ setIsOpen jest prostsze
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Użyjemy tego do przechowywania timeoutu

  // Funkcja do pokazywania kontenera
  const showCvContainer = () => {
    // console.log('show');
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Wyczyść poprzedni timeout, jeśli istnieje
    }
    setIsOpen(true);
  };

  // Funkcja do ukrywania kontenera z opóźnieniem
  const hideCvContainer = () => {
    // console.log('hide');
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100); // 100ms opóźnienia
  };

  // SVG, który był w Twoim kodzie, możemy przenieść tutaj
  const CvIconSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#e3e3e3"
      // style={{ pointerEvents: "none" }} // Zwykle nie jest potrzebne w React, jeśli obsługa zdarzeń jest na rodzicu
    >
      <path
        d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"
        // pointer-events="none" // To też zazwyczaj nie jest potrzebne, jeśli svg jest częścią klikalnego diva
      />
    </svg>
  );

  return (
    <div className="cv-wrapper">
      {/* cv-highlight teraz obsługuje zdarzenia myszy i ustawia stan */}
      <div
        className="cv-highlight"
        onMouseEnter={showCvContainer} // Kiedy myszka wchodzi, pokaż
        onMouseLeave={hideCvContainer} // Kiedy myszka wychodzi, ukryj z opóźnieniem
      >
        {CvIconSvg} {/* Wyrenderuj ikonę SVG */}
      </div>

      {/* cv-container teraz warunkowo otrzymuje klasę 'open' */}
      <div
        className={`cv-container ${isOpen ? "open" : ""}`} // Dodaj klasę 'open' jeśli isOpen jest true
        onMouseEnter={showCvContainer} // Kiedy myszka wchodzi w kontener, upewnij się, że jest pokazany
        onMouseLeave={hideCvContainer} // Kiedy myszka wychodzi z kontenera, ukryj z opóźnieniem
      >
        {/* Pamiętaj, że ścieżki do CV powinny zaczynać się od "/" jeśli są w public/assets/cv/ */}
        <Link
          href="/public/assets/PL Jakub Chmielecki A4.pdf"
          target="_blank"
          className="cv-button"
        >
          CV - Polskie
        </Link>
        <Link
          href="/public/assets/ENG Jakub Chmielecki.pdf"
          target="_blank"
          className="cv-button"
        >
          CV - English
        </Link>
      </div>
    </div>
  );
};

export default CvSection;
