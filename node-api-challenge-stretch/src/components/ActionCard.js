import React, { useEffect, useState } from "react";
import Axios from "axios";
// import { Card, Icon, Image } from "semantic-ui-react";
// import { Link } from "react-router-dom";

export default function ActionCard({ action }) {
    const [actions, setActions] = useState([]);
  useEffect(() => {
   
    Axios.get(`http://localhost:7000/api/actions`)
      .then(response => {
        console.log(response.data.results);
        setActions(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <section className="action-list grid-view">
      {actions.map(action => {
        return <ActionCard key={action.id} action={action} />;
      })}
    </section>
  );
}
