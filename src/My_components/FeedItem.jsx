import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './FeedItem.css';

function FeedItem({ title, image, content }) {
  return (
    <Card className="mb-3 feed-item">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Row className="text-center">
          <Col>
            <Button variant="primary">Like</Button>
          </Col>
          <Col>
            <Button variant="primary">Comment</Button>
          </Col>
          <Col>
            <Button variant="primary">More</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default FeedItem;
