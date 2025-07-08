"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ModalScreens from "@/components/ModalScreens";
import styles from "./page.module.scss";
import Image from "next/image";
import "../globals.scss";

export default function Front() {
  const [isModalOpen, setModalOpen] = useState(false);

  const screenshots = [
    { src: "/assets/images/mosters1.png", alt: "Example project 1" },
    { src: "/assets/images/monsters2.png", alt: "Example project 2" },
    {
      src: "/assets/images/MOV to MP4 conversion.mp4",
      alt: "Example project 3",
    },
    { src: "/assets/images/form-brak-mail.png", alt: "Example project 2" },
    { src: "/assets/images/formularz-mail.png", alt: "Example project 2" },

    { src: "/assets/images/formulatz-komunikat.png", alt: "Example project 2" },
    { src: "/assets/images/tip-calculator.png", alt: "Example project 2" },

    { src: "/assets/images/advice-api.png", alt: "Example project 2" },
  ];
  return (
    <main>
      <Navbar />
      <div className="main-div f-end-main-div">
        <div className="place-for-info">
          <div className="f-end-info" style={{ marginTop: "5%" }}>
            <span className="description-text-f-end">
              <h1>💻 Front-end Development</h1>
              In my free time, I dedicate myself to my passion — Front-end
              Development. Choosing this field of study was a deliberate step
              toward becoming a skilled Front-end Developer and deepening my
              knowledge in web technologies. During the summer break between
              semesters, I had the opportunity to work with a mentor, which
              allowed me to further develop my skills and focus on
              self-improvement by doing what I truly enjoy. You can find
              screenshots of some of my projects on the right — both those
              completed independently and in collaboration with my mentor.
              Several of them are also available on my{" "}
              <a
                href="https://github.com/jakubchmielecki1?tab=repositories"
                target="_blank"
                style={{ color: "bisque" }}
              >
                GitHub
              </a>
            </span>
          </div>
        </div>

        <div
          className="f-end-screanshots"
          style={{ marginTop: "5%" }}
          onClick={() => setModalOpen(true)}
        >
          <Image
            src="/assets/images/stock.jpg"
            alt="Startup Stock Photo"
            width={500}
            height={300}
          />
          <div className="click-indicator">
            <span className="arrow"></span>
            <span className="text" style={{ color: "white" }}>
              Click here!
              {/* Ikona */}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ModalScreens
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        images={screenshots}
      />
    </main>
  );
}
