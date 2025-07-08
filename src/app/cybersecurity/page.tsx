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
              Although I don’t yet have professional experience in
              cybersecurity, I am actively learning about the field, focusing on
              web application vulnerabilities, ethical hacking, and secure
              software design. I’m particularly interested in topics like OWASP
              Top 10, secure authentication practices, and real-time attack
              monitoring. Below, I've left a little something for those who
              appreciate a good flag hunt – sometimes, the answer is in the
              source.
              {/* CTF{pRTF0l10} */}
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

              {message && (
                <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
