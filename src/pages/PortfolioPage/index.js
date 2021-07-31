import PortfolioCard from "../../components/PortfolioCard";
import Title from "../../components/Title";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page-container">
      <Title text="Portfolio" />
      <PortfolioCard />
    </div>
  );
};

export default PortfolioPage;
