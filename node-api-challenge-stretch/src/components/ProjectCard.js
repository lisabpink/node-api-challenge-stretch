import React, { useEffect, useState } from "react";
import Axios from "axios";
import ActionCard from "./ActionCard";
// import { Card, Icon, Image } from "semantic-ui-react";
// import { Link } from "react-router-dom";

export default function projectsCard({ project }) {
    const [projects, setprojects] = useState([]);
  useEffect(() => {
   
    Axios.get(`localhost:7000/api/projects`)
      .then(response => {
        console.log(response.data.results);
        setprojects(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <section className="projects-list grid-view">
      {projects.map(project => {
        return <ActionCard key={project.id} projects={project} />;
      })}
    </section>
  );
}
