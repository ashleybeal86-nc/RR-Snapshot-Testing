import React from "react";
import Card from "react-bootstrap/Card";


function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={"https://github.com/ashleybeal86-nc"}/>
        <Card.Body>
          <Card.Title>Ashley Beal</Card.Title>
          <Card.Text>I am a software developer in training.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
