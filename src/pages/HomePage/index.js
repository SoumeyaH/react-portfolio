// import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Title from "../../components/Title";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="title-container">
        <Title text="Soumeya Hassan" />
        <h3 className="subtitle">Welcome to My Portfolio</h3>
      </div>
      {/* <div>
        <a href="https://github.com/SoumeyaH" target="_blank">
          <AiFillGithub size={30} />
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/soumeya-hassan" target="_blank">
          <AiFillLinkedin size={30} />
        </a>
      </div> */}
    </div>
  );
};

export default HomePage;
