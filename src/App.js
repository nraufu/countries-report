import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Countries from "./pages/Countries";

const countriesData = [{
  id:1,
  name: "rwanda",
  population: "12.63 million",
  size: "26,338 km²",
}, {
  id:2,
  name: "kenya",
  population: "52.57 million",
  size: "580,367 km²",
}]

const App = () => {
  return (
    <div className="App">
    <Navbar />
    <div className="container mt-5">
     <Countries data={countriesData}/>
    </div>
    </div>
  );
}

export default App;
