"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ModalScreens from "@/components/ModalScreens";
import Image from "next/image";
import "../globals.scss";
export default function Project() {
  const [isModalOpen, setModalOpen] = useState(false);

  const screenshots = [
    { src: "/assets/images/project-landing.mp4", alt: "Example project 1" },
    { src: "/assets/images/project1.png", alt: "Example project 2" },
    {
      src: "/assets/images/project2.png",
      alt: "Example project 3",
    },
    { src: "/assets/images/project3.png", alt: "Example project 2" },
    { src: "/assets/images/project4.png", alt: "Example project 2" },

    { src: "/assets/images/project5.png", alt: "Example project 2" },
    { src: "/assets/images/project6.png", alt: "Example project 2" },

    { src: "/assets/images/project7.png", alt: "Example project 2" },
  ];
  return (
    <main>
      <Navbar />
      <div className="main-div bachelor-main-div">
        <div className="bachelor-for-info">
          <div className="f-end-info" style={{ marginTop: "5%" }}>
            <span className="description-text-f-end">
              <h1>🛠️ Engineering Project</h1>
              As part of my engineering thesis, I developed a dedicated CMS for
              managing hearing prosthetics clinics. The system was built in
              collaboration with a practicing clinic to meet real-world needs —
              from patient intake to hearing aid fitting and final sale. It
              includes modules for client management, inventory, medical
              partners, discounts, and scheduling. The app was built with
              Next.js, TypeScript, and Tailwind CSS. It’s available at
              sluchapp.com — public users can view the landing page, while full
              access is reserved for verified clinic staff approved by
              administrators.
            </span>
          </div>
        </div>

        <div
          className="f-end-screanshots"
          style={{ marginTop: "5%" }}
          onClick={() => setModalOpen(true)}
        >
          <Image
            src="/assets/images/projekt.jpg"
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
