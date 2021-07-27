import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutMePage from "../pages/AboutMePage";
import ContactMePage from "../pages/ContactMePage";
import PortfolioPage from "../pages/PortfolioPage";
import ResumePage from "../pages/ResumePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about-me">
        <AboutMePage />
      </Route>
      <Route exact path="/contact-me">
        <ContactMePage />
      </Route>
      <Route exact path="/portfolio">
        <PortfolioPage />
      </Route>
      <Route exact path="/resume">
        <ResumePage />
      </Route>
    </Switch>
  );
};

export default Routes;
