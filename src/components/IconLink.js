import styled from "styled-components";
import React from "react";

const IconLink = styled.a`
  display: inline-block;
  width: 30px;  // Default size for larger screens
  height: 30px;  // Default size
  background-color: transparent;
  background-image: url(${props => props.icon});
  background-size: cover;
  background-position: center;
  margin: 0 10px;  // Default spacing for larger screens
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover, &:focus {
    transform: scale(1.1);  // Enlarges the icon
    opacity: 0.8;  // Visual feedback on hover/focus
  }

  @media (max-width: 600px) {
    width: 30px;  // Smaller size for mobile devices
    height: 30px;
    margin: 0 5px;  // Smaller margin for tighter spaces
  }
`;

export default IconLink;
