import React from "react";
import Pages from "./Pages/Pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Info from "./Pages/Info";
import './styles/app.css'

function App() {
  return (
    <BrowserRouter>
    <div className="nav">
        <div>
          <Link className="navItem" to={`/pages`}>Pages</Link>
          <Link className="navItem" to={`/info`}> Info </Link>
        </div>
      </div>
      <Routes>
        <Route path="/pages" element={<Pages />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
