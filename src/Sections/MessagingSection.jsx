import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import Doorbean from "../assets/img/doorbean.svg";

const MessagingSection = () => {
  return (
    <MessageStyle>
      <InnerLayout>
        <div className="message-con">
          <div className="left-items">
            <h2 className="secondary-heading">Vision</h2>
            <p className="left-para" style={{ color: 'white' }}>
              The Freelancers DAO aims to empower freelancers to contribute to
              the Web3 ecosystem meaningfully, enabling them to shape its
              future. It has three stages: Novice, Lancers, and Ambassadors.
              Each stage represents a higher level of commitment and dedication
              to the DAO's mission. The DAO aims to cultivate a community of
              talented individuals who are passionate about shaping the future
              of Web3.
            </p>
          </div>
          <div className="right-items">
            <img src={Doorbean} alt="" />
          </div>
        </div>
      </InnerLayout>
    </MessageStyle>
  );
};

const MessageStyle = styled.section`
   .message-con {
      display: flex;
      flex-direction: column-reverse; /* Reverse order in mobile view */

      @media screen and (min-width: 1347px) {
         display: grid;
         grid-template-columns: repeat(2, 1fr);
      }

      .left-items {
         position: relative;
         padding-right: 2rem;

         @media screen and (max-width: 1347px) {
            padding-right: 0; /* Remove padding on smaller screens */
            padding-bottom: 2rem; /* Add space between text and image */
         }

         .left-para {
            padding: 1.6rem 0;
         }
      }

      .right-items {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 100%; /* Ensure image takes full width */

         img {
            @media (max-width: 768px) {
               width: 79%; /* Adjusted width for mobile */
               margin-top: -250px; /* Adjust margin to move the image upwards */
            }
         }
      }
   }

   .secondary-heading {
      margin-left: 32px; /* Apply style only to the secondary-heading */
   }
   .left-para {
      margin-left: 32px; /* Apply style only to the secondary-heading */
   }
   }
`;

export default MessagingSection;
