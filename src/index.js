import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import { ImageProvider } from "./contexts/images.context";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ImageProvider>
        <App />
      </ImageProvider>
    </Router>
  </React.StrictMode>
);
