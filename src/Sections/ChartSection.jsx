import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import chart from "../assets/img/rocket.gif";

const ChartSection = () => {
  return (
    <ChartStyled id="feathures">
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <img src={chart} alt="" />
          </div>
          <div className="chart-right">
            <h2 className="secondary-heading">Mission</h2>
            <p style={{ color: 'white' }}>
              The Near Protocol and Near Digital Collective(NDC) champion the
              advancement of decentralised technology. Our mission is to
              increase awareness, expand community, drive adoption, support
              ecosystem, and promote sustainability. We aim to contribute to the
              widespread adoption and success of these platforms, empowering
              individuals and organizations to harness their potential and drive
              positive change.
            </p>
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
};

const ChartStyled = styled.section`
  .chart-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 1347px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .chart-left {
      width: 80%;

      @media screen and (max-width: 1347px) {
        width: 100%;
        margin-top: 20px; /* Adjust margin for mobile view */
      }

      img {
        box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
        border-radius: 62px;
        width: 100%;
      }
    }

    .chart-right {
      padding-left: 2rem;

      p {
        padding: 1.3rem 0;
      }
    }
  }
`;

export default ChartSection;
