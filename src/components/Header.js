import React from 'react';
import logo from '../assets/icons/blackVibes.svg';
import styled from 'styled-components'
import '../styles/Header.css';

// create styles as part of the component
const StyledHeader = styled.header `
background-color: var(--background-primary);
color: var(--text-primary);
width: 100%;
margin-top: 15px;
margin-bottom: 2em;
padding: 1em;
display: flex;
flex-direction: column;
align-items: center;
`;

const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
`;
const BottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; 
  margin-top: 30px;
`;


const Title = styled.h1`
font-family: 'Roboto Mono', monospace;
font-size: 70px;
font-weight: 600;
margin: 0;
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-family: 'raleway'
  font-weight: 400;
`
const Logo = styled.img`
  position:fixed;
  left:2.5em;
`

function Header() {
    return (
       <StyledHeader>
        <TopRow>
          <Logo className="Logo" src={logo} height="80" width="80" alt=""></Logo>
          <Title>Mark Pascucci-Clifford</Title>
          <div style={{width: 50}}></div>
        </TopRow>
        <BottomRow>
          <SubTitle>
            Percussionist • Composer • Programmer
          </SubTitle>
        </BottomRow>
      </StyledHeader>
    );
}

export default Header;