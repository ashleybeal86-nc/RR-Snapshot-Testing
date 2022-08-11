import React from "react";
import Card from "react-bootstrap/Card";
import AshleyBeal from "./AshleyBeal.jpg"

function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={AshleyBeal} />
        {/* Source: https://github.com/ashleybeal86-nc */}
        <Card.Body>
          <Card.Title>Ashley Beal</Card.Title>
          <Card.Text>I am a software developer in training.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
