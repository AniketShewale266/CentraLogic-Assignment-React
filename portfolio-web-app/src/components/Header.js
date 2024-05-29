import React, {useState} from "react";
import { useEffect } from "react";
import img1 from "../images/img2.png";

function Header() {
  const roles = ["Frontend Web Developer", "Coder", "Designer", "Blogger"];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="header">
        <div className="shortInfo">
          <p className="heading1">I'm</p>
          <h2>Aniket Shewale</h2>
          <h1>{roles[currentRole]}</h1>
          <p className="myParagraph">
            I am a passionate and dedicated frontend developer with a strong
            interest in building beautiful and functional web applications.
          </p>

          <div className="myButtons">
            <div className="btnDownload">
              <a href="./resume/Aniket Shewale.pdf" download className="button">
                Download Resume
              </a>
            </div>
            <div className="btnDownload">
              <a href="https://www.linkedin.com/in/aniket-shewale-193118233/" className="button">
                Linkedin
              </a>
            </div>
          </div>
        </div>

        <div className="imageBox">
          <img src={img1}></img>
        </div>
      </section>
    </>
  );
}

export default Header;
