import React, { Fragment } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import web3 from "./Data/web3.js";

console.log(web3);

//var version = web3.version.api;
console.log(web3.isConnected()); 

const App = () => (
  <Fragment>
    <Header />
    <Main />
    <Footer />
  </Fragment>
);



export default App;