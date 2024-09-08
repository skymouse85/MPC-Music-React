import React from 'react';
import styled from 'styled-components';
import LogoDropdown from './LogoDropdown';


// create styles as part of the component
const StyledHeader = styled.header `
background-color: var(--background-primary);
color: var(--text-primary);
width: 100%;
height: 30vh;
margin-top: 15px;
// margin-bottom: 1em;
padding: 1em;
display: flex;
flex-direction: column;
align-items: center;
`;

// const MainImage = styled.img

const TopRow = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: center; 
  align-items: center;
`;
const BottomRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; 
  margin-top: 50px;
  
`;


const Title = styled.h1`
font-family: 'NeuePower-Ultra';
font-size: 75px;
font-weight: 600;
font-kerning: auto;
margin: 0;
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-family: "raleway", sans-serif;
  font-weight: 400;
  
`
const Logo = styled.img`
  //position:fixed;
  //left:2.5em;
  margin-right: 4em;
`


function Header() {
    return (
       <StyledHeader>
        
        <TopRow>
          <LogoDropdown />
          <Title>Mark Pascucci-Clifford</Title>
          <div style={{width: 50}}></div>
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