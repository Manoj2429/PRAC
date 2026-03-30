import bgImage from "../../assets/About-bg.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>About Us</h1>
          <p className="para">
            AIVQT (All India Virtual Qualifier Test) is a national-level online
            assessment that helps students from any UG / PG program, from any
            stream, showcase their skills and connect with top recruiters across
            India. Whether you're from Engineering, Management, Arts, or Commerce
            – AIVQT bridges the gap between your potential and placement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
