import PortfolioCard from "../../components/PortfolioCard";
import Title from "../../components/Title";
import portfolioData from "../../data";

console.log(portfolioData);

const PortfolioPage = () => {
  return (
    <div className="portfolio-page-container">
      <Title text="Portfolio" />
      {portfolioData.map((data) => {
        console.log("data", data);
        return <PortfolioCard data={data} />;
      })}
    </div>
  );
};

export default PortfolioPage;
