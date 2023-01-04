// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./routes/dashboard/dashboard.component";
// import { getRandomPic } from "./utilities/unsplash/unsplash.utils";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
};

export default App;
