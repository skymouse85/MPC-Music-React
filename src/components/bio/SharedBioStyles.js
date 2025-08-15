import styled from "styled-components";

export const BioContainer = styled.section`
  display: flex;
  width: 65%;
  margin: 0 auto;
  align-items: flex-start;

  @media (max-width: 900px) {
    width: 88%;
  }
`;

export const BioText = styled.div`
  font-size: 17px;
  font-family: "Inter Tight", sans-serif; /* capitalization matters */
  line-height: 1.75;
`;

export const BioP = styled.p`
  margin: 0 0 1.25rem 0;
`;

