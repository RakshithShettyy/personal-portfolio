import React from "react";
import About from "./Containers/About";
import Home from "./Containers/Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TechStacks from "./Containers/TechStacks";

const RoutingPaths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/techStacks" element={<TechStacks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingPaths;
