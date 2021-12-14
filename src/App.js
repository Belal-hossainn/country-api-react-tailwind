import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from '../src/Components/Home/Home';
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/country/:id" element={<CountryDetails/>}/>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
