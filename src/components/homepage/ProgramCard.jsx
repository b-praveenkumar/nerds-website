import React from 'react';
import Card from 'react-bootstrap/Card';

const ProgramCard = ({ data }) => {
  const { title, description, icon, altText } = data;
  return (
    <Card className="program-card">
      <Card.Body>
        <div className="card-icon d-flex justify-content-center align-items-center pb-3">
          <img src={icon} alt={altText} />
        </div>
        <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>{title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProgramCard;