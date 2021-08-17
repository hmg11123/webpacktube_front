import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../Routers/layouts/Header";
import Content from "../Routers/layouts/Content";

const AppRouter = () => {
 return (
  <Router>
   <Route path="/" component={Header} />
   <Route path="/" component={Content} />
  </Router>
 );
};

export default AppRouter;
