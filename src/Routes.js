import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./components/MainView/Home/Home";
import About from "./components/MainView/About/About";
import Destinations from "./components/MainView/Destinations/Destinations";
import Country from "./components/MainView/Destinations/Country/Country";
import Simulator from "./components/MainView/simulator/Simulator";
import Services from "./components/MainView/Services/Services";
import Contacts from "./components/MainView/Contacts/Contacts";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/destinations" component={Destinations} />
      <Route exact path="/destinations/:country" component={Country} />
      <Route exact path="/simulator" component={Simulator} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
    </Switch>
  );
};

export default Routes;
