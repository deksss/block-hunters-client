import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Product from "./Product";
import Home from "./Home";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "calc(100vh - 110px)"
};

const Main = () => (
  <main style={style}>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </main>
);

export default Main;
