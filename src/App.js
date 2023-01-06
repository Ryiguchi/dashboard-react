import { Routes, Route } from "react-router-dom";

import Dashboard from "./routes/dashboard/dashboard.component";
import ImageGallery from "./routes/image-gallery/image-gallery.component";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="gallery" element={<ImageGallery />}></Route>
    </Routes>
  );
};

export default App;
