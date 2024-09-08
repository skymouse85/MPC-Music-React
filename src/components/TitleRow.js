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
  display: grid;
  grid-template-columns: 1fr auto 1fr;  // Three columns: icon, title, empty space
  align-items: center;
  justify-content: center;
`;


const PageTitle = styled.h1`
  font-family: 'NeuePower-Ultra', monospace;
  font-size: 60px;
  font-weight: 600;
  margin: 0;
  flex-grow: 6;
  text-align: center;
  color: var(--accent-secondary)
`;
const Spacer = styled.div`
    flex-grow: 1.75;
`

function TitleRow({ title }) {  // Use destructuring to receive props
  return (
    <TitleContainer>
        <HomeIcon />  
        <PageTitle>{title}</PageTitle>  
        <div />
    </TitleContainer>
  );
}

export default TitleRow;
