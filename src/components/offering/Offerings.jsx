import { useState } from "react";
import Assessment from "./Assessment";
import Learning from "./Learning";
import "./Offerings.css";
import Platform from "./Platforms";

const Offerings = () => {
  const [active, setActive] = useState("learning");

  return (
    <section className="offerings">
      <h2 className="title">Our Offerings</h2>

      <div className="offerings-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div
            className={`side-item ${active === "learning" ? "active" : ""}`}
            onClick={() => setActive("learning")}
          >
            📘 <span>Learning</span>
          </div>

          <div
            className={`side-item ${active === "assessment" ? "active" : ""}`}
            onClick={() => setActive("assessment")}
          >
            📝 <span>Assessment</span>
          </div>

          <div
            className={`side-item ${active === "platform" ? "active" : ""}`}
            onClick={() => setActive("platform")}
          >
            ☁️ <span>Platform</span>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          {active === "learning" && <Learning />}
          {active === "assessment" && <Assessment />}
          {active === "platform" && <Platform />}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
