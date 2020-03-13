import React from "react";
import { Switch, Route } from "react-router-dom";
import ActionCard from "./ActionCard";
// import ProjectsCard from "./ProjectCard";
import WelcomePage from "./WelcomePage";
import Header from "./Header";

export default function AppRouter() {
  return (
    <div >
      <Switch>
        <Route path="/api/actions" component={ActionCard} />
        {/* <Route path="/api/projects" component={ProjectsCard} /> */}
        <Route path="/header" component={Header} />
        <Route component={WelcomePage} />
      </Switch>
    </div>
  );
}


