import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Countries from "./pages/Countries";
import CountryReport from "./pages/CountryReport";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-5">
        <Switch>
          <Route path="/country/:id" component={CountryReport} />
          <Route path="/" exact component={Countries} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
