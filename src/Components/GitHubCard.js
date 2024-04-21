import React from "react"
import Card from "react-bootstrap/Card"
import HankHill from './HankHill.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={HankHill} />
        <Card.Body>
            <Card.Title>Hank Hill</Card.Title>
            <Card.Text>
            Hello, my name is Hank Hill and I sell propane and propane accessories...            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard