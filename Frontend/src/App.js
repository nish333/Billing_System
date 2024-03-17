import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import ListBillingComponent from "./Components/ListBillingComponent";
import CreateBillingComponent from "./Components/CreateBillingComponent";
import UpdateBillingComponent from "./Components/UpdateBillingComponent";
import ViewBillingComponent from "./Components/ViewBillingComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListBillingComponent}></Route>
            <Route path="/bill" component={ListBillingComponent}></Route>
            <Route path="/add-bill" component={CreateBillingComponent}></Route>
            <Route
              path="/update-bill/:id"
              component={UpdateBillingComponent}
            ></Route>
            <Route
              path="/view-bill/:id"
              component={ViewBillingComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
