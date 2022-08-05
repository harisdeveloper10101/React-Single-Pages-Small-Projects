import React from "react";
import "./App.css";

import Home from "./Components/Home/Home";
import Feature from "./Components/Feature/Feature";
import Working from "./Components/Working/Working";
import Quality from "./Components/Quality/Quality";
import Usage from "./Components/Usage/Usage";
import Tutorial from "./Components/Tutorial/Tutorial";
import Planning from "./Components/Planning/Planning";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Feature />
      <Working />
      <Quality />
      <Usage />
      <Tutorial />
      <Planning />
      <Footer />
    </div>
  );
}

export default App;
