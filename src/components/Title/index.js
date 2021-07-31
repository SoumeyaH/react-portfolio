import "./Title.css";

const Title = ({ text }) => {
  return (
    <div>
      <h1 className="title-text">{text}</h1>
    </div>
  );
};

export default Title;
