import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Section = styled.section`
  height: 110vh;
  display: flex;
  justify-content: flex-start; /* Align items to the start horizontally */
  align-items: center;
  position: relative;
  background: #B40272; /* Barbie pink background */
  overflow: hidden; /* Ensure particles don't overflow */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align items to the start horizontally */
  height: 100vh;
  width: 100%;
  max-width: 1200px; /* Set maximum width */
  padding: 3rem;
  position: relative;
  z-index: 1; /* Ensure content is above particles */
`;

const Title = styled.div`
  text-align: left; /* Align text to the left */
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.div`
  text-align: left; /* Align text to the left */
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DomainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DomainCard = styled(motion.div)`
  background: #fff;
  color: #B40272;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #B40272;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  text-decoration: none; /* Remove underlines */

  &:hover {
    background: #B40272;
    color: #fff;
    transform: scale(1.05);
  }
`;

const DomainContainer1 = () => {
  return (
    <Section id="secFirst">
      <Container>
        <Title>Welcome to Team Barbie</Title>
        <Subtitle>Explore Each Domain</Subtitle>
        <DomainContainer>
          <Link to="/domain1">
            <DomainCard whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Web Dev
            </DomainCard>
          </Link>
          <Link to="/domain2">
            <DomainCard whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Cloud
            </DomainCard>
          </Link>
          <Link to="/domain3">
            <DomainCard whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              AI
            </DomainCard>
          </Link>
          <Link to="/domain4">
            <DomainCard whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Machine Learning
            </DomainCard>
          </Link>
          <Link to="/domain5">
            <DomainCard whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Cyber Security
            </DomainCard>
          </Link>
          <Link to="/domain6">
            <DomainCard whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              App Dev
            </DomainCard>
          </Link>
          <Link to="/domain7">
            <DomainCard whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              DBMS
            </DomainCard>
          </Link>
          <Link to="/domain8">
            <DomainCard whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Big Data
            </DomainCard>
          </Link>
        </DomainContainer>
      </Container>
    </Section>
  );
};

export default DomainContainer1;
