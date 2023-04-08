import React from "react";
import { BrowserRouter } from "react-router-dom";
import './styles/app.css'
import AppRouter from './UI/AppRouter';
import Nav from './UI/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
