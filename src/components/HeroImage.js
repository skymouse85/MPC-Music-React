import styled from 'styled-components';
import React from 'react';

const HeroImage = styled.img`
  width: 100%;
  // height: 650px;
  max-height: 550px;  // Limiting the height to maintain aspect ratio
  object-fit: cover;  // Ensures the image covers the area without stretching
  padding-top: 1.25rem;
  
`;

export default HeroImage;