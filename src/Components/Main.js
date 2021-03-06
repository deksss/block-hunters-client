import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";
import Purchase from "./Purchase";
import Adding from "./Adding";
import Auction from "./Auction";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "calc(100vh - 120px)",
  marginTop: "10px"
};

const Main = () => (
  <main style={style}>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/purchase" component={Purchase} />
      <Route path="/adding" component={Adding} />
      <Route path="/auction" component={Auction} />
      <Route path="/" component={Home} />
    </Switch>
  </main>
);

export default Main;
