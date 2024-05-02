import React from 'react';
import styled from 'styled-components';

const CircleCards = () => {
  return (
    <CircleContainer>
      <CircleCard>
        <h2>Card 1</h2>
        <p>This is some text for card 1.</p>
      </CircleCard>
      <CircleCard>
        <h2>Card 2</h2>
        <p>This is some text for card 2.</p>
      </CircleCard>
      <CircleCard center>
        <h2>Card 3</h2>
        <p>This is some text for card 3.</p>
      </CircleCard>
      <CircleCard>
        <h2>Card 4</h2>
        <p>This is some text for card 4.</p>
      </CircleCard>
      <CircleCard>
        <h2>Card 5</h2>
        <p>This is some text for card 5.</p>
      </CircleCard>
    </CircleContainer>
  );
};

const CircleContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center; 
  width: 100%; 
  max-width: 100%; 
  padding: 0; 
  position: relative;
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */

  @media (max-width: 768px) { 
    flex-direction: column; /* Stack cards vertically on smaller screens */
    align-items: center; /* Center the cards vertically */
  }
`;

const CircleCard = styled.div`
  width: 45vw; /* Wider on mobile */
  height: 45vw;
  max-width: 250px; 
  max-height: 250px;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease; 
  margin-bottom: 20px; /* Add margin for spacing */

  &:hover {
    transform: scale(1.1); 
  }

  ${props =>
    props.center &&
    `
    width: 50vw; /* Slightly larger for the center card */
    height: 50vw;
  `}

  p, h2 {
    margin: 0;
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    padding: 10px; /* Ensure text is not overlapping the card edge */
  }

  @media (max-width: 768px) {
    width: 90vw;  /* Adjust card width for even smaller screens */
    height: 90vw;
  }
`;

export default CircleCards;
