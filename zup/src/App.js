// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />           {/* <-- Root route */}
        <Route path="/blog/:slug" element={<BlogDetails />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;
