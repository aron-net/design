import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FOOTER = React.lazy(() => import("pages/FOOTER"));
const Card = React.lazy(() => import("pages/Card"));
const Frame48095563 = React.lazy(() => import("pages/Frame48095563"));
const HOMEPAGEOne = React.lazy(() => import("pages/HOMEPAGEOne"));
const HOMEPAGE = React.lazy(() => import("pages/HOMEPAGE"));
const COVER = React.lazy(() => import("pages/COVER"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cover" element={<COVER />} />
          <Route path="/homepage" element={<HOMEPAGE />} />
          <Route path="/homepageone" element={<HOMEPAGEOne />} />
          <Route path="/frame48095563" element={<Frame48095563 />} />
          <Route path="/card" element={<Card />} />
          <Route path="/footer" element={<FOOTER />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
