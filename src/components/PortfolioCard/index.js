import Card from "react-bootstrap/Card";

import "./PortfolioCard.css";

const PortfolioCard = () => {
  return (
    <Card className="text-center my-4 mx-auto shadow-lg portfolio-card">
      <Card.Header className="card-title">Event Jam</Card.Header>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Text>
          Event Jam is a dynamic online application that offer users the ability
          to search for events in any city in the UK and get relevant, reliable
          and up to date Covid-19 information for that area.
        </Card.Text>
        <p class="m-2 fst-italic text-muted">
          HTML/CSS, Bulma, JS (ES6), jQuery, Chart.js, Third-Party APIs, Git
        </p>
      </Card.Body>
      <div class="d-flex flex-wrap justify-content-center">
        <div>
          <a href="https://soumeyah.github.io/event-jam/" target="_blank">
            <button type="button" class="btn btn-light mx-3 my-1">
              Deployed
            </button>
          </a>
        </div>
        <div>
          <a href="https://github.com/SoumeyaH/event-jam" target="_blank">
            <button type="button" class="btn btn-light mx-3 my-1">
              Github
            </button>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioCard;
