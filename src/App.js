import './App.css';
import Catalog from "./components/catalog/catalog";
import React from "react";
import Filter from "./components/filtres/filter";
import Title from "./components/title/title";
import Path from "./components/path/path";


function App() {
  return (
    <div className="App">
        <div className="container">
            <Path/>
            <Title/>
            <Filter/>
            <Catalog/>
        </div>
    </div>
  );
}

export default App;
