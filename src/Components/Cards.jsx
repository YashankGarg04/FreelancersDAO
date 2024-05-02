import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CardComponent from './Cardss';

function Card({
   account, amount, text, button, imgSrc, backgroundColor
}) {
   const [showCardComponent, setShowCardComponent] = useState(false);

   const handleButtonClick = () => {
      setShowCardComponent(true);
   };

   return (
      <>
         <CardStyled backgroundColor={backgroundColor}>
            <div className="card-image-con">
               <img src={imgSrc} alt="" />
            </div>
            <h4 className="card-title">
               {account}
            </h4>
            <h4 className="card-title">
               {amount} <span></span>
            </h4>
            <p className="c-para">{text}</p>
            <div className="button-con">
               <button onClick={handleButtonClick}>{button}</button>
            </div>
         </CardStyled>
         {showCardComponent && <CardComponent />}
      </>
   )
}

const CardStyled = styled.div`
    padding: 3rem 2rem;
    border-radius: 50px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

    ${props => props.backgroundColor && css`
        background-image: ${props.backgroundColor};
    `}

    /* Default color if no background color is provided */
    background-color: ${props => props.backgroundColor ? '#212236' : '#155C49'};

    .card-title {
        font-size: 1.7rem;
        color: #000;
        text-align: center;
        padding: 1.5rem 0;

        span {
            font-size: 1.1rem;
        }
    }

    .button-con {
        text-align: center;
        padding: 1.4rem 0;

        button {
            border: 2px solid #16194F;
            padding: .6rem 1.5rem;
            outline: none;
            cursor: pointer;
            background: transparent;
            border-radius: 20px;
            font-size: inherit;
            color: #16194F;
        }
    }

    .card-image-con {
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;

        img {
            width: 100%;
            object-fit: cover;
        }
    }
`;

export default Card;
