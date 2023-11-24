// components/ServiceCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from '../pages/styles/Home.module.css';

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className={styles['service-card']}>
      <Card>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body className={styles['service-card-body']}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="outline-dark">Learn more</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
