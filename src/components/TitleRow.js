import styled from "styled-components";
import React from "react";
import HomeIcon from "./HomeIcon";

const TitleContainer = styled.header`
  background-color: var(--background-primary);
  color: var(--text-primary);
  width: 100%;
  height: 20vh;
  margin-top: 10px;
  margin-bottom: 1em;
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TopRow = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;  // Changed to space-around to better space elements
  align-items: center;
`;

const PageTitle = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 60px;
  font-weight: 600;
  margin: 0;
  flex-grow: 6;
  text-align: center;
`;
const Spacer = styled.div`
    flex-grow: 1.75;
`

function TitleRow({ title }) {  // Use destructuring to receive props
  return (
    <TitleContainer>
      <TopRow>
        <HomeIcon />  
        <PageTitle>{title}</PageTitle>  
        <Spacer/>
      </TopRow>
    </TitleContainer>
  );
}

export default TitleRow;
