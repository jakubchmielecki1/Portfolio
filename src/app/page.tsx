import "../app/globals.scss";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CvSection from "@/components/CvSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="main-div">
        <div className="info-div">
          <span>Hello, my name is</span>
          <h1>Jakub Chmielecki</h1>
          <span>And I am </span>
          <span
            style={{ color: "#648Bea", fontWeight: "bold", fontSize: "25px" }}
          >
            IT Engineer
          </span>
          .
          <CvSection />
        </div>

        <div className="bitmoji-container">
          <Image
            src="/assets/images/bitmoji.png"
            alt="Bitmoji"
            height={450}
            width={450}
          />
        </div>
      </div>
    </main>
  );
}
