import styled from "styled-components";
import React from "react";

const MainImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 1110px;  // Suitable for article or content widths
  margin: 25px 0;    // Adds some vertical spacing
  display: block;    // Ensures it takes its own line
  object-fit: contain;  // Ensures the whole image is visible
`

export default MainImage;