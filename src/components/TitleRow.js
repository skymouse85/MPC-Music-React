import styled from "styled-components";
import React from "react";
import HomeIcon from "./HomeIcon";

const TitleContainer = styled.header`
  background-color: var(--background-primary);
  color: var(--text-primary);
  width: 100%;
  margin-top: 20px;
  margin-bottom: 1em;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "icon title spacer";
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "icon"
      "title";
    row-gap: 1em;
    height: auto;
    padding: 1.5em 1em;
  }
`;

const PageTitle = styled.h1`
  font-family: 'NeuePower-Ultra', monospace;
  font-size: 60px;
  font-weight: 600;
  margin: 0;
  text-align: center;
  color: var(--accent-secondary);
  grid-area: title;

  @media (max-width: 600px) {
    font-size: 36px;
  }
`;

const RightSpacer = styled.div`
  grid-area: spacer;
  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledHomeIcon = styled(HomeIcon)`
  grid-area: icon;
  justify-self: center;
`;

function TitleRow({ title }) {
  return (
    <TitleContainer>
      <StyledHomeIcon />
      <PageTitle>{title}</PageTitle>
      <RightSpacer />
    </TitleContainer>
  );
}

export default TitleRow;
