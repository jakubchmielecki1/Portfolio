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
        <div className={styles["place-for-nav-modal"]}>
          <h2 style={{ color: "white" }}>My Projects</h2>
          <button onClick={onClose} className={styles["close-btn"]}>
            X
          </button>
        </div>

        <div className={styles["modal-gallery"]}>
          {images.map((item, index) => {
            const isVideo = item.src.toLowerCase().endsWith(".mp4");

            return (
              <div key={index} className={styles["media-item"]}>
                {isVideo ? (
                  <video
                    src={item.src}
                    controls
                    width={400}
                    height={250}
                    style={{ borderRadius: "8px" }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    width={400}
                    height={250}
                    alt={item.alt || `image-${index}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalScreens;
