// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { HashRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Routes from "./Routes";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes />
    </Router>
  );
};

export default App;
