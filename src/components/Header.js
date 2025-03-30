import React from 'react';
import styled from 'styled-components';
import LogoDropdown from './LogoDropdown';

const StyledHeader = styled.header`
  background-color: var(--background-primary);
  color: var(--text-primary);
  width: 100%;
  height: auto;
  margin-top: 15px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0.5em;
  }
`;

const TopRow = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const BottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 600px) {
    margin-top: 20px;
    padding: 0 1rem;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-family: 'NeuePower-Ultra';
  font-size: 75px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 36px;
    text-align: center;
  }
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-family: "raleway", sans-serif;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Logo = styled.img`
  margin-right: 4em;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 1em;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <TopRow>
        <LogoDropdown />
        <Title>Mark Pascucci-Clifford</Title>
        <div style={{ width: 50 }}></div>
      </TopRow>
      <BottomRow>
        <SubTitle>
          Vibraphone • Composition • Keyboards • Drums
        </SubTitle>
      </BottomRow>
    </StyledHeader>
  );
}

export default Header;
