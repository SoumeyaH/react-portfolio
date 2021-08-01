import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { SiMysql, SiMongodb, SiReact, SiJavascript } from "react-icons/si";
import { DiCss3, DiBootstrap, DiJqueryLogo, DiNodejs } from "react-icons/di";

import Title from "../../components/Title";

import "./AboutMe.css";

const AboutMePage = () => {
  return (
    <div className="about-me-page-container">
      <Title text="About Me" />
      <main>
        <div>
          <p>Hi, my name is Soumeya Hassan.</p>
          <p>I live in Birmingham UK with my family.</p>
          <p>
            I recently started to learn to code. You can check out some of my
            cool work in my portfolio.
          </p>
        </div>
        <h2 className="subheading">Languages and Frameworks</h2>
        <div>
          <AiFillHtml5 className="tech-icon" size={70} />
          <DiCss3 className="tech-icon" size={70} />
          <DiBootstrap className="tech-icon" size={70} />
          <SiJavascript className="tech-icon" size={70} />
          <DiJqueryLogo className="tech-icon" size={70} />
          <DiNodejs className="tech-icon" size={70} />
          <SiReact className="tech-icon" size={70} />
          <SiMysql className="tech-icon" size={70} />
          <SiMongodb className="tech-icon" size={70} />
          <AiFillGithub className="tech-icon" size={70} />
        </div>
      </main>
    </div>
  );
};

export default AboutMePage;

//   sequlize mongodb mongoose react
