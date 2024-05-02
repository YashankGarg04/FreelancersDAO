import React from 'react';
import styled from 'styled-components';
import bg from "../assets/img/bg.svg";

// Define the Footer component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSocial>
          {/* Social media icons */}
        </FooterSocial>
      </FooterContent>
      <FooterCopyright>
        {/* Copyright information */}
        &copy;  All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: black;

  color: #fff;
  padding: 30px 0;
`;

const FooterContent = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #ccc;
  }
`;

const FooterCopyright = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default Footer;
