import React from "react";
import { Routes, Route } from "react-router-dom";
import Pages from "./../Pages/Pages";
import Info from "./../Pages/Info";
import PostIdPage from "../Pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Pages />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/info" element={<Info />} />
      <Route path="/post/:id" element={<PostIdPage />} />
      {/* <Route path="*" element={<Info to="/info" replace />} /> */}
    </Routes>
  );
};

export default AppRouter;
