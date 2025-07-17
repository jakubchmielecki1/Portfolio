"use client";
import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import { useState } from "react";
export default function Cyber() {
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");
  const checkFlag = () => {
    const correctFlag = "CTF{pRTF0l10}";

    if (userInput.trim() === correctFlag) {
      setMessage("✅ Correct flag! Well done!");
      setUserInput("");
    } else {
      setMessage("❌ Incorrect flag. Try again.");
      setUserInput("");
    }
  };
  return (
    <main>
      <Navbar />
      <div className="main-div f-end-main-div">
        <div className="place-for-info">
          <div
            className="f-end-info"
            style={{ transform: "translateX(-250px)", marginTop: "5%" }}
          >
            <span className="description-text-f-end">
              <h1>🔐 Cybersecurity</h1>
              Although I don&apos;t yet have professional experience in
              cybersecurity, I am actively learning about the field, focusing on
              web application vulnerabilities, ethical hacking, and secure
              software design. I&apos;m particularly interested in topics like
              OWASP Top 10, secure authentication practices, and real-time
              attack monitoring. Below, I&apos;ve left a little something for
              those who appreciate a good flag hunt – sometimes, the answer is
              in the source.
              <div style={{ display: "none" }}>{`CTF{pRTF0l10}`}</div>
            </span>
          </div>
          <div className={styles["place-for-friendly-hacking"]}>
            <div className={styles["demo-cyber"]}>
              <h3 style={{ color: "white", marginBottom: "10px" }}>Flag</h3>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className={styles["user-input"]}
                placeholder="CTF{...}"
              />
              <button className={styles["post-button"]} onClick={checkFlag}>
                Submit
              </button>

              <p
                style={{
                  marginTop: "1rem",
                  fontWeight: "bold",
                  opacity: message ? 1 : 0, // Zmieniaj widoczność
                  height: message ? "auto" : "1rem", // Nadaj stałą wysokość lub 'auto' gdy widoczne
                  transition:
                    "opacity 0.3s ease-in-out, height 0.3s ease-in-out", // Płynne przejście (opcjonalnie)
                  overflow: "hidden", // Zapobiega widoczności zawartości gdy wysokość jest 0
                }}
              >
                {message || " "}{" "}
                {/* Zostaw spację, aby element zawsze istniał */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
