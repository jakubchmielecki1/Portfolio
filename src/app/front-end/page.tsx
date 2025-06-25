import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import Image from "next/image";
import "../globals.scss";
export default function Front() {
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
              Several of them are also available on my
              <a
                href="https://github.com/jakubchmielecki1?tab=repositories"
                target="_blank"
                style={{ color: "bisque" }}
              >
                GitHub
              </a>
              profile.
            </span>
          </div>
        </div>
        <div className="f-end-screanshots" style={{ marginTop: "5%" }}>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4.47 4.47a.75.75 0 0 0 0 1.06l10.625 10.625L12.25 19c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75l-2.845 2.845L5.53 4.47a.75.75 0 0 0-1.06 0"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
