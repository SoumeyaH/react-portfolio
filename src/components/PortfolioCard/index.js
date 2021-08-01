import Card from "react-bootstrap/Card";

import "./PortfolioCard.css";

const PortfolioCard = ({ data }) => {
  const {
    title,
    videoUrl,
    description,
    techUsed,
    deployedUrl,
    githubUrl,
  } = data;
  return (
    <Card className="text-center my-4 mx-auto shadow-lg portfolio-card">
      <Card.Header className="card-title">{title}</Card.Header>
      <Card.Img variant="top" src={videoUrl} />
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <p classsName="m-2 fst-italic text-muted">{techUsed}</p>
      </Card.Body>
      <div classsName="d-flex flex-wrap justify-content-center">
        <div>
          <a href={deployedUrl} target="_blank">
            <button type="button" classsName="btn btn-light mx-3 my-1">
              Deployed
            </button>
          </a>
        </div>
        <div>
          <a href={githubUrl} target="_blank">
            <button type="button" classsName="btn btn-light mx-3 my-1">
              Github
            </button>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioCard;
