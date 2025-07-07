"use client";
import React from "react";
import Image from "next/image";
import styles from "./ModalScreens.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt?: string }[];
};

const ModalScreens: React.FC<ModalProps> = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ color: "white" }}>My Projects</h2>

        <div className={styles["modal-gallery"]}>
          {images.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              width={400}
              height={250}
              alt={img.alt || `image-${index}`}
            />
          ))}
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalScreens;
